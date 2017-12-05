webpackJsonp([0],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(41);
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





var LoginPage = (function () {
    function LoginPage(afAuth, navCtrl, alertCtrl) {
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.user = {};
    }
    LoginPage.prototype.register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.signIn = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
                    .then(function (res) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                }, function (err) {
                    var alert = _this.alertCtrl.create({
                        title: 'Login Failed!',
                        subTitle: 'Email address or password is incorrect.',
                        buttons: ['Retry']
                    });
                    alert.present();
                });
                return [2 /*return*/];
            });
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/robrobirobin/Documents/Project-Design/src/pages/login/login.html"*/'<ion-content padding>\n\n	<div text-center>\n\n		<ion-icon name="heart" class="loginlogo"></ion-icon>\n\n	</div>\n\n	<ion-list>\n\n		<ion-item>\n\n			<ion-label floating>Email</ion-label>\n\n			<ion-input type="text" [(ngModel)]="user.email"></ion-input>\n\n		</ion-item>\n\n		<ion-item>\n\n			<ion-label floating>Password</ion-label>\n\n			<ion-input type="password" [(ngModel)]="user.password"></ion-input>\n\n		</ion-item>\n\n	</ion-list>\n\n	<div text-center>\n\n  		<button color=secondary (click)="signIn(user);" ion-button block>Sign In</button>\n\n	</div>\n\n	<div text-center>\n\n		<ion-icon name="ios-arrow-dropdown-circle" class="or"></ion-icon>\n\n	</div>\n\n	<div text-center>\n\n		<ion-label>Sign In with:</ion-label>\n\n		<button ion-button><ion-icon name="logo-facebook"></ion-icon></button>\n\n		<button ion-button><ion-icon name="logo-twitter"></ion-icon></button>\n\n		<button ion-button><ion-icon name="logo-googleplus"></ion-icon></button>\n\n	</div>\n\n	<br/><br/><br/><br/><p (click)="register();"><u>Don\'t have an account?</u></p>\n\n</ion-content>\n\n'/*ion-inline-end:"/home/robrobirobin/Documents/Project-Design/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

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

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(41);
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



var RegisterPage = (function () {
    function RegisterPage(afAuth, navCtrl, alertCtrl) {
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.user = {};
    }
    RegisterPage.prototype.signUp = function (user, cpass) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var alert_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(user.password == cpass)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
                                .then(function (res) {
                                var alert = _this.alertCtrl.create({
                                    subTitle: 'You are now successfully registered!',
                                    buttons: ['OK']
                                });
                                alert.present();
                                _this.navCtrl.pop();
                            }, function (err) {
                                var alert = _this.alertCtrl.create({
                                    title: 'Register Failed!',
                                    subTitle: 'Please try again.',
                                    buttons: ['Retry']
                                });
                                alert.present();
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        alert_1 = this.alertCtrl.create({
                            title: 'Register Failed!',
                            subTitle: 'Password does not match.',
                            buttons: ['Retry']
                        });
                        alert_1.present();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage.prototype.toSignIn = function () {
        this.navCtrl.pop();
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/home/robrobirobin/Documents/Project-Design/src/pages/register/register.html"*/'<ion-content padding>\n\n	<div text-right>\n\n		<ion-icon name="heart" class="reglogo"></ion-icon>\n\n	</div>\n\n	<ion-list>\n\n		<ion-item>\n\n			<ion-label floating>Email</ion-label>\n\n			<ion-input type="text" [(ngModel)]="user.email"></ion-input>\n\n		</ion-item>\n\n		<ion-item>\n\n			<ion-label floating>Password</ion-label>\n\n			<ion-input type="password" [(ngModel)]="user.password"></ion-input>\n\n		</ion-item>\n\n		<ion-item>\n\n			<ion-label floating>Re-type Password</ion-label>\n\n			<ion-input type="password" [(ngModel)]="cpass"></ion-input>\n\n		</ion-item>\n\n	</ion-list>\n\n	<div text-center>\n\n  		<button color=dark ion-button round (click)="signUp(user, cpass);">Sign me up!</button>\n\n	</div>\n\n	<br/><br/><br/><br/><p (click)="toSignIn();">Already have an account? <u>Sign In</u></p>\n\n</ion-content>'/*ion-inline-end:"/home/robrobirobin/Documents/Project-Design/src/pages/register/register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__myTrips_mytrip__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__settings_settings__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__routes_routes__ = __webpack_require__(216);
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
    function HomePage(geolocation, afAuth, navCtrl, zone) {
        this.geolocation = geolocation;
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.zone = zone;
        this.lat = [];
        this.lon = [];
        this.mode = [];
        this.pages = [
            { title: 'My Trips', component: __WEBPACK_IMPORTED_MODULE_4__myTrips_mytrip__["a" /* MytripPage */] },
            { title: 'Settings', component: __WEBPACK_IMPORTED_MODULE_5__settings_settings__["a" /* SettingsPage */] },
            { title: 'Sign Out', component: __WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */] },
            { title: 'Routes', component: __WEBPACK_IMPORTED_MODULE_7__routes_routes__["a" /* RoutesPage */] }
        ];
        this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
        this.autocompleteItems1 = [];
        this.autocompleteItems2 = [];
        this.address = {
            origin: '',
            destination: ''
        };
        this.markers = [];
        this.originDir = '';
        this.destDir = '';
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.loadMap();
    };
    HomePage.prototype.loadMap = function () {
        var _this = this;
        var locationOptions = { timeout: 10000, enableHighAccuracy: false };
        this.geolocation.getCurrentPosition(locationOptions).then(function (position) {
            var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            var mapOptions = {
                center: latLng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
            var marker = new google.maps.Marker({
                map: _this.map,
                position: latLng
            });
            _this.markers.push(marker);
        }, function (err) {
            console.log(err);
        });
    };
    HomePage.prototype.showAddress1 = function () {
        var _this = this;
        if (this.address.origin == '') {
            this.autocompleteItems1 = [];
            return;
        }
        this.GoogleAutocomplete.getPlacePredictions({ input: this.address.origin, componentRestrictions: { country: 'PH' } }, function (predictions, status) {
            _this.autocompleteItems1 = [];
            _this.zone.run(function () {
                predictions.forEach(function (prediction) {
                    _this.autocompleteItems1.push(prediction.description);
                });
            });
        });
    };
    HomePage.prototype.showAddress2 = function () {
        var _this = this;
        if (this.address.destination == '') {
            this.autocompleteItems2 = [];
            return;
        }
        this.GoogleAutocomplete.getPlacePredictions({ input: this.address.destination, componentRestrictions: { country: 'PH' } }, function (predictions, status) {
            _this.autocompleteItems2 = [];
            _this.zone.run(function () {
                predictions.forEach(function (prediction) {
                    _this.autocompleteItems2.push(prediction.description);
                });
            });
        });
    };
    HomePage.prototype.selectOrigin = function (item) {
        this.address.origin = item;
        this.autocompleteItems1 = [];
    };
    HomePage.prototype.selectDest = function (item) {
        this.address.destination = item;
        this.autocompleteItems2 = [];
    };
    HomePage.prototype.findRoute = function (address) {
        if ((address.destination) && (address.origin))
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__routes_routes__["a" /* RoutesPage */], { address: address });
    };
    HomePage.prototype.openPage = function (page) {
        var _this = this;
        if (page.component == __WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]) {
            this.afAuth.auth.signOut().then(function () {
                _this.navCtrl.setRoot(page.component);
            });
        }
        else {
            this.navCtrl.push(page.component);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], HomePage.prototype, "mapElement", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/robrobirobin/Documents/Project-Design/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Mateo We Miss You</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-menu [content]="content">\n  <ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle icon-only>\n        <ion-icon name=\'menu\'></ion-icon>\n      </button>\n      <ion-title>Menus</ion-title>\n    </ion-navbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{ p.title }}\n      </button>\n  </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-content>\n    <div>\n      <ion-list>\n        <ion-item>\n          <ion-searchbar placeholder="Origin" type="text" (ionInput)="showAddress1()" [(ngModel)]="address.origin"></ion-searchbar>\n          <ion-list [hidden]="autocompleteItems1.length == 0">\n            <ion-item *ngFor="let item1 of autocompleteItems1" tappable (click)="selectOrigin(item1)">\n              {{ item1 }}\n            </ion-item>\n          </ion-list>\n        </ion-item>\n        <ion-item>\n          <ion-searchbar placeholder="Destination" type="text" (ionInput)="showAddress2()" [(ngModel)]="address.destination"></ion-searchbar>\n          <ion-list [hidden]="autocompleteItems2.length == 0">\n            <ion-item *ngFor="let item2 of autocompleteItems2" tappable (click)="selectDest(item2)">\n              {{ item2 }}\n            </ion-item>\n          </ion-list>\n        </ion-item>\n      </ion-list>\n      <div text-center>\n        <button color=secondary ion-button block (click)="findRoute(address)">GO</button>\n      </div>\n    </div>\n    <div #map id="map"></div>\n</ion-content>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/robrobirobin/Documents/Project-Design/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MytripPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MytripPage = (function () {
    function MytripPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    MytripPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mytrip',template:/*ion-inline-start:"/home/robrobirobin/Documents/Project-Design/src/pages/myTrips/mytrip.html"*/'<ion-header>\n\n    <ion-navbar>\n\n    </ion-navbar>\n\n</ion-header>'/*ion-inline-end:"/home/robrobirobin/Documents/Project-Design/src/pages/myTrips/mytrip.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], MytripPage);
    return MytripPage;
}());

//# sourceMappingURL=mytrip.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsPage = (function () {
    function SettingsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/home/robrobirobin/Documents/Project-Design/src/pages/settings/settings.html"*/'<ion-header>\n\n    <ion-navbar>\n\n    </ion-navbar>\n\n</ion-header>'/*ion-inline-end:"/home/robrobirobin/Documents/Project-Design/src/pages/settings/settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_remote_service_remote_service__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__details_details__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__details_details___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__details_details__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RoutesPage = (function () {
    function RoutesPage(geolocation, navCtrl, zone, rsp, navParams) {
        this.geolocation = geolocation;
        this.navCtrl = navCtrl;
        this.zone = zone;
        this.rsp = rsp;
        this.navParams = navParams;
        this.lat = [];
        this.lon = [];
        this.mode = [];
        this.trip = [{
                id: '',
                transfer: '',
                fare: '',
                totalWalkDistance: '',
                legs: '',
                roundtrip: ''
            }];
        this.legWalk = [{
                tripID: '',
                seq: '',
                distance: '',
                flatLng: {
                    lat: '',
                    lon: ''
                },
                tlatLng: {
                    lat: '',
                    lon: ''
                }
            }];
        this.legTransit = [{
                tripID: '',
                seq: '',
                distance: '',
                legGeom: '',
                flatLng: {
                    lat: '',
                    lon: ''
                },
                tlatLng: {
                    lat: '',
                    lon: ''
                },
                transMode: '',
                route: ''
            }];
        this.routeType = [
            { name: "..." },
            { name: "Less Transfer" },
            { name: "Less Fair" },
            { name: "Less Walking" },
            { name: "Round-Trip" }
        ];
        this.address = this.navParams.get('address');
        this.geocoder = new google.maps.Geocoder;
        this.directionsService = new google.maps.DirectionsService;
        this.directionsDisplay = [];
        this.markers = [];
        this.trip.length = 0;
    }
    RoutesPage.prototype.ionViewDidLoad = function () {
        this.loadMap();
        this.setOrgDes();
    };
    RoutesPage.prototype.loadMap = function () {
        var mapOptions = {
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    };
    RoutesPage.prototype.clearMarkers = function () {
        for (var i = 0; i < this.markers.length; i++)
            this.markers[i].setMap(null);
        this.markers = [];
    };
    /*
      Geocode address string into latitude and longitude for markers.
      Put markers in origin destination then set map focus between the paths.
    */
    RoutesPage.prototype.setOrgDes = function () {
        var _this = this;
        this.clearMarkers();
        this.geocoder.geocode({ 'address': this.address.origin }, function (results, status) {
            if (status == 'OK' && results[0]) {
                var marker = new google.maps.Marker({
                    position: results[0].geometry.location,
                    map: _this.map,
                });
                _this.markers.push(marker);
            }
        });
        this.geocoder.geocode({ 'address': this.address.destination }, function (results, status) {
            if (status == 'OK' && results[0]) {
                var marker = new google.maps.Marker({
                    position: results[0].geometry.location,
                    map: _this.map,
                });
                _this.markers.push(marker);
                _this.setMapFocus(_this.markers);
            }
        });
    };
    RoutesPage.prototype.setMapFocus = function (markers) {
        var _this = this;
        var bounds = new google.maps.LatLngBounds();
        for (var i = 0; i < markers.length; i++) {
            bounds.extend(markers[i].getPosition());
        }
        this.map.fitBounds(bounds);
        this.map.setZoom(15);
        this.rsp.load(markers[0].getPosition(), markers[1].getPosition())
            .then(function (data) {
            if (data)
                _this.processInput(data);
            else
                console.log("No trip found.");
        });
    };
    /*
      processInput function receives objects in json requested from otp server.
      This function will divide itineraries for array to filter and display results properly.
    */
    RoutesPage.prototype.processInput = function (data) {
        var distance;
        this.trip.length = 0;
        for (var id = 0; id < data.itineraries.length; id++) {
            var fare = void 0;
            fare = 0;
            var walkDistance = 0;
            console.log("Itinerary: " + id);
            for (var se = 0; se < data.itineraries[id].legs.length; se++) {
                var leg = data.itineraries[id].legs[se];
                console.log("Seq: " + se + " Mode: " + leg['mode']);
                if (leg['mode'] == "WALK") {
                    this.legWalk.push({
                        tripID: id,
                        seq: se,
                        distance: leg['distance'],
                        flatLng: {
                            lat: leg['from']['lat'],
                            lon: leg['from']['lon']
                        },
                        tlatLng: {
                            lat: leg['to']['lat'],
                            lon: leg['to']['lon']
                        }
                    });
                    walkDistance += leg['distance'];
                }
                else {
                    this.legTransit.push({
                        tripID: id,
                        seq: se,
                        distance: leg['distance'],
                        legGeom: leg['legGeometry']['points'],
                        flatLng: {
                            lat: leg['from']['lat'],
                            lon: leg['from']['lon']
                        },
                        tlatLng: {
                            lat: leg['to']['lat'],
                            lon: leg['to']['lon']
                        },
                        transMode: leg['routeId'],
                        route: leg['route']
                    });
                    var mode = leg['routeId'];
                    distance = this.legTransit[se].distance / 1000;
                    if (mode.includes("PUJ")) {
                        if (distance > 4)
                            fare = (fare + (8.00 + (distance - 4) * 1.50)).toPrecision(3);
                        else
                            fare = (fare + 8.00).toPrecision(3);
                        console.log("PUJ distance: " + distance + "\n Fare: " + fare);
                    }
                    else if (mode.includes("PUB")) {
                        if (distance > 5)
                            fare = (fare + (10.00 + (distance - 5) * 1.75)).toPrecision(3);
                        else
                            fare = (fare + 10.00).toPrecision(3);
                    }
                }
            }
            this.trip.push({
                id: id,
                transfer: data.itineraries[id].transfers,
                fare: fare,
                totalWalkDistance: walkDistance,
                legs: data.itineraries[id].legs.length,
                roundtrip: false
            });
            console.log("distance: " + walkDistance);
        }
    };
    RoutesPage.prototype.plotted = function (index) {
        console.log(index);
        console.log(this.legWalk[0].seq);
        var color = '';
        for (var i = 0; i < this.trip[index].legs; i++) {
            for (var j = 0; j < this.legWalk.length; j++) {
                console.log(this.legWalk[j].seq);
                if ((this.legWalk[j].tripID == this.trip[index].id) && (this.legWalk[j].seq == i)) {
                    console.log("WALKING");
                    this.mode.push("WALKING");
                    if (i == this.trip[index].legs - 1) {
                        this.lat.push(this.legWalk[j].tlatLng.lat);
                        this.lon.push(this.legWalk[j].tlatLng.lon);
                    }
                    else {
                        this.lat.push(this.legWalk[j].flatLng.lat);
                        this.lon.push(this.legWalk[j].flatLng.lon);
                    }
                }
            }
            for (var k = 0; k < this.legTransit.length; k++) {
                if ((this.legTransit[k].tripID == this.trip[index].id) && (this.legTransit[k].seq == i)) {
                    console.log("TRANSIT");
                    this.mode.push("TRANSIT");
                    this.lat.push(this.legTransit[k].flatLng.lat);
                    this.lon.push(this.legTransit[k].flatLng.lon);
                    this.lat.push(this.legTransit[k].tlatLng.lat);
                    this.lon.push(this.legTransit[k].tlatLng.lon);
                }
            }
        }
        //start directions display and renderer
        console.log(this.mode.length + "   " + this.lat.length);
        if (this.directionsDisplay.length > 0) {
            this.directionsDisplay = [];
            color = '';
            for (var i = 0; i < this.directionsDisplay.length; i++)
                this.directionsDisplay[i].setMap(null);
        }
        for (var i = 0; i < this.mode.length; i++) {
            if (this.mode[i] == "WALKING") {
                color = 'blue';
            }
            else {
                color = 'red';
            }
            this.directionsDisplay[i] = new google.maps.DirectionsRenderer({
                preserveViewport: true,
                suppressMarkers: true,
                polylineOptions: {
                    strokeColor: color
                }
            });
        }
        this.getDirections();
    };
    RoutesPage.prototype.getDirections = function () {
        var _this = this;
        var _loop_1 = function (i) {
            var or = { lat: parseFloat(this_1.lat[i]), lng: parseFloat(this_1.lon[i]) };
            var de = { lat: parseFloat(this_1.lat[i + 1]), lng: parseFloat(this_1.lon[i + 1]) };
            this_1.directionsDisplay[i].setMap(this_1.map);
            this_1.directionsService.route({
                origin: or,
                destination: de,
                travelMode: "WALKING"
            }, function (response, status) {
                if (status === 'OK') {
                    _this.directionsDisplay[i].setDirections(response);
                }
                else {
                    console.log('Directions request failed due to ' + status);
                }
            });
        };
        var this_1 = this;
        for (var i = 0; i < this.mode.length; i++) {
            _loop_1(i);
        }
    };
    RoutesPage.prototype.seeDetails = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__details_details__["DetailsPage"]).catch(function (err) {
            console.log(err);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]) === "function" && _a || Object)
    ], RoutesPage.prototype, "mapElement", void 0);
    RoutesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-routes',template:/*ion-inline-start:"/home/robrobirobin/Documents/Project-Design/src/pages/routes/routes.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title></ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n<ion-content>\n    <div>\n        <ion-list scrollable=true>\n            <ion-item>\n                <ion-select [(ngModel)]="type" interface="popover">\n                    <ion-option *ngFor="let type of routeType" selected="{{ type.name }}">{{type.name}}</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-list>\n                <ion-item text-wrap *ngFor="let t of trip; let i = index">\n                    <button ion-button item-start (click)="plotted(i)">Plot</button>\n                    <h2>Itinerary: {{ t.id+1 }}</h2>\n                    <p>No. of transfer: {{ t.transfer }}</p>\n                    <p>Total fare: P{{ t.fare }}</p>\n                    <button ion-button outline item-end (click)="seeDetails()">Details</button>\n                </ion-item>\n            </ion-list>\n        </ion-list>\n    </div>\n    <div #map id="map"></div>\n</ion-content>'/*ion-inline-end:"/home/robrobirobin/Documents/Project-Design/src/pages/routes/routes.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_remote_service_remote_service__["a" /* RemoteServiceProvider */]]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__providers_remote_service_remote_service__["a" /* RemoteServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_remote_service_remote_service__["a" /* RemoteServiceProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _f || Object])
    ], RoutesPage);
    return RoutesPage;
    var _a, _b, _c, _d, _e, _f;
}());

/*
-processinput error occur if trip is too long
-check array contents (trip, legwalk, legtransit)
*/ 
//# sourceMappingURL=routes.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoteServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the RemoteServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RemoteServiceProvider = (function () {
    function RemoteServiceProvider(http) {
        this.http = http;
        console.log('Hello RemoteServiceProvider Provider');
    }
    RemoteServiceProvider.prototype.load = function (origin, dest) {
        var _this = this;
        this.baseUrl = 'http://localhost:8080/otp/routers/default/plan?fromPlace=' + origin + '&toPlace=' + dest + '&date=2017/01/09&time=12:00:00&mode=TRANSIT%2CWALK&maxWalkDistance=1000&arriveBy=false&wheelchair=false';
        if (this.data) {
            return Promise.resolve(this.data);
        }
        var opt;
        var myHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */];
        myHeaders.set('Accept', 'application/json');
        myHeaders.append('Content-type', 'application/json');
        opt = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: myHeaders
        });
        return new Promise(function (resolve) {
            _this.http.get(_this.baseUrl, opt)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.data = data.plan;
                resolve(_this.data);
            });
        });
    };
    RemoteServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], RemoteServiceProvider);
    return RemoteServiceProvider;
}());

//# sourceMappingURL=remote-service.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(241);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export FIREBASE_CONF */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_register_register__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_home__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_myTrips_mytrip__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_settings_settings__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_routes_routes__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_remote_service_remote_service__ = __webpack_require__(217);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var FIREBASE_CONF = {
    apiKey: "AIzaSyDXJtxVDEFknxJYwWAjKCce-mHuDxY2gqU",
    authDomain: "project-design-2018d.firebaseapp.com",
    databaseURL: "https://project-design-2018d.firebaseio.com",
    projectId: "project-design-2018d",
    storageBucket: "project-design-2018d.appspot.com",
    messagingSenderId: "308539296287"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_myTrips_mytrip__["a" /* MytripPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_routes_routes__["a" /* RoutesPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6_angularfire2__["a" /* AngularFireModule */].initializeApp(FIREBASE_CONF),
                __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["b" /* AngularFireAuthModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_myTrips_mytrip__["a" /* MytripPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_routes_routes__["a" /* RoutesPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["a" /* AngularFireAuth */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_16__providers_remote_service_remote_service__["a" /* RemoteServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(105);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.show();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/robrobirobin/Documents/Project-Design/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/robrobirobin/Documents/Project-Design/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 334:
/***/ (function(module, exports) {

//# sourceMappingURL=details.js.map

/***/ })

},[218]);
//# sourceMappingURL=main.js.map