webpackJsonp([0],{

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return makeCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return group; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return build; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__meta_model__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_model__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_builder__ = __webpack_require__(291);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};



var make = function (node) {
    if (!(node instanceof __WEBPACK_IMPORTED_MODULE_0__meta_model__["a" /* MetaModel */]))
        return make(new __WEBPACK_IMPORTED_MODULE_0__meta_model__["a" /* MetaModel */](node));
    return new __WEBPACK_IMPORTED_MODULE_1__node_model__["a" /* NodeModel */](node, []);
};
var makeTag = function (tagType) { return function (meta, attrs) {
    var isObj = typeof (meta) === 'string' ? false : true;
    var name = isObj ? meta.name : meta;
    var customAttr = isObj ? __assign({}, meta.customAttr) : {};
    var mod = isObj ? meta.mod : null;
    return make({ name: name, tagType: tagType, customAttr: __assign({}, attrs, customAttr), mod: mod });
}; };
var makeCollection = {
    node: function (n) { return make(n); },
    circle: function (meta, cx, cy, r) { return makeTag('circle')(meta, { cx: cx, cy: cy, r: r }); },
    ellipse: function (meta, cx, cy, rx, ry) { return makeTag('ellipse')(meta, { cx: cx, cy: cy, rx: rx, ry: ry }); },
    path: function (meta, d, pathLength) { return makeTag('path')(meta, { d: d, pathLength: pathLength || null }); },
    polygon: function (meta, points) { return makeTag('polygon')(meta, { points: points }); },
    rect: function (meta, x, y, width, height, rx, ry) { return makeTag('rect')(meta, { x: x, y: y, width: width, height: height, rx: rx || null, ry: ry || null }); },
};
var group = function (meta) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    var newObj = typeof (meta) === 'string' ? { name: meta } : meta;
    return (_a = make(__assign({}, newObj, { tagType: 'g' }))).addParts.apply(_a, rest);
    var _a;
};
var build = function (node) {
    if (node instanceof __WEBPACK_IMPORTED_MODULE_0__meta_model__["a" /* MetaModel */])
        return build(make(node));
    var attr = node.getAttributes();
    var type = node.getType();
    return new __WEBPACK_IMPORTED_MODULE_2__node_builder__["a" /* NodeBuilder */](node).build();
};

//# sourceMappingURL=svg-constructor.library.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaticDataSource; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_from__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__game_item_model__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__svg_builder_monster_constructor__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__svg_builder_svg_sprite_monsters_datasource__ = __webpack_require__(293);
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
        // private monsters: Monster[] = [
        //   new Monster(1, 'mummy', 176.358, 200.968, [0, 0, 0, 0], [63, 39, 33]),
        //   new Monster(2, 'vampire', 92.279, 220.673, [0, 0, 0, 0], [59, 69, 126] ),
        //   new Monster(3, 'spider', 129.091, 104.901, [0, 0, 0, 0], [241, 234, 53]),
        //   new Monster(4, 'ghost', 103.461, 200.7, [0, 0, 0, 0], [0, 0, 0]),
        //   new Monster(5, 'skeleton', 173.034, 222.792, [0, 0, 0, 0], [0, 0, 0]),
        //   new Monster(6, 'alien', 56.551, 218.464, [0, 0, 165.37, 302.36], [0, 0, 0]),
        // ];
        this.gameItems = [
            new __WEBPACK_IMPORTED_MODULE_3__game_item_model__["a" /* GameItem */](1, 'dress', 148.652, 111.365),
            new __WEBPACK_IMPORTED_MODULE_3__game_item_model__["a" /* GameItem */](2, 'earring', 53.809, 124.738, true),
            new __WEBPACK_IMPORTED_MODULE_3__game_item_model__["a" /* GameItem */](3, 'egg', 133.147, 134.332),
            new __WEBPACK_IMPORTED_MODULE_3__game_item_model__["a" /* GameItem */](4, 'eyes', 178.063, 42.556),
            new __WEBPACK_IMPORTED_MODULE_3__game_item_model__["a" /* GameItem */](5, 'lips', 98.471, 69.73),
            new __WEBPACK_IMPORTED_MODULE_3__game_item_model__["a" /* GameItem */](6, 'love-glasses', 296.347, 103.926),
        ];
        this.monsters = [
            Object(__WEBPACK_IMPORTED_MODULE_4__svg_builder_monster_constructor__["a" /* default */])({
                name: 'alien',
                viewBox: [0, 0, 165.37, 302.36],
                initialScreenWidth: 150,
                figure: __WEBPACK_IMPORTED_MODULE_5__svg_builder_svg_sprite_monsters_datasource__["a" /* alienTorso */]
            }),
            Object(__WEBPACK_IMPORTED_MODULE_4__svg_builder_monster_constructor__["a" /* default */])({
                name: 'skeleton',
                viewBox: [0, 0, 200.62, 322.01],
                initialScreenWidth: 150,
                figure: __WEBPACK_IMPORTED_MODULE_5__svg_builder_svg_sprite_monsters_datasource__["b" /* skeletonTorso */]
            }),
        ];
    }
    StaticDataSource.prototype.getMonsters = function () {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].from([this.monsters]);
    };
    StaticDataSource.prototype.getItems = function () {
        console.log('game items static datasourc');
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

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MetaModel; });
var MetaModel = (function () {
    function MetaModel(meta) {
        this.name = meta.name;
        this.mod = meta.mod || null;
        this.tagType = meta.tagType;
        this.class = meta.class || null;
        this.customAttr = meta.customAttr || null;
    }
    MetaModel.prototype.getAttributes = function () {
        var modified = this.mod ? this.name + "--" + this.mod : null;
        var obj = {
            class: [this.name, modified, this.class].filter(function (n) { return n; }).join(' '),
        };
        var newObj = Object.assign(obj, this.customAttr);
        return newObj;
    };
    MetaModel.prototype.getName = function () {
        return this.name;
    };
    MetaModel.prototype.getType = function () {
        return this.tagType;
    };
    return MetaModel;
}());

//# sourceMappingURL=meta.model.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonsterRepository; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_datasource__ = __webpack_require__(104);
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

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameItemRepository; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_datasource__ = __webpack_require__(104);
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
        console.log('get items repo');
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElementsRepository; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var find = function (element) {
};
var ElementsRepository = (function () {
    function ElementsRepository() {
        this.collection = [];
    }
    ElementsRepository.prototype.addElement = function (element, core) {
        if (core === void 0) { core = false; }
        var wrapped = { id: this.collection.length + 1, el: element, core: core };
        var collection = this.collection.slice().concat([wrapped]);
        this.collection = collection;
        return wrapped.id;
    };
    ElementsRepository.prototype.addElements = function (elements, core) {
        var _this = this;
        elements.forEach(function (el) {
            _this.addElement(el, core);
            return;
        });
        return this.collection;
    };
    ElementsRepository.prototype.deleteElement = function (id) {
        var collection = this.collection.slice();
        var newCol = collection.filter(function (el) { return !(el.id === id); });
        this.collection = newCol;
        return (collection.length === newCol.length) ? false : true;
    };
    ElementsRepository.prototype.getElements = function (fn) {
        return fn(this.collection.slice());
    };
    ElementsRepository.prototype.clear = function () {
        this.collection = [];
    };
    ElementsRepository = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ElementsRepository);
    return ElementsRepository;
}());

//# sourceMappingURL=elements.repository.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__select_char_select_char__ = __webpack_require__(208);
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
            selector: 'page-home',template:/*ion-inline-start:"/home/ned4ded/dev/monsters/src/pages/home/home.html"*/'<ion-content class="container" padding fixed no-bounce>\n  <div class="image">\n    <img class="btn-play" (click)="selectGame()" src="assets/imgs/home-page/home-page_play.svg" alt="hit the btn to play!" />\n  </div>\n  <img src="assets/imgs/home-page/home-page_logo.svg" alt="logotype" class="logo">\n</ion-content>\n'/*ion-inline-end:"/home/ned4ded/dev/monsters/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectCharPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_model_monster_repository__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__game_game__ = __webpack_require__(209);
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
            selector: 'select-char-page',template:/*ion-inline-start:"/home/ned4ded/dev/monsters/src/pages/select-char/select-char.html"*/'<ion-header>\n    <ion-navbar></ion-navbar>\n</ion-header>\n<ion-content class="container">\n  <ul class="list">\n    <li class="item Monsters__{{monster.getName()}}-bgc" *ngFor="let monster of getMonsters()" (click)="beginGame(monster)">\n      <img src="assets/imgs/Monsters/{{monster.getName()}}.svg" alt="placholder" class="Monsters Monsters__{{monster.getName()}}">\n    </li>\n  </ul>\n</ion-content>\n'/*ion-inline-end:"/home/ned4ded/dev/monsters/src/pages/select-char/select-char.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__app_model_monster_repository__["a" /* MonsterRepository */]])
    ], SelectCharPage);
    return SelectCharPage;
}());

//# sourceMappingURL=select-char.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_model_monster_repository__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_model_game_item_model__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_model_game_item_repository__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_model_elements_repository__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__game_browser__ = __webpack_require__(313);
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
    function GamePage(navCtrl, params, gameItemRepo, monsterRepo, elemRepo) {
        this.navCtrl = navCtrl;
        this.params = params;
        this.gameItemRepo = gameItemRepo;
        this.monsterRepo = monsterRepo;
        this.elemRepo = elemRepo;
        this.canLeave = false;
        this.monster = params.get('monster');
        this.items = gameItemRepo.getItems()
            .reduce(function (acc, e) {
            var newEl = e.doubled ? [e, e] : [e];
            return acc.concat(newEl);
        }, []);
        elemRepo.addElements(this.items, true);
    }
    GamePage.prototype.ionViewCanLeave = function () {
        return this.canLeave;
    };
    ;
    GamePage.prototype.ngOnInit = function () {
        this.buildMonster();
    };
    GamePage.prototype.ngAfterViewInit = function () {
        this.startGame();
    };
    GamePage.prototype.endGame = function () {
        this.canLeave = true;
        Object(__WEBPACK_IMPORTED_MODULE_6__game_browser__["b" /* endGame */])();
        this.elemRepo.clear();
        this.navCtrl.pop();
    };
    GamePage.prototype.getItems = function () {
        var items = this.elemRepo.getElements(function (col) { return col.filter(function (e) { return e.el instanceof __WEBPACK_IMPORTED_MODULE_3__app_model_game_item_model__["a" /* GameItem */] && e.core === true; }); });
        return items;
    };
    GamePage.prototype.getElements = function () {
        var items = this.elemRepo.getElements(function (col) { return col.filter(function (e) { return e.el instanceof __WEBPACK_IMPORTED_MODULE_3__app_model_game_item_model__["a" /* GameItem */]; }); });
        return items;
    };
    GamePage.prototype.buildMonster = function () {
        this.monster.build();
    };
    GamePage.prototype.startGame = function () {
        Object(__WEBPACK_IMPORTED_MODULE_6__game_browser__["a" /* beginGame */])(this.elemRepo);
    };
    GamePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'game-page',template:/*ion-inline-start:"/home/ned4ded/dev/monsters/src/pages/game/game.html"*/'<ion-content fixed no-bounce>\n  <div id="container" class="container">\n    <div id="nb-target" class="screen {{monster.getName()}}__screen">\n      <div id="on-screen">\n\n      </div>\n      <button ion-button icon-only outline color="white" class="btn-close" (click)="endGame()">\n        <ion-icon name="close" class="icon-close"></ion-icon>\n      </button>\n    </div>\n    <div id="panel" class="panel-container">\n      <ul class="panel">\n        <li *ngFor="let item of getItems()" class="panel__item{{item.el.doubled ? \' panel__doubled\' : \'\'}}">\n            <img\n            id="{{item.id}}"\n            src="assets/imgs/GameItems/{{item.el.name}}.svg"\n            alt="image of {{item.el.name}}"\n            data-blocked="false"\n            class="GameItem\n                  {{item.el.vertical? \'GameItem--vertical\' : \'\'}}\n                  GameItem__{{item.el.name}}">\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div id="active-ct"></div>\n</ion-content>\n'/*ion-inline-end:"/home/ned4ded/dev/monsters/src/pages/game/game.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__app_model_game_item_repository__["a" /* GameItemRepository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__app_model_game_item_repository__["a" /* GameItemRepository */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__app_model_monster_repository__["a" /* MonsterRepository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_model_monster_repository__["a" /* MonsterRepository */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__app_model_elements_repository__["a" /* ElementsRepository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__app_model_elements_repository__["a" /* ElementsRepository */]) === "function" && _e || Object])
    ], GamePage);
    return GamePage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=game.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(229);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_model_module__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_select_char_select_char__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_game_game__ = __webpack_require__(209);
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
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_select_char_select_char__["a" /* SelectCharPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_game_game__["a" /* GamePage */],
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
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_select_char_select_char__["a" /* SelectCharPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_game_game__["a" /* GamePage */],
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

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModelModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_datasource__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__monster_repository__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__game_item_repository__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__elements_repository__ = __webpack_require__(206);
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
            providers: [__WEBPACK_IMPORTED_MODULE_2__static_datasource__["a" /* StaticDataSource */], __WEBPACK_IMPORTED_MODULE_3__monster_repository__["a" /* MonsterRepository */], __WEBPACK_IMPORTED_MODULE_4__game_item_repository__["a" /* GameItemRepository */], __WEBPACK_IMPORTED_MODULE_5__elements_repository__["a" /* ElementsRepository */]]
        })
    ], ModelModule);
    return ModelModule;
}());

;
//# sourceMappingURL=model.module.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__svg_builder_service__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__root_meta_model__ = __webpack_require__(292);


/* harmony default export */ __webpack_exports__["a"] = (function (_a) {
    var name = _a.name, viewBox = _a.viewBox, initialScreenWidth = _a.initialScreenWidth, figure = _a.figure;
    var node = new __WEBPACK_IMPORTED_MODULE_1__root_meta_model__["a" /* RootMetaModel */]({
        name: name,
        tagType: 'svg',
        customAttr: {
            'xmlns': 'http://www.w3.org/2000/svg',
            'xmlns:xlink': 'http://www.w3.org/1999/xlink',
        },
        class: 'svg-container',
        width: '80%',
        height: '80%',
        viewBox: viewBox,
        initialScreenWidth: initialScreenWidth,
    });
    return new __WEBPACK_IMPORTED_MODULE_0__svg_builder_service__["a" /* SvgBuilder */]({ meta: node, figure: figure });
});;
//# sourceMappingURL=monster-constructor.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SvgBuilder; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__svg_constructor_library__ = __webpack_require__(10);

var SvgBuilder = (function () {
    function SvgBuilder(_a) {
        var meta = _a.meta, figure = _a.figure;
        this.root = meta;
        this.content = figure;
    }
    SvgBuilder.prototype.build = function (targetName) {
        var root = Object(__WEBPACK_IMPORTED_MODULE_0__svg_constructor_library__["a" /* build */])(this.root);
        var content = Object(__WEBPACK_IMPORTED_MODULE_0__svg_constructor_library__["a" /* build */])(this.content);
        var target = document.getElementById(targetName || 'nb-target');
        root.appendChild(content);
        target.appendChild(root);
    };
    SvgBuilder.prototype.getName = function () {
        return this.root.getName();
    };
    return SvgBuilder;
}());

//# sourceMappingURL=svg-builder.service.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NodeModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__meta_model__ = __webpack_require__(105);

var NodeModel = (function () {
    function NodeModel(meta, children) {
        this.meta = meta;
        this.children = children;
    }
    NodeModel.prototype.addPart = function (node) {
        var child = node instanceof __WEBPACK_IMPORTED_MODULE_0__meta_model__["a" /* MetaModel */] ?
            new NodeModel(node, []) :
            node;
        return new NodeModel(this.meta, this.children.concat([child]));
    };
    NodeModel.prototype.addParts = function () {
        var nodes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            nodes[_i] = arguments[_i];
        }
        var children = nodes.map(function (node) {
            if (node instanceof __WEBPACK_IMPORTED_MODULE_0__meta_model__["a" /* MetaModel */])
                return new NodeModel(node, []);
            return node;
        });
        return new NodeModel(this.meta, this.children.concat(children));
    };
    NodeModel.prototype.getParts = function () {
        return this.children;
    };
    NodeModel.prototype.getPart = function (fn) {
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
    NodeModel.prototype.getType = function () {
        return this.meta.getType();
    };
    NodeModel.prototype.getAttributes = function () {
        return this.meta.getAttributes();
    };
    NodeModel.prototype.getMeta = function () {
        return this.meta;
    };
    return NodeModel;
}());

//# sourceMappingURL=node.model.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NodeBuilder; });
var NodeBuilder = (function () {
    function NodeBuilder(node, tagNS) {
        this.tagNamespaces = new Map([
            ['svg', 'http://www.w3.org/2000/svg'],
            ['html', 'http://www.w3.org/1999/xhtml']
        ]);
        this.attr = node.getAttributes();
        this.type = node.getType();
        this.children = node.getParts();
        this.tagNS = this.tagNamespaces.get(tagNS || 'svg');
    }
    NodeBuilder.prototype.build = function () {
        var tag = document.createElementNS(this.tagNS, this.type);
        var attr = this.attr;
        Object.keys(attr)
            .filter(function (key) { return attr[key]; })
            .forEach(function (key) { return tag.setAttribute(key, attr[key]); });
        if (this.children.length === 0) {
            return tag;
        }
        var children = this.children.map(function (ch) {
            return new NodeBuilder(ch).build();
        });
        children.forEach(function (ch) { return tag.appendChild(ch); });
        return tag;
    };
    return NodeBuilder;
}());

//# sourceMappingURL=node-builder.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RootMetaModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__meta_model__ = __webpack_require__(105);
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

var RootMetaModel = (function (_super) {
    __extends(RootMetaModel, _super);
    function RootMetaModel(meta) {
        var _this = _super.call(this, meta) || this;
        _this.width = meta.width.toString();
        _this.height = meta.height.toString();
        _this.viewBox = meta.viewBox.join(' ');
        _this.ratio = meta.viewBox[3] / meta.initialScreenWidth;
        return _this;
    }
    RootMetaModel.prototype.getAttributes = function () {
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
    return RootMetaModel;
}(__WEBPACK_IMPORTED_MODULE_0__meta_model__["a" /* MetaModel */]));

//# sourceMappingURL=root-meta.model.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__alien_torso_alien__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__skeleton_torso_skeleton__ = __webpack_require__(302);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__alien_torso_alien__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__skeleton_torso_skeleton__["a"]; });



//# sourceMappingURL=monsters.datasource.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__svg_constructor_library__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__head__ = __webpack_require__(295);
// Entities

// Model Parts

var body = __WEBPACK_IMPORTED_MODULE_0__svg_constructor_library__["c" /* make */].ellipse({ name: 'body', mod: 'figure' }, 82.66, 285.78, 50.36, 139.24);
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__svg_constructor_library__["b" /* group */])('alien', __WEBPACK_IMPORTED_MODULE_1__head__["a" /* default */], body));
//# sourceMappingURL=alien.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__svg_constructor_library__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__content__ = __webpack_require__(296);


var head = __WEBPACK_IMPORTED_MODULE_0__svg_constructor_library__["c" /* make */].path({ name: 'head', mod: 'figure' }, 'M82.67,153.65a39.12,39.12,0,0,1-33.88-19.56L5.25,58.69A39.13,39.13,0,0,1,39.13,0H126.2a39.13,39.13,0,0,1,33.88,58.69l-43.53,75.4A39.13,39.13,0,0,1,82.67,153.65Z');
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__svg_constructor_library__["b" /* group */])('head', head, __WEBPACK_IMPORTED_MODULE_1__content__["a" /* default */]));
//# sourceMappingURL=head.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__svg_constructor_library__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mouth__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__eyes__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nose__ = __webpack_require__(301);




/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__svg_constructor_library__["b" /* group */])('content', __WEBPACK_IMPORTED_MODULE_1__mouth__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__eyes__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__nose__["a" /* default */]));
//# sourceMappingURL=content.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__svg_constructor_library__ = __webpack_require__(10);

var mouth = __WEBPACK_IMPORTED_MODULE_0__svg_constructor_library__["c" /* make */].path('mouth', 'M82.66,131.54a2.83,2.83,0,0,1-2.45-1.41l-3.15-5.45a2.83,2.83,0,0,1,2.45-4.24h6.29a2.83,2.83,0,0,1,2.45,4.24l-3.15,5.45A2.83,2.83,0,0,1,82.66,131.54Z');
/* harmony default export */ __webpack_exports__["a"] = (mouth);
//# sourceMappingURL=mouth.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__svg_constructor_library__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__eye_left__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__eye_right__ = __webpack_require__(300);



/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__svg_constructor_library__["b" /* group */])('eyes', __WEBPACK_IMPORTED_MODULE_1__eye_left__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__eye_right__["a" /* default */]));
//# sourceMappingURL=eyes.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__svg_constructor_library__ = __webpack_require__(10);

var eyeball = __WEBPACK_IMPORTED_MODULE_0__svg_constructor_library__["c" /* make */].path('eyeball', 'M25.19,26.89A52.14,52.14,0,0,0,77.36,79.06,52.14,52.14,0,0,0,25.19,26.89Z');
var iris = __WEBPACK_IMPORTED_MODULE_0__svg_constructor_library__["c" /* make */].circle('iris', 51.86, 53.61, 15.32);
var pupil = __WEBPACK_IMPORTED_MODULE_0__svg_constructor_library__["c" /* make */].circle('pupil', 51.86, 53.61, 7.21);
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__svg_constructor_library__["b" /* group */])({ name: 'eye', mod: 'left' }, eyeball, iris, pupil));
//# sourceMappingURL=eye-left.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__svg_constructor_library__ = __webpack_require__(10);

var eyeball = __WEBPACK_IMPORTED_MODULE_0__svg_constructor_library__["c" /* make */].path('eyeball', 'M140.14,26.89A52.14,52.14,0,0,0,88,79.06,52.14,52.14,0,0,0,140.14,26.89Z');
var iris = __WEBPACK_IMPORTED_MODULE_0__svg_constructor_library__["c" /* make */].circle('iris', 113.53, 53.61, 15.32);
var pupil = __WEBPACK_IMPORTED_MODULE_0__svg_constructor_library__["c" /* make */].circle('pupil', 113.53, 53.61, 4.75);
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__svg_constructor_library__["b" /* group */])({ name: 'eye', mod: 'right', }, eyeball, iris, pupil));
//# sourceMappingURL=eye-right.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__svg_constructor_library__ = __webpack_require__(10);

var nostrillLeft = __WEBPACK_IMPORTED_MODULE_0__svg_constructor_library__["c" /* make */].circle({ name: 'nostril', mod: 'left' }, 76.75, 99.18, 2.49);
var nostrillRight = __WEBPACK_IMPORTED_MODULE_0__svg_constructor_library__["c" /* make */].circle({ name: 'nostril', mod: 'right' }, 88.6, 99.18, 2.49);
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__svg_constructor_library__["b" /* group */])('nose', nostrillLeft, nostrillRight));
//# sourceMappingURL=nose.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__svg_constructor_library__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__body__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__head__ = __webpack_require__(304);



/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__svg_constructor_library__["b" /* group */])('skeleton', __WEBPACK_IMPORTED_MODULE_2__head__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__body__["a" /* default */]));
//# sourceMappingURL=skeleton.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__svg_constructor_library__ = __webpack_require__(10);

var ribOne = __WEBPACK_IMPORTED_MODULE_0__svg_constructor_library__["c" /* make */].rect('rib', 0, 227.64, 200.62, 21.55);
var ribTwo = __WEBPACK_IMPORTED_MODULE_0__svg_constructor_library__["c" /* make */].rect('rib', 0, 264.11, 200.62, 21.55);
var ribThree = __WEBPACK_IMPORTED_MODULE_0__svg_constructor_library__["c" /* make */].rect('rib', 0, 300.59, 200.62, 21.55);
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__svg_constructor_library__["b" /* group */])('body', ribOne, ribTwo, ribThree));
//# sourceMappingURL=body.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__svg_constructor_library__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__eyes__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nose__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jaws__ = __webpack_require__(309);




var contentFigure = Object(__WEBPACK_IMPORTED_MODULE_0__svg_constructor_library__["b" /* group */])('content', __WEBPACK_IMPORTED_MODULE_3__jaws__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__eyes__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__nose__["a" /* default */]);
var head = __WEBPACK_IMPORTED_MODULE_0__svg_constructor_library__["c" /* make */].ellipse({ name: 'head', mod: 'figure' }, 99.95, 67.37, 89.2, 67.38);
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__svg_constructor_library__["b" /* group */])('head', head, contentFigure));
//# sourceMappingURL=head.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__svg_constructor_library__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__eye_right__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__eye_left__ = __webpack_require__(307);



/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__svg_constructor_library__["b" /* group */])('eyes', __WEBPACK_IMPORTED_MODULE_1__eye_right__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__eye_left__["a" /* default */]));
//# sourceMappingURL=eyes.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__svg_constructor_library__ = __webpack_require__(10);

var eyeball = __WEBPACK_IMPORTED_MODULE_0__svg_constructor_library__["c" /* make */].circle('eyeball', 129.44, 66.37, 25.31);
var pupil = __WEBPACK_IMPORTED_MODULE_0__svg_constructor_library__["c" /* make */].circle('pupil', 136.88, 58.14, 10.09);
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__svg_constructor_library__["b" /* group */])({ name: 'eye', mod: 'right' }, eyeball, pupil));
//# sourceMappingURL=eye-right.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__svg_constructor_library__ = __webpack_require__(10);

var eyeball = __WEBPACK_IMPORTED_MODULE_0__svg_constructor_library__["c" /* make */].circle('eyeball', 70.45, 66.37, 25.31);
var pupil = __WEBPACK_IMPORTED_MODULE_0__svg_constructor_library__["c" /* make */].circle('pupil', 72.84, 76.61, 10.09);
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__svg_constructor_library__["b" /* group */])({ name: 'eye', mod: 'left' }, eyeball, pupil));
//# sourceMappingURL=eye-left.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__svg_constructor_library__ = __webpack_require__(10);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__svg_constructor_library__["c" /* make */].polygon('nose', '99.95 91.72 112.37 113.24 124.8 134.76 99.95 134.76 75.09 134.76 87.52 113.24 99.95 91.72'));
//# sourceMappingURL=nose.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__svg_constructor_library__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jaw_top__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jaw_bottom__ = __webpack_require__(311);



/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__svg_constructor_library__["b" /* group */])('jaws', __WEBPACK_IMPORTED_MODULE_1__jaw_top__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__jaw_bottom__["a" /* default */]));
//# sourceMappingURL=jaws.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__svg_constructor_library__ = __webpack_require__(10);

var toothOne = __WEBPACK_IMPORTED_MODULE_0__svg_constructor_library__["c" /* make */].rect('tooth', 53.24, 143.29, 10.75, 10.75);
var toothTwo = __WEBPACK_IMPORTED_MODULE_0__svg_constructor_library__["c" /* make */].rect('tooth', 69.77, 143.29, 10.75, 10.75);
var toothThree = __WEBPACK_IMPORTED_MODULE_0__svg_constructor_library__["c" /* make */].rect('tooth', 86.3, 143.29, 10.75, 10.75);
var toothFour = __WEBPACK_IMPORTED_MODULE_0__svg_constructor_library__["c" /* make */].rect('tooth', 102.83, 143.29, 10.75, 10.75);
var toothFive = __WEBPACK_IMPORTED_MODULE_0__svg_constructor_library__["c" /* make */].rect('tooth', 119.37, 143.29, 10.75, 10.75);
var toothSix = __WEBPACK_IMPORTED_MODULE_0__svg_constructor_library__["c" /* make */].rect('tooth', 135.9, 143.29, 10.75, 10.75);
var teeth = Object(__WEBPACK_IMPORTED_MODULE_0__svg_constructor_library__["b" /* group */])('teeth', toothOne, toothTwo, toothThree, toothFour, toothFive, toothSix);
var jaw = __WEBPACK_IMPORTED_MODULE_0__svg_constructor_library__["c" /* make */].rect('jaw', 43.33, 95.52, 113.24, 63.9);
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__svg_constructor_library__["b" /* group */])({ name: 'jaw', mod: 'top' }, jaw, teeth));
//# sourceMappingURL=jaw-top.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__svg_constructor_library__ = __webpack_require__(10);

var toothOne = __WEBPACK_IMPORTED_MODULE_0__svg_constructor_library__["c" /* make */].rect('tooth', 53.24, 178.43, 10.75, 10.75);
var toothTwo = __WEBPACK_IMPORTED_MODULE_0__svg_constructor_library__["c" /* make */].rect('tooth', 69.77, 178.43, 10.75, 10.75);
var toothThree = __WEBPACK_IMPORTED_MODULE_0__svg_constructor_library__["c" /* make */].rect('tooth', 86.3, 178.43, 10.75, 10.75);
var toothFour = __WEBPACK_IMPORTED_MODULE_0__svg_constructor_library__["c" /* make */].rect('tooth', 102.83, 178.43, 10.75, 10.75);
var toothFive = __WEBPACK_IMPORTED_MODULE_0__svg_constructor_library__["c" /* make */].rect('tooth', 119.37, 178.43, 10.75, 10.75);
var toothSix = __WEBPACK_IMPORTED_MODULE_0__svg_constructor_library__["c" /* make */].rect('tooth', 135.9, 178.43, 10.75, 10.75);
var teeth = Object(__WEBPACK_IMPORTED_MODULE_0__svg_constructor_library__["b" /* group */])('teeth', toothOne, toothTwo, toothThree, toothFour, toothFive, toothSix);
var jaw = __WEBPACK_IMPORTED_MODULE_0__svg_constructor_library__["c" /* make */].rect('jaw', 43.33, 169.54, 113.24, 28.52);
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__svg_constructor_library__["b" /* group */])({ name: 'jaw', mod: 'bottom' }, jaw, teeth));
//# sourceMappingURL=jaw-bottom.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(207);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/ned4ded/dev/monsters/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/ned4ded/dev/monsters/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return endGame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return beginGame; });
var repo, x, y, active;
;
var listenersArr = [];
var onPanel = true;
var target = function () { return document.getElementById('container'); };
var cn = function () { return document.getElementById('active-ct'); };
var touchMove = function (event) {
    var screenHeight = document.getElementById('nb-target').scrollHeight;
    x = event.touches[0].pageX;
    y = event.touches[0].pageY;
    if (y < screenHeight) {
        onPanel = false;
    }
    else {
        onPanel = true;
    }
    ;
    if (active != null) {
        var width = active.html.scrollWidth / 2;
        var height = active.html.scrollHeight / 2;
        cn().setAttribute('style', "position: absolute; top: " + (y - height) + "px; left: " + (x - width) + "px");
    }
};
var disableTouchMouse = function (event) {
    event.preventDefault();
};
var screen = function () { return document.getElementById('on-screen'); };
var updateRepo = function () {
    return repo.getElements(function (col) { return col; });
};
var getCoreElements = function () {
    return repo.getElements(function (col) { return col.filter(function (e) { return e.core; }); });
};
var end = function () {
    if (!active)
        return;
    var forRemove = document.getElementById('remove');
    if (forRemove)
        forRemove.remove();
    var html = active.html, virt = active.virt;
    var coreHtmlId = getCoreElements().find(function (e) { return e.el.name === virt.el.name; }).id;
    var coreHtml = document.getElementById(coreHtmlId);
    var width = html.scrollWidth / 2;
    var height = html.scrollHeight / 2;
    onPanel;
    cn().removeChild(html);
    active = null;
    if (!onPanel) {
        coreHtml.setAttribute('data-blocked', 'true');
        html.setAttribute('style', "position: absolute; top: " + (y - height) + "px; left: " + (x - width) + "px");
        var newId = repo.addElement(virt.el);
        html.id = newId;
        screen().appendChild(html);
    }
    else {
        coreHtml.setAttribute('data-blocked', 'false');
    }
    ;
    document.removeEventListener('touchmove', disableTouchMouse);
    listen();
};
var start = function (html, virt) {
    document.addEventListener('touchmove', disableTouchMouse);
    var parent = html.parentElement;
    var onScreen = (parent.id === 'on-screen') ? true : false;
    var coreHtmlId = getCoreElements().find(function (e) { return e.el.name === virt.el.name; }).id;
    var coreHtml = document.getElementById(coreHtmlId);
    if ((coreHtml.getAttribute('data-blocked') === 'true') && !onScreen) {
        return;
    }
    var clone = html.cloneNode();
    if (onScreen) {
        html.id = 'remove';
        html.setAttribute('style', 'display: none');
        clone.removeAttribute('style');
        repo.deleteElement(virt.id);
        listenersArr = listenersArr.filter(function (el) { return el !== virt.id; });
    }
    clone.id = 'activated';
    // x = event.touches[0].pageX;
    // y = event.touches[0].pageY;
    var width = html.scrollWidth / 2;
    var height = html.scrollHeight / 2;
    cn().setAttribute('style', "position: absolute; top: " + (y - height) + "px; left: " + (x - width) + "px");
    active = { html: clone, virt: virt };
    cn().appendChild(clone);
};
var listen = function (cancel) {
    if (!repo)
        return;
    var elements = updateRepo();
    elements.forEach(function (virtElem) {
        var id = virtElem.id;
        var htmlElem = document.getElementById(id);
        var listnerOnStart = function () { return start(htmlElem, virtElem); };
        if (cancel) {
            htmlElem.removeEventListener('touchstart', listnerOnStart);
            return;
        }
        if (!listenersArr.find(function (el) { return el === id; })) {
            htmlElem.addEventListener('touchstart', listnerOnStart);
            listenersArr = listenersArr.concat([id]);
        }
    });
};
var beginGame = function (repository) {
    console.log('begin game');
    repo = repository;
    console.log(repo);
    document.addEventListener('touchmove', touchMove);
    document.addEventListener('touchend', end);
    listen();
};
var endGame = function () {
    listen(true);
    repo = null;
    listenersArr = [];
    document.removeEventListener('touchmove', touchMove);
    document.removeEventListener('touchend', end);
};

//# sourceMappingURL=game.browser.js.map

/***/ })

},[210]);
//# sourceMappingURL=main.js.map