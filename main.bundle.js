webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-toolbar></app-toolbar>\n<div fxLayout=\"row\" class=\"full-page\">\n  <app-map fxFlex></app-map>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".full-page {\n  position: absolute;\n  top: 64px;\n  bottom: 0;\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = "app";
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-root",
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_clipboard__ = __webpack_require__("../../../../ngx-clipboard/dist/ngx-clipboard.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_material_ng_material_module__ = __webpack_require__("../../../../../src/app/ng-material/ng-material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__map_map_component__ = __webpack_require__("../../../../../src/app/map/map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__toolbar_toolbar_component__ = __webpack_require__("../../../../../src/app/toolbar/toolbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__create_map_dialog_create_map_dialog_component__ = __webpack_require__("../../../../../src/app/create-map-dialog/create-map-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__join_map_dialog_join_map_dialog_component__ = __webpack_require__("../../../../../src/app/join-map-dialog/join-map-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__property_edit_form_property_edit_form_component__ = __webpack_require__("../../../../../src/app/property-edit-form/property-edit-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__map_service__ = __webpack_require__("../../../../../src/app/map.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__db_service__ = __webpack_require__("../../../../../src/app/db.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_leaflet__ = __webpack_require__("../../../../leaflet/dist/leaflet-src.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_leaflet_pm__ = __webpack_require__("../../../../leaflet.pm/dist/leaflet.pm.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_leaflet_pm___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_leaflet_pm__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__map_map_component__["a" /* MapComponent */],
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__toolbar_toolbar_component__["a" /* ToolbarComponent */],
                __WEBPACK_IMPORTED_MODULE_9__create_map_dialog_create_map_dialog_component__["a" /* CreateMapDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_10__join_map_dialog_join_map_dialog_component__["a" /* JoinMapDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_11__property_edit_form_property_edit_form_component__["a" /* PropertyEditFormComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__ng_material_ng_material_module__["a" /* NgMaterialModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4_ngx_clipboard__["a" /* ClipboardModule */]
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_9__create_map_dialog_create_map_dialog_component__["a" /* CreateMapDialogComponent */], __WEBPACK_IMPORTED_MODULE_10__join_map_dialog_join_map_dialog_component__["a" /* JoinMapDialogComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_12__map_service__["a" /* MapService */], __WEBPACK_IMPORTED_MODULE_13__db_service__["a" /* DbService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/create-map-dialog/create-map-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Create A Map</h2>\n<mat-dialog-content>\n  <mat-form-field fxFill>\n    <input #mapNameInput matInput placeholder=\"Name\" [value]=\"name\" type=\"text\" required>\n  </mat-form-field>\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-button mat-dialog-close>Cancel</button>\n  <button mat-raised-button\n          color=\"primary\"\n          [mat-dialog-close]=\"mapNameInput.value\"\n          [disabled]=\"!mapNameInput.value\">\n    Create\n  </button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "../../../../../src/app/create-map-dialog/create-map-dialog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/create-map-dialog/create-map-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateMapDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CreateMapDialogComponent = /** @class */ (function () {
    function CreateMapDialogComponent() {
        this.name = "";
    }
    CreateMapDialogComponent.prototype.ngOnInit = function () { };
    CreateMapDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-create-map-dialog",
            template: __webpack_require__("../../../../../src/app/create-map-dialog/create-map-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/create-map-dialog/create-map-dialog.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CreateMapDialogComponent);
    return CreateMapDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/db.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DbService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ipfs__ = __webpack_require__("../../../../ipfs/src/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ipfs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ipfs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_orbit_db__ = __webpack_require__("../../../../orbit-db/src/OrbitDB.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_orbit_db___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_orbit_db__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_md5__ = __webpack_require__("../../../../md5/md5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_md5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_uuid_v4__ = __webpack_require__("../../../../uuid/v4.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_uuid_v4___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_uuid_v4__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var DbService = /** @class */ (function () {
    function DbService() {
        var _this = this;
        var ipfsOptions = {
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
        this.ipfs = new __WEBPACK_IMPORTED_MODULE_1_ipfs__(ipfsOptions);
        this.ready = false;
        this.events = {
            dbReady: new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */](),
            mapReady: new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */](),
            mapReplicate: new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */](),
            mapReplicated: new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]()
        };
        this.ipfs.once("ready", function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.orbitdb = new __WEBPACK_IMPORTED_MODULE_2_orbit_db__(this.ipfs);
                this.ready = true;
                this.events.dbReady.emit();
                return [2 /*return*/];
            });
        }); });
    }
    Object.defineProperty(DbService.prototype, "mapAddress", {
        get: function () {
            if (!this.ready || !this.map) {
                return null;
            }
            return this.map.address.toString();
        },
        enumerable: true,
        configurable: true
    });
    DbService.prototype.createMap = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.ready) {
                            throw new Error("IPFS is not ready.");
                        }
                        if (this.map) {
                            throw new Error("Map has been created.");
                        }
                        _a = this;
                        return [4 /*yield*/, this.orbitdb.docs(name, { write: ["*"] })];
                    case 1:
                        _a.map = _b.sent();
                        this._bindMapEvents();
                        return [4 /*yield*/, this.map.load()];
                    case 2:
                        _b.sent();
                        this.docMap = this.map.query(function (doc) { return doc; }).reduce(function (docMap, doc) {
                            docMap[doc._id] = doc._hash;
                            return docMap;
                        }, {});
                        this.events.mapReady.emit();
                        return [2 /*return*/, this.map.address.toString()];
                }
            });
        });
    };
    DbService.prototype.joinMap = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.createMap(address)];
            });
        });
    };
    DbService.prototype.exitMap = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.map) {
                            throw new Error("Map is not created.");
                        }
                        return [4 /*yield*/, this.map.close()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.map.drop()];
                    case 2:
                        _a.sent();
                        this.map = null;
                        this.docMap = {};
                        return [2 /*return*/];
                }
            });
        });
    };
    DbService.prototype.getFeature = function (featureId) {
        return this.map.get(featureId)[0];
    };
    DbService.prototype.addFeature = function (feature) {
        return __awaiter(this, void 0, void 0, function () {
            var doc;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.map) {
                            throw new Error("Map is not created.");
                        }
                        doc = {
                            _id: __WEBPACK_IMPORTED_MODULE_4_uuid_v4__(),
                            _hash: __WEBPACK_IMPORTED_MODULE_3_md5__(JSON.stringify(feature)),
                            feature: feature
                        };
                        return [4 /*yield*/, this.map.put(doc)];
                    case 1:
                        _a.sent();
                        this.docMap[doc._id] = doc._hash;
                        return [2 /*return*/, doc];
                }
            });
        });
    };
    DbService.prototype.updateFeature = function (id, feature) {
        return __awaiter(this, void 0, void 0, function () {
            var hash, doc;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.map) {
                            throw new Error("Map is not created.");
                        }
                        hash = __WEBPACK_IMPORTED_MODULE_3_md5__(JSON.stringify(feature));
                        // do not update unchanged feature
                        if (this.docMap[id] === hash) {
                            return [2 /*return*/];
                        }
                        doc = {
                            _id: id,
                            _hash: hash,
                            feature: feature
                        };
                        return [4 /*yield*/, this.map.put(doc)];
                    case 1:
                        _a.sent();
                        this.docMap[doc._id] = doc._hash;
                        return [2 /*return*/, doc];
                }
            });
        });
    };
    DbService.prototype.removeFeature = function (featureId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.map.get(featureId).length === 0) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.map.del(featureId)];
                    case 1:
                        _a.sent();
                        delete this.docMap[featureId];
                        return [2 /*return*/];
                }
            });
        });
    };
    DbService.prototype.query = function (mapper) {
        if (!this.map) {
            throw new Error("Map is not created.");
        }
        return this.map.query(mapper);
    };
    DbService.prototype._bindMapEvents = function () {
        var _this = this;
        this.map.events.on("replicate", function () {
            _this.events.mapReplicate.emit();
        });
        this.map.events.on("replicated", function () {
            var newDocs = _this.map.query(function (doc) { return !_this.docMap[doc._id]; });
            for (var _i = 0, newDocs_1 = newDocs; _i < newDocs_1.length; _i++) {
                var doc = newDocs_1[_i];
                _this.docMap[doc._id] = doc._hash;
            }
            var updatedDocs = _this.map.query(function (doc) { return _this.docMap[doc._id] && _this.docMap[doc._id] !== doc._hash; });
            for (var _a = 0, updatedDocs_1 = updatedDocs; _a < updatedDocs_1.length; _a++) {
                var doc = updatedDocs_1[_a];
                _this.docMap[doc._id] = doc._hash;
            }
            var removedDocs = [];
            for (var id in _this.docMap) {
                if (_this.map.get(id).length === 0) {
                    removedDocs.push({ _id: id, _hash: "" });
                    delete _this.docMap[id];
                }
            }
            var changes = {
                new: newDocs,
                updated: updatedDocs,
                removed: removedDocs
            };
            _this.events.mapReplicated.emit(changes);
        });
    };
    DbService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], DbService);
    return DbService;
}());



/***/ }),

/***/ "../../../../../src/app/join-map-dialog/join-map-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Join A Map</h2>\n<mat-dialog-content>\n  <mat-form-field fxFill>\n    <input #mapAddressInput matInput placeholder=\"Address\" [value]=\"address\" type=\"text\" required>\n  </mat-form-field>\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-button mat-dialog-close>Cancel</button>\n  <button mat-raised-button\n          color=\"primary\"\n          [mat-dialog-close]=\"mapAddressInput.value\"\n          [disabled]=\"!mapAddressInput.value\">\n    Join\n  </button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "../../../../../src/app/join-map-dialog/join-map-dialog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/join-map-dialog/join-map-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JoinMapDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JoinMapDialogComponent = /** @class */ (function () {
    function JoinMapDialogComponent() {
        this.address = "";
    }
    JoinMapDialogComponent.prototype.ngOnInit = function () { };
    JoinMapDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-join-map-dialog",
            template: __webpack_require__("../../../../../src/app/join-map-dialog/join-map-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/join-map-dialog/join-map-dialog.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], JoinMapDialogComponent);
    return JoinMapDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/map.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet__ = __webpack_require__("../../../../leaflet/dist/leaflet-src.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_leaflet__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapService = /** @class */ (function () {
    function MapService(http) {
        this.http = http;
        this.events = {
            featureEditStart: new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */](),
            featureCreated: new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */](),
            featureUpdated: new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */](),
            featureRemoved: new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]()
        };
        this.mapLayer = null;
        this.editing = null;
    }
    MapService.prototype.disableMouseEvent = function (elementId) {
        var element = document.getElementById(elementId);
        __WEBPACK_IMPORTED_MODULE_2_leaflet__["DomEvent"].disableClickPropagation(element);
        __WEBPACK_IMPORTED_MODULE_2_leaflet__["DomEvent"].disableScrollPropagation(element);
    };
    MapService.prototype.createMap = function (elementId) {
        var osmAttr = "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>, " +
            "Tiles courtesy of <a href='http://hot.openstreetmap.org/' target='_blank'>Humanitarian OpenStreetMap Team</a>";
        var esriAttr = "Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, " +
            "iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, " +
            "Esri China (Hong Kong), and the GIS User Community";
        var cartoAttr = "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> " +
            "&copy; <a href='http://cartodb.com/attributions'>CartoDB</a>";
        var baseMaps = {
            OpenStreetMap: __WEBPACK_IMPORTED_MODULE_2_leaflet__["tileLayer"]("http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
                zIndex: 1,
                attribution: osmAttr
            }),
            Esri: __WEBPACK_IMPORTED_MODULE_2_leaflet__["tileLayer"]("http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}", {
                zIndex: 1,
                attribution: esriAttr
            }),
            CartoDB: __WEBPACK_IMPORTED_MODULE_2_leaflet__["tileLayer"]("http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png", {
                zIndex: 1,
                attribution: cartoAttr
            })
        };
        var map = __WEBPACK_IMPORTED_MODULE_2_leaflet__["map"]("map", {
            zoomControl: false,
            center: [0, 0],
            zoom: 3,
            minZoom: 4,
            maxZoom: 19,
            layers: [baseMaps.Esri]
        });
        __WEBPACK_IMPORTED_MODULE_2_leaflet__["control"].zoom({ position: "topright" }).addTo(map);
        __WEBPACK_IMPORTED_MODULE_2_leaflet__["control"].layers(baseMaps).addTo(map);
        __WEBPACK_IMPORTED_MODULE_2_leaflet__["control"].scale().addTo(map);
        this.map = map;
    };
    MapService.prototype.enableEditing = function () {
        var _this = this;
        if (!this.map) {
            throw new Error("Map is not created");
        }
        this.map.pm.addControls({
            drawRectangle: false,
            drawCircle: false,
            cutPolygon: false,
            editMode: false,
            removalMode: false
        });
        this.mapLayer = __WEBPACK_IMPORTED_MODULE_2_leaflet__["geoJSON"]();
        this.featureMap = {};
        this.map.addLayer(this.mapLayer);
        this.map.on("pm:create", function (e) {
            _this.mapLayer.addLayer(e.layer);
            _this._bindEditEvent(e.layer);
            var layerId = __WEBPACK_IMPORTED_MODULE_2_leaflet__["Util"].stamp(e.layer);
            var feature = e.layer.toGeoJSON();
            feature.properties = {};
            var data = { feature: feature, layerId: layerId };
            _this.events.featureCreated.emit(data);
        });
        this.map.on("pm:remove", function (e) {
            var layerId = __WEBPACK_IMPORTED_MODULE_2_leaflet__["Util"].stamp(e.layer);
            var featureId = _this.featureMap[layerId];
            delete _this.featureMap[layerId];
            var data = { featureId: featureId };
            _this.events.featureRemoved.emit(data);
        });
    };
    MapService.prototype.zoomToFeatures = function () {
        var bounds = this.mapLayer.getBounds();
        if (bounds.isValid()) {
            this.map.fitBounds(bounds);
        }
    };
    MapService.prototype.addFeature = function (featureId, feature) {
        var layer = __WEBPACK_IMPORTED_MODULE_2_leaflet__["geoJSON"](feature).getLayers()[0];
        this.mapLayer.addLayer(layer);
        this._bindEditEvent(layer);
        var layerId = __WEBPACK_IMPORTED_MODULE_2_leaflet__["Util"].stamp(layer);
        this.featureMap[layerId] = featureId;
    };
    MapService.prototype.removeFeature = function (featureId) {
        var layerId = this._findKey(this.featureMap, featureId);
        this.mapLayer.removeLayer(parseInt(layerId, 10));
        delete this.featureMap[layerId];
    };
    MapService.prototype.updateFeature = function (featureId, feature) {
        var layerId = this._findKey(this.featureMap, featureId);
        var layer = this.mapLayer.getLayer(parseInt(layerId, 10));
        if (feature.geometry.type === "Point") {
            var pointLayer = layer;
            var latLng = __WEBPACK_IMPORTED_MODULE_2_leaflet__["GeoJSON"].coordsToLatLng(feature.geometry.coordinates);
            pointLayer.setLatLng(latLng);
        }
        else {
            var polyLayer = layer;
            var coords = feature.geometry.type === "Polygon"
                ? // only support polygons with no hole
                    feature.geometry.coordinates[0]
                : feature.geometry.coordinates;
            var latLngs = __WEBPACK_IMPORTED_MODULE_2_leaflet__["GeoJSON"].coordsToLatLngs(coords);
            polyLayer.setLatLngs(latLngs);
        }
        if (layer.pm.enabled()) {
            // toggle off and on to update the edit toggles
            layer.pm.enable();
        }
    };
    MapService.prototype.setFeatureId = function (layerId, featureId) {
        this.featureMap[layerId] = featureId;
    };
    MapService.prototype.finishEdit = function () {
        if (!this.editing) {
            return;
        }
        this.editing = null;
    };
    MapService.prototype.saveEdit = function () {
        if (!this.editing) {
            return;
        }
        var layer = this.editing.layer;
        layer.pm.disable();
        this.finishEdit();
        return layer.toGeoJSON();
    };
    MapService.prototype.cancelEdit = function () {
        if (!this.editing) {
            return;
        }
        this.editing.layer.pm.disable();
        var original = this.editing.original;
        if (original.geometry.type === "Point") {
            var latLng = __WEBPACK_IMPORTED_MODULE_2_leaflet__["GeoJSON"].coordsToLatLng(original.geometry.coordinates);
            this.editing.layer.setLatLng(latLng);
        }
        else {
            var coords = original.geometry.type === "Polygon"
                ? // only support polygons with no hole
                    original.geometry.coordinates[0]
                : original.geometry.coordinates;
            var latLngs = __WEBPACK_IMPORTED_MODULE_2_leaflet__["GeoJSON"].coordsToLatLngs(coords);
            this.editing.layer.setLatLngs(latLngs);
        }
        this.finishEdit();
    };
    MapService.prototype.exitMap = function () {
        if (!this.mapLayer) {
            return;
        }
        this.map.removeLayer(this.mapLayer);
        this.mapLayer = null;
        this.editing = null;
    };
    MapService.prototype._bindEditEvent = function (layer) {
        var _this = this;
        layer.on("click", function (e) {
            if (!_this.editing && !e.target.pm.enabled()) {
                _this.editing = {
                    layer: e.target,
                    original: e.target.toGeoJSON()
                };
                e.target.pm.enable();
                var layerId = __WEBPACK_IMPORTED_MODULE_2_leaflet__["Util"].stamp(e.target);
                var featureId = _this.featureMap[layerId];
                var feature = e.target.toGeoJSON();
                _this.events.featureEditStart.emit({
                    featureId: featureId,
                    layerId: layerId,
                    feature: feature
                });
            }
        });
    };
    MapService.prototype._findKey = function (object, value) {
        return Object.keys(object).find(function (key) { return object[key] === value; });
    };
    MapService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], MapService);
    return MapService;
}());



/***/ }),

/***/ "../../../../../src/app/map/map.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"full-size\">\n  <mat-sidenav position=\"end\" mode=\"side\" class=\"sidenav-edit\">\n    <h2>Edit Feature</h2>\n    <div class=\"property-edit-form\">\n      <app-property-edit-form [properties]=\"editProperties\" (saved)=\"onPropertyEdited($event)\">\n      </app-property-edit-form>\n    </div>\n    <div fxLayout=\"row\" fxLayoutAlign=\" none\" >\n      <button mat-raised-button\n              color=\"warn\"\n              (click)=\"deleteFeature(selected.featureId)\">\n        Delete\n      </button>\n      <span fxFlex></span>\n      <button mat-raised-button color=\"primary\" (click)=\"saveEdit()\">Save</button>\n      <button mat-button (click)=\"cancelEdit()\">Cancel</button>\n    </div>\n  </mat-sidenav>\n  <section class=\"full-size\">\n    <div id=\"map\" class=\"full-size\"></div>\n  </section>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "../../../../../src/app/map/map.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sidenav-edit {\n  width: 30%;\n  min-width: 300px;\n  padding: 15px; }\n\n.property-edit-form {\n  margin: 15px 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/map/map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__db_service__ = __webpack_require__("../../../../../src/app/db.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map_service__ = __webpack_require__("../../../../../src/app/map.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var MapComponent = /** @class */ (function () {
    function MapComponent(map, db) {
        this.map = map;
        this.db = db;
    }
    MapComponent.prototype.ngOnInit = function () { };
    MapComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.map.createMap("map");
        this.map.events.featureEditStart.subscribe(function (featureLayer) { return __awaiter(_this, void 0, void 0, function () {
            var document, properties;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.selected = featureLayer;
                        document = this.db.getFeature(featureLayer.featureId);
                        properties = document.feature.properties || {};
                        this.editProperties = JSON.parse(JSON.stringify(properties));
                        this.savedProperties = this.editProperties;
                        return [4 /*yield*/, this.sidenav.open()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        this.map.events.featureCreated.subscribe(function (featureLayer) { return __awaiter(_this, void 0, void 0, function () {
            var doc;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.db.addFeature(featureLayer.feature)];
                    case 1:
                        doc = _a.sent();
                        this.map.setFeatureId(featureLayer.layerId, doc._id);
                        return [2 /*return*/];
                }
            });
        }); });
        this.map.events.featureUpdated.subscribe(function (featureLayer) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.db.updateFeature(featureLayer.featureId, featureLayer.feature)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        this.map.events.featureRemoved.subscribe(function (featureLayer) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.db.removeFeature(featureLayer.featureId)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        this.db.events.mapReady.subscribe(function () {
            _this.map.enableEditing();
            _this.map.zoomToFeatures();
        });
        this.db.events.mapReplicated.subscribe(function (changes) {
            for (var _i = 0, _a = changes.new; _i < _a.length; _i++) {
                var doc = _a[_i];
                _this.map.addFeature(doc._id, doc.feature);
            }
            for (var _b = 0, _c = changes.updated; _b < _c.length; _b++) {
                var doc = _c[_b];
                _this.map.updateFeature(doc._id, doc.feature);
            }
            for (var _d = 0, _e = changes.removed; _d < _e.length; _d++) {
                var doc = _e[_d];
                _this.map.removeFeature(doc._id);
            }
        });
    };
    MapComponent.prototype.onPropertyEdited = function (properties) {
        this.savedProperties = properties;
    };
    MapComponent.prototype.deleteFeature = function (featureId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.map.removeFeature(featureId);
                        this.map.finishEdit();
                        return [4 /*yield*/, this.db.removeFeature(featureId)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.sidenav.close()];
                    case 2:
                        _a.sent();
                        this.selected = null;
                        this.editProperties = null;
                        this.savedProperties = null;
                        return [2 /*return*/];
                }
            });
        });
    };
    MapComponent.prototype.saveEdit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var feature;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        feature = this.map.saveEdit();
                        feature.properties = this.savedProperties;
                        return [4 /*yield*/, this.db.updateFeature(this.selected.featureId, feature)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.sidenav.close()];
                    case 2:
                        _a.sent();
                        this.selected = null;
                        this.editProperties = null;
                        this.savedProperties = null;
                        return [2 /*return*/];
                }
            });
        });
    };
    MapComponent.prototype.cancelEdit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.map.cancelEdit();
                        return [4 /*yield*/, this.sidenav.close()];
                    case 1:
                        _a.sent();
                        this.selected = null;
                        this.editProperties = null;
                        this.savedProperties = null;
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatSidenav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatSidenav */])
    ], MapComponent.prototype, "sidenav", void 0);
    MapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-map",
            template: __webpack_require__("../../../../../src/app/map/map.component.html"),
            styles: [__webpack_require__("../../../../../src/app/map/map.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__map_service__["a" /* MapService */], __WEBPACK_IMPORTED_MODULE_2__db_service__["a" /* DbService */]])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "../../../../../src/app/ng-material/ng-material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgMaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var modules = [
    __WEBPACK_IMPORTED_MODULE_1__angular_flex_layout__["a" /* FlexLayoutModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
    __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MatButtonModule */],
    __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatInputModule */],
    __WEBPACK_IMPORTED_MODULE_3__angular_material__["m" /* MatToolbarModule */],
    __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatIconModule */],
    __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MatProgressSpinnerModule */],
    __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MatDialogModule */],
    __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MatSnackBarModule */],
    __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MatMenuModule */],
    __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatSidenavModule */],
    __WEBPACK_IMPORTED_MODULE_3__angular_material__["l" /* MatTableModule */]
];
var NgMaterialModule = /** @class */ (function () {
    function NgMaterialModule() {
    }
    NgMaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: modules,
            exports: modules,
            declarations: []
        })
    ], NgMaterialModule);
    return NgMaterialModule;
}());



/***/ }),

/***/ "../../../../../src/app/property-edit-form/property-edit-form.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-table #table [dataSource]=\"propertyList\">\n\n  <!--- Note that these columns can be defined in any order.\n        The actual rendered columns are set as a property on the row definition\" -->\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"name\">\n    <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\">\n      <div [ngSwitch]=\"element.editing\">\n        <form *ngSwitchCase=\"true\">\n          <mat-form-field class=\"full-width\">\n            <input matInput placeholder=\"Property Name\" name=\"name\" [(ngModel)]=\"element.name\" required>\n          </mat-form-field>\n        </form>\n        <span *ngSwitchDefault>{{element.name}}</span>\n      </div>\n    </mat-cell>\n  </ng-container>\n\n  <!-- Value Column -->\n  <ng-container matColumnDef=\"value\">\n    <mat-header-cell *matHeaderCellDef> Value </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\">\n      <div [ngSwitch]=\"element.editing\">\n        <form *ngSwitchCase=\"true\">\n          <mat-form-field class=\"full-width\">\n            <input matInput placeholder=\"Property Value\" name=\"value\" [(ngModel)]=\"element.value\" required>\n          </mat-form-field>\n        </form>\n        <span *ngSwitchDefault>{{element.value}}</span>\n      </div>\n    </mat-cell>\n  </ng-container>\n\n  <!-- Action Column -->\n  <ng-container matColumnDef=\"action\">\n    <mat-header-cell *matHeaderCellDef> Action </mat-header-cell>\n    <mat-cell *matCellDef=\"let element; let i = index;\">\n      <div [ngSwitch]=\"element.editing\">\n        <div *ngSwitchCase=\"true\">\n          <button mat-icon-button (click)=\"saveEdit(i)\" [disabled]=\"!isMeaningful(element.name)\">\n            <mat-icon>done</mat-icon>\n          </button>\n          <button mat-icon-button (click)=\"cancelEdit(i)\">\n            <mat-icon>cancel</mat-icon>\n          </button>\n        </div>\n        <div *ngSwitchDefault>\n          <button mat-icon-button (click)=\"editProperty(i)\">\n            <mat-icon>edit</mat-icon>\n          </button>\n          <button mat-icon-button (click)=\"removeProperty(i)\">\n            <mat-icon>delete</mat-icon>\n          </button>\n        </div>\n      </div>\n    </mat-cell>\n  </ng-container>\n\n  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n  <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n</mat-table>\n\n<button mat-raised-button class=\"add-property-button\" (click)=\"addProperty()\">Add Property</button>\n"

/***/ }),

/***/ "../../../../../src/app/property-edit-form/property-edit-form.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".add-property-button {\n  margin-top: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/property-edit-form/property-edit-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertyEditFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PropertyEditFormComponent = /** @class */ (function () {
    function PropertyEditFormComponent() {
        this.displayedColumns = ["name", "value", "action"];
        this.saved = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.propertyList = [];
    }
    Object.defineProperty(PropertyEditFormComponent.prototype, "properties", {
        set: function (value) {
            if (!value) {
                return;
            }
            this.propertyList = Object.entries(value).map(function (property) {
                return {
                    name: property[0],
                    value: property[1],
                    editing: false
                };
            });
        },
        enumerable: true,
        configurable: true
    });
    PropertyEditFormComponent.prototype.ngOnInit = function () { };
    PropertyEditFormComponent.prototype.addProperty = function () {
        this.propertyList.push({
            name: "",
            value: "",
            editing: true
        });
        this.refreshTable();
    };
    PropertyEditFormComponent.prototype.editProperty = function (index) {
        var property = this.propertyList[index];
        property.originalName = property.name;
        property.originalValue = property.value;
        property.editing = true;
        this.refreshTable();
    };
    PropertyEditFormComponent.prototype.removeProperty = function (index) {
        this.propertyList.splice(index, 1);
        this.refreshTable();
        this.saved.emit(this.getProperties());
    };
    PropertyEditFormComponent.prototype.saveEdit = function (index) {
        var property = this.propertyList[index];
        if (!this.isMeaningful(property.name)) {
            return;
        }
        delete property.originalName;
        delete property.originalValue;
        property.editing = false;
        this.refreshTable();
        this.saved.emit(this.getProperties());
    };
    PropertyEditFormComponent.prototype.cancelEdit = function (index) {
        var property = this.propertyList[index];
        property.name = property.originalName;
        property.value = property.originalValue;
        delete property.originalName;
        delete property.originalValue;
        property.editing = false;
        this.refreshTable();
    };
    PropertyEditFormComponent.prototype.getProperties = function () {
        var _this = this;
        return this.propertyList.reduce(function (collection, property) {
            if (_this.isMeaningful(property.name)) {
                collection[property.name] = property.value;
            }
            return collection;
        }, {});
    };
    PropertyEditFormComponent.prototype.refreshTable = function () {
        this.propertyList = this.propertyList.slice();
    };
    PropertyEditFormComponent.prototype.isMeaningful = function (value) {
        return value !== "" && value !== null && value !== undefined;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], PropertyEditFormComponent.prototype, "properties", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], PropertyEditFormComponent.prototype, "saved", void 0);
    PropertyEditFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-property-edit-form",
            template: __webpack_require__("../../../../../src/app/property-edit-form/property-edit-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/property-edit-form/property-edit-form.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PropertyEditFormComponent);
    return PropertyEditFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/toolbar/toolbar.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <h2>Maplicate</h2>\n  <button mat-icon-button>\n    <mat-icon>book</mat-icon>\n  </button>\n  <span class=\"toolbar-filler\"></span>\n  <button mat-button *ngIf=\"!mapReady\" (click)=\"createMap()\" [disabled]=\"!dbReady\">\n    <mat-icon>add</mat-icon> Create\n  </button>\n  <button mat-button *ngIf=\"!mapReady\" (click)=\"joinMap()\" [disabled]=\"!dbReady\">\n    <mat-icon>group</mat-icon> Join\n  </button>\n  <button mat-button *ngIf=\"mapReady\" [matMenuTriggerFor]=\"mapMenu\">\n    {{mapName}} <mat-icon>arrow_drop_down</mat-icon>\n  </button>\n  <mat-progress-spinner *ngIf=\"loading\" mode=\"indeterminate\" color=\"accent\" diameter=\"30\">\n  </mat-progress-spinner>\n</mat-toolbar>\n\n<mat-menu #mapMenu=\"matMenu\">\n  <button mat-menu-item ngxClipboard [cbContent]=\"mapAddress\" (click)=\"copyAddress()\">\n    <mat-icon>file_copy</mat-icon> Address\n  </button>\n  <button mat-menu-item (click)=\"download()\">\n    <mat-icon>cloud_download</mat-icon> Download\n  </button>\n  <button mat-menu-item  (click)=\"exitMap()\">\n    <mat-icon>clear</mat-icon> Exit\n  </button>\n</mat-menu>\n"

/***/ }),

/***/ "../../../../../src/app/toolbar/toolbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".toolbar-filler {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/toolbar/toolbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_file_saver__ = __webpack_require__("../../../../file-saver/FileSaver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_file_saver__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_map_dialog_create_map_dialog_component__ = __webpack_require__("../../../../../src/app/create-map-dialog/create-map-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__join_map_dialog_join_map_dialog_component__ = __webpack_require__("../../../../../src/app/join-map-dialog/join-map-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__db_service__ = __webpack_require__("../../../../../src/app/db.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__map_service__ = __webpack_require__("../../../../../src/app/map.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent(db, map, dialog, snackBar) {
        var _this = this;
        this.db = db;
        this.map = map;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.loading = true;
        this.dbReady = false;
        this.mapReady = false;
        this.mapName = "";
        this.mapAddress = "";
        this.db.events.dbReady.subscribe(function () {
            _this.loading = false;
            _this.dbReady = true;
        });
    }
    ToolbarComponent.prototype.ngOnInit = function () { };
    ToolbarComponent.prototype.createMap = function () {
        var _this = this;
        var createMapDialog = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__create_map_dialog_create_map_dialog_component__["a" /* CreateMapDialogComponent */], {
            width: "400px"
        });
        createMapDialog.afterClosed().subscribe(function (name) { return __awaiter(_this, void 0, void 0, function () {
            var _a, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!name) {
                            return [2 /*return*/];
                        }
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        this.loading = true;
                        _a = this;
                        return [4 /*yield*/, this.db.createMap(name)];
                    case 2:
                        _a.mapAddress = _b.sent();
                        this._bindMapEvents();
                        this.snackBar.open("You create a new map!", "", { duration: 2000 });
                        this.mapName = name.match(/[\/]?([^\/]+)$/)[1];
                        this.mapReady = true;
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _b.sent();
                        console.log(error_1);
                        return [3 /*break*/, 4];
                    case 4:
                        this.loading = false;
                        return [2 /*return*/];
                }
            });
        }); });
    };
    ToolbarComponent.prototype.joinMap = function () {
        var _this = this;
        var joinMapDialog = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__join_map_dialog_join_map_dialog_component__["a" /* JoinMapDialogComponent */], {
            width: "400px"
        });
        joinMapDialog.afterClosed().subscribe(function (address) { return __awaiter(_this, void 0, void 0, function () {
            var _a, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!address) {
                            return [2 /*return*/];
                        }
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        this.loading = true;
                        _a = this;
                        return [4 /*yield*/, this.db.joinMap(address)];
                    case 2:
                        _a.mapAddress = _b.sent();
                        this._bindMapEvents();
                        this.snackBar.open("You join a new map!", "", { duration: 2000 });
                        this.mapName = address.match(/[\/]?([^\/]+)$/)[1];
                        this.mapReady = true;
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _b.sent();
                        console.log(error_2);
                        return [3 /*break*/, 4];
                    case 4:
                        this.loading = false;
                        return [2 /*return*/];
                }
            });
        }); });
    };
    ToolbarComponent.prototype.exitMap = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.db.exitMap()];
                    case 1:
                        _a.sent();
                        this.map.exitMap();
                        this.mapReady = false;
                        this.mapName = "";
                        this.mapAddress = "";
                        return [2 /*return*/];
                }
            });
        });
    };
    ToolbarComponent.prototype.copyAddress = function () {
        this.snackBar.open("Map address is copied to the clipboard.", "", {
            duration: 2000
        });
    };
    ToolbarComponent.prototype.download = function () {
        var features = this.db.query(function () { return true; });
        var geojson = {
            types: "FeatureCollection",
            features: features
        };
        var blob = new Blob([JSON.stringify(geojson)], {
            type: "application/json"
        });
        Object(__WEBPACK_IMPORTED_MODULE_2_file_saver__["saveAs"])(blob, "map.geojson");
    };
    ToolbarComponent.prototype._bindMapEvents = function () {
        var _this = this;
        this.db.events.mapReplicate.subscribe(function () {
            _this.loading = true;
        });
        this.db.events.mapReplicated.subscribe(function () {
            _this.loading = false;
        });
    };
    ToolbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-toolbar",
            template: __webpack_require__("../../../../../src/app/toolbar/toolbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/toolbar/toolbar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__db_service__["a" /* DbService */],
            __WEBPACK_IMPORTED_MODULE_6__map_service__["a" /* MapService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatSnackBar */]])
    ], ToolbarComponent);
    return ToolbarComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])()
    .bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 10:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 11:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 12:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 13:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 15:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 16:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 17:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map