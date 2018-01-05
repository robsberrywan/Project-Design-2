webpackJsonp([0],{

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_plus__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_facebook__ = __webpack_require__(317);
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
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], { "email": user.email });
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
        var _this = this;
        this.facebook.login(['email']).then(function (res) {
            var fc = __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
            __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.auth().signInWithCredential(fc).then(function (fs) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
            }).catch(function (ferr) {
                alert("firebase error");
            });
        }).catch(function (err) {
            alert(JSON.stringify(err));
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Mark Samson\Documents\GitHub\Project-design-2\src\pages\login\login.html"*/'<ion-content padding class="startLogin">\n\n	<br /><br />\n\n	<div text-center>\n\n		<ion-img width="120" height="120" src="./assets/imgs/login.png"></ion-img>\n\n	</div>\n\n	<br /><br />\n\n	<ion-list>\n\n		<ion-item>\n\n			<ion-label floating>Email</ion-label>\n\n			<ion-input class="input" type="text" [(ngModel)]="user.email"></ion-input>\n\n		</ion-item>\n\n		<ion-item>\n\n			<ion-label floating>Password</ion-label>\n\n			<ion-input  type="password" [(ngModel)]="user.password"></ion-input>\n\n		</ion-item>\n\n	</ion-list>\n\n	<div text-center>\n\n  		<button color=primary (click)="signIn(user);" ion-button block>Sign In</button>\n\n	</div>\n\n	<br />\n\n	<div text-center>\n\n		<ion-icon name="ios-arrow-dropdown-circle" class="or"></ion-icon>\n\n	</div>\n\n	<br />\n\n	<div text-center>\n\n		<ion-label>Sign In with:</ion-label>\n\n		<button ion-button (click)="facebooklogin()"><ion-icon name="logo-facebook"></ion-icon></button>\n\n		<button ion-button (click)="googlelogin()"><ion-icon name="logo-googleplus"></ion-icon></button>\n\n	</div>\n\n	<br/><br/><p (click)="register();"><u>Don\'t have an account?</u></p>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Mark Samson\Documents\GitHub\Project-design-2\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_plus__["a" /* GooglePlus */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_facebook__["a" /* Facebook */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 162:
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
webpackEmptyAsyncContext.id = 162;

/***/ }),

/***/ 205:
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
webpackEmptyAsyncContext.id = 205;

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(77);
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
            var alert_1, alert_2, alert_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(String(user.password).length < 6)) return [3 /*break*/, 1];
                        alert_1 = this.alertCtrl.create({
                            title: 'Register Failed!',
                            subTitle: 'Password must contain at least 6 characters.',
                            buttons: ['Retry']
                        });
                        alert_1.present();
                        return [3 /*break*/, 5];
                    case 1:
                        if (!(user.password != cpass)) return [3 /*break*/, 2];
                        alert_2 = this.alertCtrl.create({
                            title: 'Register Failed!',
                            subTitle: 'Password does not match.',
                            buttons: ['Retry']
                        });
                        alert_2.present();
                        return [3 /*break*/, 5];
                    case 2:
                        if (!((!user.email) || (!user.password))) return [3 /*break*/, 3];
                        alert_3 = this.alertCtrl.create({
                            title: 'Register Failed!',
                            subTitle: 'All fields must be filled.',
                            buttons: ['Retry']
                        });
                        alert_3.present();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
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
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage.prototype.toSignIn = function () {
        this.navCtrl.pop();
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\Mark Samson\Documents\GitHub\Project-design-2\src\pages\register\register.html"*/'<ion-content padding>\n\n	<div text-right>\n\n		<ion-icon name="heart" class="reglogo"></ion-icon>\n\n	</div>\n\n	<ion-list>\n\n		<ion-item>\n\n			<ion-label floating>Email</ion-label>\n\n			<ion-input type="text" [(ngModel)]="user.email"></ion-input>\n\n		</ion-item>\n\n		<ion-item>\n\n			<ion-label floating>Password</ion-label>\n\n			<ion-input type="password" [(ngModel)]="user.password"></ion-input>\n\n		</ion-item>\n\n		<ion-item>\n\n			<ion-label floating>Re-type Password</ion-label>\n\n			<ion-input type="password" [(ngModel)]="cpass"></ion-input>\n\n		</ion-item>\n\n	</ion-list>\n\n	<div text-center>\n\n  		<button color=dark ion-button round (click)="signUp(user, cpass);">Sign me up!</button>\n\n	</div>\n\n	<br/><br/><br/><br/><p (click)="toSignIn();">Already have an account? <u>Sign In</u></p>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Mark Samson\Documents\GitHub\Project-design-2\src\pages\register\register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_remote_service_remote_service__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mytrip_mytrip__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__settings_settings__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__details_details__ = __webpack_require__(305);
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
    function HomePage(geolocation, afAuth, navCtrl, zone, rsp, modCtrl, navParams) {
        this.geolocation = geolocation;
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.zone = zone;
        this.rsp = rsp;
        this.modCtrl = modCtrl;
        this.navParams = navParams;
        this.lat = [];
        this.lon = [];
        this.trip = [{
                id: '',
                transfer: '',
                fare: '',
                totalWalkDistance: '',
                totaldistance: '',
                legs: '',
                totalTime: '',
                roundtrip: ''
            }];
        this.legWalk = [{
                tripID: '',
                seq: '',
                distance: '',
                legGeom: '',
                from: '',
                to: '',
                time: '',
                transMode: '',
                steps: [],
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
                route: '',
                routeLongName: ''
            }];
        this.pages = [
            { title: 'My Trips', component: __WEBPACK_IMPORTED_MODULE_5__mytrip_mytrip__["a" /* MytripPage */] },
            { title: 'Settings', component: __WEBPACK_IMPORTED_MODULE_6__settings_settings__["a" /* SettingsPage */] },
            { title: 'Sign Out', component: __WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */] }
        ];
        this.email = this.navParams.get('email');
        this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
        this.autocompleteItems1 = [];
        this.autocompleteItems2 = [];
        this.address = {
            origin: '',
            destination: ''
        };
        this.markers = [];
        this.geocoder = new google.maps.Geocoder;
        this.plotmarkers = [];
        this.showResults = false;
        this.showMap = true;
        this.lrtLine2 = [
            [0, "Recto", "Legarda", "Pureza", "V. Mapa", "J. Ruiz", "Gilmore", "Betty Go", "Cubao", "Anonas", "Katipunan", "Santolan"],
            ["Recto", 0, 15, 15, 15, 20, 20, 20, 20, 25, 25, 25],
            ["Legarda", 15, 0, 15, 15, 15, 20, 20, 20, 20, 25, 25],
            ["Pureza", 15, 15, 0, 15, 15, 15, 20, 20, 20, 20, 25],
            ["V. Mapa", 15, 15, 15, 0, 15, 15, 15, 20, 20, 20, 25],
            ["J. Ruiz", 20, 15, 15, 15, 0, 15, 15, 15, 20, 20, 20],
            ["Gilmore", 20, 20, 15, 15, 15, 0, 15, 15, 15, 20, 20],
            ["Betty Go", 20, 20, 20, 15, 15, 15, 0, 15, 15, 15, 20],
            ["Cubao", 20, 20, 20, 20, 15, 15, 15, 0, 15, 15, 15],
            ["Anonas", 25, 20, 20, 20, 20, 15, 15, 15, 0, 15, 15],
            ["Katipunan", 25, 25, 20, 20, 20, 20, 15, 15, 15, 0, 15],
            ["Santolan", 25, 25, 25, 25, 20, 20, 20, 15, 15, 15, 0]
        ];
        this.lrtLine1 = [
            [0, "Baclaran", "EDSA", "Libertad", "Gil Puyat", "Vito Cruz", "Quirino", "Pedro Gil", "UN Ave", "Central Terminal", "Carriedo", "Doroteo Jose", "Bambang", "Tayuman", "Blumentritt", "Abad Santos", "R. Papa", "5th Ave", "Monumento", "Balintawak", "Roosevelt"],
            ["Baclaran", 0, 15, 15, 15, 15, 15, 20, 20, 20, 20, 20, 20, 30, 30, 30, 30, 30, 30, 30, 30],
            ["EDSA", 15, 0, 15, 15, 15, 15, 15, 20, 20, 20, 20, 20, 20, 30, 30, 30, 30, 30, 30, 30],
            ["Libertad", 15, 15, 0, 15, 15, 15, 15, 15, 20, 20, 20, 20, 20, 20, 30, 30, 30, 30, 30, 30],
            ["Gil Puyat", 15, 15, 15, 0, 15, 15, 15, 15, 20, 20, 20, 20, 20, 20, 20, 30, 30, 30, 30, 30],
            ["Vito Cruz", 15, 15, 15, 15, 0, 15, 15, 15, 15, 15, 20, 20, 20, 20, 20, 20, 30, 30, 30, 30],
            ["Quirino", 15, 15, 15, 15, 15, 0, 15, 15, 15, 15, 15, 20, 20, 20, 20, 20, 20, 30, 30, 30],
            ["Pedro Gil", 20, 15, 15, 15, 15, 15, 0, 15, 15, 15, 15, 15, 20, 20, 20, 20, 20, 20, 30, 30],
            ["UN Ave", 20, 20, 15, 15, 15, 15, 15, 0, 15, 15, 15, 15, 15, 20, 20, 20, 20, 20, 30, 30],
            ["Central Terminal", 20, 20, 20, 20, 15, 15, 15, 15, 0, 15, 15, 15, 15, 15, 15, 20, 20, 20, 20, 30],
            ["Carriedo", 20, 20, 20, 20, 15, 15, 15, 15, 15, 0, 15, 15, 15, 15, 15, 15, 20, 20, 20, 30],
            ["Doroteo Jose", 20, 20, 20, 20, 20, 15, 15, 15, 15, 15, 0, 15, 15, 15, 15, 15, 15, 20, 20, 30],
            ["Bambang", 20, 20, 20, 20, 20, 20, 15, 15, 15, 15, 15, 0, 15, 15, 15, 15, 15, 20, 20, 20],
            ["Tayuman", 30, 20, 20, 20, 20, 20, 20, 15, 15, 15, 15, 15, 0, 15, 15, 15, 15, 15, 20, 20],
            ["Blumentritt", 30, 30, 20, 20, 20, 20, 20, 20, 15, 15, 15, 15, 15, 0, 15, 15, 15, 15, 20, 20],
            ["Abad Santos", 30, 30, 30, 20, 20, 20, 20, 20, 15, 15, 15, 15, 15, 15, 0, 15, 15, 15, 20, 20],
            ["R. Papa", 30, 30, 30, 30, 20, 20, 20, 20, 20, 15, 15, 15, 15, 15, 15, 0, 15, 15, 15, 20],
            ["5th Avenue", 30, 30, 30, 30, 30, 20, 20, 20, 20, 20, 15, 15, 15, 15, 15, 15, 0, 15, 15, 20],
            ["Monumento", 30, 30, 30, 30, 30, 30, 20, 20, 20, 20, 20, 20, 15, 15, 15, 15, 15, 0, 15, 15],
            ["Balintawak", 30, 30, 30, 30, 30, 30, 30, 30, 20, 20, 20, 20, 20, 20, 20, 15, 15, 15, 0, 15],
            ["Roosevelt", 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 20, 20, 20, 20, 20, 20, 15, 15, 0]
        ];
        this.mrt3 = [
            [0, "North Avenue", "Quezon", "Kamuning", "Cubao", "Santolan", "Ortigas", "Shaw", "Boni", "Guadalupe", "Buendia", "Ayala", "Magallanes", "Taft Ave"],
            ["North Avenue", 0, 13, 13, 16, 16, 20, 20, 20, 24, 24, 24, 28, 28],
            ["Quezon", 13, 0, 13, 13, 16, 16, 20, 20, 20, 24, 24, 24, 28],
            ["Kamuning", 13, 13, 0, 13, 13, 16, 16, 20, 20, 20, 24, 24, 24],
            ["Cubao", 16, 13, 13, 0, 13, 13, 16, 16, 20, 20, 20, 24, 24],
            ["Santolan", 16, 16, 13, 13, 0, 13, 13, 16, 16, 20, 20, 20, 24],
            ["Ortigas", 20, 16, 16, 13, 13, 0, 13, 13, 16, 16, 20, 20, 20],
            ["Shaw", 20, 20, 16, 16, 16, 13, 0, 13, 13, 16, 16, 20, 20],
            ["Boni", 20, 20, 20, 16, 16, 13, 13, 0, 13, 13, 16, 16, 20],
            ["Guadalupe", 24, 20, 20, 20, 20, 16, 13, 13, 0, 13, 13, 16, 16],
            ["Buendia", 24, 24, 20, 20, 20, 16, 16, 13, 13, 0, 13, 13, 16],
            ["Ayala", 24, 24, 24, 20, 20, 20, 16, 16, 13, 13, 0, 13, 13],
            ["Magallanes", 28, 24, 24, 24, 24, 20, 20, 16, 16, 13, 13, 0, 13],
            ["Taft Ave", 28, 28, 24, 24, 24, 20, 20, 20, 16, 16, 13, 13, 0]
        ];
        this.pnr = [
            [0, "Tutuban", "Blumentritt", "Dapitan/Laon Laan", "España", "Santa Mesa", "Pandacan", "Paco", "San Andres", "Vito Cruz", "Buendia", "Pasay Road", "EDSA", "Nichols", "FTI", "Bicutan", "Sucat", "Alabang", "Muntinlupa", "San Pedro", "Pacita", "Golden City 1", "Biñan"],
            ["Tutuban", 0, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 16, 16, 16, 20, 24, 28, 32, 32, 32, 36, 36, 40, 44, 44],
            ["Blumentritt", 12, 0, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 16, 20, 24, 24, 28, 28, 32, 32, 36, 40, 44, 44],
            ["Dapitan/Laon Laan", 12, 12, 0, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 16, 20, 20, 24, 28, 28, 28, 32, 36, 36, 44, 44],
            ["España", 12, 12, 12, 0, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 16, 16, 20, 24, 28, 28, 28, 28, 32, 36, 40, 44],
            ["Santa Mesa", 12, 12, 12, 12, 0, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 16, 20, 20, 24, 24, 28, 28, 32, 36, 40, 40],
            ["Pandacan", 12, 12, 12, 12, 12, 0, 12, 12, 12, 12, 12, 12, 12, 12, 12, 16, 16, 20, 24, 24, 28, 24, 32, 36, 40, 40],
            ["Paco", 12, 12, 12, 12, 12, 12, 0, 12, 12, 12, 12, 12, 12, 12, 12, 12, 16, 20, 24, 24, 24, 24, 28, 32, 36, 40],
            ["San Andres", 12, 12, 12, 12, 12, 12, 12, 0, 12, 12, 12, 12, 12, 12, 12, 12, 16, 20, 20, 24, 24, 24, 28, 32, 36, 40],
            ["Vito Cruz", 12, 12, 12, 12, 12, 12, 12, 12, 0, 12, 12, 12, 12, 12, 12, 12, 16, 16, 20, 20, 24, 24, 28, 32, 36, 36],
            ["Buendia", 12, 12, 12, 12, 12, 12, 12, 12, 12, 0, 12, 12, 12, 12, 12, 12, 16, 16, 20, 20, 24, 24, 28, 32, 36, 36],
            ["Pasay Road", 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 0, 12, 12, 12, 12, 12, 12, 16, 20, 20, 20, 20, 28, 32, 36, 36],
            ["EDSA", 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 0, 12, 12, 12, 12, 12, 16, 20, 16, 20, 20, 24, 28, 32, 32],
            ["Nichols", 16, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 0, 12, 12, 12, 12, 12, 20, 16, 16, 20, 24, 24, 32, 32],
            ["FTI", 16, 16, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 0, 12, 12, 12, 12, 20, 16, 16, 20, 20, 24, 28, 32],
            ["Bicutan", 16, 20, 16, 16, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 0, 12, 12, 12, 12, 16, 16, 20, 20, 24, 28, 28],
            ["Sucat", 20, 24, 20, 16, 16, 16, 12, 12, 12, 12, 12, 12, 12, 12, 12, 0, 12, 12, 12, 12, 12, 12, 16, 20, 24, 24],
            ["Alabang", 24, 24, 20, 20, 20, 16, 16, 16, 16, 16, 12, 12, 12, 12, 12, 12, 0, 12, 12, 12, 12, 12, 12, 16, 20, 20],
            ["Muntinlupa", 28, 24, 24, 24, 20, 20, 20, 20, 16, 16, 16, 16, 12, 12, 12, 12, 12, 0, 12, 12, 12, 12, 12, 12, 16, 16],
            ["San Pedro", 32, 28, 28, 28, 24, 24, 24, 20, 20, 20, 20, 20, 16, 16, 12, 12, 12, 12, 0, 12, 12, 12, 12, 12, 16, 16],
            ["Pacita", 32, 28, 28, 28, 28, 24, 24, 24, 24, 20, 20, 20, 16, 16, 16, 12, 12, 12, 12, 0, 12, 12, 12, 12, 12, 16],
            ["Golden City 1", 32, 32, 28, 28, 28, 28, 24, 24, 24, 24, 20, 20, 16, 16, 16, 12, 12, 12, 12, 12, 0, 12, 12, 12, 12, 16],
            ["Biñan", 36, 32, 32, 32, 28, 28, 24, 24, 24, 24, 24, 20, 20, 20, 16, 12, 12, 12, 12, 12, 12, 0, 12, 12, 12, 12]
        ];
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.loadMap();
    };
    HomePage.prototype.loadMap = function () {
        var _this = this;
        var locationOptions = { timeout: 10000, enableHighAccuracy: true };
        this.geolocation.getCurrentPosition(locationOptions).then(function (position) {
            var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            var mapOptions = {
                center: latLng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            console.log(position);
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
            var marker = new google.maps.Marker({
                map: _this.map,
                position: latLng
            });
            _this.markers.push(marker);
            _this.getAddress(_this.markers);
        }, function (err) {
            console.log(err);
        });
    };
    HomePage.prototype.getAddress = function (marker) {
        var _this = this;
        this.geocoder.geocode({ 'location': marker[0].getPosition() }, function (results, status) {
            if (status === 'OK') {
                if (results[0]) {
                    _this.showOrigin(results[0].formatted_address);
                }
                else {
                    window.alert('No results found');
                }
            }
            else {
                window.alert('Geocoder failed due to: ' + status);
            }
        });
    };
    HomePage.prototype.showOrigin = function (add) {
        this.address.origin = add;
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
        if ((address.destination) && (address.origin)) {
            this.setOrgDes();
            this.showResults = true;
            this.showMap = false;
        }
    };
    HomePage.prototype.openPage = function (page) {
        var _this = this;
        if (page.component == __WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */]) {
            this.afAuth.auth.signOut().then(function () {
                _this.navCtrl.setRoot(page.component);
            });
        }
        else {
            this.navCtrl.push(page.component);
        }
    };
    /*
      *
      *
      *
      calculate routes
      *
      *
      *
    */
    HomePage.prototype.close = function () {
        this.showResults = false;
        this.showMap = true;
    };
    HomePage.prototype.setOrgDes = function () {
        var _this = this;
        this.trip.length = 0;
        this.legWalk.length = 0;
        this.legTransit.length = 0;
        this.plotmarkers = [];
        this.geocoder.geocode({ 'address': this.address.origin }, function (results, status) {
            if (status == 'OK' && results[0]) {
                var marker = new google.maps.Marker({
                    position: results[0].geometry.location,
                });
                _this.plotmarkers.push(marker);
            }
        });
        this.geocoder.geocode({ 'address': this.address.destination }, function (results, status) {
            if (status == 'OK' && results[0]) {
                var marker = new google.maps.Marker({
                    position: results[0].geometry.location,
                });
                _this.plotmarkers.push(marker);
                _this.setMapFocus(_this.plotmarkers);
            }
        });
    };
    HomePage.prototype.setMapFocus = function (markers) {
        var _this = this;
        this.rsp.load(markers[0].getPosition(), markers[1].getPosition()).subscribe(function (data) {
            _this.processInput(data.plan);
            console.log(data.plan);
        }, function (err) {
            console.log(err);
        }, function () { return console.log('Route Search Complete'); });
    };
    HomePage.prototype.sortFare = function () {
        var tripSwap = [];
        var lessFare;
        lessFare = -1;
        for (var i = 0; i < this.trip.length; i++) {
            lessFare = this.trip[i].fare;
            for (var j = 0; j < this.trip.length; j++) {
                if (lessFare < this.trip[j].fare) {
                    lessFare = this.trip[j].fare;
                    tripSwap = this.trip[i];
                    this.trip[i] = this.trip[j];
                    this.trip[j] = tripSwap;
                }
            }
        }
    };
    HomePage.prototype.sortTime = function () {
        var tripSwap = [];
        var lessTime;
        lessTime = -1;
        for (var i = 0; i < this.trip.length; i++) {
            lessTime = this.trip[i].totalTime;
            for (var j = 0; j < this.trip.length; j++) {
                if (lessTime < this.trip[j].totalTime) {
                    lessTime = this.trip[j].totalTime;
                    tripSwap = this.trip[i];
                    this.trip[i] = this.trip[j];
                    this.trip[j] = tripSwap;
                }
            }
        }
    };
    HomePage.prototype.sortWalk = function () {
        var tripSwap = [];
        var lessWalk;
        lessWalk = -1;
        for (var i = 0; i < this.trip.length; i++) {
            lessWalk = this.trip[i].totalWalkDistance;
            for (var j = 0; j < this.trip.length; j++) {
                if (lessWalk < this.trip[j].totalWalkDistance) {
                    lessWalk = this.trip[j].totalWalkDistance;
                    tripSwap = this.trip[i];
                    this.trip[i] = this.trip[j];
                    this.trip[j] = tripSwap;
                }
            }
        }
    };
    HomePage.prototype.sortTransfer = function () {
        var tripSwap = [];
        var lessTransfer;
        lessTransfer = -1;
        for (var i = 0; i < this.trip.length; i++) {
            lessTransfer = this.trip[i].transfer;
            for (var j = 0; j < this.trip.length; j++) {
                if (lessTransfer < this.trip[j].transfer) {
                    lessTransfer = this.trip[j].transfer;
                    tripSwap = this.trip[i];
                    this.trip[i] = this.trip[j];
                    this.trip[j] = tripSwap;
                }
            }
        }
    };
    /*
      processInput function receives objects in json requested from otp server.
      This function will divide itineraries for array to filter and display results properly.
    */
    HomePage.prototype.processInput = function (data) {
        var distance;
        var x;
        var y;
        for (var id = 0; id < data.itineraries.length; id++) {
            var fare = void 0;
            fare = 0;
            var walkDistance = 0;
            var totaldistance = 0;
            console.log("Itinerary: " + id);
            for (var se = 0; se < data.itineraries[id].legs.length; se++) {
                var leg = data.itineraries[id].legs[se];
                console.log("Seq: " + se + " Mode: " + leg['mode']);
                if (leg['mode'] == "WALK") {
                    var steps = [];
                    for (var num = 0; num < leg['steps'].length; num++) {
                        if ((leg['steps'][num]['absoluteDirection'] == "RIGHT") || (leg['steps'][num]['absoluteDirection'] == "LEFT"))
                            steps.push("Turn " + (leg['steps'][num]['absoluteDirection']).toLowerCase() + " onto " + leg['steps'][num]['streetName']);
                        else
                            steps.push("Head " + (leg['steps'][num]['absoluteDirection']).toLowerCase() + " on " + leg['steps'][num]['streetName']);
                    }
                    this.legWalk.push({
                        tripID: id,
                        seq: se,
                        distance: (leg['distance']) / 1000,
                        legGeom: leg['legGeometry']['points'],
                        from: leg['from']['name'],
                        to: leg['to']['name'],
                        time: leg['duration'] / 60,
                        transMode: "WALK",
                        steps: steps
                    });
                    walkDistance += (leg['distance']) / 1000;
                    totaldistance += (leg['distance']) / 1000;
                }
                else {
                    distance = (leg['distance']) / 1000;
                    var mode = leg['routeId'];
                    if (mode.includes("PUJ")) {
                        mode = "PUJ";
                        if (distance > 4) {
                            if (distance - parseInt(distance) > 0.49)
                                fare += 8 + ((parseInt(distance) - 3) * 1.50);
                            else
                                fare += 8 + ((parseInt(distance) - 4) * 1.50);
                        }
                        else
                            fare += 8;
                    }
                    else if (mode.includes("PUB")) {
                        mode = "PUB";
                        var tempFare = void 0;
                        console.log(distance);
                        if (distance > 5) {
                            if (distance - parseInt(distance) > 0.49)
                                tempFare = 10 + ((parseInt(distance) - 4) * 1.85);
                            else
                                tempFare = 10 + ((parseInt(distance) - 5) * 1.85);
                            if (tempFare - parseInt(tempFare) < 0.13)
                                fare += parseInt(tempFare);
                            else if (tempFare - parseInt(tempFare) < 0.38)
                                fare += parseInt(tempFare) + 0.25;
                            else if (tempFare - parseInt(tempFare) < 0.88)
                                fare += parseInt(tempFare) + 0.50;
                            else
                                fare += parseInt(tempFare) + 1;
                            console.log(parseInt(tempFare));
                        }
                        else
                            fare += 10;
                    }
                    else if (mode.includes("TODA")) {
                        mode = "TODA";
                        if (distance > 1) {
                            if (distance - parseInt(distance) > 0.49)
                                fare += 8.50 + (parseInt(distance));
                            else
                                fare += 8.50 + (parseInt(distance) - 1);
                        }
                        else
                            fare += 8.50;
                        console.log("Tryke");
                    }
                    else {
                        var orig = leg['from']['name'];
                        var dest = leg['to']['name'];
                        x = 0, y = 0;
                        mode = "RAIL";
                        if (orig.includes("MRT")) {
                            for (var i = 0; i < this.mrt3.length; i++) {
                                if (orig.includes(this.mrt3[0][i])) {
                                    y = i;
                                }
                                if (dest.includes(this.mrt3[0][i])) {
                                    x = i;
                                }
                            }
                            fare += this.mrt3[x][y];
                        }
                        else if (orig.includes("PNR")) {
                            for (var i = 0; i < this.pnr.length; i++) {
                                if (orig.includes(this.pnr[0][i])) {
                                    y = i;
                                }
                                if (dest.includes(this.pnr[0][i])) {
                                    x = i;
                                }
                            }
                            fare += this.pnr[x][y];
                        }
                        else {
                            var line = 1;
                            for (var i = 0; i < this.lrtLine1.length; i++) {
                                if (orig.includes(this.lrtLine1[0][i])) {
                                    y = i;
                                    line = 1;
                                }
                                if (dest.includes(this.lrtLine1[i][0])) {
                                    x = i;
                                }
                            }
                            for (var i = 0; i < this.lrtLine2.length; i++) {
                                if (orig.includes(this.lrtLine2[0][i])) {
                                    y = i;
                                    line = 2;
                                }
                                if (dest.includes(this.lrtLine2[i][0])) {
                                    x = i;
                                }
                            }
                            if (line == 1)
                                fare += this.lrtLine1[x][y];
                            else
                                fare += this.lrtLine2[x][y];
                        }
                    }
                    this.legTransit.push({
                        tripID: id,
                        seq: se,
                        distance: distance,
                        legGeom: leg['legGeometry']['points'],
                        from: leg['from']['name'],
                        to: leg['to']['name'],
                        time: leg['duration'] / 60,
                        transMode: mode,
                        route: leg['route'],
                        routeLongName: leg['routeLongName']
                    });
                    totaldistance += distance;
                }
            }
            totaldistance = parseFloat(totaldistance.toPrecision(4));
            walkDistance = parseFloat(walkDistance.toPrecision(2));
            fare = parseFloat(fare.toPrecision(4));
            this.trip.push({
                id: id,
                transfer: data.itineraries[id].transfers,
                fare: fare,
                totalWalkDistance: walkDistance,
                totaldistance: totaldistance,
                legs: data.itineraries[id].legs.length,
                totalTime: ((data.itineraries[id].duration) / 60).toPrecision(3),
                roundtrip: false
            });
        }
        this.createTrip(this.trip[this.trip.length - 1].id);
    };
    HomePage.prototype.createTrip = function (id) {
        var _this = this;
        var start = "";
        var end = "";
        var markers = [];
        var index;
        var highDistance;
        highDistance = 0;
        for (var i = 0; i < this.legTransit.length; i++) {
            console.log(this.legTransit[i].distance);
            if (this.legTransit[i].tripID == id) {
                highDistance = this.legTransit[i].distance;
                index = i;
                for (var j = 0; j < this.legTransit.length; j++) {
                    if ((highDistance < this.legTransit[j].distance) && (this.legTransit[j].transMode != "RAIL")) {
                        index = j;
                        highDistance = this.legTransit[j].distance;
                    }
                }
            }
        }
        console.log(highDistance);
        if (this.legTransit[index].distance > 2) {
            start = String(this.legTransit[index].routeLongName);
            end = String(this.legTransit[index].routeLongName);
            start = start.slice(0, start.indexOf("/"));
            end = end.slice(end.indexOf("/") + 1);
            console.log(start);
            console.log(end);
            this.geocoder.geocode({ 'address': this.address.origin }, function (results, status) {
                if (status == 'OK' && results[0]) {
                    var marker = new google.maps.Marker({
                        position: results[0].geometry.location
                    });
                    markers.push(marker);
                }
            });
            this.geocoder.geocode({ 'address': this.address.destination }, function (results, status) {
                if (status == 'OK' && results[0]) {
                    var marker = new google.maps.Marker({
                        position: results[0].geometry.location
                    });
                    markers.push(marker);
                }
            });
            this.geocoder.geocode({ 'address': start }, function (results, status) {
                if (status == 'OK' && results[0]) {
                    var marker = new google.maps.Marker({
                        position: results[0].geometry.location
                    });
                    markers.push(marker);
                }
                else
                    console.log("start " + status + ": " + results.length);
            });
            this.geocoder.geocode({ 'address': end }, function (results, status) {
                if (status == 'OK' && results[0]) {
                    var marker = new google.maps.Marker({
                        position: results[0].geometry.location
                    });
                    markers.push(marker);
                    _this.getRest(start, end, id, markers);
                }
                else
                    console.log("end " + status + ": " + results.length);
            });
        }
    };
    HomePage.prototype.getRest = function (start, end, id, markers) {
        var _this = this;
        console.log(this.trip.length);
        var walkDistance = 0;
        var totaldistance = 0;
        var fare;
        var transfers = 0;
        var time;
        fare = 0;
        var rounddata, rounddata2, data1, data2;
        this.rsp.load(markers[2].getPosition(), markers[0].getPosition()).subscribe(function (data) {
            rounddata = data.plan;
            _this.rsp.load(markers[2].getPosition(), markers[1].getPosition()).subscribe(function (data) {
                rounddata2 = data.plan;
                var distance = 0;
                var distance2 = 0;
                for (var i = 0; i < rounddata.itineraries[0].legs.length; i++) {
                    var leg = rounddata.itineraries[0].legs[i];
                    distance += (leg['distance']) / 1000;
                }
                for (var i = 0; i < rounddata2.itineraries[0].legs.length; i++) {
                    var leg = rounddata2.itineraries[0].legs[i];
                    distance2 += (leg['distance']) / 1000;
                }
                if (distance < distance2) {
                    //get direction from origin to terminal
                    var lastIndex_1 = 0;
                    _this.rsp.load(markers[0].getPosition(), markers[2].getPosition()).subscribe(function (data) {
                        data1 = data.plan;
                        console.log(data1);
                        lastIndex_1 = data1.itineraries[0].legs.length;
                        transfers = data1.itineraries[0].transfers;
                        time = data1.itineraries[0].duration;
                        console.log(lastIndex_1);
                        for (var i = 0; i < data1.itineraries[0].legs.length; i++) {
                            var leg = data1.itineraries[0].legs[i];
                            if (leg['mode'] == "WALK") {
                                var steps = [];
                                for (var num = 0; num < leg['steps'].length; num++) {
                                    if ((leg['steps'][num]['absoluteDirection'] == "RIGHT") || (leg['steps'][num]['absoluteDirection'] == "LEFT"))
                                        steps.push("Turn " + (leg['steps'][num]['absoluteDirection']).toLowerCase() + " onto " + leg['steps'][num]['streetName']);
                                    else
                                        steps.push("Head " + (leg['steps'][num]['absoluteDirection']).toLowerCase() + " on " + leg['steps'][num]['streetName']);
                                }
                                _this.legWalk.push({
                                    tripID: id + 1,
                                    seq: i,
                                    distance: (leg['distance']) / 1000,
                                    legGeom: leg['legGeometry']['points'],
                                    from: leg['from']['name'],
                                    to: leg['to']['name'],
                                    time: leg['duration'] / 60,
                                    transMode: "WALK",
                                    steps: steps
                                });
                                walkDistance += (leg['distance']) / 1000;
                                totaldistance += (leg['distance']) / 1000;
                            }
                            else {
                                distance = (leg['distance']) / 1000;
                                var mode = leg['routeId'];
                                if (mode.includes("PUJ")) {
                                    mode = "PUJ";
                                    if (distance > 4) {
                                        if (distance - parseInt(distance) > 0.49)
                                            fare += 8 + ((parseInt(distance) - 3) * 1.50);
                                        else
                                            fare += 8 + ((parseInt(distance) - 4) * 1.50);
                                    }
                                    else
                                        fare += 8;
                                }
                                else if (mode.includes("PUB")) {
                                    mode = "PUB";
                                    var tempFare = void 0;
                                    if (distance > 5) {
                                        if (distance - parseInt(distance) > 0.49)
                                            tempFare = 10 + ((parseInt(distance) - 4) * 1.85);
                                        else
                                            tempFare = 10 + ((parseInt(distance) - 5) * 1.85);
                                        if (tempFare - parseInt(tempFare) < 0.13)
                                            fare += parseInt(tempFare);
                                        else if (tempFare - parseInt(tempFare) < 0.38)
                                            fare += parseInt(tempFare) + 0.25;
                                        else if (tempFare - parseInt(tempFare) < 0.88)
                                            fare += parseInt(tempFare) + 0.50;
                                        else
                                            fare += parseInt(tempFare) + 1;
                                    }
                                    else
                                        fare += 10;
                                }
                                else if (mode.includes("TODA")) {
                                    mode = "TODA";
                                    if (distance > 1) {
                                        if (distance - parseInt(distance) > 0.49)
                                            fare += 8.50 + (parseInt(distance));
                                        else
                                            fare += 8.50 + (parseInt(distance) - 1);
                                    }
                                    else
                                        fare += 8.50;
                                }
                                else {
                                    var orig = leg['from']['name'];
                                    var dest = leg['to']['name'];
                                    var x = 0, y = 0;
                                    mode = "RAIL";
                                    if (orig.includes("MRT")) {
                                        for (var i_1 = 0; i_1 < _this.mrt3.length; i_1++) {
                                            if (orig.includes(_this.mrt3[0][i_1])) {
                                                y = i_1;
                                            }
                                            if (dest.includes(_this.mrt3[0][i_1])) {
                                                x = i_1;
                                            }
                                        }
                                        fare += _this.mrt3[x][y];
                                    }
                                    else if (orig.includes("PNR")) {
                                        for (var i_2 = 0; i_2 < _this.pnr.length; i_2++) {
                                            if (orig.includes(_this.pnr[0][i_2])) {
                                                y = i_2;
                                            }
                                            if (dest.includes(_this.pnr[0][i_2])) {
                                                x = i_2;
                                            }
                                        }
                                        fare += _this.pnr[x][y];
                                    }
                                    else {
                                        var line = 1;
                                        for (var i_3 = 0; i_3 < _this.lrtLine1.length; i_3++) {
                                            if (orig.includes(_this.lrtLine1[0][i_3])) {
                                                y = i_3;
                                                line = 1;
                                            }
                                            if (dest.includes(_this.lrtLine1[i_3][0])) {
                                                x = i_3;
                                            }
                                        }
                                        for (var i_4 = 0; i_4 < _this.lrtLine2.length; i_4++) {
                                            if (orig.includes(_this.lrtLine2[0][i_4])) {
                                                y = i_4;
                                                line = 2;
                                            }
                                            if (dest.includes(_this.lrtLine2[i_4][0])) {
                                                x = i_4;
                                            }
                                        }
                                        if (line == 1)
                                            fare += _this.lrtLine1[x][y];
                                        else
                                            fare += _this.lrtLine2[x][y];
                                    }
                                }
                                _this.legTransit.push({
                                    tripID: id + 1,
                                    seq: i,
                                    distance: distance,
                                    legGeom: leg['legGeometry']['points'],
                                    from: leg['from']['name'],
                                    to: leg['to']['name'],
                                    time: leg['duration'] / 60,
                                    transMode: mode,
                                    route: leg['route'],
                                    routeLongName: leg['routeLongName']
                                });
                                totaldistance += distance;
                            }
                        }
                    });
                    _this.rsp.load(markers[2].getPosition(), markers[1].getPosition()).subscribe(function (data) {
                        data2 = data.plan;
                        var ind;
                        ind = 1;
                        console.log(data2);
                        for (var i = lastIndex_1; i < data2.itineraries[0].legs.length + lastIndex_1 - 1; i++) {
                            var leg = data2.itineraries[0].legs[ind];
                            if (leg['mode'] == "WALK") {
                                var steps = [];
                                for (var num = 0; num < leg['steps'].length; num++) {
                                    if ((leg['steps'][num]['absoluteDirection'] == "RIGHT") || (leg['steps'][num]['absoluteDirection'] == "LEFT"))
                                        steps.push("Turn " + (leg['steps'][num]['absoluteDirection']).toLowerCase() + " onto " + leg['steps'][num]['streetName']);
                                    else
                                        steps.push("Head " + (leg['steps'][num]['absoluteDirection']).toLowerCase() + " on " + leg['steps'][num]['streetName']);
                                }
                                _this.legWalk.push({
                                    tripID: id + 1,
                                    seq: i,
                                    distance: (leg['distance']) / 1000,
                                    legGeom: leg['legGeometry']['points'],
                                    from: leg['from']['name'],
                                    to: leg['to']['name'],
                                    time: leg['duration'] / 60,
                                    transMode: "WALK",
                                    steps: steps
                                });
                                walkDistance += (leg['distance']) / 1000;
                                totaldistance += (leg['distance']) / 1000;
                            }
                            else {
                                distance = (leg['distance']) / 1000;
                                var mode = leg['routeId'];
                                if (mode.includes("PUJ")) {
                                    mode = "PUJ";
                                    if (distance > 4) {
                                        if (distance - parseInt(distance) > 0.49)
                                            fare += 8 + ((parseInt(distance) - 3) * 1.50);
                                        else
                                            fare += 8 + ((parseInt(distance) - 4) * 1.50);
                                    }
                                    else
                                        fare += 8;
                                }
                                else if (mode.includes("PUB")) {
                                    mode = "PUB";
                                    var tempFare = void 0;
                                    if (distance > 5) {
                                        if (distance - parseInt(distance) > 0.49)
                                            tempFare = 10 + ((parseInt(distance) - 4) * 1.85);
                                        else
                                            tempFare = 10 + ((parseInt(distance) - 5) * 1.85);
                                        if (tempFare - parseInt(tempFare) < 0.13)
                                            fare += parseInt(tempFare);
                                        else if (tempFare - parseInt(tempFare) < 0.38)
                                            fare += parseInt(tempFare) + 0.25;
                                        else if (tempFare - parseInt(tempFare) < 0.88)
                                            fare += parseInt(tempFare) + 0.50;
                                        else
                                            fare += parseInt(tempFare) + 1;
                                    }
                                    else
                                        fare += 10;
                                }
                                else if (mode.includes("TODA")) {
                                    mode = "TODA";
                                    if (distance > 1) {
                                        if (distance - parseInt(distance) > 0.49)
                                            fare += 8.50 + (parseInt(distance));
                                        else
                                            fare += 8.50 + (parseInt(distance) - 1);
                                    }
                                    else
                                        fare += 8.50;
                                }
                                else {
                                    var orig = leg['from']['name'];
                                    var dest = leg['to']['name'];
                                    var x = 0, y = 0;
                                    mode = "RAIL";
                                    if (orig.includes("MRT")) {
                                        for (var i_5 = 0; i_5 < _this.mrt3.length; i_5++) {
                                            if (orig.includes(_this.mrt3[0][i_5])) {
                                                y = i_5;
                                            }
                                            if (dest.includes(_this.mrt3[0][i_5])) {
                                                x = i_5;
                                            }
                                        }
                                        fare += _this.mrt3[x][y];
                                    }
                                    else if (orig.includes("PNR")) {
                                        for (var i_6 = 0; i_6 < _this.pnr.length; i_6++) {
                                            if (orig.includes(_this.pnr[0][i_6])) {
                                                y = i_6;
                                            }
                                            if (dest.includes(_this.pnr[0][i_6])) {
                                                x = i_6;
                                            }
                                        }
                                        fare += _this.pnr[x][y];
                                    }
                                    else {
                                        var line = 1;
                                        for (var i_7 = 0; i_7 < _this.lrtLine1.length; i_7++) {
                                            if (orig.includes(_this.lrtLine1[0][i_7])) {
                                                y = i_7;
                                                line = 1;
                                            }
                                            if (dest.includes(_this.lrtLine1[i_7][0])) {
                                                x = i_7;
                                            }
                                        }
                                        for (var i_8 = 0; i_8 < _this.lrtLine2.length; i_8++) {
                                            if (orig.includes(_this.lrtLine2[0][i_8])) {
                                                y = i_8;
                                                line = 2;
                                            }
                                            if (dest.includes(_this.lrtLine2[i_8][0])) {
                                                x = i_8;
                                            }
                                        }
                                        if (line == 1)
                                            fare += _this.lrtLine1[x][y];
                                        else
                                            fare += _this.lrtLine2[x][y];
                                    }
                                }
                                _this.legTransit.push({
                                    tripID: id + 1,
                                    seq: i,
                                    distance: distance,
                                    legGeom: leg['legGeometry']['points'],
                                    from: leg['from']['name'],
                                    to: leg['to']['name'],
                                    time: leg['duration'] / 60,
                                    transMode: mode,
                                    route: leg['route'],
                                    routeLongName: leg['routeLongName']
                                });
                                totaldistance += distance;
                            }
                            ind++;
                        }
                        totaldistance = parseFloat(totaldistance.toPrecision(3));
                        walkDistance = parseFloat(walkDistance.toPrecision(2));
                        fare = parseFloat(fare.toPrecision(4));
                        time = (time + data2.itineraries[0].duration) / 60;
                        time = parseFloat(time.toPrecision(2));
                        _this.trip.push({
                            id: id + 1,
                            transfer: data2.itineraries[0].transfers + transfers + 1,
                            fare: fare,
                            totalWalkDistance: walkDistance,
                            totaldistance: totaldistance,
                            legs: data2.itineraries[0].legs.length + lastIndex_1,
                            totalTime: time,
                            roundtrip: true
                        });
                    });
                }
                else {
                    //get direction from origin to terminal
                    var lastIndex_2 = 0;
                    _this.rsp.load(markers[0].getPosition(), markers[3].getPosition()).subscribe(function (data) {
                        data1 = data.plan;
                        console.log(data1);
                        lastIndex_2 = data1.itineraries[0].legs.length;
                        transfers = data1.itineraries[0].transfers;
                        time = data1.itineraries[0].duration;
                        for (var i = 0; i < data1.itineraries[0].legs.length; i++) {
                            var leg = data1.itineraries[0].legs[i];
                            if (leg['mode'] == "WALK") {
                                var steps = [];
                                for (var num = 0; num < leg['steps'].length; num++) {
                                    if ((leg['steps'][num]['absoluteDirection'] == "RIGHT") || (leg['steps'][num]['absoluteDirection'] == "LEFT"))
                                        steps.push("Turn " + leg['steps'][num]['absoluteDirection'] + " onto " + leg['steps'][num]['streetName']);
                                    else
                                        steps.push("Head " + leg['steps'][num]['absoluteDirection'] + " on " + leg['steps'][num]['streetName']);
                                }
                                _this.legWalk.push({
                                    tripID: id + 1,
                                    seq: i,
                                    distance: (leg['distance']) / 1000,
                                    legGeom: leg['legGeometry']['points'],
                                    from: leg['from']['name'],
                                    to: leg['to']['name'],
                                    time: leg['duration'] / 60,
                                    transMode: "WALK",
                                    steps: steps
                                });
                                walkDistance += (leg['distance']) / 1000;
                                totaldistance += (leg['distance']) / 1000;
                            }
                            else {
                                distance = (leg['distance']) / 1000;
                                var mode = leg['routeId'];
                                if (mode.includes("PUJ")) {
                                    mode = "PUJ";
                                    if (distance > 4) {
                                        if (distance - parseInt(distance) > 0.49)
                                            fare += 8 + ((parseInt(distance) - 3) * 1.50);
                                        else
                                            fare += 8 + ((parseInt(distance) - 4) * 1.50);
                                    }
                                    else
                                        fare += 8;
                                }
                                else if (mode.includes("PUB")) {
                                    mode = "PUB";
                                    var tempFare = void 0;
                                    if (distance > 5) {
                                        if (distance - parseInt(distance) > 0.49)
                                            tempFare = 10 + ((parseInt(distance) - 4) * 1.85);
                                        else
                                            tempFare = 10 + ((parseInt(distance) - 5) * 1.85);
                                        if (tempFare - parseInt(tempFare) < 0.13)
                                            fare += parseInt(tempFare);
                                        else if (tempFare - parseInt(tempFare) < 0.38)
                                            fare += parseInt(tempFare) + 0.25;
                                        else if (tempFare - parseInt(tempFare) < 0.88)
                                            fare += parseInt(tempFare) + 0.50;
                                        else
                                            fare += parseInt(tempFare) + 1;
                                    }
                                    else
                                        fare += 10;
                                }
                                else if (mode.includes("TODA")) {
                                    mode = "TODA";
                                    if (distance > 1) {
                                        if (distance - parseInt(distance) > 0.49)
                                            fare += 8.50 + (parseInt(distance));
                                        else
                                            fare += 8.50 + (parseInt(distance) - 1);
                                    }
                                    else
                                        fare += 8.50;
                                }
                                else {
                                    var orig = leg['from']['name'];
                                    var dest = leg['to']['name'];
                                    var x = 0, y = 0;
                                    mode = "RAIL";
                                    if (orig.includes("MRT")) {
                                        for (var i_9 = 0; i_9 < _this.mrt3.length; i_9++) {
                                            if (orig.includes(_this.mrt3[0][i_9])) {
                                                y = i_9;
                                            }
                                            if (dest.includes(_this.mrt3[0][i_9])) {
                                                x = i_9;
                                            }
                                        }
                                        fare += _this.mrt3[x][y];
                                    }
                                    else if (orig.includes("PNR")) {
                                        for (var i_10 = 0; i_10 < _this.pnr.length; i_10++) {
                                            if (orig.includes(_this.pnr[0][i_10])) {
                                                y = i_10;
                                            }
                                            if (dest.includes(_this.pnr[0][i_10])) {
                                                x = i_10;
                                            }
                                        }
                                        fare += _this.pnr[x][y];
                                    }
                                    else {
                                        var line = 1;
                                        for (var i_11 = 0; i_11 < _this.lrtLine1.length; i_11++) {
                                            if (orig.includes(_this.lrtLine1[0][i_11])) {
                                                y = i_11;
                                                line = 1;
                                            }
                                            if (dest.includes(_this.lrtLine1[i_11][0])) {
                                                x = i_11;
                                            }
                                        }
                                        for (var i_12 = 0; i_12 < _this.lrtLine2.length; i_12++) {
                                            if (orig.includes(_this.lrtLine2[0][i_12])) {
                                                y = i_12;
                                                line = 2;
                                            }
                                            if (dest.includes(_this.lrtLine2[i_12][0])) {
                                                x = i_12;
                                            }
                                        }
                                        if (line == 1)
                                            fare += _this.lrtLine1[x][y];
                                        else
                                            fare += _this.lrtLine2[x][y];
                                    }
                                }
                                _this.legTransit.push({
                                    tripID: id + 1,
                                    seq: i,
                                    distance: distance,
                                    legGeom: leg['legGeometry']['points'],
                                    from: leg['from']['name'],
                                    to: leg['to']['name'],
                                    time: leg['duration'] / 60,
                                    transMode: mode,
                                    route: leg['route'],
                                    routeLongName: leg['routeLongName']
                                });
                                totaldistance += distance;
                            }
                        }
                    });
                    _this.rsp.load(markers[3].getPosition(), markers[1].getPosition()).subscribe(function (data) {
                        data2 = data.plan;
                        var ind;
                        ind = 1;
                        console.log(data2);
                        for (var i = lastIndex_2; i < data2.itineraries[0].legs.length + lastIndex_2 - 1; i++) {
                            var leg = data2.itineraries[0].legs[ind];
                            if (leg['mode'] == "WALK") {
                                var steps = [];
                                for (var num = 0; num < leg['steps'].length; num++) {
                                    if ((leg['steps'][num]['absoluteDirection'] == "RIGHT") || (leg['steps'][num]['absoluteDirection'] == "LEFT"))
                                        steps.push("Turn " + leg['steps'][num]['absoluteDirection'] + " onto " + leg['steps'][num]['streetName']);
                                    else
                                        steps.push("Head " + leg['steps'][num]['absoluteDirection'] + " on " + leg['steps'][num]['streetName']);
                                }
                                _this.legWalk.push({
                                    tripID: id + 1,
                                    seq: i,
                                    distance: (leg['distance']) / 1000,
                                    legGeom: leg['legGeometry']['points'],
                                    from: leg['from']['name'],
                                    to: leg['to']['name'],
                                    time: leg['duration'] / 60,
                                    transMode: "WALK",
                                    steps: steps
                                });
                                walkDistance += (leg['distance']) / 1000;
                                totaldistance += (leg['distance']) / 1000;
                            }
                            else {
                                distance = (leg['distance']) / 1000;
                                var mode = leg['routeId'];
                                if (mode.includes("PUJ")) {
                                    mode = "PUJ";
                                    if (distance > 4) {
                                        if (distance - parseInt(distance) > 0.49)
                                            fare += 8 + ((parseInt(distance) - 3) * 1.50);
                                        else
                                            fare += 8 + ((parseInt(distance) - 4) * 1.50);
                                    }
                                    else
                                        fare += 8;
                                }
                                else if (mode.includes("PUB")) {
                                    mode = "PUB";
                                    var tempFare = void 0;
                                    if (distance > 5) {
                                        if (distance - parseInt(distance) > 0.49)
                                            tempFare = 10 + ((parseInt(distance) - 4) * 1.85);
                                        else
                                            tempFare = 10 + ((parseInt(distance) - 5) * 1.85);
                                        if (tempFare - parseInt(tempFare) < 0.13)
                                            fare += parseInt(tempFare);
                                        else if (tempFare - parseInt(tempFare) < 0.38)
                                            fare += parseInt(tempFare) + 0.25;
                                        else if (tempFare - parseInt(tempFare) < 0.88)
                                            fare += parseInt(tempFare) + 0.50;
                                        else
                                            fare += parseInt(tempFare) + 1;
                                    }
                                    else
                                        fare += 10;
                                }
                                else if (mode.includes("TODA")) {
                                    mode = "TODA";
                                    if (distance > 1) {
                                        if (distance - parseInt(distance) > 0.49)
                                            fare += 8.50 + (parseInt(distance));
                                        else
                                            fare += 8.50 + (parseInt(distance) - 1);
                                    }
                                    else
                                        fare += 8.50;
                                }
                                else {
                                    var orig = leg['from']['name'];
                                    var dest = leg['to']['name'];
                                    var x = 0, y = 0;
                                    mode = "RAIL";
                                    if (orig.includes("MRT")) {
                                        for (var i_13 = 0; i_13 < _this.mrt3.length; i_13++) {
                                            if (orig.includes(_this.mrt3[0][i_13])) {
                                                y = i_13;
                                            }
                                            if (dest.includes(_this.mrt3[0][i_13])) {
                                                x = i_13;
                                            }
                                        }
                                        fare += _this.mrt3[x][y];
                                    }
                                    else if (orig.includes("PNR")) {
                                        for (var i_14 = 0; i_14 < _this.pnr.length; i_14++) {
                                            if (orig.includes(_this.pnr[0][i_14])) {
                                                y = i_14;
                                            }
                                            if (dest.includes(_this.pnr[0][i_14])) {
                                                x = i_14;
                                            }
                                        }
                                        fare += _this.pnr[x][y];
                                    }
                                    else {
                                        var line = 1;
                                        for (var i_15 = 0; i_15 < _this.lrtLine1.length; i_15++) {
                                            if (orig.includes(_this.lrtLine1[0][i_15])) {
                                                y = i_15;
                                                line = 1;
                                            }
                                            if (dest.includes(_this.lrtLine1[i_15][0])) {
                                                x = i_15;
                                            }
                                        }
                                        for (var i_16 = 0; i_16 < _this.lrtLine2.length; i_16++) {
                                            if (orig.includes(_this.lrtLine2[0][i_16])) {
                                                y = i_16;
                                                line = 2;
                                            }
                                            if (dest.includes(_this.lrtLine2[i_16][0])) {
                                                x = i_16;
                                            }
                                        }
                                        if (line == 1)
                                            fare += _this.lrtLine1[x][y];
                                        else
                                            fare += _this.lrtLine2[x][y];
                                    }
                                }
                                _this.legTransit.push({
                                    tripID: id + 1,
                                    seq: i,
                                    distance: distance,
                                    legGeom: leg['legGeometry']['points'],
                                    from: leg['from']['name'],
                                    to: leg['to']['name'],
                                    time: leg['duration'] / 60,
                                    transMode: mode,
                                    route: leg['route'],
                                    routeLongName: leg['routeLongName']
                                });
                                totaldistance += distance;
                            }
                            ind++;
                        }
                        totaldistance = parseFloat(totaldistance.toPrecision(3));
                        walkDistance = parseFloat(walkDistance.toPrecision(2));
                        fare = parseFloat(fare.toPrecision(4));
                        time = (time + data2.itineraries[0].duration) / 60;
                        time = parseFloat(time.toPrecision(2));
                        _this.trip.push({
                            id: id + 1,
                            transfer: data2.itineraries[0].transfers + transfers + 1,
                            fare: fare,
                            totalWalkDistance: walkDistance,
                            totaldistance: totaldistance,
                            legs: data2.itineraries[0].legs.length + lastIndex_2,
                            totalTime: time,
                            roundtrip: true
                        });
                    });
                }
            });
        });
    };
    HomePage.prototype.seeDetails = function (i) {
        var trip;
        var legW;
        var legT;
        trip = this.trip, legW = this.legWalk, legT = this.legTransit;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__details_details__["a" /* DetailsPage */], { "email": this.email, "i": i, "trip": trip, "legW": legW, "legT": legT, "address": this.address }).catch(function (err) {
            console.log(err);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], HomePage.prototype, "mapElement", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Mark Samson\Documents\GitHub\Project-design-2\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-grid no-padding no-margin>\n\n      <ion-row>\n\n        <ion-col col-2>\n\n          <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n          </button>\n\n        </ion-col>\n\n      <ion-col col-98>\n\n        <ion-row>\n\n          <ion-col>\n\n            <ion-searchbar placeholder="Origin" type="text" (ionInput)="showAddress1()" (ionFocus)="checkFocus(1)" [(ngModel)]="address.origin"></ion-searchbar>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col>\n\n            <ion-searchbar placeholder="Destination" type="text" (ionInput)="showAddress2()" (ionFocus)="checkFocus(2)" [(ngModel)]="address.destination"></ion-searchbar>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col text-center no-padding>\n\n            <button color=dark ion-button block (click)="findRoute(address)">GO</button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-col>\n\n    </ion-row>\n\n    </ion-grid>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-navbar>\n\n      <button ion-button menuToggle icon-only class="menu-button" >\n\n        <ion-icon name=\'menu\'></ion-icon>\n\n      </button>\n\n      <ion-title>Menus</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{ p.title }}\n\n      </button>\n\n  </ion-list>\n\n  </ion-content>\n\n</ion-menu>\n\n\n\n<ion-content>\n\n    <div>\n\n      <ion-list [hidden]="autocompleteItems1.length == 0">\n\n        <ion-item class="limit-item" *ngFor="let item1 of autocompleteItems1" tappable (click)="selectOrigin(item1)">\n\n          {{ item1 }}\n\n        </ion-item>\n\n      </ion-list>\n\n      <ion-list [hidden]="autocompleteItems2.length == 0">\n\n        <ion-item class="limit-item" *ngFor="let item2 of autocompleteItems2" tappable (click)="selectDest(item2)">\n\n          {{ item2 }}\n\n        </ion-item>\n\n      </ion-list>\n\n    </div>\n\n    <div [hidden]="!showMap" #map id="map"></div>\n\n    <div [hidden]="!showResults" class="results">\n\n      <div>\n\n        <ion-list scrollable=true>\n\n            <ion-item>\n\n                <ion-toolbar>\n\n                    <ion-segment color=primary>\n\n                        <ion-segment-button value="lessfare" (click)="sortFare()">\n\n                            <!-- <ion-img width="20" height="20" src="./assets/imgs/lessfare.png">Less Fare</ion-img> -->\n\n                            Less fare\n\n                        </ion-segment-button>\n\n                        <ion-segment-button value="lesswalk" (click)="sortWalk()">\n\n                            <!-- <ion-img width="20" height="20" src="./assets/imgs/lesswalk.png">Less Walk</ion-img> -->\n\n                            Less walk\n\n                        </ion-segment-button>\n\n                        <ion-segment-button value="lesstransfer" (click)="sortTransfer()">\n\n                            Less transfer\n\n                        </ion-segment-button>\n\n                        <ion-segment-button value="lesstime" (click)="sortTime()">\n\n                            <!-- <ion-img width="20" height="20" src="./assets/imgs/roundtrip.png">Round-trip</ion-img> -->\n\n                            Less time\n\n                        </ion-segment-button>\n\n                    </ion-segment>\n\n                </ion-toolbar>\n\n            </ion-item>\n\n            <ion-list>\n\n                <ion-item class="opt" text-wrap *ngFor="let t of trip; let i = index" tappable (click)="seeDetails(i)">\n\n                    <ion-list-header class="title">\n\n                        Route #{{ t.id+1 }}\n\n                    </ion-list-header>\n\n                    <p item-right>{{ t.totalTime }} min</p>\n\n                    <p>Transfers: {{ t.transfer }}</p>\n\n                    <p>Fare: P{{ t.fare }}</p>\n\n                    <p>Distance: {{ t.totaldistance }} km</p>\n\n                    <p>Walk, about {{ t.totalWalkDistance }} km</p>\n\n                    <p [hidden]="!t.roundtrip">This is a round-trip feature. This will direct you to the nearest terminal.</p>\n\n                </ion-item>\n\n            </ion-list>\n\n        </ion-list>\n\n        <button class="close-button" color=dark ion-button block (click)="close()">Close</button>\n\n      </div>\n\n    </div>\n\n</ion-content>\n\n\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\Mark Samson\Documents\GitHub\Project-design-2\src\pages\home\home.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__providers_remote_service_remote_service__["a" /* RemoteServiceProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_4__providers_remote_service_remote_service__["a" /* RemoteServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoteServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_twitter__ = __webpack_require__(301);
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
    function RemoteServiceProvider(http, twitter) {
        this.http = http;
        this.twitter = twitter;
        this.token = null;
        this.tokenSecret = null;
        this.consumerKey = '	IZ8IT77kPfcpF3L7BZuWdkiXd';
        this.consumerSecret = '	rlO4tWDmlujHTHoN3WIUW5AXVM4OtTgCcpE28SBUBn8aDrnsxa';
    }
    RemoteServiceProvider.prototype.load = function (origin, dest) {
        var url = 'http://13.71.136.189:8080/otp/routers/default/plan?fromPlace=' + origin + '&toPlace=' + dest + '&date=2017/01/09&time=12:00:00&mode=TRANSIT%2CWALK&numItineraries=5&maxWalkDistance=1000&arriveBy=false&wheelchair=false';
        var response = this.http.get(url).map(function (res) { return res.json(); });
        return response;
    };
    RemoteServiceProvider.prototype.setTokens = function (token, tokenSecret) {
        this.token = token;
        this.tokenSecret = tokenSecret;
    };
    RemoteServiceProvider.prototype.getTwitterStatus = function () {
        return this.twitter.get('https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=MMDA&count=2', {
            count: 2
        }, {
            consumerKey: this.consumerKey,
            consumerSecret: this.consumerSecret
        }, {
            token: this.token,
            tokenSecret: this.tokenSecret
        })
            .map(function (res) { return res.json(); });
    };
    ;
    RemoteServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3_ng2_twitter__["a" /* TwitterService */]])
    ], RemoteServiceProvider);
    return RemoteServiceProvider;
}());

/*load(origin, dest){
  this.baseUrl = 'http://192.168.1.6:8080/otp/routers/default/plan?fromPlace='+origin+'&toPlace='+dest+'&date=2017/01/09&time=11:00:00&mode=TRANSIT%2CWALK&numItineraries=5&maxWalkDistance=1000&arriveBy=false&wheelchair=false';
  if (this.data) {
    for (var entry in this.data) delete this.data[entry];
    return Promise.resolve(this.data);
  }
  let opt: RequestOptions;
  let myHeaders: Headers = new Headers;

  myHeaders.set('Accept', 'application/json');
  myHeaders.append('Content-type', 'application/json');
  opt = new RequestOptions({
    headers: myHeaders
  })
  return new Promise(resolve => {
    this.http.get(this.baseUrl, opt)
      .map(res => res.json())
      .subscribe(data => {
        this.data = data.plan;
        resolve(this.data);
      });
  });
}
runSnapToRoad(path) {
  let url: any;
  url= 'https://roads.googleapis.com/v1/snapToRoads?path=';
  for (let i = 0; i < path.length; i++) {
    if(i==0)
      url= url + path[i].latitude + "," + path[i].longitude ;
    else
      url= url + '|' + path[i].latitude + "," + path[i].longitude ;
  }
  url = url + '&interpolate=true&key=AIzaSyCEGIORWkWAkATmL3elnWiGD3SnVCYQzyU';

  if (this.snap) {
    return Promise.resolve(this.snap);
  }
  let opt: RequestOptions;
  let myHeaders: Headers = new Headers;

  myHeaders.set('Accept', 'application/json');
  myHeaders.append('Content-type', 'application/json');
  opt = new RequestOptions({
    headers: myHeaders
  })
  return new Promise(resolve => {
    this.http.get(url, opt)
      .map(res => res.json())
      .subscribe(snap => {
        this.snap = snap;
        resolve(this.snap);
      });
  });
}
}*/
//# sourceMappingURL=remote-service.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MytripPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
var MytripPage = (function () {
    //trip: FirebaseListObservable<any>;
    function MytripPage(navCtrl) {
        this.navCtrl = navCtrl;
        //this.trip = angFire.list('/trip');
    }
    MytripPage.prototype.ionViewDidLoad = function () {
        //console.log(this.trip);
    };
    MytripPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mytrip',template:/*ion-inline-start:"C:\Users\Mark Samson\Documents\GitHub\Project-design-2\src\pages\mytrip\mytrip.html"*/'<ion-header>\n\n    <ion-navbar>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <div>\n\n        <ion-list>\n\n            <ion-item>\n\n                \n\n            </ion-item>\n\n        </ion-list>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Mark Samson\Documents\GitHub\Project-design-2\src\pages\mytrip\mytrip.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], MytripPage);
    return MytripPage;
}());

//# sourceMappingURL=mytrip.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
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
            selector: 'page-settings',template:/*ion-inline-start:"C:\Users\Mark Samson\Documents\GitHub\Project-design-2\src\pages\settings\settings.html"*/'<ion-header>\n\n    <ion-navbar>\n\n    </ion-navbar>\n\n</ion-header>'/*ion-inline-end:"C:\Users\Mark Samson\Documents\GitHub\Project-design-2\src\pages\settings\settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
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
    function DetailsPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.polylines = [];
        this.email = this.navParams.get("email");
        this.index = this.navParams.get("i");
        this.trip = this.navParams.get("trip");
        this.legWalk = this.navParams.get("legW");
        this.legTransit = this.navParams.get("legT");
        this.address = this.navParams.get('address');
        //this.sTrip = angFire.list('/trip');
        //this.slegWalk = angFire.list('/legWalk');
        //this.slegTransit = angFire.list('/legTransit');
        this.markers = [];
        this.geocoder = new google.maps.Geocoder;
        this.description = [{
                distance: '',
                time: '',
                fare: '',
                fare2: '',
                route: '',
                from: '',
                to: '',
                steps: []
            }];
        this.modeIcons = [];
        this.leg = [];
        this.drop = true;
        this.lrtLine2 = [
            [0, "Recto", "Legarda", "Pureza", "V. Mapa", "J. Ruiz", "Gilmore", "Betty Go", "Cubao", "Anonas", "Katipunan", "Santolan"],
            ["Recto", 0, 15, 15, 15, 20, 20, 20, 20, 25, 25, 25],
            ["Legarda", 15, 0, 15, 15, 15, 20, 20, 20, 20, 25, 25],
            ["Pureza", 15, 15, 0, 15, 15, 15, 20, 20, 20, 20, 25],
            ["V. Mapa", 15, 15, 15, 0, 15, 15, 15, 20, 20, 20, 25],
            ["J. Ruiz", 20, 15, 15, 15, 0, 15, 15, 15, 20, 20, 20],
            ["Gilmore", 20, 20, 15, 15, 15, 0, 15, 15, 15, 20, 20],
            ["Betty Go", 20, 20, 20, 15, 15, 15, 0, 15, 15, 15, 20],
            ["Cubao", 20, 20, 20, 20, 15, 15, 15, 0, 15, 15, 15],
            ["Anonas", 25, 20, 20, 20, 20, 15, 15, 15, 0, 15, 15],
            ["Katipunan", 25, 25, 20, 20, 20, 20, 15, 15, 15, 0, 15],
            ["Santolan", 25, 25, 25, 25, 20, 20, 20, 15, 15, 15, 0]
        ];
        this.lrtLine1 = [
            [0, "Baclaran", "EDSA", "Libertad", "Gil Puyat", "Vito Cruz", "Quirino", "Pedro Gil", "UN Ave", "Central Terminal", "Carriedo", "Doroteo Jose", "Bambang", "Tayuman", "Blumentritt", "Abad Santos", "R. Papa", "5th Ave", "Monumento", "Balintawak", "Roosevelt"],
            ["Baclaran", 0, 15, 15, 15, 15, 15, 20, 20, 20, 20, 20, 20, 30, 30, 30, 30, 30, 30, 30, 30],
            ["EDSA", 15, 0, 15, 15, 15, 15, 15, 20, 20, 20, 20, 20, 20, 30, 30, 30, 30, 30, 30, 30],
            ["Libertad", 15, 15, 0, 15, 15, 15, 15, 15, 20, 20, 20, 20, 20, 20, 30, 30, 30, 30, 30, 30],
            ["Gil Puyat", 15, 15, 15, 0, 15, 15, 15, 15, 20, 20, 20, 20, 20, 20, 20, 30, 30, 30, 30, 30],
            ["Vito Cruz", 15, 15, 15, 15, 0, 15, 15, 15, 15, 15, 20, 20, 20, 20, 20, 20, 30, 30, 30, 30],
            ["Quirino", 15, 15, 15, 15, 15, 0, 15, 15, 15, 15, 15, 20, 20, 20, 20, 20, 20, 30, 30, 30],
            ["Pedro Gil", 20, 15, 15, 15, 15, 15, 0, 15, 15, 15, 15, 15, 20, 20, 20, 20, 20, 20, 30, 30],
            ["UN Ave", 20, 20, 15, 15, 15, 15, 15, 0, 15, 15, 15, 15, 15, 20, 20, 20, 20, 20, 30, 30],
            ["Central Terminal", 20, 20, 20, 20, 15, 15, 15, 15, 0, 15, 15, 15, 15, 15, 15, 20, 20, 20, 20, 30],
            ["Carriedo", 20, 20, 20, 20, 15, 15, 15, 15, 15, 0, 15, 15, 15, 15, 15, 15, 20, 20, 20, 30],
            ["Doroteo Jose", 20, 20, 20, 20, 20, 15, 15, 15, 15, 15, 0, 15, 15, 15, 15, 15, 15, 20, 20, 30],
            ["Bambang", 20, 20, 20, 20, 20, 20, 15, 15, 15, 15, 15, 0, 15, 15, 15, 15, 15, 20, 20, 20],
            ["Tayuman", 30, 20, 20, 20, 20, 20, 20, 15, 15, 15, 15, 15, 0, 15, 15, 15, 15, 15, 20, 20],
            ["Blumentritt", 30, 30, 20, 20, 20, 20, 20, 20, 15, 15, 15, 15, 15, 0, 15, 15, 15, 15, 20, 20],
            ["Abad Santos", 30, 30, 30, 20, 20, 20, 20, 20, 15, 15, 15, 15, 15, 15, 0, 15, 15, 15, 20, 20],
            ["R. Papa", 30, 30, 30, 30, 20, 20, 20, 20, 20, 15, 15, 15, 15, 15, 15, 0, 15, 15, 15, 20],
            ["5th Avenue", 30, 30, 30, 30, 30, 20, 20, 20, 20, 20, 15, 15, 15, 15, 15, 15, 0, 15, 15, 20],
            ["Monumento", 30, 30, 30, 30, 30, 30, 20, 20, 20, 20, 20, 20, 15, 15, 15, 15, 15, 0, 15, 15],
            ["Balintawak", 30, 30, 30, 30, 30, 30, 30, 30, 20, 20, 20, 20, 20, 20, 20, 15, 15, 15, 0, 15],
            ["Roosevelt", 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 20, 20, 20, 20, 20, 20, 15, 15, 0]
        ];
        this.mrt3 = [
            [0, "North Avenue", "Quezon", "Kamuning", "Cubao", "Santolan", "Ortigas", "Shaw", "Boni", "Guadalupe", "Buendia", "Ayala", "Magallanes", "Taft Ave"],
            ["North Avenue", 0, 13, 13, 16, 16, 20, 20, 20, 24, 24, 24, 28, 28],
            ["Quezon", 13, 0, 13, 13, 16, 16, 20, 20, 20, 24, 24, 24, 28],
            ["Kamuning", 13, 13, 0, 13, 13, 16, 16, 20, 20, 20, 24, 24, 24],
            ["Cubao", 16, 13, 13, 0, 13, 13, 16, 16, 20, 20, 20, 24, 24],
            ["Santolan", 16, 16, 13, 13, 0, 13, 13, 16, 16, 20, 20, 20, 24],
            ["Ortigas", 20, 16, 16, 13, 13, 0, 13, 13, 16, 16, 20, 20, 20],
            ["Shaw", 20, 20, 16, 16, 16, 13, 0, 13, 13, 16, 16, 20, 20],
            ["Boni", 20, 20, 20, 16, 16, 13, 13, 0, 13, 13, 16, 16, 20],
            ["Guadalupe", 24, 20, 20, 20, 20, 16, 13, 13, 0, 13, 13, 16, 16],
            ["Buendia", 24, 24, 20, 20, 20, 16, 16, 13, 13, 0, 13, 13, 16],
            ["Ayala", 24, 24, 24, 20, 20, 20, 16, 16, 13, 13, 0, 13, 13],
            ["Magallanes", 28, 24, 24, 24, 24, 20, 20, 16, 16, 13, 13, 0, 13],
            ["Taft Ave", 28, 28, 24, 24, 24, 20, 20, 20, 16, 16, 13, 13, 0]
        ];
        this.pnr = [
            [0, "Tutuban", "Blumentritt", "Dapitan/Laon Laan", "España", "Santa Mesa", "Pandacan", "Paco", "San Andres", "Vito Cruz", "Buendia", "Pasay Road", "EDSA", "Nichols", "FTI", "Bicutan", "Sucat", "Alabang", "Muntinlupa", "San Pedro", "Pacita", "Golden City 1", "Biñan"],
            ["Tutuban", 0, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 16, 16, 16, 20, 24, 28, 32, 32, 32, 36, 36, 40, 44, 44],
            ["Blumentritt", 12, 0, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 16, 20, 24, 24, 28, 28, 32, 32, 36, 40, 44, 44],
            ["Dapitan/Laon Laan", 12, 12, 0, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 16, 20, 20, 24, 28, 28, 28, 32, 36, 36, 44, 44],
            ["España", 12, 12, 12, 0, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 16, 16, 20, 24, 28, 28, 28, 28, 32, 36, 40, 44],
            ["Santa Mesa", 12, 12, 12, 12, 0, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 16, 20, 20, 24, 24, 28, 28, 32, 36, 40, 40],
            ["Pandacan", 12, 12, 12, 12, 12, 0, 12, 12, 12, 12, 12, 12, 12, 12, 12, 16, 16, 20, 24, 24, 28, 24, 32, 36, 40, 40],
            ["Paco", 12, 12, 12, 12, 12, 12, 0, 12, 12, 12, 12, 12, 12, 12, 12, 12, 16, 20, 24, 24, 24, 24, 28, 32, 36, 40],
            ["San Andres", 12, 12, 12, 12, 12, 12, 12, 0, 12, 12, 12, 12, 12, 12, 12, 12, 16, 20, 20, 24, 24, 24, 28, 32, 36, 40],
            ["Vito Cruz", 12, 12, 12, 12, 12, 12, 12, 12, 0, 12, 12, 12, 12, 12, 12, 12, 16, 16, 20, 20, 24, 24, 28, 32, 36, 36],
            ["Buendia", 12, 12, 12, 12, 12, 12, 12, 12, 12, 0, 12, 12, 12, 12, 12, 12, 16, 16, 20, 20, 24, 24, 28, 32, 36, 36],
            ["Pasay Road", 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 0, 12, 12, 12, 12, 12, 12, 16, 20, 20, 20, 20, 28, 32, 36, 36],
            ["EDSA", 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 0, 12, 12, 12, 12, 12, 16, 20, 16, 20, 20, 24, 28, 32, 32],
            ["Nichols", 16, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 0, 12, 12, 12, 12, 12, 20, 16, 16, 20, 24, 24, 32, 32],
            ["FTI", 16, 16, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 0, 12, 12, 12, 12, 20, 16, 16, 20, 20, 24, 28, 32],
            ["Bicutan", 16, 20, 16, 16, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 0, 12, 12, 12, 12, 16, 16, 20, 20, 24, 28, 28],
            ["Sucat", 20, 24, 20, 16, 16, 16, 12, 12, 12, 12, 12, 12, 12, 12, 12, 0, 12, 12, 12, 12, 12, 12, 16, 20, 24, 24],
            ["Alabang", 24, 24, 20, 20, 20, 16, 16, 16, 16, 16, 12, 12, 12, 12, 12, 12, 0, 12, 12, 12, 12, 12, 12, 16, 20, 20],
            ["Muntinlupa", 28, 24, 24, 24, 20, 20, 20, 20, 16, 16, 16, 16, 12, 12, 12, 12, 12, 0, 12, 12, 12, 12, 12, 12, 16, 16],
            ["San Pedro", 32, 28, 28, 28, 24, 24, 24, 20, 20, 20, 20, 20, 16, 16, 12, 12, 12, 12, 0, 12, 12, 12, 12, 12, 16, 16],
            ["Pacita", 32, 28, 28, 28, 28, 24, 24, 24, 24, 20, 20, 20, 16, 16, 16, 12, 12, 12, 12, 0, 12, 12, 12, 12, 12, 16],
            ["Golden City 1", 32, 32, 28, 28, 28, 28, 24, 24, 24, 24, 20, 20, 16, 16, 16, 12, 12, 12, 12, 12, 0, 12, 12, 12, 12, 16],
            ["Biñan", 36, 32, 32, 32, 28, 28, 24, 24, 24, 24, 24, 20, 20, 20, 16, 12, 12, 12, 12, 12, 12, 0, 12, 12, 12, 12]
        ];
    }
    DetailsPage.prototype.ionViewDidLoad = function () {
        this.buildlist();
        this.loadMap();
    };
    DetailsPage.prototype.loadMap = function () {
        var mapOptions = {
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        ;
        this.setOrgDes();
        this.plotted(this.index);
    };
    DetailsPage.prototype.setOrgDes = function () {
        var _this = this;
        this.markers = [];
        this.geocoder.geocode({ 'address': this.address.origin }, function (results, status) {
            if (status == 'OK' && results[0]) {
                var marker = new google.maps.Marker({
                    position: results[0].geometry.location
                });
                _this.markers.push(marker);
            }
        });
        this.geocoder.geocode({ 'address': this.address.destination }, function (results, status) {
            if (status == 'OK' && results[0]) {
                var marker = new google.maps.Marker({
                    position: results[0].geometry.location,
                    map: _this.map,
                    animation: google.maps.Animation.DROP,
                    label: { text: String(_this.description.length + 1), color: 'white' },
                    icon: _this.pinSymbol("#FFF")
                });
                _this.markers.push(marker);
                _this.setMapFocus(_this.markers);
            }
        });
    };
    DetailsPage.prototype.pinSymbol = function (color) {
        return {
            path: 'M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z M -2,-30 a 2,2 0 1,1 4,0 2,2 0 1,1 -4,0',
            fillColor: color,
            fillOpacity: 1,
            strokeColor: '#000',
            strokeWeight: 2,
            scale: 1,
        };
    };
    DetailsPage.prototype.setMapFocus = function (markers) {
        var bounds = new google.maps.LatLngBounds();
        for (var i = 0; i < markers.length; i++) {
            bounds.extend(markers[i].getPosition());
        }
        this.map.fitBounds(bounds);
        this.map.setZoom(12);
    };
    DetailsPage.prototype.plotted = function (index) {
        var color = '';
        for (var i = 0; i < this.trip[index].legs; i++) {
            this.points = [];
            for (var j = 0; j < this.legWalk.length; j++) {
                if ((this.legWalk[j].tripID == this.trip[index].id) && (this.legWalk[j].seq == i)) {
                    console.log("walk");
                    this.decode(this.legWalk[j].legGeom);
                    color = 'black';
                    this.drawSnappedPolylineWalk(color);
                    var marker = new google.maps.Marker({
                        position: this.points[0],
                        map: this.map,
                        animation: google.maps.Animation.DROP,
                        icon: this.pinSymbol(color)
                    });
                    this.markers.push(marker);
                }
            }
            for (var k = 0; k < this.legTransit.length; k++) {
                if ((this.legTransit[k].tripID == this.trip[index].id) && (this.legTransit[k].seq == i)) {
                    console.log("transit");
                    if (this.legTransit[k].transMode == "PUJ") {
                        this.decode(this.legTransit[k].legGeom);
                        color = '#1C75BC';
                        this.drawSnappedPolyline(color);
                    }
                    else if (this.legTransit[k].transMode == "PUB") {
                        this.decode(this.legTransit[k].legGeom);
                        color = '#006838';
                        this.drawSnappedPolyline(color);
                    }
                    else if (this.legTransit[k].transMode == "TODA") {
                        this.decode(this.legTransit[k].legGeom);
                        color = '#FF4500';
                        this.drawSnappedPolyline(color);
                    }
                    else {
                        this.decode(this.legTransit[k].legGeom);
                        color = 'red';
                        this.drawSnappedPolyline(color);
                    }
                    var marker = new google.maps.Marker({
                        position: this.points[0],
                        map: this.map,
                        animation: google.maps.Animation.DROP,
                        icon: this.pinSymbol(color)
                    });
                    this.markers.push(marker);
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
    DetailsPage.prototype.drawSnappedPolylineWalk = function (color) {
        var lineSymbol = {
            path: google.maps.SymbolPath.CIRCLE,
            fillOpacity: 1,
            strokeOpacity: 1,
            scale: 2
        };
        var snappedPolyline = new google.maps.Polyline({
            path: this.points,
            strokeColor: color,
            strokeOpacity: 0,
            icons: [{
                    icon: lineSymbol,
                    offset: '1',
                    repeat: '20px'
                }]
        });
        snappedPolyline.setMap(this.map);
        this.polylines.push(snappedPolyline);
    };
    DetailsPage.prototype.buildlist = function () {
        var orig;
        this.leg.length = 0;
        this.description.length = 0;
        for (var i = 0; i < this.trip[this.index].legs; i++) {
            for (var j = 0; j < this.legWalk.length; j++) {
                if ((this.legWalk[j].tripID == this.trip[this.index].id) && (this.legWalk[j].seq == i)) {
                    if (this.description.length == 0)
                        orig = this.address.origin;
                    else {
                        orig = String(this.legWalk[j].from);
                        if (this.description[this.description.length - 1].route == '') {
                            if (orig.includes("MRT")) {
                                for (var i_1 = 0; i_1 < this.mrt3.length; i_1++) {
                                    if (orig.includes(this.mrt3[0][i_1]))
                                        orig = "MRT - " + this.mrt3[0][i_1] + " Station";
                                }
                            }
                            else if (orig.includes("LRT")) {
                                for (var i_2 = 0; i_2 < this.lrtLine1.length; i_2++) {
                                    if (orig.includes(this.lrtLine1[0][i_2]))
                                        orig = "LRT-1 - " + this.lrtLine1[0][i_2] + " Station";
                                }
                                for (var i_3 = 0; i_3 < this.lrtLine2.length; i_3++) {
                                    if (orig.includes(this.lrtLine2[0][i_3]))
                                        orig = "LRT-2 - " + this.lrtLine2[0][i_3] + " Station";
                                }
                            }
                            else if (orig.includes("PNR")) {
                                for (var i_4 = 0; i_4 < this.pnr.length; i_4++) {
                                    if (orig.includes(this.pnr[0][i_4]))
                                        orig = "PNR - " + this.pnr[0][i_4] + " Station";
                                }
                            }
                        }
                    }
                    this.description.push({
                        distance: parseFloat(this.legWalk[j].distance).toPrecision(2) + " km\n",
                        time: parseFloat(this.legWalk[j].time.toPrecision(2)) + " min",
                        fare: '',
                        fare2: '',
                        route: '',
                        from: orig,
                        to: this.legWalk[j].to,
                        steps: this.legWalk[j].steps
                    });
                    this.modeIcons.push("./assets/imgs/walk.png");
                }
            }
            for (var k = 0; k < this.legTransit.length; k++) {
                var fare = void 0;
                var fare2 = void 0;
                if ((this.legTransit[k].tripID == this.trip[this.index].id) && (this.legTransit[k].seq == i)) {
                    fare = 0;
                    fare2 = 0;
                    var distance = this.legTransit[k].distance;
                    if (this.description.length == 0)
                        orig = this.address.origin;
                    else {
                        orig = this.legTransit[k].from;
                        if (orig.includes("MRT")) {
                            for (var i_5 = 0; i_5 < this.mrt3.length; i_5++) {
                                if (orig.includes(this.mrt3[0][i_5]))
                                    orig = "MRT - " + this.mrt3[0][i_5] + " Station";
                            }
                        }
                        else if (orig.includes("LRT")) {
                            for (var i_6 = 0; i_6 < this.lrtLine1.length; i_6++) {
                                if (orig.includes(this.lrtLine1[0][i_6]))
                                    orig = "LRT-1 - " + this.lrtLine1[0][i_6] + " Station";
                            }
                            for (var i_7 = 0; i_7 < this.lrtLine2.length; i_7++) {
                                if (orig.includes(this.lrtLine2[0][i_7]))
                                    orig = "LRT-2 - " + this.lrtLine2[0][i_7] + " Station";
                            }
                        }
                        else if (orig.includes("PNR")) {
                            for (var i_8 = 0; i_8 < this.pnr.length; i_8++) {
                                if (orig.includes(this.pnr[0][i_8]))
                                    orig = "PNR - " + this.pnr[0][i_8] + " Station";
                            }
                        }
                    }
                    if (this.legTransit[k].transMode == "PUJ") {
                        if (distance > 4) {
                            if (distance - parseInt(distance) > 0.49)
                                fare = 8 + ((parseInt(distance) - 3) * 1.50);
                            else
                                fare = 8 + ((parseInt(distance) - 4) * 1.50);
                        }
                        else
                            fare = 8;
                        this.description.push({
                            distance: parseFloat(this.legTransit[k].distance).toPrecision(3) + " km\n",
                            time: parseFloat(this.legTransit[k].time.toPrecision(2)) + " min",
                            fare: "P" + parseFloat(fare.toPrecision(4)),
                            fare2: '',
                            route: this.legTransit[k].route,
                            from: orig,
                            to: this.legTransit[k].to
                        });
                        this.modeIcons.push("./assets/imgs/jeep.png");
                    }
                    else if (this.legTransit[k].transMode == "PUB") {
                        if (distance > 5) {
                            if (distance - parseInt(distance) > 0.49) {
                                fare = 10 + ((parseInt(distance) - 4) * 1.85);
                                fare2 = 12 + ((parseInt(distance) - 4) * 2.2);
                            }
                            else {
                                fare = 10 + ((parseInt(distance) - 5) * 1.85);
                                fare2 = 12 + ((parseInt(distance) - 5) * 2.2);
                            }
                            if (fare - parseInt(fare) < 0.13)
                                fare = parseInt(fare);
                            else if (fare - parseInt(fare) < 0.38)
                                fare = parseInt(fare) + 0.25;
                            else if (fare - parseInt(fare) < 0.88)
                                fare = parseInt(fare) + 0.50;
                            else
                                fare = parseInt(fare) + 1;
                            console.log(distance);
                            console.log(fare2);
                            if (fare2 - parseInt(fare2) < 0.13)
                                fare2 = parseInt(fare2);
                            else if (fare2 - parseInt(fare2) < 0.38)
                                fare2 = parseInt(fare2) + 0.25;
                            else if (fare2 - parseInt(fare2) < 0.88)
                                fare2 = parseInt(fare2) + 0.50;
                            else
                                fare2 = parseInt(fare2) + 1;
                        }
                        else {
                            fare = 10;
                            fare2 = 12;
                        }
                        this.description.push({
                            distance: parseFloat(this.legTransit[k].distance).toPrecision(3) + " km\n",
                            time: parseFloat(this.legTransit[k].time.toPrecision(2)) + " min",
                            fare: "Ordinary: P" + parseFloat(fare.toPrecision(4)),
                            fare2: "Aircon: P" + parseFloat(fare2.toPrecision(4)),
                            route: "Route: " + this.legTransit[k].route,
                            from: orig,
                            to: this.legTransit[k].to
                        });
                        this.modeIcons.push("./assets/imgs/bus.png");
                    }
                    else if (this.legTransit[k].transMode == "TODA") {
                        if (distance > 1) {
                            fare = 8.50 + (parseInt(distance) - 1);
                            fare2 = 17 + (parseInt(distance) - 1);
                        }
                        else {
                            fare = 8;
                            fare2 = 17;
                        }
                        this.description.push({
                            distance: parseFloat(this.legTransit[k].distance).toPrecision(3) + " km\n",
                            time: parseFloat(this.legTransit[k].time.toPrecision(2)) + " min",
                            fare: "Regular trip: P" + parseFloat(fare.toPrecision(4)),
                            fare2: "Special trip: P" + parseFloat(fare2.toPrecision(4)),
                            route: "Route: " + this.legTransit[k].route,
                            from: orig,
                            to: this.legTransit[k].to
                        });
                        this.modeIcons.push("./assets/imgs/tricycle.png");
                    }
                    else {
                        var x = 0;
                        var y = 0;
                        var railOrig = this.legTransit[k].from;
                        var railDest = this.legTransit[k].to;
                        if (railOrig.includes("MRT")) {
                            for (var i_9 = 0; i_9 < this.mrt3.length; i_9++) {
                                if (railOrig.includes(this.mrt3[0][i_9])) {
                                    railOrig = "MRT " + this.mrt3[0][i_9];
                                    x = i_9;
                                }
                                else if (railDest.includes(this.mrt3[i_9][0])) {
                                    railDest = "MRT " + this.mrt3[i_9][0];
                                    y = i_9;
                                }
                            }
                            fare = this.mrt3[x][y];
                        }
                        else if (railOrig.includes("PNR")) {
                            for (var i_10 = 0; i_10 < this.pnr.length; i_10++) {
                                if (railOrig.includes(this.pnr[0][i_10])) {
                                    railOrig = "PNR " + this.pnr[0][i_10];
                                    x = i_10;
                                }
                                else if (railDest.includes(this.pnr[i_10][0])) {
                                    railDest = "PNR " + this.pnr[i_10][0];
                                    y = i_10;
                                }
                            }
                            fare = this.pnr[x][y];
                        }
                        else {
                            var line = 1;
                            for (var i_11 = 0; i_11 < this.lrtLine1.length; i_11++) {
                                if (railOrig.includes(this.lrtLine1[0][i_11])) {
                                    railOrig = "LRT-1 " + this.lrtLine1[0][i_11];
                                    x = i_11;
                                    line = 1;
                                }
                                else if (railDest.includes(this.lrtLine1[i_11][0])) {
                                    railDest = "LRT-1 " + this.lrtLine1[i_11][0];
                                    y = i_11;
                                }
                            }
                            for (var i_12 = 0; i_12 < this.lrtLine2.length; i_12++) {
                                if (railOrig.includes(this.lrtLine2[0][i_12])) {
                                    railOrig = "LRT-2 " + this.lrtLine2[0][i_12];
                                    x = i_12;
                                    line = 2;
                                }
                                else if (railDest.includes(this.lrtLine2[i_12][0])) {
                                    railDest = "LRT-2 " + this.lrtLine2[i_12][0];
                                    y = i_12;
                                }
                            }
                            if (line == 1)
                                fare = this.lrtLine1[x][y];
                            else
                                fare = this.lrtLine2[x][y];
                        }
                        this.description.push({
                            distance: parseFloat(this.legTransit[k].distance).toPrecision(3) + " km\n",
                            time: parseFloat(this.legTransit[k].time.toPrecision(2)) + " min",
                            fare: "P" + fare,
                            fare2: '',
                            route: '',
                            from: railOrig + " Station",
                            to: railDest + " Station"
                        });
                        this.modeIcons.push("./assets/imgs/train.png");
                    }
                }
            }
        }
    };
    DetailsPage.prototype.setDrop = function () {
        if (this.drop)
            this.drop = false;
        else
            this.drop = true;
    };
    DetailsPage.prototype.saveTrip = function () {
        var alert = this.alertCtrl.create({
            title: 'Save Route',
            message: 'Do you want to save this route?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        /*
                        this.sTrip.push({
                          email: this.email,
                          id: this.trip[this.index].id,
                          transfer: this.trip[this.index].transfer,
                          fare: this.trip[this.index].fare,
                          totalWalkDistance: this.trip[this.index].totalWalkDistance,
                          totaldistance: this.trip[this.index].totaldistance,
                          legs: this.trip[this.index].legs,
                          totalTime: this.trip[this.index].totalTime,
                          roundtrip: this.trip[this.index].roundtrip
                        });
          
                        for(let i=0; i<this.trip[this.index].legs; i++){
                          for(let j=0; j<this.legWalk.length; j++){
                            if((this.legWalk[j].tripID==this.trip[this.index].id)&&(this.legWalk[j].seq==i)){
                              this.slegWalk.push({
                                email: this.email,
                                tripID: this.legWalk[j].tripID,
                                seq: i,
                                distance: this.legWalk[j].distance,
                                legGeom: this.legWalk[j].legGeom,
                                from: this.legWalk[j].from,
                                to: this.legWalk[j].to,
                                time: this.legWalk[j].time,
                                transMode: this.legWalk[j].transMode,
                                steps: this.legWalk[j].steps
                              });
                            }
                          }
                          for(let k=0; k<this.legTransit.length; k++){
                            if((this.legTransit[k].tripID==this.trip[this.index].id)&&(this.legTransit[k].seq==i)){
                              this.slegTransit.push({
                                email: this.email,
                                tripID: this.legTransit[k].tripID,
                                seq: i,
                                distance: this.legTransit[k].distance,
                                legGeom: this.legTransit[k].legGeom,
                                from: this.legTransit[k].from,
                                to: this.legTransit[k].to,
                                time: this.legTransit[k].time,
                                transMode: this.legTransit[k].transMode,
                                route: this.legTransit[k].route,
                                routeLongName: this.legTransit[k].routeLongName
                              });
                            }
                          }
                        }
                        */
                        console.log('Route saved!');
                    }
                }
            ]
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], DetailsPage.prototype, "mapElement", void 0);
    DetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-details',template:/*ion-inline-start:"C:\Users\Mark Samson\Documents\GitHub\Project-design-2\src\pages\details\details.html"*/'<ion-header>\n\n    <ion-navbar color=primary>\n\n        <ion-buttons end>\n\n          <button (click)="saveTrip()">\n\n              <ion-icon class="btn-save" ios="ios-add-circle" md="md-add-circle"></ion-icon>\n\n          </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div #map id="map"></div>\n\n  <div scrollable=true>\n\n    <ion-grid>\n\n      <ion-row *ngFor="let item of description; let i = index;" class=\'cell-{{i}}\' text-wrap no-padding no-margin>\n\n        <ion-col col-2 class="col icon-col">\n\n          <img width="50" height="50" src="{{ modeIcons[i] }}" />\n\n        </ion-col>      \n\n        <ion-col col-95>\n\n          <p>{{ description[i].from }}</p>\n\n          <p>{{ description[i].route }}</p>\n\n          <p>{{ description[i].fare }}</p>\n\n          <p>{{ description[i].fare2 }}</p>\n\n          <button [hidden]="!description[i].steps" (click)="setDrop()">\n\n            <ion-icon ios="ios-arrow-dropdown" md="md-arrow-dropdown"></ion-icon>\n\n          </button>\n\n\n\n          <ion-list [hidden]="drop" no-padding>\n\n            <ion-item no-padding *ngFor="let step of description[i].steps">{{ step }}</ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n        <ion-col col-2 no-padding>\n\n          <p>{{ description[i].distance }}</p>\n\n          <p>{{ description[i].time }}</p>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row class=\'cell-{{ description.length }}\' text-wrap no-padding no-margin>\n\n        <ion-col col-2 class="col icon-col">\n\n        </ion-col>\n\n        <ion-col col-95>\n\n          <p>{{ address.destination }}</p>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col>\n\n          <p>Travel Summary:</p>\n\n          <p>Estimated Time: {{trip[index].totalTime }} min</p>\n\n          <p>Total Fare: P{{ trip[index].fare }}</p>\n\n          <p>Distance: {{ trip[index].totaldistance }} km</p>\n\n          <p>Walk Distance: {{ trip[index].totalWalkDistance }} km</p>\n\n          <p>Transfers: {{ trip[index].transfer }}</p>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Mark Samson\Documents\GitHub\Project-design-2\src\pages\details\details.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], DetailsPage);
    return DetailsPage;
}());

//# sourceMappingURL=details.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(339);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export FIREBASE_CONF */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_register_register__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_home_home__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_mytrip_mytrip__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_settings_settings__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_details_details__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_remote_service_remote_service__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_google_plus__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_firebase__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_facebook__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_in_app_browser__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_twitter_connect__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ng2_twitter__ = __webpack_require__(301);
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
__WEBPACK_IMPORTED_MODULE_19_firebase__["initializeApp"](FIREBASE_CONF);
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_mytrip_mytrip__["a" /* MytripPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_details_details__["a" /* DetailsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6_angularfire2__["a" /* AngularFireModule */].initializeApp(FIREBASE_CONF),
                __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__["a" /* AngularFireDatabaseModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_mytrip_mytrip__["a" /* MytripPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_details_details__["a" /* DetailsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["a" /* AngularFireAuth */],
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__["a" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_17__providers_remote_service_remote_service__["a" /* RemoteServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_google_plus__["a" /* GooglePlus */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_twitter_connect__["a" /* TwitterConnect */],
                __WEBPACK_IMPORTED_MODULE_23_ng2_twitter__["a" /* TwitterService */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_in_app_browser__["a" /* InAppBrowser */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(146);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Mark Samson\Documents\GitHub\Project-design-2\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Mark Samson\Documents\GitHub\Project-design-2\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[318]);
//# sourceMappingURL=main.js.map