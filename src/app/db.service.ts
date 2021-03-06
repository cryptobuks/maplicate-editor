import { Injectable, EventEmitter } from "@angular/core";
import { Feature } from "geojson";
import * as IPFS from "ipfs";
import * as OrbitDB from "orbit-db";
import * as md5 from "md5";
import * as uuid from "uuid/v4";

export interface IDocument {
  _id: string;
  _hash: string;
  feature?: Feature;
}

@Injectable()
export class DbService {
  private ipfs: any;
  private orbitdb: any;
  private map: any;
  private mapName: string;
  private docMap: any;
  public ready: boolean;
  public events: any;

  constructor() {
    const ipfsOptions = {
      EXPERIMENTAL: {
        pubsub: true
      },
      config: {
        Addresses: {
          Swarm: [
            "/dns4/ws-star.discovery.libp2p.io/tcp/443/wss/p2p-websocket-star"
          ]
        }
      }
    };

    this.ipfs = new IPFS(ipfsOptions);
    this.ready = false;
    this.events = {
      dbReady: new EventEmitter(),
      mapReady: new EventEmitter(),
      mapReplicate: new EventEmitter(),
      mapReplicated: new EventEmitter()
    };

    this.ipfs.once("ready", async () => {
      this.orbitdb = new OrbitDB(this.ipfs);
      this.ready = true;

      this.events.dbReady.emit();
    });
  }

  get mapAddress(): string {
    if (!this.ready || !this.map) {
      return null;
    }

    return this.map.address.toString();
  }

  async createMap(name: string): Promise<string> {
    if (!this.ready) {
      throw new Error("IPFS is not ready.");
    }

    if (this.map) {
      throw new Error("Map has been created.");
    }

    this.map = await this.orbitdb.docs(name, { write: ["*"] });
    this._bindMapEvents();

    await this.map.load();

    this.docMap = this.map.query(doc => doc).reduce((docMap, doc) => {
      docMap[doc._id] = doc._hash;
      return docMap;
    }, {});

    this.events.mapReady.emit();

    return this.map.address.toString();
  }

  async joinMap(address: string): Promise<string> {
    return this.createMap(address);
  }

  async exitMap(): Promise<any> {
    if (!this.map) {
      throw new Error("Map is not created.");
    }

    await this.map.close();
    await this.map.drop();
    this.map = null;
    this.docMap = {};
  }

  getFeature(featureId: string): IDocument {
    return this.map.get(featureId)[0];
  }

  async addFeature(feature: Feature): Promise<IDocument> {
    if (!this.map) {
      throw new Error("Map is not created.");
    }

    const doc = {
      _id: uuid(),
      _hash: md5(JSON.stringify(feature)),
      feature
    };

    await this.map.put(doc);
    this.docMap[doc._id] = doc._hash;

    return doc as IDocument;
  }

  async updateFeature(id: string, feature: Feature): Promise<IDocument> {
    if (!this.map) {
      throw new Error("Map is not created.");
    }

    const hash = md5(JSON.stringify(feature));

    // do not update unchanged feature
    if (this.docMap[id] === hash) {
      return;
    }

    const doc = {
      _id: id,
      _hash: hash,
      feature
    };

    await this.map.put(doc);
    this.docMap[doc._id] = doc._hash;

    return doc as IDocument;
  }

  async removeFeature(featureId: string): Promise<any> {
    if (this.map.get(featureId).length === 0) {
      return;
    }

    await this.map.del(featureId);
    delete this.docMap[featureId];
  }

  query(mapper): IDocument[] {
    if (!this.map) {
      throw new Error("Map is not created.");
    }

    return this.map.query(mapper);
  }

  private _bindMapEvents() {
    this.map.events.on("replicate", () => {
      this.events.mapReplicate.emit();
    });

    this.map.events.on("replicated", () => {
      const newDocs: IDocument[] = this.map.query(doc => !this.docMap[doc._id]);

      for (const doc of newDocs) {
        this.docMap[doc._id] = doc._hash;
      }

      const updatedDocs: IDocument[] = this.map.query(
        doc => this.docMap[doc._id] && this.docMap[doc._id] !== doc._hash
      );

      for (const doc of updatedDocs) {
        this.docMap[doc._id] = doc._hash;
      }

      const removedDocs: IDocument[] = [];

      for (const id in this.docMap) {
        if (this.map.get(id).length === 0) {
          removedDocs.push({ _id: id, _hash: "" });
          delete this.docMap[id];
        }
      }

      const changes: any = {
        new: newDocs,
        updated: updatedDocs,
        removed: removedDocs
      };

      this.events.mapReplicated.emit(changes);
    });
  }
}
