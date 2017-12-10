webpackJsonp([0],{

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_plus__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_facebook__ = __webpack_require__(293);
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
    function LoginPage(afAuth, navCtrl, alertCtrl, googleplus, facebook) {
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.googleplus = googleplus;
        this.facebook = facebook;
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
    LoginPage.prototype.googlelogin = function () {
        var _this = this;
        this.googleplus.login({
            'webClientID': '308539296287-elic70lfie8pct2l8q9t5im6djs2oi62.apps.googleusercontent.com',
            'offline': true
        }).then(function (res) {
            __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.auth().signInWithCredential(__WEBPACK_IMPORTED_MODULE_6_firebase___default.a.auth.GoogleAuthProvider.credential(res.idToken)).then(function (suc) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
            }).catch(function (ns) {
                alert("NOT SUCCESS");
            });
        });
    };
    LoginPage.prototype.facebooklogin = function () {
        this.facebook.login(['email']).then(function (res) {
            var fc = __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
            __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.auth().signInWithCredential(fc).then(function (fs) {
                alert("firebase sec");
            }).catch(function (ferr) {
                alert("firebase error");
            });
        }).catch(function (err) {
            alert(JSON.stringify(err));
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Mark Samson\Documents\GitHub\Project-Design-2\src\pages\login\login.html"*/'<ion-content padding>\n\n	<br /><br />\n\n	<div text-center>\n\n		<ion-img width="120" height="120" src="./assets/imgs/login.png"></ion-img>\n\n	</div>\n\n	<br /><br />\n\n	<ion-list>\n\n		<ion-item>\n\n			<ion-label floating>Email</ion-label>\n\n			<ion-input type="text" [(ngModel)]="user.email"></ion-input>\n\n		</ion-item>\n\n		<ion-item>\n\n			<ion-label floating>Password</ion-label>\n\n			<ion-input type="password" [(ngModel)]="user.password"></ion-input>\n\n		</ion-item>\n\n	</ion-list>\n\n	<div text-center>\n\n  		<button color=primary (click)="signIn(user);" ion-button block>Sign In</button>\n\n	</div>\n\n	<br /><br />\n\n	<div text-center>\n\n		<ion-icon name="ios-arrow-dropdown-circle" class="or"></ion-icon>\n\n	</div>\n\n	<br /><br />\n\n	<div text-center>\n\n		<ion-label>Sign In with:</ion-label>\n\n		<button ion-button (click)="facebooklogin()"><ion-icon name="logo-facebook"></ion-icon></button>\n\n		<button ion-button (click)="googlelogin()"><ion-icon name="logo-googleplus"></ion-icon></button>\n\n	</div>\n\n	<br/><br/><br/><br/><p (click)="register();"><u>Don\'t have an account?</u></p>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Mark Samson\Documents\GitHub\Project-Design-2\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_plus__["a" /* GooglePlus */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_facebook__["a" /* Facebook */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 155:
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
webpackEmptyAsyncContext.id = 155;

/***/ }),

/***/ 199:
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
webpackEmptyAsyncContext.id = 199;

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(56);
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
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\Mark Samson\Documents\GitHub\Project-Design-2\src\pages\register\register.html"*/'<ion-content padding>\n\n	<div text-right>\n\n		<ion-icon name="heart" class="reglogo"></ion-icon>\n\n	</div>\n\n	<ion-list>\n\n		<ion-item>\n\n			<ion-label floating>Email</ion-label>\n\n			<ion-input type="text" [(ngModel)]="user.email"></ion-input>\n\n		</ion-item>\n\n		<ion-item>\n\n			<ion-label floating>Password</ion-label>\n\n			<ion-input type="password" [(ngModel)]="user.password"></ion-input>\n\n		</ion-item>\n\n		<ion-item>\n\n			<ion-label floating>Re-type Password</ion-label>\n\n			<ion-input type="password" [(ngModel)]="cpass"></ion-input>\n\n		</ion-item>\n\n	</ion-list>\n\n	<div text-center>\n\n  		<button color=dark ion-button round (click)="signUp(user, cpass);">Sign me up!</button>\n\n	</div>\n\n	<br/><br/><br/><br/><p (click)="toSignIn();">Already have an account? <u>Sign In</u></p>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Mark Samson\Documents\GitHub\Project-Design-2\src\pages\register\register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__myTrips_mytrip__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__settings_settings__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__routes_routes__ = __webpack_require__(254);
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
    function HomePage(geolocation, afAuth, navCtrl, zone, modCtrl) {
        this.geolocation = geolocation;
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.zone = zone;
        this.modCtrl = modCtrl;
        this.lat = [];
        this.lon = [];
        this.pages = [
            { title: 'My Trips', component: __WEBPACK_IMPORTED_MODULE_4__myTrips_mytrip__["a" /* MytripPage */] },
            { title: 'Settings', component: __WEBPACK_IMPORTED_MODULE_5__settings_settings__["a" /* SettingsPage */] },
            { title: 'Sign Out', component: __WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */] }
        ];
        this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
        this.autocompleteItems1 = [];
        this.autocompleteItems2 = [];
        this.address = {
            origin: '',
            destination: ''
        };
        this.markers = [];
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
    HomePage.prototype.checkFocus = function (num) {
        if (num == 1)
            this.autocompleteItems2 = [];
        else
            this.autocompleteItems1 = [];
    };
    HomePage.prototype.findRoute = function (address) {
        /*
        if((address.destination)&&(address.origin))
          this.navCtrl.push(RoutesPage, {address});
          */
        var modal = this.modCtrl.create(__WEBPACK_IMPORTED_MODULE_7__routes_routes__["a" /* RoutesPage */], { address: address });
        if ((address.destination) && (address.origin)) {
            modal.present();
        }
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
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Mark Samson\Documents\GitHub\Project-Design-2\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-grid no-padding no-margin>\n\n      <ion-row>\n\n        <ion-col col-2>\n\n          <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n          </button>\n\n        </ion-col>\n\n      <ion-col col-98>\n\n        <ion-row>\n\n          <ion-col>\n\n            <ion-searchbar placeholder="Origin" type="text" (ionInput)="showAddress1()" (ionFocus)="checkFocus(1)" [(ngModel)]="address.origin"></ion-searchbar>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col>\n\n            <ion-searchbar placeholder="Destination" type="text" (ionInput)="showAddress2()" (ionFocus)="checkFocus(2)" [(ngModel)]="address.destination"></ion-searchbar>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col text-center no-padding>\n\n            <button color=dark ion-button block (click)="findRoute(address)">GO</button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-col>\n\n    </ion-row>\n\n    </ion-grid>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-navbar>\n\n      <button ion-button menuToggle icon-only class="menu-button" >\n\n        <ion-icon name=\'menu\'></ion-icon>\n\n      </button>\n\n      <ion-title>Menus</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{ p.title }}\n\n      </button>\n\n  </ion-list>\n\n  </ion-content>\n\n</ion-menu>\n\n\n\n<ion-content>\n\n    <div>\n\n      <ion-list [hidden]="autocompleteItems1.length == 0">\n\n        <ion-item class="limit-item" *ngFor="let item1 of autocompleteItems1" tappable (click)="selectOrigin(item1)">\n\n          {{ item1 }}\n\n        </ion-item>\n\n      </ion-list>\n\n      <ion-list [hidden]="autocompleteItems2.length == 0">\n\n        <ion-item class="limit-item" *ngFor="let item2 of autocompleteItems2" tappable (click)="selectDest(item2)">\n\n          {{ item2 }}\n\n        </ion-item>\n\n      </ion-list>\n\n    </div>\n\n    <div #map id="map"></div>\n\n</ion-content>\n\n\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\Mark Samson\Documents\GitHub\Project-Design-2\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MytripPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
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
            selector: 'page-mytrip',template:/*ion-inline-start:"C:\Users\Mark Samson\Documents\GitHub\Project-Design-2\src\pages\myTrips\mytrip.html"*/'<ion-header>\n\n    <ion-navbar>\n\n    </ion-navbar>\n\n</ion-header>'/*ion-inline-end:"C:\Users\Mark Samson\Documents\GitHub\Project-Design-2\src\pages\myTrips\mytrip.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], MytripPage);
    return MytripPage;
}());

//# sourceMappingURL=mytrip.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
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
            selector: 'page-settings',template:/*ion-inline-start:"C:\Users\Mark Samson\Documents\GitHub\Project-Design-2\src\pages\settings\settings.html"*/'<ion-header>\n\n    <ion-navbar>\n\n    </ion-navbar>\n\n</ion-header>'/*ion-inline-end:"C:\Users\Mark Samson\Documents\GitHub\Project-Design-2\src\pages\settings\settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_remote_service_remote_service__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__details_details__ = __webpack_require__(256);
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
    function RoutesPage(geolocation, navCtrl, zone, rsp, navParams, viewCtrl) {
        this.geolocation = geolocation;
        this.navCtrl = navCtrl;
        this.zone = zone;
        this.rsp = rsp;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.trip = [{
                id: '',
                transfer: '',
                fare: '',
                totalWalkDistance: '',
                legs: '',
                totalTime: '',
                roundtrip: ''
            }];
        this.legWalk = [{
                tripID: '',
                seq: '',
                distance: '',
                legGeom: '',
                time: '',
                transMode: '',
            }];
        this.legTransit = [{
                tripID: '',
                seq: '',
                distance: '',
                legGeom: '',
                from: '',
                to: '',
                time: '',
                transMode: '',
                route: ''
            }];
        this.routeType = [
            { name: "Less Transfer" },
            { name: "Less Fair" },
            { name: "Less Walking" },
            { name: "Round-Trip" }
        ];
        this.address = this.navParams.get('address');
        this.geocoder = new google.maps.Geocoder;
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
    /*
      Geocode address string into latitude and longitude for markers.
      Put markers in origin destination then set map focus between the paths.
    */
    RoutesPage.prototype.setOrgDes = function () {
        var _this = this;
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
        this.legWalk.length = 0;
        this.legTransit.length = 0;
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
                        distance: (leg['distance']) / 1000,
                        legGeom: leg['legGeometry']['points'],
                        time: leg['duration'],
                        transMode: "WALK"
                    });
                    walkDistance += leg['distance'];
                }
                else {
                    distance = leg['distance'] / 1000;
                    var mode = leg['routeId'];
                    if (mode.includes("PUJ")) {
                        mode = "PUJ";
                        if (distance > 4)
                            fare = (fare + (8.00 + (distance - 4) * 1.50)).toPrecision(3);
                        else
                            fare = (fare + 8.00).toPrecision(3);
                    }
                    else if (mode.includes("PUB")) {
                        mode = "PUB";
                        if (distance > 5)
                            fare = parseFloat(fare + (10.00 + (distance - 5) * 1.75)).toPrecision(3);
                        else
                            fare = parseFloat(fare + 10.00).toPrecision(3);
                    }
                    this.legTransit.push({
                        tripID: id,
                        seq: se,
                        distance: distance,
                        legGeom: leg['legGeometry']['points'],
                        from: leg['from']['name'],
                        to: leg['to']['name'],
                        time: leg['duration'],
                        transMode: mode,
                        route: leg['route']
                    });
                }
            }
            this.trip.push({
                id: id,
                transfer: data.itineraries[id].transfers,
                fare: fare,
                totalWalkDistance: walkDistance,
                legs: data.itineraries[id].legs.length,
                totalTime: (data.itineraries[id].duration) / 60,
                roundtrip: false
            });
        }
    };
    RoutesPage.prototype.seeDetails = function (i) {
        var trip;
        var legW;
        var legT;
        trip = this.trip, legW = this.legWalk, legT = this.legTransit;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__details_details__["a" /* DetailsPage */], { "i": i, "trip": trip, "legW": legW, "legT": legT, "address": this.address }).catch(function (err) {
            console.log(err);
        });
    };
    RoutesPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], RoutesPage.prototype, "mapElement", void 0);
    RoutesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-routes',template:/*ion-inline-start:"C:\Users\Mark Samson\Documents\GitHub\Project-Design-2\src\pages\routes\routes.html"*/'\n\n  \n\n<ion-content>\n\n    <ion-navbar color=primary>\n\n        <button class="close-button" color=dark ion-button block (click)="closeModal()">New Route</button>\n\n    </ion-navbar>\n\n    <div no-padding>\n\n        <ion-list scrollable=true>\n\n            <ion-item>\n\n                <ion-toolbar>\n\n                    <ion-segment color=secondary>\n\n                        <ion-segment-button value="lessfare">\n\n                            <ion-img width="20" height="20" src="./assets/imgs/lessfare.png">Less Fare</ion-img>\n\n                        </ion-segment-button>\n\n                        <ion-segment-button value="lesswalk">\n\n                            <ion-img width="20" height="20" src="./assets/imgs/lesswalk.png">Less Walk</ion-img>\n\n                        </ion-segment-button>\n\n                        <ion-segment-button value="lesstransfer">\n\n                            Less Transfer\n\n                        </ion-segment-button>\n\n                        <ion-segment-button value="round-trip">\n\n                            <ion-img width="20" height="20" src="./assets/imgs/roundtrip.png">Round-trip</ion-img>\n\n                        </ion-segment-button>\n\n                    </ion-segment>\n\n                </ion-toolbar>\n\n            </ion-item>\n\n            <ion-list>\n\n                <ion-item text-wrap *ngFor="let t of trip; let i = index" tappable (click)="seeDetails(i)">\n\n                    <h2>Itinerary: {{ t.id+1 }}</h2>\n\n                    <p>No. of transfer: {{ t.transfer }}</p>\n\n                    <p>Total fare: P{{ t.fare }}</p>\n\n                </ion-item>\n\n            </ion-list>\n\n        </ion-list>\n\n    </div>\n\n    <div #map [hidden]=true id="map"></div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Mark Samson\Documents\GitHub\Project-Design-2\src\pages\routes\routes.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_remote_service_remote_service__["a" /* RemoteServiceProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_3__providers_remote_service_remote_service__["a" /* RemoteServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */]])
    ], RoutesPage);
    return RoutesPage;
}());

//# sourceMappingURL=routes.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoteServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(407);
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
    }
    RemoteServiceProvider.prototype.load = function (origin, dest) {
        var _this = this;
        this.baseUrl = 'http://localhost:8080/otp/routers/default/plan?fromPlace=' + origin + '&toPlace=' + dest + '&date=2017/01/09&time=11:00:00&mode=TRANSIT%2CWALK&maxWalkDistance=1000&arriveBy=false&wheelchair=false';
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
    RemoteServiceProvider.prototype.runSnapToRoad = function (path) {
        var _this = this;
        var url;
        url = 'https://roads.googleapis.com/v1/snapToRoads?path=';
        for (var i = 0; i < path.length; i++) {
            if (i == 0)
                url = url + path[i].latitude + "," + path[i].longitude;
            else
                url = url + '|' + path[i].latitude + "," + path[i].longitude;
        }
        url = url + '&interpolate=true&key=AIzaSyCEGIORWkWAkATmL3elnWiGD3SnVCYQzyU';
        if (this.snap) {
            return Promise.resolve(this.snap);
        }
        var opt;
        var myHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */];
        myHeaders.set('Accept', 'application/json');
        myHeaders.append('Content-type', 'application/json');
        opt = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: myHeaders
        });
        return new Promise(function (resolve) {
            _this.http.get(url, opt)
                .map(function (res) { return res.json(); })
                .subscribe(function (snap) {
                _this.snap = snap;
                resolve(_this.snap);
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

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DetailsPage = (function () {
    function DetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.polylines = [];
        this.index = this.navParams.get("i");
        this.trip = this.navParams.get("trip");
        this.legWalk = this.navParams.get("legW");
        this.legTransit = this.navParams.get("legT");
        this.address = this.navParams.get('address');
        this.markers = [];
        this.geocoder = new google.maps.Geocoder;
        this.description = [{
                distance: '',
                time: '',
                fare: '',
                fare2: '',
                route: '',
                from: '',
                to: ''
            }];
        this.modeIcons = [];
        this.leg = [];
    }
    DetailsPage.prototype.ionViewDidLoad = function () {
        this.loadMap();
        this.buildlist();
    };
    DetailsPage.prototype.loadMap = function () {
        var mapOptions = {
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        this.setOrgDes();
        this.plotted(this.index);
    };
    DetailsPage.prototype.setOrgDes = function () {
        var _this = this;
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
    DetailsPage.prototype.setMapFocus = function (markers) {
        var bounds = new google.maps.LatLngBounds();
        for (var i = 0; i < markers.length; i++) {
            bounds.extend(markers[i].getPosition());
        }
        this.map.fitBounds(bounds);
        this.map.setZoom(15);
    };
    DetailsPage.prototype.plotted = function (index) {
        for (var i = 0; i < this.trip[index].legs; i++) {
            this.points = [];
            for (var j = 0; j < this.legWalk.length; j++) {
                console.log(this.legWalk[j].seq);
                if ((this.legWalk[j].tripID == this.trip[index].id) && (this.legWalk[j].seq == i)) {
                    console.log("walk");
                    this.decode(this.legWalk[j].legGeom);
                    this.drawSnappedPolyline('blue');
                }
            }
            for (var k = 0; k < this.legTransit.length; k++) {
                if ((this.legTransit[k].tripID == this.trip[index].id) && (this.legTransit[k].seq == i)) {
                    console.log("transit");
                    this.decode(this.legTransit[k].legGeom);
                    this.drawSnappedPolyline('red');
                }
            }
        }
    };
    DetailsPage.prototype.decode = function (leggeom) {
        // array that holds the points
        var index = 0, len = leggeom.length;
        var lat = 0, lng = 0;
        while (index < len) {
            var b = void 0, shift = 0, result = 0;
            do {
                b = leggeom.charAt(index++).charCodeAt(0) - 63; //finds ascii                                                                                    //and substract it by 63
                result |= (b & 0x1f) << shift;
                shift += 5;
            } while (b >= 0x20);
            var dlat = ((result & 1) != 0 ? ~(result >> 1) : (result >> 1));
            lat += dlat;
            shift = 0;
            result = 0;
            do {
                b = leggeom.charAt(index++).charCodeAt(0) - 63;
                result |= (b & 0x1f) << shift;
                shift += 5;
            } while (b >= 0x20);
            var dlng = ((result & 1) != 0 ? ~(result >> 1) : (result >> 1));
            lng += dlng;
            var latlng = new google.maps.LatLng((lat / 1E5), (lng / 1E5));
            this.points.push(latlng);
        }
    };
    DetailsPage.prototype.drawSnappedPolyline = function (color) {
        var snappedPolyline = new google.maps.Polyline({
            path: this.points,
            strokeColor: color,
            strokeWeight: 3
        });
        snappedPolyline.setMap(this.map);
        this.polylines.push(snappedPolyline);
    };
    DetailsPage.prototype.buildlist = function () {
        this.leg.length = 0;
        this.description.length = 0;
        for (var i = 0; i < this.trip[this.index].legs; i++) {
            for (var j = 0; j < this.legWalk.length; j++) {
                if ((this.legWalk[j].tripID == this.trip[this.index].id) && (this.legWalk[j].seq == i)) {
                    this.description.push({
                        distance: parseFloat(this.legWalk[j].distance).toPrecision(2) + " km\n",
                        time: this.legWalk[j].time + " min",
                        fare: '',
                        fare2: '',
                        route: '',
                        from: '',
                        to: ''
                    });
                    this.modeIcons.push("./assets/imgs/walk.png");
                }
            }
            for (var k = 0; k < this.legTransit.length; k++) {
                var fare = void 0;
                var fare2 = void 0;
                console.log("transit");
                if ((this.legTransit[k].tripID == this.trip[this.index].id) && (this.legTransit[k].seq == i) && (this.legTransit[k].seq)) {
                    fare = 0;
                    fare2 = 0;
                    var distance = this.legTransit[k].distance;
                    if (this.legTransit[k].transMode == "PUJ") {
                        if (distance > 4)
                            fare = (8.00 + (distance - 4) * 1.50).toPrecision(3);
                        else
                            fare = (8.00).toPrecision(3);
                        this.description.push({
                            distance: parseFloat(this.legTransit[k].distance).toPrecision(2) + " km\n",
                            time: this.legTransit[k].time + " min",
                            fare: "P" + fare,
                            fare2: '',
                            route: '',
                            from: this.legTransit[k].from,
                            to: this.legTransit[k].to
                        });
                        this.modeIcons.push("./assets/imgs/jeep.png");
                    }
                    else if (this.legTransit[k].transMode == "PUB") {
                        if (distance > 5) {
                            fare = (10.00 + (distance - 5) * 1.75).toPrecision(4);
                            fare2 = (12.00 + (distance - 5) * 2.35).toPrecision(4);
                        }
                        else {
                            fare = (10.00).toPrecision(4);
                            fare2 = (12.00).toPrecision(4);
                        }
                        this.description.push({
                            distance: parseFloat(this.legTransit[k].distance).toPrecision(2) + " km\n",
                            time: this.legTransit[k].time + " min",
                            fare: "Ordinary: P" + fare,
                            fare2: "Aircon: P" + fare2,
                            route: this.legTransit[k].route,
                            from: this.legTransit[k].from,
                            to: this.legTransit[k].to
                        });
                        this.modeIcons.push("./assets/imgs/bus.png");
                    }
                    else {
                        this.modeIcons.push("./assets/imgs/train.png");
                    }
                }
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], DetailsPage.prototype, "mapElement", void 0);
    DetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-details',template:/*ion-inline-start:"C:\Users\Mark Samson\Documents\GitHub\Project-Design-2\src\pages\details\details.html"*/'<ion-header>\n\n    <ion-navbar>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div #map id="map"></div>\n\n  <div scrollable=true>\n\n    <ion-grid>\n\n      <ion-row *ngFor="let item of description; let i = index;" no-padding no-margin>\n\n        <ion-col col-2 class="col icon-col">\n\n          <ion-img width="50" height="50" [src]="modeIcons[i]">Less Fare</ion-img>\n\n        </ion-col>\n\n        <ion-col col-95>\n\n          <p>{{ description[i].route }}</p>\n\n          <p>{{ description[i].fare }} {{ description[i].fare2 }}</p>\n\n          <p>Directions:</p>\n\n        </ion-col>\n\n        <ion-col col-2 no-padding>\n\n          <p>{{ description[i].distance }}</p>\n\n          <p>{{ description[i].time }}</p>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Mark Samson\Documents\GitHub\Project-Design-2\src\pages\details\details.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], DetailsPage);
    return DetailsPage;
}());

/*
-arrange details output
*/ 
//# sourceMappingURL=details.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(317);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export FIREBASE_CONF */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_register_register__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_home__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_myTrips_mytrip__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_settings_settings__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_routes_routes__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_details_details__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_remote_service_remote_service__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_google_plus__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_firebase__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_facebook__ = __webpack_require__(293);
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
__WEBPACK_IMPORTED_MODULE_19_firebase___default.a.initializeApp(FIREBASE_CONF);
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
                __WEBPACK_IMPORTED_MODULE_15__pages_routes_routes__["a" /* RoutesPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_details_details__["a" /* DetailsPage */]
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
                __WEBPACK_IMPORTED_MODULE_15__pages_routes_routes__["a" /* RoutesPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_details_details__["a" /* DetailsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["a" /* AngularFireAuth */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_17__providers_remote_service_remote_service__["a" /* RemoteServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_google_plus__["a" /* GooglePlus */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_facebook__["a" /* Facebook */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(134);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Mark Samson\Documents\GitHub\Project-Design-2\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Mark Samson\Documents\GitHub\Project-Design-2\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[294]);
//# sourceMappingURL=main.js.map