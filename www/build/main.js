webpackJsonp([0],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaticDataSource; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_from__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__monster_model__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__game_item_model__ = __webpack_require__(285);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// Entities


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
    }
    StaticDataSource.prototype.getMonsters = function () {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].from([this.monsters]);
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

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonsterRepository; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_datasource__ = __webpack_require__(103);
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
        src.getMonsters().subscribe(function (data) {
            _this.monsters = data;
        });
    }
    MonsterRepository.prototype.getMonsters = function () {
        return this.monsters;
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

/***/ 116:
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
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 158:
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
webpackEmptyAsyncContext.id = 158;

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameItemRepository; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_datasource__ = __webpack_require__(103);
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
        console.log(this.items);
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

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__select_char_select_char__ = __webpack_require__(204);
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

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectCharPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_model_monster_repository__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__game_game__ = __webpack_require__(205);
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
    SelectCharPage.prototype.beginGame = function (monster) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__game_game__["a" /* GamePage */], { monster: monster });
    };
    SelectCharPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'select-char-page',template:/*ion-inline-start:"/home/ned4ded/dev/monsters/src/pages/select-char/select-char.html"*/'<ion-header>\n    <ion-navbar></ion-navbar>\n</ion-header>\n<ion-content class="container">\n  <ul class="list">\n    <li class="item Monsters__{{monster.name}}-bgc" *ngFor="let monster of getMonsters()" (click)="beginGame(monster)">\n      <img src="assets/imgs/Monsters/{{monster.name}}.svg" alt="placholder" class="Monsters Monsters__{{monster.name}}">\n    </li>\n  </ul>\n</ion-content>\n'/*ion-inline-end:"/home/ned4ded/dev/monsters/src/pages/select-char/select-char.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__app_model_monster_repository__["a" /* MonsterRepository */]])
    ], SelectCharPage);
    return SelectCharPage;
}());

//# sourceMappingURL=select-char.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_model_monster_repository__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_model_game_item_repository__ = __webpack_require__(202);
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
    GamePage.prototype.endGame = function () {
        this.navCtrl.pop();
    };
    GamePage.prototype.getItems = function () {
        return this.items;
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
    GamePage.prototype.getMonsterViewBox = function () {
        var viewBox = this.monsterRepo.getViewBox(this.monster.id);
        return viewBox.slice().join(' ');
    };
    GamePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'game-page',template:/*ion-inline-start:"/home/ned4ded/dev/monsters/src/pages/game/game.html"*/'<ion-content>\n  <div class="container">\n    <div class="screen">\n        <svg attr.viewBox="{{getMonsterViewBox()}}" width="80%" height="80%">\n          <use attr.xlink:href="assets/monsters-sprite.svg#{{monster.name}}--short"></use>\n        </svg>\n      <button ion-button icon-only outline color="white" class="btn-close" (click)="endGame()">\n            <ion-icon name="close" class="icon-close"></ion-icon>\n      </button>\n    </div>\n    <div class="panel-container">\n      <ul class="panel">\n        <li *ngFor="let item of getItems()" class="panel__item">\n          <div class="draggable-element">\n            <img\n            src="assets/imgs/GameItems/{{item.name}}.svg"\n            alt="image of {{item.name}}"\n            class="GameItem\n                  {{item.vertical? \'GameItem--vertical\' : \'\'}}\n                  GameItem__{{item.name}}">\n\n            <img\n            *ngIf="item.doubled"\n            src="assets/imgs/GameItems/{{item.name}}.svg"\n            alt="image of {{item.name}}"\n            class="GameItem\n                  {{item.vertical? \'GameItem--vertical\' : \'\'}}\n                  GameItem__{{item.name}}">\n\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/ned4ded/dev/monsters/src/pages/game/game.html"*/
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

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_model_module__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_monster_sprite_sprite_directive__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_select_char_select_char__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_game_game__ = __webpack_require__(205);
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

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModelModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_datasource__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__monster_repository__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__game_item_repository__ = __webpack_require__(202);
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

/***/ 284:
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

/***/ 285:
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

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(203);
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

/***/ 287:
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

/***/ })

},[206]);
//# sourceMappingURL=main.js.map