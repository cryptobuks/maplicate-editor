import { Injectable } from "@angular/core";
import * as IPFS from "ipfs";
import * as OrbitDB from "orbit-db";

@Injectable()
export class DbService {
  private ipfs: any;
  private orbitdb: any;
  private map: any;
  public ready: boolean;

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

    this.ipfs.once("ready", async () => {
      this.orbitdb = new OrbitDB(this.ipfs);
      this.ready = true;

      console.log("IPFS is ready");
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

    this.map = await this.orbitdb.docs(name);
    await this.map.load();

    return this.map.address.toString();
  }

  async joinMap(address: string): Promise<string> {
    if (!this.ready) {
      throw new Error("IPFS is not ready.");
    }

    if (this.map) {
      throw new Error("Map has been created.");
    }

    this.map = await this.orbitdb.docs(address);
    await this.map.load();

    return this.map.address.toString();
  }
}
