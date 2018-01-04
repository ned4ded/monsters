webpackJsonp([0],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaticDataSource; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_from__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__monster_model__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__game_item_model__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__svg_builder_monster_constructor__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__svg_builder_root_node_model__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__svg_builder_svg_sprite_monsters_exports__ = __webpack_require__(294);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// Entities




// DataShorties

var StaticDataSource = (function () {
    function StaticDataSource() {
        this.monsters = [
            new __WEBPACK_IMPORTED_MODULE_3__monster_model__["a" /* Monster */](1, 'mummy', 176.358, 200.968, [0, 0, 0, 0], [63, 39, 33]),
            new __WEBPACK_IMPORTED_MODULE_3__monster_model__["a" /* Monster */](2, 'vampire', 92.279, 220.673, [0, 0, 0, 0], [59, 69, 126]),
            new __WEBPACK_IMPORTED_MODULE_3__monster_model__["a" /* Monster */](3, 'spider', 129.091, 104.901, [0, 0, 0, 0], [241, 234, 53]),
            new __WEBPACK_IMPORTED_MODULE_3__monster_model__["a" /* Monster */](4, 'ghost', 103.461, 200.7, [0, 0, 0, 0], [0, 0, 0]),
            new __WEBPACK_IMPORTED_MODULE_3__monster_model__["a" /* Monster */](5, 'skeleton', 173.034, 222.792, [0, 0, 0, 0], [0, 0, 0]),
            new __WEBPACK_IMPORTED_MODULE_3__monster_model__["a" /* Monster */](6, 'alien', 56.551, 218.464, [0, 0, 165.37, 302.36], [0, 0, 0]),
        ];
        this.gameItems = [
            new __WEBPACK_IMPORTED_MODULE_4__game_item_model__["a" /* GameItem */](1, 'dress', 148.652, 111.365),
            new __WEBPACK_IMPORTED_MODULE_4__game_item_model__["a" /* GameItem */](2, 'earring', 53.809, 124.738, true),
            new __WEBPACK_IMPORTED_MODULE_4__game_item_model__["a" /* GameItem */](3, 'egg', 133.147, 134.332),
            new __WEBPACK_IMPORTED_MODULE_4__game_item_model__["a" /* GameItem */](4, 'eyes', 178.063, 42.556),
            new __WEBPACK_IMPORTED_MODULE_4__game_item_model__["a" /* GameItem */](5, 'lips', 98.471, 69.73),
            new __WEBPACK_IMPORTED_MODULE_4__game_item_model__["a" /* GameItem */](6, 'love-glasses', 296.347, 103.926),
        ];
        this.newMonsters = [
            new __WEBPACK_IMPORTED_MODULE_5__svg_builder_monster_constructor__["a" /* MonsterConstructor */]({
                meta: new __WEBPACK_IMPORTED_MODULE_6__svg_builder_root_node_model__["a" /* RootNode */]({
                    name: 'svg-container',
                    tagType: 'svg',
                    customAttr: {
                        'xmlns': 'http://www.w3.org/2000/svg',
                        'xmlns:xlink': 'http://www.w3.org/1999/xlink'
                    },
                    viewBox: [0, 0, 165.37, 302.36],
                    width: '80%',
                    height: '80%',
                    initialScreenWidth: 150,
                }),
                figure: __WEBPACK_IMPORTED_MODULE_7__svg_builder_svg_sprite_monsters_exports__["a" /* alienTorso */]
            }),
        ];
    }
    StaticDataSource.prototype.getMonsters = function () {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].from([this.monsters]);
    };
    StaticDataSource.prototype.getNewMonsters = function () {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].from([this.newMonsters]);
    };
    StaticDataSource.prototype.getItems = function () {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].from([this.gameItems]);
    };
    StaticDataSource = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], StaticDataSource);
    return StaticDataSource;
}());

;
//# sourceMappingURL=static.datasource.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonsterRepository; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_datasource__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MonsterRepository = (function () {
    function MonsterRepository(src) {
        var _this = this;
        this.src = src;
        this.monsters = [];
        this.newMonsters = [];
        src.getMonsters().subscribe(function (data) {
            _this.monsters = data;
        });
        src.getNewMonsters().subscribe(function (data) {
            _this.newMonsters = data;
        });
    }
    MonsterRepository.prototype.getMonsters = function () {
        return this.monsters;
    };
    MonsterRepository.prototype.getNewMonsters = function () {
        return this.newMonsters;
    };
    MonsterRepository.prototype.getMonster = function (id) {
        return this.monsters.find(function (m) { return m.id == id; });
    };
    MonsterRepository.prototype.getViewBox = function (monsterId) {
        return this.getMonster(monsterId).viewBox;
    };
    MonsterRepository = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__static_datasource__["a" /* StaticDataSource */]])
    ], MonsterRepository);
    return MonsterRepository;
}());

//# sourceMappingURL=monster.repository.js.map

/***/ }),

/***/ 118:
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
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Node; });
var Node = (function () {
    function Node(meta) {
        this.name = meta.name;
        this.mod = meta.mod || null;
        this.tagType = meta.tagType;
        this.class = meta.class || null;
        this.customAttr = meta.customAttr || null;
    }
    Node.prototype.getAttributes = function () {
        var modified = this.mod ? this.name + "--" + this.mod : null;
        var obj = {
            class: [this.name, modified, this.class].filter(function (n) { return n; }).join(' '),
        };
        var newObj = Object.assign(obj, this.customAttr);
        return newObj;
    };
    Node.prototype.getName = function () {
        return this.name;
    };
    Node.prototype.getType = function () {
        return this.tagType;
    };
    return Node;
}());

//# sourceMappingURL=node.model.js.map

/***/ }),

/***/ 160:
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
webpackEmptyAsyncContext.id = 160;

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FigureModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_model__ = __webpack_require__(15);

var FigureModel = (function () {
    function FigureModel(meta, children) {
        this.meta = meta;
        this.children = children;
    }
    FigureModel.prototype.addPart = function (node) {
        var child = node instanceof __WEBPACK_IMPORTED_MODULE_0__node_model__["a" /* Node */] ?
            new FigureModel(node, []) :
            node;
        return new FigureModel(this.meta, this.children.concat([child]));
    };
    FigureModel.prototype.addParts = function () {
        var nodes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            nodes[_i] = arguments[_i];
        }
        var children = nodes.map(function (node) {
            if (node instanceof __WEBPACK_IMPORTED_MODULE_0__node_model__["a" /* Node */])
                return new FigureModel(node, []);
            return node;
        });
        return new FigureModel(this.meta, this.children.concat(children));
    };
    FigureModel.prototype.getParts = function () {
        return this.children;
    };
    FigureModel.prototype.getPart = function (fn) {
        var children = this.children.slice();
        if (children.length === 0) {
            return false;
        }
        var foundCh = children.find(fn);
        return foundCh ? foundCh : children.reduce(function (acc, n) {
            if (acc)
                return acc;
            return n.getPart(fn);
        }, false);
    };
    FigureModel.prototype.getType = function () {
        return this.meta.getType();
    };
    FigureModel.prototype.getAttributes = function () {
        return this.meta.getAttributes();
    };
    FigureModel.prototype.getMeta = function () {
        return this.meta;
    };
    return FigureModel;
}());

//# sourceMappingURL=figure.model.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameItemRepository; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_datasource__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GameItemRepository = (function () {
    function GameItemRepository(src) {
        var _this = this;
        this.src = src;
        this.items = [];
        src.getItems().subscribe(function (data) {
            _this.items = data;
        });
    }
    GameItemRepository.prototype.getItems = function () {
        return this.items;
    };
    GameItemRepository.prototype.getItem = function (id) {
        return this.items.find(function (m) { return m.id == id; });
    };
    GameItemRepository = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__static_datasource__["a" /* StaticDataSource */]])
    ], GameItemRepository);
    return GameItemRepository;
}());

//# sourceMappingURL=game-item.repository.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__select_char_select_char__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.selectGame = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__select_char_select_char__["a" /* SelectCharPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/ned4ded/dev/monsters/src/pages/home/home.html"*/'<ion-content class="container" padding fixed>\n  <div class="image">\n    <img class="btn-play" (click)="selectGame()" src="assets/imgs/home-page/home-page_play.svg" alt="hit the btn to play!" />\n  </div>\n  <img src="assets/imgs/home-page/home-page_logo.svg" alt="logotype" class="logo">\n</ion-content>\n'/*ion-inline-end:"/home/ned4ded/dev/monsters/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectCharPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_model_monster_repository__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__game_game__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SelectCharPage = (function () {
    function SelectCharPage(navCtrl, repo) {
        this.navCtrl = navCtrl;
        this.repo = repo;
    }
    SelectCharPage.prototype.getMonsters = function () {
        return this.repo.getMonsters();
    };
    SelectCharPage.prototype.beginGame = function () {
        var monster = this.repo.getNewMonsters()[0];
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__game_game__["a" /* GamePage */], { monster: monster });
    };
    SelectCharPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'select-char-page',template:/*ion-inline-start:"/home/ned4ded/dev/monsters/src/pages/select-char/select-char.html"*/'<ion-header>\n    <ion-navbar></ion-navbar>\n</ion-header>\n<ion-content class="container">\n  <ul class="list">\n    <li class="item Monsters__{{monster.name}}-bgc" *ngFor="let monster of getMonsters()" (click)="beginGame()">\n      <img src="assets/imgs/Monsters/{{monster.name}}.svg" alt="placholder" class="Monsters Monsters__{{monster.name}}">\n    </li>\n  </ul>\n</ion-content>\n'/*ion-inline-end:"/home/ned4ded/dev/monsters/src/pages/select-char/select-char.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__app_model_monster_repository__["a" /* MonsterRepository */]])
    ], SelectCharPage);
    return SelectCharPage;
}());

//# sourceMappingURL=select-char.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_model_monster_repository__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_model_game_item_repository__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GamePage = (function () {
    function GamePage(navCtrl, params, gameItemRepo, monsterRepo) {
        this.navCtrl = navCtrl;
        this.params = params;
        this.gameItemRepo = gameItemRepo;
        this.monsterRepo = monsterRepo;
        this.monster = params.get('monster');
        this.items = gameItemRepo.getItems();
    }
    GamePage.prototype.ngOnInit = function () {
        this.buildMonster();
    };
    GamePage.prototype.endGame = function () {
        this.navCtrl.pop();
    };
    GamePage.prototype.getItems = function () {
        return this.items;
    };
    GamePage.prototype.buildMonster = function () {
        this.monster.build();
    };
    GamePage.prototype.getCorrelationalSize = function (item, side, value) {
        switch (side) {
            case ('width'):
                return value * item.ratio;
            case ('height'):
                return value / item.ratio;
            default:
                break;
        }
    };
    GamePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'game-page',template:/*ion-inline-start:"/home/ned4ded/dev/monsters/src/pages/game/game.html"*/'<ion-content>\n  <div class="container">\n    <div id="nb-target" class="screen">\n      <button ion-button icon-only outline color="white" class="btn-close" (click)="endGame()">\n        <ion-icon name="close" class="icon-close"></ion-icon>\n      </button>\n    </div>\n    <div class="panel-container">\n      <ul class="panel">\n        <li *ngFor="let item of getItems()" class="panel__item">\n          <div class="draggable-element">\n            <img\n            src="assets/imgs/GameItems/{{item.name}}.svg"\n            alt="image of {{item.name}}"\n            class="GameItem\n                  {{item.vertical? \'GameItem--vertical\' : \'\'}}\n                  GameItem__{{item.name}}">\n\n            <img\n            *ngIf="item.doubled"\n            src="assets/imgs/GameItems/{{item.name}}.svg"\n            alt="image of {{item.name}}"\n            class="GameItem\n                  {{item.vertical? \'GameItem--vertical\' : \'\'}}\n                  GameItem__{{item.name}}">\n\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/ned4ded/dev/monsters/src/pages/game/game.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__app_model_game_item_repository__["a" /* GameItemRepository */],
            __WEBPACK_IMPORTED_MODULE_2__app_model_monster_repository__["a" /* MonsterRepository */]])
    ], GamePage);
    return GamePage;
}());

//# sourceMappingURL=game.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(228);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_model_module__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_monster_sprite_sprite_directive__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_select_char_select_char__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_game_game__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//data model






var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_monster_sprite_sprite_directive__["a" /* MonsterSprite */],
                __WEBPACK_IMPORTED_MODULE_9__pages_select_char_select_char__["a" /* SelectCharPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_game_game__["a" /* GamePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_5__model_model_module__["a" /* ModelModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_monster_sprite_sprite_directive__["a" /* MonsterSprite */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_select_char_select_char__["a" /* SelectCharPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_game_game__["a" /* GamePage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModelModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_datasource__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__monster_repository__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__game_item_repository__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ModelModule = (function () {
    function ModelModule() {
    }
    ModelModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* HttpModule */]],
            providers: [__WEBPACK_IMPORTED_MODULE_2__static_datasource__["a" /* StaticDataSource */], __WEBPACK_IMPORTED_MODULE_3__monster_repository__["a" /* MonsterRepository */], __WEBPACK_IMPORTED_MODULE_4__game_item_repository__["a" /* GameItemRepository */]]
        })
    ], ModelModule);
    return ModelModule;
}());

;
//# sourceMappingURL=model.module.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Monster; });
var Monster = (function () {
    function Monster(id, name, width, height, viewBox, bgColor) {
        this.id = id;
        this.name = name;
        this.width = width;
        this.height = height;
        this.viewBox = viewBox;
        this.bgColor = bgColor;
    }
    return Monster;
}());

;
//# sourceMappingURL=monster.model.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameItem; });
var roundDecimal = function (decimalPlaces) { return function (value) { return Math.round(value * decimalPlaces) / decimalPlaces; }; };
var roundThreeDecimalPlaces = function (value) { return roundDecimal(1000)(value); };
var GameItem = (function () {
    function GameItem(id, name, width, hight, doubled) {
        this.id = id;
        this.name = name;
        this.width = width;
        this.hight = hight;
        this.doubled = doubled;
        this.doubled = doubled || false;
        this.ratio = roundThreeDecimalPlaces(width / hight);
        this.vertical = this.ratio < 1 ? true : false;
    }
    return GameItem;
}());

;
//# sourceMappingURL=game-item.model.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonsterConstructor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__svg_constructor__ = __webpack_require__(290);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var MonsterConstructor = (function (_super) {
    __extends(MonsterConstructor, _super);
    function MonsterConstructor(_a) {
        var meta = _a.meta, figure = _a.figure;
        return _super.call(this, { meta: meta, figure: figure }) || this;
    }
    return MonsterConstructor;
}(__WEBPACK_IMPORTED_MODULE_0__svg_constructor__["a" /* SvgConstructor */]));

//# sourceMappingURL=monster-constructor.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SvgConstructor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_builder__ = __webpack_require__(292);

var SvgConstructor = (function () {
    function SvgConstructor(_a) {
        var meta = _a.meta, figure = _a.figure;
        this.root = new __WEBPACK_IMPORTED_MODULE_0__node_builder__["a" /* NodeBuilder */](meta, [], 'svg');
        this.root.children = [this.parse(figure)];
    }
    SvgConstructor.prototype.parse = function (obj) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_0__node_builder__["a" /* NodeBuilder */](obj.getMeta(), obj.getParts().map(function (obj) { return _this.parse(obj); }), 'svg');
    };
    SvgConstructor.prototype.build = function (targetName) {
        var target = document.getElementById(targetName || 'nb-target');
        var svg = this.root.build();
        target.appendChild(svg);
    };
    return SvgConstructor;
}());

//# sourceMappingURL=svg-constructor.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NodeBuilder; });
var NodeBuilder = (function () {
    function NodeBuilder(node, children, tagNS) {
        this.tagNamespaces = new Map([
            ['svg', 'http://www.w3.org/2000/svg'],
            ['html', 'http://www.w3.org/1999/xhtml']
        ]);
        this.node = node;
        this.children = children;
        this.tagNS = this.tagNamespaces.get(tagNS);
    }
    NodeBuilder.prototype.build = function () {
        var tag = document.createElementNS(this.tagNS, this.node.getType());
        var attr = this.node.getAttributes();
        Object.keys(attr)
            .filter(function (key) { return attr[key]; })
            .forEach(function (key) { return tag.setAttribute(key, attr[key]); });
        if (this.children.length === 0) {
            return tag;
        }
        var children = this.children.map(function (ch) {
            return ch.build();
        });
        children.forEach(function (ch) { return tag.appendChild(ch); });
        return tag;
    };
    return NodeBuilder;
}());

//# sourceMappingURL=node-builder.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RootNode; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_model__ = __webpack_require__(15);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var RootNode = (function (_super) {
    __extends(RootNode, _super);
    function RootNode(meta) {
        var _this = _super.call(this, meta) || this;
        _this.width = meta.width.toString();
        _this.height = meta.height.toString();
        _this.viewBox = meta.viewBox.join(' ');
        _this.ratio = meta.viewBox[3] / meta.initialScreenWidth;
        return _this;
    }
    RootNode.prototype.getAttributes = function () {
        var modified = this.mod ? this.name + "--" + this.mod : null;
        var obj = {
            class: [this.name, modified, this.class].filter(function (n) { return n; }).join(' '),
            viewBox: this.viewBox,
            width: this.width,
            height: this.height,
        };
        var newObj = Object.assign(obj, this.customAttr);
        return newObj;
    };
    return RootNode;
}(__WEBPACK_IMPORTED_MODULE_0__node_model__["a" /* Node */]));

//# sourceMappingURL=root-node.model.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__alien_torso_alien__ = __webpack_require__(295);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__alien_torso_alien__["a"]; });


//# sourceMappingURL=monsters.exports.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_model__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__figure_builder__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__head__ = __webpack_require__(296);
// Entities


// Model Parts

var bodyFigure = new __WEBPACK_IMPORTED_MODULE_0__node_model__["a" /* Node */]({
    name: 'body',
    mod: 'figure',
    customAttr: {
        fill: '#6fc055',
        cx: '82.66',
        cy: '285.78',
        rx: '50.36',
        ry: '139.24',
    },
    tagType: 'ellipse',
});
var body = new __WEBPACK_IMPORTED_MODULE_0__node_model__["a" /* Node */]({
    name: 'body',
    tagType: 'g',
});
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__figure_builder__["a" /* default */])(body).addParts(__WEBPACK_IMPORTED_MODULE_2__head__["a" /* default */], bodyFigure));
//# sourceMappingURL=alien.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_model__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__figure_builder__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__content__ = __webpack_require__(297);



var headFigure = new __WEBPACK_IMPORTED_MODULE_0__node_model__["a" /* Node */]({
    name: 'head',
    mod: 'figure',
    customAttr: {
        fill: '#6fc055',
        d: 'M82.67,153.65a39.12,39.12,0,0,1-33.88-19.56L5.25,58.69A39.13,39.13,0,0,1,39.13,0H126.2a39.13,39.13,0,0,1,33.88,58.69l-43.53,75.4A39.13,39.13,0,0,1,82.67,153.65Z',
    },
    tagType: 'path',
});
var head = new __WEBPACK_IMPORTED_MODULE_0__node_model__["a" /* Node */]({
    name: 'head',
    tagType: 'g',
});
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__figure_builder__["a" /* default */])(head).addParts(headFigure, __WEBPACK_IMPORTED_MODULE_2__content__["a" /* default */]));
//# sourceMappingURL=head.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_model__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__figure_builder__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mouth__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__eyes__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__nose__ = __webpack_require__(302);





var content = new __WEBPACK_IMPORTED_MODULE_0__node_model__["a" /* Node */]({
    name: 'content',
    customAttr: {},
    tagType: 'g',
});
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__figure_builder__["a" /* default */])(content).addParts(__WEBPACK_IMPORTED_MODULE_2__mouth__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__eyes__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__nose__["a" /* default */]));
//# sourceMappingURL=content.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_model__ = __webpack_require__(15);

var mouth = new __WEBPACK_IMPORTED_MODULE_0__node_model__["a" /* Node */]({
    name: 'mouth',
    customAttr: {
        fill: '#f24943',
        d: 'M82.66,131.54a2.83,2.83,0,0,1-2.45-1.41l-3.15-5.45a2.83,2.83,0,0,1,2.45-4.24h6.29a2.83,2.83,0,0,1,2.45,4.24l-3.15,5.45A2.83,2.83,0,0,1,82.66,131.54Z',
    },
    tagType: 'path'
});
/* harmony default export */ __webpack_exports__["a"] = (mouth);
//# sourceMappingURL=mouth.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_model__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__figure_builder__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__eye_left__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__eye_right__ = __webpack_require__(301);




var eyes = new __WEBPACK_IMPORTED_MODULE_0__node_model__["a" /* Node */]({
    name: 'eyes',
    tagType: 'g',
});
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__figure_builder__["a" /* default */])(eyes).addParts(__WEBPACK_IMPORTED_MODULE_2__eye_left__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__eye_right__["a" /* default */]));
//# sourceMappingURL=eyes.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_model__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__figure_builder__ = __webpack_require__(31);
// Entities


var eyeball = new __WEBPACK_IMPORTED_MODULE_0__node_model__["a" /* Node */]({
    name: 'eyeball',
    mod: 'left',
    customAttr: {
        d: 'M25.19,26.89A52.14,52.14,0,0,0,77.36,79.06,52.14,52.14,0,0,0,25.19,26.89Z'
    },
    tagType: 'path',
});
var iris = new __WEBPACK_IMPORTED_MODULE_0__node_model__["a" /* Node */]({
    name: 'iris',
    mod: 'left',
    customAttr: {
        fill: '#586ab1',
        cx: '51.86',
        cy: '53.61',
        r: '15.32'
    },
    tagType: 'circle',
});
var pupil = new __WEBPACK_IMPORTED_MODULE_0__node_model__["a" /* Node */]({
    name: 'pupil',
    mod: 'left',
    customAttr: {
        cx: '51.86',
        cy: '53.61',
        r: '7.21',
    },
    tagType: 'circle',
});
var eye = new __WEBPACK_IMPORTED_MODULE_0__node_model__["a" /* Node */]({
    name: 'eye',
    mod: 'left',
    tagType: 'g',
});
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__figure_builder__["a" /* default */])(eye).addParts(eyeball, iris, pupil));
//# sourceMappingURL=eye-left.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_model__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__figure_builder__ = __webpack_require__(31);


var eyeball = new __WEBPACK_IMPORTED_MODULE_0__node_model__["a" /* Node */]({
    name: 'eyeball',
    mod: 'right',
    customAttr: {
        d: 'M140.14,26.89A52.14,52.14,0,0,0,88,79.06,52.14,52.14,0,0,0,140.14,26.89Z'
    },
    tagType: 'path',
});
var iris = new __WEBPACK_IMPORTED_MODULE_0__node_model__["a" /* Node */]({
    name: 'iris',
    mod: 'right',
    customAttr: {
        fill: '#586ab1',
        cx: '113.53',
        cy: '53.61',
        r: '15.32'
    },
    tagType: 'circle',
});
var pupil = new __WEBPACK_IMPORTED_MODULE_0__node_model__["a" /* Node */]({
    name: 'pupil',
    customAttr: {
        cx: '113.53',
        cy: '53.61',
        r: '4.75',
    },
    tagType: 'circle',
});
var eye = new __WEBPACK_IMPORTED_MODULE_0__node_model__["a" /* Node */]({
    name: 'eye',
    mod: 'right',
    tagType: 'g',
});
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__figure_builder__["a" /* default */])(eye).addParts(eyeball, iris, pupil));
//# sourceMappingURL=eye-right.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_model__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__figure_builder__ = __webpack_require__(31);


var nostrillLeft = new __WEBPACK_IMPORTED_MODULE_0__node_model__["a" /* Node */]({
    name: 'nostril',
    mod: 'left',
    customAttr: {
        cx: '76.75',
        cy: '99.18',
        r: '2.49',
    },
    tagType: 'circle'
});
var nostrillRight = new __WEBPACK_IMPORTED_MODULE_0__node_model__["a" /* Node */]({
    name: 'nostril',
    mod: 'right',
    customAttr: {
        cx: '88.6',
        cy: '99.18',
        r: '2.49',
    },
    tagType: 'circle'
});
var nose = new __WEBPACK_IMPORTED_MODULE_0__node_model__["a" /* Node */]({
    name: 'nose',
    tagType: 'g',
});
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__figure_builder__["a" /* default */])(nose).addParts(nostrillLeft, nostrillRight));
//# sourceMappingURL=nose.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/ned4ded/dev/monsters/src/app/app.html"*/'<sprite id="sprite"></sprite>\n<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/ned4ded/dev/monsters/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonsterSprite; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MonsterSprite = (function () {
    function MonsterSprite() {
    }
    MonsterSprite = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'sprite',template:/*ion-inline-start:"/home/ned4ded/dev/monsters/src/pages/monster-sprite/sprite.directive.html"*/'<!-- file contains structutred and grouped monsters\' imgs  -->\n<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">\n  <defs>\n    <symbol id="alien--short" data-check="true">\n      <g class="body">\n        <g class="head">\n          <path class="head" fill="#6fc055" d="M82.67,153.65a39.12,39.12,0,0,1-33.88-19.56L5.25,58.69A39.13,39.13,0,0,1,39.13,0H126.2a39.13,39.13,0,0,1,33.88,58.69l-43.53,75.4A39.13,39.13,0,0,1,82.67,153.65Z" />\n          <g class="content">\n            <path class="mouth" fill="#f24943" d="M82.66,131.54a2.83,2.83,0,0,1-2.45-1.41l-3.15-5.45a2.83,2.83,0,0,1,2.45-4.24h6.29a2.83,2.83,0,0,1,2.45,4.24l-3.15,5.45A2.83,2.83,0,0,1,82.66,131.54Z" />\n            <g class="eyes">\n              <g class="eye eye-left">\n                <path class="eyeball" d="M25.19,26.89A52.14,52.14,0,0,0,77.36,79.06,52.14,52.14,0,0,0,25.19,26.89Z" />\n                <circle class="iris" fill="#586ab1" cx="51.86" cy="53.61" r="15.32" />\n                <circle class="pupil" cx="51.86" cy="53.61" r="7.21" />\n              </g>\n              <g class="eye eye-right">\n                <path class="eyeball" d="M140.14,26.89A52.14,52.14,0,0,0,88,79.06,52.14,52.14,0,0,0,140.14,26.89Z" />\n                <circle class="iris" fill="#586ab1" cx="113.53" cy="53.61" r="15.32" />\n                <circle class="pupil" cx="113.53" cy="53.61" r="4.75" />\n              </g>\n            </g>\n            <g class="nose">\n              <circle class="nostril nostril-left" cx="76.75" cy="99.18" r="2.49" />\n              <circle class="nostril nostril-right" cx="88.6" cy="99.18" r="2.49" />\n            </g>\n          </g>\n        </g>\n        <ellipse class="body" fill="#6fc055" cx="82.66" cy="285.78" rx="50.36" ry="139.24" />\n      </g>\n    </symbol>\n  </defs>\n</svg>\n'/*ion-inline-end:"/home/ned4ded/dev/monsters/src/pages/monster-sprite/sprite.directive.html"*/
        })
    ], MonsterSprite);
    return MonsterSprite;
}());

//# sourceMappingURL=sprite.directive.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__figure_model__ = __webpack_require__(204);

var make = function (node) {
    return new __WEBPACK_IMPORTED_MODULE_0__figure_model__["a" /* FigureModel */](node, []);
};
/* harmony default export */ __webpack_exports__["a"] = (make);
//# sourceMappingURL=figure-builder.js.map

/***/ })

},[209]);
//# sourceMappingURL=main.js.map