(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<app-tryrecipe></app-tryrecipe>\n\n<!-- <app-createrecipe></app-createrecipe> -->\n\n<!-- <router-outlet></router-outlet> -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/createrecipe/createrecipe.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/createrecipe/createrecipe.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>createrecipe works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/searchrecipe/searchrecipe.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/searchrecipe/searchrecipe.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>searchrecipe works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/tryrecipe/tryrecipe.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/tryrecipe/tryrecipe.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>tryrecipe works!</p>\n\n<button (click)=\"testThing()\">Test</button>\n\n<!-- <button (click)=\"t1.togglePause()\">Update Timer</button>\n<p>Timer1: {{ t1.timeleft | date: \"mm:ss\"}}</p>\n<hr>\n<button (click)=\"t2.togglePause()\">Update Timer2</button>\n<p>Timer2: {{ t2.timeleft | date: \"mm:ss\"}}</p> -->\n<!-- <p>Timer2: {{ t2.timeleft | date: \"HH:mm:ss\"}}</p> -->\n\n\n<table>\n    <tr *ngFor=\"let i of instructions\">\n        <td *ngIf=\"i.issub\">Is a sub - </td>\n        <td *ngIf= \"i.timer === null; else elseBlock\"><input type=\"checkbox\"></td>\n        <ng-template #elseBlock>{{i.timer.timeleft | date: \"mm:ss\"}}</ng-template>\n        <td>{{i.description}}</td>\n        <td>{{i.option}}</td>\n        <td>{{i.timer}}</td>\n    </tr>\n\n</table>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Recipe';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_createrecipe_createrecipe_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/createrecipe/createrecipe.component */ "./src/app/components/createrecipe/createrecipe.component.ts");
/* harmony import */ var _components_searchrecipe_searchrecipe_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/searchrecipe/searchrecipe.component */ "./src/app/components/searchrecipe/searchrecipe.component.ts");
/* harmony import */ var _components_tryrecipe_tryrecipe_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/tryrecipe/tryrecipe.component */ "./src/app/components/tryrecipe/tryrecipe.component.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_createrecipe_createrecipe_component__WEBPACK_IMPORTED_MODULE_5__["CreaterecipeComponent"],
                _components_searchrecipe_searchrecipe_component__WEBPACK_IMPORTED_MODULE_6__["SearchrecipeComponent"],
                _components_tryrecipe_tryrecipe_component__WEBPACK_IMPORTED_MODULE_7__["TryrecipeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/createrecipe/createrecipe.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/createrecipe/createrecipe.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3JlYXRlcmVjaXBlL2NyZWF0ZXJlY2lwZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/createrecipe/createrecipe.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/createrecipe/createrecipe.component.ts ***!
  \*******************************************************************/
/*! exports provided: CreaterecipeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreaterecipeComponent", function() { return CreaterecipeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CreaterecipeComponent = /** @class */ (function () {
    function CreaterecipeComponent() {
    }
    CreaterecipeComponent.prototype.ngOnInit = function () {
    };
    CreaterecipeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-createrecipe',
            template: __webpack_require__(/*! raw-loader!./createrecipe.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/createrecipe/createrecipe.component.html"),
            styles: [__webpack_require__(/*! ./createrecipe.component.css */ "./src/app/components/createrecipe/createrecipe.component.css")]
        })
    ], CreaterecipeComponent);
    return CreaterecipeComponent;
}());



/***/ }),

/***/ "./src/app/components/searchrecipe/searchrecipe.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/searchrecipe/searchrecipe.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNocmVjaXBlL3NlYXJjaHJlY2lwZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/searchrecipe/searchrecipe.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/searchrecipe/searchrecipe.component.ts ***!
  \*******************************************************************/
/*! exports provided: SearchrecipeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchrecipeComponent", function() { return SearchrecipeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchrecipeComponent = /** @class */ (function () {
    function SearchrecipeComponent() {
    }
    SearchrecipeComponent.prototype.ngOnInit = function () {
    };
    SearchrecipeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-searchrecipe',
            template: __webpack_require__(/*! raw-loader!./searchrecipe.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/searchrecipe/searchrecipe.component.html"),
            styles: [__webpack_require__(/*! ./searchrecipe.component.css */ "./src/app/components/searchrecipe/searchrecipe.component.css")]
        })
    ], SearchrecipeComponent);
    return SearchrecipeComponent;
}());



/***/ }),

/***/ "./src/app/components/tryrecipe/tryrecipe.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/tryrecipe/tryrecipe.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdHJ5cmVjaXBlL3RyeXJlY2lwZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/tryrecipe/tryrecipe.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/tryrecipe/tryrecipe.component.ts ***!
  \*************************************************************/
/*! exports provided: TryrecipeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TryrecipeComponent", function() { return TryrecipeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_Instruction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/Instruction */ "./src/app/models/Instruction.ts");
/* harmony import */ var src_app_models_Recipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/Recipe */ "./src/app/models/Recipe.ts");




var TryrecipeComponent = /** @class */ (function () {
    function TryrecipeComponent() {
        this.myinterval = null;
        this.timers = new Array();
        this.i1 = new src_app_models_Instruction__WEBPACK_IMPORTED_MODULE_2__["Instruction"](1, null, false, "1", null, this.timers);
        this.i2 = new src_app_models_Instruction__WEBPACK_IMPORTED_MODULE_2__["Instruction"](2, 1, true, "2", 30000, this.timers);
        this.i3 = new src_app_models_Instruction__WEBPACK_IMPORTED_MODULE_2__["Instruction"](3, 2, false, "3", null, this.timers);
        this.i4 = new src_app_models_Instruction__WEBPACK_IMPORTED_MODULE_2__["Instruction"](4, 3, false, "4.", null, this.timers);
        this.i5 = new src_app_models_Instruction__WEBPACK_IMPORTED_MODULE_2__["Instruction"](5, 4, true, "5.", null, this.timers);
        this.i6 = new src_app_models_Instruction__WEBPACK_IMPORTED_MODULE_2__["Instruction"](6, 5, false, "6.", null, this.timers);
        this.i7 = new src_app_models_Instruction__WEBPACK_IMPORTED_MODULE_2__["Instruction"](7, 6, false, "7.", null, this.timers);
        this.instructions = new Array(this.i7, this.i6, this.i3, this.i4, this.i5, this.i2, this.i1);
        this.recipe1 = new src_app_models_Recipe__WEBPACK_IMPORTED_MODULE_3__["Recipe"](1, this.instructions);
        this.isTest = false;
    }
    TryrecipeComponent.prototype.ngOnInit = function () {
        this.updateTimers(this.timers);
    };
    //!!!
    TryrecipeComponent.prototype.testThing = function () {
        this.i2.timer.togglePause();
    };
    TryrecipeComponent.prototype.updateTimers = function (timers) {
        if (this.myinterval === null) {
            this.myinterval = setInterval(function () {
                timers.forEach(function (t) {
                    if (!t.ispaused) {
                        t.updateTime();
                        t.timelast = (new Date()).getTime();
                        if (t.timeleft <= 0) {
                            t.togglePause();
                            t.timeleft = t.timetotal;
                            console.log("A timer has finished.");
                        }
                    }
                });
            }, 100);
        }
    };
    TryrecipeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tryrecipe',
            template: __webpack_require__(/*! raw-loader!./tryrecipe.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/tryrecipe/tryrecipe.component.html"),
            styles: [__webpack_require__(/*! ./tryrecipe.component.css */ "./src/app/components/tryrecipe/tryrecipe.component.css")]
        })
    ], TryrecipeComponent);
    return TryrecipeComponent;
}());



/***/ }),

/***/ "./src/app/models/Instruction.ts":
/*!***************************************!*\
  !*** ./src/app/models/Instruction.ts ***!
  \***************************************/
/*! exports provided: Instruction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Instruction", function() { return Instruction; });
/* harmony import */ var _Timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Timer */ "./src/app/models/Timer.ts");

var Instruction = /** @class */ (function () {
    function Instruction(id, previousinstruction, issub, description, duration, timers) {
        this.id = id;
        this.previousinstruction = previousinstruction;
        this.issub = issub;
        this.description = description;
        if (duration === null) {
            this.timer = null;
        }
        else {
            this.timer = new _Timer__WEBPACK_IMPORTED_MODULE_0__["Timer"](duration);
            timers.push(this.timer);
            console.log(timers);
        }
    }
    Instruction.ctorParameters = function () { return [
        { type: Number },
        { type: Number },
        { type: Boolean },
        { type: String },
        { type: Number },
        { type: Array }
    ]; };
    return Instruction;
}());



/***/ }),

/***/ "./src/app/models/Recipe.ts":
/*!**********************************!*\
  !*** ./src/app/models/Recipe.ts ***!
  \**********************************/
/*! exports provided: Recipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Recipe", function() { return Recipe; });
var Recipe = /** @class */ (function () {
    function Recipe(id, instructions) {
        this.id = id;
        this.instructions = instructions;
        this.orderInstructions();
    }
    Recipe.prototype.orderInstructions = function () {
        var ia = this.instructions;
        var prevtofind = null;
        var currenti = 0;
        for (var i = 0; i < ia.length; i++) {
            if (ia[i].previousinstruction === prevtofind) {
                var element = ia[i];
                ia.splice(i, 1);
                ia.splice(currenti++, 0, element);
                prevtofind = element.id;
                i = prevtofind;
            }
        }
        this.instructions = ia;
    };
    Recipe.ctorParameters = function () { return [
        { type: Number },
        { type: Array }
    ]; };
    return Recipe;
}());



/***/ }),

/***/ "./src/app/models/Timer.ts":
/*!*********************************!*\
  !*** ./src/app/models/Timer.ts ***!
  \*********************************/
/*! exports provided: Timer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timer", function() { return Timer; });
var Timer = /** @class */ (function () {
    function Timer(timetotal) {
        this.timetotal = timetotal;
        this.timeleft = timetotal;
        this.timelast = (new Date()).getTime();
        this.ispaused = true;
    }
    Timer.prototype.togglePause = function () {
        this.ispaused = !this.ispaused;
        if (!this.ispaused) {
            this.timelast = (new Date()).getTime();
        }
    };
    Timer.prototype.updateTime = function () {
        var curTime = (new Date()).getTime();
        this.timeleft -= (curTime - this.timelast);
        this.timelast = curTime;
    };
    Timer.ctorParameters = function () { return [
        { type: Number }
    ]; };
    return Timer;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\wdick\Desktop\Recipe Application Front End\Recipe\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map