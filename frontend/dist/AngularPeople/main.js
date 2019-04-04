(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n    <div>\r\n        <ul class=\"people\">\r\n          <li *ngFor=\"let person of people\" (click)=\"openEditDialog(person)\" [class.selected]=\"person === selectedPerson\">\r\n        \r\n\r\n\r\n            <button class=\"delete-button\" (click)=\"deletePerson(person)\">Delete</button>\r\n            <div class=\"person-element\">\r\n              <div class=\"badge\">{{person.id}}</div>\r\n              <div class=\"name\">{{person.name}}</div>\r\n              <div class=\"saying\">{{person.saying}}</div>\r\n            </div>\r\n          </li>\r\n        </ul>\r\n        <div class=\"editarea\">\r\n          <div *ngIf=\"selectedPerson\">\r\n            <div class=\"editfields\">\r\n              <div>\r\n                <label>id: </label>\r\n                <input [(ngModel)]=\"selectedPerson.id\" placeholder=\"id\" *ngIf=\"addingPerson\" />\r\n                <label *ngIf=\"!addingPerson\" class=\"value\">{{selectedPerson.id}}</label>\r\n              </div>\r\n              <div>\r\n                <label>name: </label>\r\n                <input [(ngModel)]=\"selectedPerson.name\" placeholder=\"name\" />\r\n              </div>\r\n              <div>\r\n                <label>saying: </label>\r\n                <input [(ngModel)]=\"selectedPerson.saying\" placeholder=\"saying\" />\r\n              </div>\r\n            </div>\r\n            <button (click)=\"cancel()\">Cancel</button>\r\n            <button (click)=\"save()\">Save</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      \r\n    \r\n\r\n\r\n  <ol>\r\n    <!-- <li>\r\n      <mat-form-field>\r\n        <input matInput [(ngModel)]=\"name\" placeholder=\"What's your name?\">\r\n      </mat-form-field>\r\n    </li> -->\r\n    <li>\r\n      <button mat-raised-button (click)=\"openCreateDialog()\">Create New Person</button>\r\n    </li>\r\n</ol>"

/***/ }),

/***/ "./src/app/about/about.component.scss":
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _create_person_create_person_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../create-person/create-person.component */ "./src/app/create-person/create-person.component.ts");
/* harmony import */ var _edit_person_edit_person_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../edit-person/edit-person.component */ "./src/app/edit-person/edit-person.component.ts");
/* harmony import */ var _create_person_person__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../create-person/person */ "./src/app/create-person/person.ts");
/* harmony import */ var _create_person_person_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../create-person/person.service */ "./src/app/create-person/person.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var AboutComponent = /** @class */ (function () {
    function AboutComponent(personService, dialog) {
        this.personService = personService;
        this.dialog = dialog;
        this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].email]);
        this.addingPerson = false;
        this.people = [];
    }
    AboutComponent.prototype.openCreateDialog = function () {
        var dialogRef = this.dialog.open(_create_person_create_person_component__WEBPACK_IMPORTED_MODULE_3__["CreatePersonComponent"], {});
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    ;
    AboutComponent.prototype.openEditDialog = function (prop) {
        var dialogRef = this.dialog.open(_edit_person_edit_person_component__WEBPACK_IMPORTED_MODULE_4__["EditPersonComponent"]);
        var instance = dialogRef.componentInstance;
        instance.person = prop;
        console.log('dialogRef', dialogRef);
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    ;
    AboutComponent.prototype.ngOnInit = function () {
        this.getPeople();
    };
    AboutComponent.prototype.enableAddMode = function () {
        this.addingPerson = true;
        this.selectedPerson = new _create_person_person__WEBPACK_IMPORTED_MODULE_5__["Person"]();
    };
    AboutComponent.prototype.cancel = function () {
        this.addingPerson = false;
        this.selectedPerson = null;
    };
    AboutComponent.prototype.deletePerson = function (person) {
        var _this = this;
        this.personService.deletePerson(person).subscribe(function (res) {
            _this.people = _this.people.filter(function (h) { return h !== person; });
            if (_this.selectedPerson === person) {
                _this.selectedPerson = null;
            }
        });
    };
    AboutComponent.prototype.getPeople = function () {
        var _this = this;
        return this.personService.getPeople().subscribe(function (people) {
            _this.people = people;
        });
    };
    AboutComponent.prototype.onSelect = function (person) {
        this.addingPerson = false;
        this.selectedPerson = person;
    };
    AboutComponent.prototype.save = function () {
        var _this = this;
        if (this.addingPerson) {
            this.personService.addPerson(this.selectedPerson).subscribe(function (person) {
                _this.addingPerson = false;
                _this.selectedPerson = null;
                _this.people.push(person);
            });
        }
        else {
            this.personService.updatePerson(this.selectedPerson).subscribe(function (person) {
                _this.addingPerson = false;
                _this.selectedPerson = null;
            });
        }
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/about/about.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_create_person_person_service__WEBPACK_IMPORTED_MODULE_6__["PersonService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], AboutComponent);
    return AboutComponent;
}());



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
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./test/test.component */ "./src/app/test/test.component.ts");
/* harmony import */ var _edit_person_edit_person_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-person/edit-person.component */ "./src/app/edit-person/edit-person.component.ts");







var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"] },
    { path: 'test', component: _test_test_component__WEBPACK_IMPORTED_MODULE_5__["TESTComponent"] },
    { path: 'edit', component: _edit_person_edit_person_component__WEBPACK_IMPORTED_MODULE_6__["EditPersonComponent"] }
];
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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\r\n\r\n<section>\r\n  <router-outlet></router-outlet>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
        this.title = 'AngularPeople';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./test/test.component */ "./src/app/test/test.component.ts");
/* harmony import */ var _test_hero_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./test/hero.service */ "./src/app/test/hero.service.ts");
/* harmony import */ var _create_person_create_person_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./create-person/create-person.component */ "./src/app/create-person/create-person.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./material */ "./src/app/material.ts");
/* harmony import */ var _create_person_person_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./create-person/person.service */ "./src/app/create-person/person.service.ts");
/* harmony import */ var _edit_person_edit_person_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./edit-person/edit-person.component */ "./src/app/edit-person/edit-person.component.ts");

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_7__["NavComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"],
                _test_test_component__WEBPACK_IMPORTED_MODULE_10__["TESTComponent"],
                _create_person_create_person_component__WEBPACK_IMPORTED_MODULE_12__["CreatePersonComponent"],
                _edit_person_edit_person_component__WEBPACK_IMPORTED_MODULE_16__["EditPersonComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _material__WEBPACK_IMPORTED_MODULE_14__["MaterialModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
            ],
            entryComponents: [
                _create_person_create_person_component__WEBPACK_IMPORTED_MODULE_12__["CreatePersonComponent"],
                _edit_person_edit_person_component__WEBPACK_IMPORTED_MODULE_16__["EditPersonComponent"]
            ],
            providers: [_test_hero_service__WEBPACK_IMPORTED_MODULE_11__["HeroService"], _create_person_person_service__WEBPACK_IMPORTED_MODULE_15__["PersonService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/create-person/create-person.component.html":
/*!************************************************************!*\
  !*** ./src/app/create-person/create-person.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"example-container\">\n    <mat-form-field>\n      <input matInput placeholder=\"Enter your email\" [formControl]=\"email\" required>\n      <mat-error *ngIf=\"email.invalid\">{{getErrorMessage()}}</mat-error>\n    </mat-form-field>\n  </div> -->\n\n\n  <!-- <p>\n  View works! o?\n  </p>\n  <div>\n      <ul class=\"people\">\n        <li *ngFor=\"let person of people\" (click)=\"onSelect(person)\" [class.selected]=\"person === selectedPerson\">\n          <button class=\"delete-button\" (click)=\"deletePerson(person)\">Delete</button>\n          <div class=\"person-element\">\n            <div class=\"badge\">{{person.id}}</div>\n            <div class=\"name\">{{person.name}}</div>\n            <div class=\"saying\">{{person.saying}}</div>\n          </div>\n        </li>\n      </ul>\n      <div class=\"editarea\">\n        <div *ngIf=\"selectedPerson\">\n          <div class=\"editfields\">\n            <div>\n              <label>id: </label>\n              <input [(ngModel)]=\"selectedPerson.id\" placeholder=\"id\" *ngIf=\"addingPerson\" />\n              <label *ngIf=\"!addingPerson\" class=\"value\">{{selectedPerson.id}}</label>\n            </div>\n            <div>\n              <label>name: </label>\n              <input [(ngModel)]=\"selectedPerson.name\" placeholder=\"name\" />\n            </div>\n            <div>\n              <label>saying: </label>\n              <input [(ngModel)]=\"selectedPerson.saying\" placeholder=\"saying\" />\n            </div>\n          </div>\n          <button (click)=\"cancel()\">Cancel</button>\n          <button (click)=\"save()\">Save</button>\n        </div>\n      </div>\n    </div>\n     -->\n\n      <div>\n          <div class=\"editarea\">\n            <div *ngIf=\"selectedPerson\">\n              <div class=\"editfields\">\n                <div>\n                  <label>id: </label>\n                  <input [(ngModel)]=\"selectedPerson.id\" placeholder=\"id\" *ngIf=\"addingPerson\" />\n                  <label *ngIf=\"!addingPerson\" class=\"value\">{{selectedPerson.id}}</label>\n                </div>\n                <div>\n                  <label>name: </label>\n                  <input [(ngModel)]=\"selectedPerson.name\" placeholder=\"name\" />\n                </div>\n                <div>\n                  <label>saying: </label>\n                  <input [(ngModel)]=\"selectedPerson.saying\" placeholder=\"saying\" />\n                </div>\n              </div>\n              <button (click)=\"cancel()\">Cancel</button>\n              <button (click)=\"save()\">Save</button>\n            </div>\n          </div>\n        </div>\n        "

/***/ }),

/***/ "./src/app/create-person/create-person.component.scss":
/*!************************************************************!*\
  !*** ./src/app/create-person/create-person.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: flex;\n  flex-direction: column; }\n\n.example-container > * {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLXBlcnNvbi9DOlxcVXNlcnNcXGJxeHA4M1xcRGVza3RvcFxcTUNvZGVcXFBlb3BsZUJhbmtcXGZyb250ZW5kL3NyY1xcYXBwXFxjcmVhdGUtcGVyc29uXFxjcmVhdGUtcGVyc29uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBYTtFQUNiLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS1wZXJzb24vY3JlYXRlLXBlcnNvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtY29udGFpbmVyID4gKiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/create-person/create-person.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/create-person/create-person.component.ts ***!
  \**********************************************************/
/*! exports provided: CreatePersonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePersonComponent", function() { return CreatePersonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _person__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./person */ "./src/app/create-person/person.ts");
/* harmony import */ var _person_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./person.service */ "./src/app/create-person/person.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");






var CreatePersonComponent = /** @class */ (function () {
    //MatDialog added so that the dialog is closed upon save()
    function CreatePersonComponent(personService, dialog) {
        this.personService = personService;
        this.dialog = dialog;
        this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]);
        this.addingPerson = true;
        this.editingPerson = false;
        this.people = [];
    }
    CreatePersonComponent.prototype.ngOnInit = function () {
        this.selectedPerson = new _person__WEBPACK_IMPORTED_MODULE_2__["Person"]();
    };
    CreatePersonComponent.prototype.cancel = function () {
        this.addingPerson = false;
        this.selectedPerson = null;
        this.dialog.closeAll();
    };
    CreatePersonComponent.prototype.onSelect = function (person) {
        this.selectedPerson = person;
    };
    CreatePersonComponent.prototype.update = function () {
        var _this = this;
        this.personService.updatePerson(this.selectedPerson).subscribe(function (person) {
            _this.addingPerson = false;
            _this.selectedPerson = null;
        });
    };
    CreatePersonComponent.prototype.save = function () {
        var _this = this;
        this.personService.addPerson(this.selectedPerson).subscribe(function (person) {
            // this.addingPerson = false;
            // this.selectedPerson = null;
            _this.people.push(person);
            _this.dialog.closeAll();
        });
    };
    CreatePersonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-person',
            template: __webpack_require__(/*! ./create-person.component.html */ "./src/app/create-person/create-person.component.html"),
            styles: [__webpack_require__(/*! ./create-person.component.scss */ "./src/app/create-person/create-person.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_person_service__WEBPACK_IMPORTED_MODULE_3__["PersonService"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], CreatePersonComponent);
    return CreatePersonComponent;
}());

//ERROR HANDLING
// getErrorMessage() {
//   return this.name.hasError('required') ? 'You must enter a value' :
//       this.name.hasError('name') ? 'Not a valid name' :
//           '';
// }


/***/ }),

/***/ "./src/app/create-person/person.service.ts":
/*!*************************************************!*\
  !*** ./src/app/create-person/person.service.ts ***!
  \*************************************************/
/*! exports provided: PersonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonService", function() { return PersonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var api = '/api';
var baseURL = 'http://localhost:4000';
var PersonService = /** @class */ (function () {
    function PersonService(http) {
        this.http = http;
    }
    PersonService.prototype.getPeople = function () {
        return this.http.get("" + baseURL + api + "/people");
    };
    PersonService.prototype.addPerson = function (person) {
        return this.http.post("" + baseURL + api + "/person/", person);
    };
    PersonService.prototype.updatePerson = function (person) {
        return this.http.put("" + baseURL + api + "/person/" + person.id, person);
    };
    PersonService.prototype.deletePerson = function (person) {
        return this.http.delete("" + baseURL + api + "/person/" + person.id);
    };
    PersonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PersonService);
    return PersonService;
}());



/***/ }),

/***/ "./src/app/create-person/person.ts":
/*!*****************************************!*\
  !*** ./src/app/create-person/person.ts ***!
  \*****************************************/
/*! exports provided: Person */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Person", function() { return Person; });
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());



/***/ }),

/***/ "./src/app/edit-person/edit-person.component.html":
/*!********************************************************!*\
  !*** ./src/app/edit-person/edit-person.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div>\n    <div class=\"editarea\">\n      <div *ngIf=\"selectedPerson\">\n        <div class=\"editfields\">\n          <div>\n            <label>id: </label>\n            <input [(ngModel)]=\"selectedPerson.id\" placeholder=\"id\" *ngIf=\"addingPerson\" />\n            <label class=\"value\">{{selectedPerson.id}}</label>\n          </div>\n          <div>\n            <label>name: </label>\n            <input [(ngModel)]=\"selectedPerson.name\" placeholder=\"name\" />\n          </div>\n          <div>\n            <label>saying: </label>\n            <input [(ngModel)]=\"selectedPerson.saying\" placeholder=\"saying\" />\n          </div>\n        </div>\n        <button (click)=\"cancel()\">Cancel</button>\n        <button (click)=\"save()\">Save</button>\n      </div>\n    </div>\n</div>\n    "

/***/ }),

/***/ "./src/app/edit-person/edit-person.component.scss":
/*!********************************************************!*\
  !*** ./src/app/edit-person/edit-person.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtcGVyc29uL2VkaXQtcGVyc29uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/edit-person/edit-person.component.ts":
/*!******************************************************!*\
  !*** ./src/app/edit-person/edit-person.component.ts ***!
  \******************************************************/
/*! exports provided: EditPersonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPersonComponent", function() { return EditPersonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _create_person_person__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../create-person/person */ "./src/app/create-person/person.ts");
/* harmony import */ var _create_person_person_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../create-person/person.service */ "./src/app/create-person/person.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");






var EditPersonComponent = /** @class */ (function () {
    function EditPersonComponent(personService, dialog) {
        this.personService = personService;
        this.dialog = dialog;
        this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]);
        this.people = [];
    }
    EditPersonComponent.prototype.ngOnInit = function () {
        this.getPeople();
        this.onSelect();
    };
    EditPersonComponent.prototype.enableAddMode = function () {
        this.selectedPerson = new _create_person_person__WEBPACK_IMPORTED_MODULE_2__["Person"]();
    };
    EditPersonComponent.prototype.cancel = function () {
        this.selectedPerson = null;
    };
    EditPersonComponent.prototype.deletePerson = function (person) {
        var _this = this;
        this.personService.deletePerson(person).subscribe(function (res) {
            _this.people = _this.people.filter(function (h) { return h !== person; });
            if (_this.selectedPerson === person) {
                _this.selectedPerson = null;
            }
        });
    };
    EditPersonComponent.prototype.getPeople = function () {
        var _this = this;
        return this.personService.getPeople().subscribe(function (people) {
            _this.people = people;
        });
    };
    EditPersonComponent.prototype.onSelect = function () {
        this.selectedPerson = this.person;
    };
    EditPersonComponent.prototype.save = function () {
        var _this = this;
        this.personService.updatePerson(this.selectedPerson).subscribe(function (person) {
            _this.selectedPerson = null;
            _this.dialog.closeAll();
        });
    };
    EditPersonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-person',
            template: __webpack_require__(/*! ./edit-person.component.html */ "./src/app/edit-person/edit-person.component.html"),
            styles: [__webpack_require__(/*! ./edit-person.component.scss */ "./src/app/edit-person/edit-person.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_create_person_person_service__WEBPACK_IMPORTED_MODULE_3__["PersonService"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], EditPersonComponent);
    return EditPersonComponent;
}());

//ERROR HANDLING
// getErrorMessage() {
//   return this.name.hasError('required') ? 'You must enter a value' :
//       this.name.hasError('name') ? 'Not a valid name' :
//           '';
// }
//   name = new FormControl('', [Validators.required, Validators.email]);
//   addingPerson = false;
//   people: any = [];
//   selectedPerson: Person;
//   constructor(private personService: PersonService) {}
//   ngOnInit() {
//     this.getPeople();
//   }
//   enableAddMode() {
//     this.addingPerson = true;
//     this.selectedPerson = new Person();
//   }
//   cancel() {
//     this.addingPerson = false;
//     this.selectedPerson = null;
//   }
//   deletePerson(person: Person) {
//     this.personService.deletePerson(person).subscribe(res => {
//       this.people = this.people.filter(h => h !== person);
//       if (this.selectedPerson === person) {
//         this.selectedPerson = null;
//       }
//     });
//   }
//   getPeople() {
//     return this.personService.getPeople().subscribe(people => {
//       this.people = people;
//     });
//   }
//   onSelect(person: Person) {
//     this.addingPerson = false;
//     this.selectedPerson = person;
//   }
//   save() {
//     if (this.addingPerson) {
//       this.personService.addPerson(this.selectedPerson).subscribe(person => {
//         this.addingPerson = false;
//         this.selectedPerson = null;
//         this.people.push(person);
//       });
//     } else {
//       this.personService.updatePerson(this.selectedPerson).subscribe(person => {
//         this.addingPerson = false;
//         this.selectedPerson = null;
//       });
//     }
//   }
// }


/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  home works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/material.ts":
/*!*****************************!*\
  !*** ./src/app/material.ts ***!
  \*****************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");






var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"]],
            exports: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"]],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\r\n    <div class=\"container\">\r\n      <a routerLink=\"/\" class=\"logo\">AngularPeople</a>\r\n      <nav>\r\n        <ul>\r\n          <li><a routerLink=\"/\">Home</a></li>\r\n          <li><a routerLink=\"/test\">TEST</a></li>\r\n          <li><a routerLink=\"/about\">About</a></li>\r\n          <li><a routerLink=\"/edit\">Edit</a></li>\r\n        </ul>\r\n      </nav>\r\n    </div>\r\n  </header>\r\n"

/***/ }),

/***/ "./src/app/nav/nav.component.scss":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  background: #F7F8FA;\n  border-bottom: 1px solid black; }\n  header a {\n    color: #525A65; }\n  header .logo {\n    font-weight: bold; }\n  header nav {\n    justify-self: right; }\n  header nav ul {\n      list-style-type: none;\n      margin: 0;\n      padding: 0; }\n  header nav ul li {\n        float: left; }\n  header nav ul li a {\n          padding: 1.5em;\n          text-transform: uppercase;\n          font-size: .8em; }\n  header nav ul li a:hover {\n            background: rgba(213, 215, 218, 0.801); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L0M6XFxVc2Vyc1xcYnF4cDgzXFxEZXNrdG9wXFxNQ29kZVxcUGVvcGxlQmFua1xcZnJvbnRlbmQvc3JjXFxhcHBcXG5hdlxcbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQW1CO0VBQ25CLDhCQUE4QixFQUFBO0VBRmxDO0lBS1EsY0FBYyxFQUFBO0VBTHRCO0lBU1EsaUJBQWlCLEVBQUE7RUFUekI7SUFhUSxtQkFBbUIsRUFBQTtFQWIzQjtNQWdCWSxxQkFBcUI7TUFDckIsU0FBUztNQUFFLFVBQVUsRUFBQTtFQWpCakM7UUFvQmdCLFdBQVcsRUFBQTtFQXBCM0I7VUF1Qm9CLGNBQWM7VUFDZCx5QkFBeUI7VUFDekIsZUFBZSxFQUFBO0VBekJuQztZQTRCd0Isc0NBQXNDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9uYXYvbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNGN0Y4RkE7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBcclxuICAgIGEge1xyXG4gICAgICAgIGNvbG9yOiAjNTI1QTY1O1xyXG4gICAgfVxyXG5cclxuICAgIC5sb2dvIHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuXHJcbiAgICBuYXYge1xyXG4gICAgICAgIGp1c3RpZnktc2VsZjogcmlnaHQ7XHJcbiAgICBcclxuICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwOyBwYWRkaW5nOiAwO1xyXG5cclxuICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMS41ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IC44ZW07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDIxMywgMjE1LCAyMTgsIDAuODAxKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.scss */ "./src/app/nav/nav.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/test/hero.service.ts":
/*!**************************************!*\
  !*** ./src/app/test/hero.service.ts ***!
  \**************************************/
/*! exports provided: HeroService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroService", function() { return HeroService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var api = '/api';
var baseURL = 'http://localhost:4000';
var HeroService = /** @class */ (function () {
    function HeroService(http) {
        this.http = http;
    }
    HeroService.prototype.getHeroes = function () {
        return this.http.get("" + baseURL + api + "/people");
    };
    HeroService.prototype.deleteHero = function (hero) {
        return this.http.delete("" + baseURL + api + "/person/" + hero.id);
    };
    HeroService.prototype.addHero = function (hero) {
        return this.http.post("" + baseURL + api + "/person/", hero);
    };
    HeroService.prototype.updateHero = function (hero) {
        return this.http.put("" + baseURL + api + "/person/" + hero.id, hero);
    };
    HeroService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HeroService);
    return HeroService;
}());



/***/ }),

/***/ "./src/app/test/hero.ts":
/*!******************************!*\
  !*** ./src/app/test/hero.ts ***!
  \******************************/
/*! exports provided: Hero */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hero", function() { return Hero; });
var Hero = /** @class */ (function () {
    function Hero() {
    }
    return Hero;
}());



/***/ }),

/***/ "./src/app/test/test.component.html":
/*!******************************************!*\
  !*** ./src/app/test/test.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <ul class=\"heroes\">\r\n    <li *ngFor=\"let hero of heroes\" (click)=\"onSelect(hero)\" [class.selected]=\"hero === selectedHero\">\r\n      <button class=\"delete-button\" (click)=\"deleteHero(hero)\">Delete</button>\r\n      <div class=\"hero-element\">\r\n        <div class=\"badge\">{{hero.id}}</div>\r\n        <div class=\"name\">{{hero.name}}</div>\r\n        <div class=\"saying\">{{hero.saying}}</div>\r\n      </div>\r\n    </li>\r\n  </ul>\r\n  <div class=\"editarea\">\r\n    <button (click)=\"enableAddMode()\">Add New Hero</button>\r\n    <div *ngIf=\"selectedHero\">\r\n      <div class=\"editfields\">\r\n        <div>\r\n          <label>id: </label>\r\n          <input [(ngModel)]=\"selectedHero.id\" placeholder=\"id\" *ngIf=\"addingHero\" />\r\n          <label *ngIf=\"!addingHero\" class=\"value\">{{selectedHero.id}}</label>\r\n        </div>\r\n        <div>\r\n          <label>name: </label>\r\n          <input [(ngModel)]=\"selectedHero.name\" placeholder=\"name\" />\r\n        </div>\r\n        <div>\r\n          <label>saying: </label>\r\n          <input [(ngModel)]=\"selectedHero.saying\" placeholder=\"saying\" />\r\n        </div>\r\n      </div>\r\n      <button (click)=\"cancel()\">Cancel</button>\r\n      <button (click)=\"save()\">Save</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/test/test.component.scss":
/*!******************************************!*\
  !*** ./src/app/test/test.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3QvdGVzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/test/test.component.ts":
/*!****************************************!*\
  !*** ./src/app/test/test.component.ts ***!
  \****************************************/
/*! exports provided: TESTComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TESTComponent", function() { return TESTComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hero */ "./src/app/test/hero.ts");
/* harmony import */ var _hero_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hero.service */ "./src/app/test/hero.service.ts");




var TESTComponent = /** @class */ (function () {
    function TESTComponent(heroService) {
        this.heroService = heroService;
        this.addingHero = false;
        this.heroes = [];
    }
    TESTComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    TESTComponent.prototype.cancel = function () {
        this.addingHero = false;
        this.selectedHero = null;
    };
    TESTComponent.prototype.deleteHero = function (hero) {
        var _this = this;
        this.heroService.deleteHero(hero).subscribe(function (res) {
            _this.heroes = _this.heroes.filter(function (h) { return h !== hero; });
            if (_this.selectedHero === hero) {
                _this.selectedHero = null;
            }
        });
    };
    TESTComponent.prototype.getHeroes = function () {
        var _this = this;
        return this.heroService.getHeroes().subscribe(function (heroes) {
            _this.heroes = heroes;
        });
    };
    TESTComponent.prototype.enableAddMode = function () {
        this.addingHero = true;
        this.selectedHero = new _hero__WEBPACK_IMPORTED_MODULE_2__["Hero"]();
    };
    TESTComponent.prototype.onSelect = function (hero) {
        this.addingHero = false;
        this.selectedHero = hero;
    };
    TESTComponent.prototype.save = function () {
        var _this = this;
        if (this.addingHero) {
            this.heroService.addHero(this.selectedHero).subscribe(function (hero) {
                _this.addingHero = false;
                _this.selectedHero = null;
                _this.heroes.push(hero);
            });
        }
        else {
            this.heroService.updateHero(this.selectedHero).subscribe(function (hero) {
                _this.addingHero = false;
                _this.selectedHero = null;
            });
        }
    };
    TESTComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-test',
            template: __webpack_require__(/*! ./test.component.html */ "./src/app/test/test.component.html"),
            styles: [__webpack_require__(/*! ./test.component.scss */ "./src/app/test/test.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_hero_service__WEBPACK_IMPORTED_MODULE_3__["HeroService"]])
    ], TESTComponent);
    return TESTComponent;
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





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

module.exports = __webpack_require__(/*! C:\Users\bqxp83\Desktop\MCode\PeopleBank\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map