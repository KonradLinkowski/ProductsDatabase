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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/admin-page/admin-page.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/admin-page/admin-page.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a [routerLink]=\"['/add-product']\">Add product</a>\n<app-products-list [readonly]=\"false\"></app-products-list>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar class=\"navbar\" color=\"primary\">\n  <a [routerLink]=\"['/']\" class=\"navbar__title\">\n    <h1>Product Database</h1>\n  </a>\n  <a *ngIf=\"authService.isAuthenticated()\" [routerLink]=\"['/admin']\" class=\"navbar__admin\">\n    <span>Admin page</span>\n  </a>\n  <button\n    *ngIf=\"!authService.isAuthenticated()\"\n    mat-flat-button\n    class=\"navbar__login\"\n    aria-label=\"Example icon-button with share icon\"\n    (click)=\"goToLogin()\"\n  >\n    <mat-icon>account_circle</mat-icon>\n    <span>Login</span>\n  </button>\n  <button\n    *ngIf=\"authService.isAuthenticated()\"\n    mat-flat-button\n    class=\"navbar__login\"\n    aria-label=\"Example icon-button with share icon\"\n    (click)=\"logout()\"\n  >\n    <mat-icon>exit_to_app</mat-icon>\n    <span>Logout</span>\n  </button>\n</mat-toolbar>\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/components/login/login.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/components/login/login.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-center\">\n  <form class=\"login-form\" [formGroup]=\"form\" (submit)=\"submit()\">\n    <mat-form-field>\n      <mat-label>Username</mat-label>\n      <input matInput type=\"text\" formControlName=\"username\" autocomplete=\"on\">\n    </mat-form-field>\n    <mat-form-field>\n      <mat-label>Password</mat-label>\n      <input matInput type=\"password\" formControlName=\"password\" autocomplete=\"on\">\n    </mat-form-field>\n    <button color=\"primary\" mat-flat-button>Login</button>\n  </form>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/product/components/edit-product/edit-product.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product/components/edit-product/edit-product.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"form\" *ngIf=\"loaded\">\n  <mat-form-field>\n    <mat-label>Name</mat-label>\n    <input matInput type=\"text\" formControlName=\"name\">\n  </mat-form-field>\n  <mat-form-field>\n    <mat-label>Description</mat-label>\n    <input matInput type=\"text\" formControlName=\"description\">\n  </mat-form-field>\n  <mat-form-field>\n    <mat-label>Thumbnail</mat-label>\n    <input matInput type=\"text\" formControlName=\"thumbnail\">\n  </mat-form-field>\n  <div formArrayName=\"variants\">\n    <div *ngFor=\"let variant of variants.controls; let i = index\" [formGroupName]=\"i\">\n      <mat-form-field>\n        <mat-label>Name</mat-label>\n        <input matInput type=\"text\" formControlName=\"name\">\n      </mat-form-field>\n      <mat-form-field>\n        <mat-label>Price</mat-label>\n        <input matInput appNumberInput formControlName=\"price\">\n      </mat-form-field>\n      <button mat-button (click)=\"removeVariant(i)\">Remove</button>\n    </div>\n    <button mat-button (click)=\"addVariant()\">Add</button>\n  </div>\n  <button (click)=\"submit()\" mat-flat-button color=\"primary\">Apply</button>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/product/components/products-list-item/products-list-item.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product/components/products-list-item/products-list-item.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"product\" class=\"product\">\n  <img class=\"product__thumbnail\" [src]=\"product.thumbnail || 'https://via.placeholder.com/150'\">\n  <span class=\"product__name\">{{ product.name }}</span>\n  <p class=\"product__description\">{{ product.description }}</p>\n  <span class=\"product__price app-center\">\n    <span>${{ priceMin | number: '1.2-2' }}</span>\n    <span *ngIf=\"priceMax\"> - ${{ priceMax | number: '1.2-2' }}</span>\n  </span>\n  <a *ngIf=\"!readonly\" class=\"product__edit app-center\" [routerLink]=\"['/edit-product', product.id]\">Edit</a>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/product/components/products-list/products-list.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product/components/products-list/products-list.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"search-bar\">\n  <mat-form-field class=\"search-bar__input\">\n    <mat-label>Search</mat-label>\n    <mat-chip-list #chipList aria-label=\"Product keywords selection\">\n      <mat-chip\n        *ngFor=\"let keyword of keywords\"\n        [selectable]=\"false\"\n        [removable]=\"true\"\n        (removed)=\"removeKeyword(keyword)\"\n      >\n        {{ keyword }}\n        <mat-icon matChipRemove>cancel</mat-icon>\n      </mat-chip>\n      <input\n        [matChipInputFor]=\"chipList\"\n        [matChipInputAddOnBlur]=\"true\"\n        [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n        (matChipInputTokenEnd)=\"addKeyword($event)\"\n      />\n    </mat-chip-list>\n  </mat-form-field>\n  <mat-radio-group\n    [value]=\"searchOperator\"\n    class=\"search-bar__operator\"\n    aria-label=\"Select search operator\"\n    (change)=\"changeOperator($event)\"\n  >\n    <mat-radio-button [value]=\"SearchOperator.OR\">OR</mat-radio-button>\n    <mat-radio-button [value]=\"SearchOperator.AND\">AND</mat-radio-button>\n  </mat-radio-group>\n</div>\n<div class=\"products-list\">\n  <app-products-list-item\n    *ngFor=\"let product of filteredProducts\"\n    [product]=\"product\"\n    [readonly]=\"readonly\"\n  ></app-products-list-item>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/products-page/products-page.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products-page/products-page.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-products-list></app-products-list>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _components_admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/admin-page/admin-page.component */ "./src/app/admin/components/admin-page/admin-page.component.ts");
/* harmony import */ var _product_product_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../product/product.module */ "./src/app/product/product.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let AdminModule = class AdminModule {
};
AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_3__["AdminPageComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            _product_product_module__WEBPACK_IMPORTED_MODULE_4__["ProductModule"]
        ]
    })
], AdminModule);



/***/ }),

/***/ "./src/app/admin/components/admin-page/admin-page.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/admin/components/admin-page/admin-page.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvYWRtaW4tcGFnZS9hZG1pbi1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/admin/components/admin-page/admin-page.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/admin/components/admin-page/admin-page.component.ts ***!
  \*********************************************************************/
/*! exports provided: AdminPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPageComponent", function() { return AdminPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AdminPageComponent = class AdminPageComponent {
    constructor() { }
    ngOnInit() {
    }
};
AdminPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/admin-page/admin-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-page.component.scss */ "./src/app/admin/components/admin-page/admin-page.component.scss")).default]
    })
], AdminPageComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/components/login/login.component */ "./src/app/auth/components/login/login.component.ts");
/* harmony import */ var _auth_guards_admin_guard_admin_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/guards/admin-guard/admin.guard */ "./src/app/auth/guards/admin-guard/admin.guard.ts");
/* harmony import */ var _admin_components_admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin/components/admin-page/admin-page.component */ "./src/app/admin/components/admin-page/admin-page.component.ts");
/* harmony import */ var _product_components_edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product/components/edit-product/edit-product.component */ "./src/app/product/components/edit-product/edit-product.component.ts");
/* harmony import */ var _products_page_products_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./products-page/products-page.component */ "./src/app/products-page/products-page.component.ts");








const routes = [
    { path: '', component: _products_page_products_page_component__WEBPACK_IMPORTED_MODULE_7__["ProductsPageComponent"] },
    { path: 'login', component: _auth_components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'admin', component: _admin_components_admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_5__["AdminPageComponent"], canActivate: [_auth_guards_admin_guard_admin_guard__WEBPACK_IMPORTED_MODULE_4__["AdminGuard"]] },
    { path: 'add-product', component: _product_components_edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_6__["EditProductComponent"], canActivate: [_auth_guards_admin_guard_admin_guard__WEBPACK_IMPORTED_MODULE_4__["AdminGuard"]] },
    { path: 'edit-product/:productId', component: _product_components_edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_6__["EditProductComponent"], canActivate: [_auth_guards_admin_guard_admin_guard__WEBPACK_IMPORTED_MODULE_4__["AdminGuard"]] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navbar {\n  display: flex;\n  justify-content: flex-end;\n}\n.navbar__title {\n  margin-right: auto;\n  text-decoration: none;\n}\n.navbar__title :hover {\n  text-decoration: underline;\n}\n.navbar__admin {\n  margin-right: 30px;\n}\n.navbar__login .mat-icon {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL1Byb2R1Y3REYXRhYmFzZS9Qcm9kdWN0RGF0YWJhc2Uvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtBQ0NGO0FEQ0U7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0FDQ0o7QURDSTtFQUNFLDBCQUFBO0FDQ047QURHRTtFQUNFLGtCQUFBO0FDREo7QURLSTtFQUNFLGtCQUFBO0FDSE4iLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcblxuICAmX190aXRsZSB7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuICAgIDpob3ZlciB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB9XG4gIH1cblxuICAmX19hZG1pbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICB9XG5cbiAgJl9fbG9naW4ge1xuICAgIC5tYXQtaWNvbiB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgfVxuICB9XG59XG4iLCIubmF2YmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5uYXZiYXJfX3RpdGxlIHtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4ubmF2YmFyX190aXRsZSA6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbi5uYXZiYXJfX2FkbWluIHtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xufVxuLm5hdmJhcl9fbG9naW4gLm1hdC1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufSJdfQ== */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/services/auth/auth.service */ "./src/app/auth/services/auth/auth.service.ts");




let AppComponent = class AppComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    goToLogin() {
        this.router.navigate(['/login']);
    }
    logout() {
        this.authService.logout().subscribe();
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _product_product_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product/product.module */ "./src/app/product/product.module.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _admin_admin_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin/admin.module */ "./src/app/admin/admin.module.ts");
/* harmony import */ var _common_app_common_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/app-common.module */ "./src/app/common/app-common.module.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_13__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].firebase),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_14__["AngularFirestoreModule"],
            _product_product_module__WEBPACK_IMPORTED_MODULE_6__["ProductModule"],
            _auth_auth_module__WEBPACK_IMPORTED_MODULE_7__["AuthModule"],
            _admin_admin_module__WEBPACK_IMPORTED_MODULE_8__["AdminModule"],
            _common_app_common_module__WEBPACK_IMPORTED_MODULE_9__["AppCommonModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/auth/components/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/auth/auth.service */ "./src/app/auth/services/auth/auth.service.ts");









let AuthModule = class AuthModule {
};
AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"]
        ],
        providers: [
            _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]
        ],
        entryComponents: [
            _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
        ]
    })
], AuthModule);



/***/ }),

/***/ "./src/app/auth/components/login/login.component.scss":
/*!************************************************************!*\
  !*** ./src/app/auth/components/login/login.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login-form {\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL1Byb2R1Y3REYXRhYmFzZS9Qcm9kdWN0RGF0YWJhc2Uvc3JjL2FwcC9hdXRoL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2F1dGgvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuIiwiLmxvZ2luLWZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/auth/components/login/login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/auth/components/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth/auth.service */ "./src/app/auth/services/auth/auth.service.ts");





let LoginComponent = class LoginComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    ngOnInit() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
    }
    submit() {
        const { username, password } = this.form.value;
        this.authService.login(username, password).subscribe(user => {
            this.router.navigate(['admin']);
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/components/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/auth/components/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/auth/guards/admin-guard/admin.guard.ts":
/*!********************************************************!*\
  !*** ./src/app/auth/guards/admin-guard/admin.guard.ts ***!
  \********************************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth/auth.service */ "./src/app/auth/services/auth/auth.service.ts");




let AdminGuard = class AdminGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate() {
        if (!this.authService.isAuthenticated()) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    }
};
AdminGuard.ctorParameters = () => [
    { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AdminGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AdminGuard);



/***/ }),

/***/ "./src/app/auth/services/auth/auth.service.ts":
/*!****************************************************!*\
  !*** ./src/app/auth/services/auth/auth.service.ts ***!
  \****************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _user_mock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.mock */ "./src/app/auth/services/auth/user.mock.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let AuthService = class AuthService {
    constructor(router) {
        this.router = router;
        this.storageKey = 'current-user';
        this.currentUser = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.loadUser();
    }
    login(username, password) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_user_mock__WEBPACK_IMPORTED_MODULE_4__["user"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(user => {
            this.currentUser.next(user);
            this.saveUser();
        }));
    }
    logout() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => {
            this.currentUser.next(null);
            this.router.navigate(['/']);
        }));
    }
    isAuthenticated() {
        return !!this.currentUser.value;
    }
    saveUser() {
        const item = JSON.stringify(this.currentUser.value);
        localStorage.setItem(this.storageKey, item);
    }
    loadUser() {
        const item = localStorage.getItem(this.storageKey);
        if (item) {
            const user = JSON.parse(item);
            this.currentUser.next(user);
        }
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthService);



/***/ }),

/***/ "./src/app/auth/services/auth/user.mock.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/services/auth/user.mock.ts ***!
  \*************************************************/
/*! exports provided: user */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "user", function() { return user; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const user = {
    username: 'Admin',
    token: 'some.token.secret'
};


/***/ }),

/***/ "./src/app/common/app-common.module.ts":
/*!*********************************************!*\
  !*** ./src/app/common/app-common.module.ts ***!
  \*********************************************/
/*! exports provided: AppCommonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppCommonModule", function() { return AppCommonModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _directives_number_input_number_input_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directives/number-input/number-input.directive */ "./src/app/common/directives/number-input/number-input.directive.ts");



let AppCommonModule = class AppCommonModule {
};
AppCommonModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _directives_number_input_number_input_directive__WEBPACK_IMPORTED_MODULE_2__["NumberInputDirective"]
        ],
        exports: [
            _directives_number_input_number_input_directive__WEBPACK_IMPORTED_MODULE_2__["NumberInputDirective"]
        ]
    })
], AppCommonModule);



/***/ }),

/***/ "./src/app/common/directives/number-input/number-input.directive.ts":
/*!**************************************************************************!*\
  !*** ./src/app/common/directives/number-input/number-input.directive.ts ***!
  \**************************************************************************/
/*! exports provided: NumberInputDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberInputDirective", function() { return NumberInputDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NumberInputDirective = class NumberInputDirective {
    constructor(el) {
        this.el = el;
        this.invalidCharacters = ['+', '-', 'e', 'E'];
        this.invalidRegExp = new RegExp(`[${this.invalidCharacters.join('')}]`, 'g');
        this.el.nativeElement.type = 'number';
    }
    onKeyDown(e) {
        if (this.invalidCharacters.includes(e.key)) {
            e.preventDefault();
        }
    }
    onPaste(e) {
        const value = e.clipboardData.getData('text/plain').replace(this.invalidRegExp, '');
        this.el.nativeElement.value = value;
        e.preventDefault();
    }
};
NumberInputDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown', ['$event'])
], NumberInputDirective.prototype, "onKeyDown", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('paste', ['$event'])
], NumberInputDirective.prototype, "onPaste", null);
NumberInputDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appNumberInput]'
    })
], NumberInputDirective);



/***/ }),

/***/ "./src/app/product/components/edit-product/edit-product.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/product/components/edit-product/edit-product.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvY29tcG9uZW50cy9lZGl0LXByb2R1Y3QvZWRpdC1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/product/components/edit-product/edit-product.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/product/components/edit-product/edit-product.component.ts ***!
  \***************************************************************************/
/*! exports provided: EditProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProductComponent", function() { return EditProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_product_services_product_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/product/services/product/product.service */ "./src/app/product/services/product/product.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let EditProductComponent = class EditProductComponent {
    constructor(route, router, productService) {
        this.route = route;
        this.router = router;
        this.productService = productService;
        this.loaded = false;
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            if (!params.productId) {
                this.initForm();
                this.loaded = true;
                return;
            }
            this.productService.getProduct(params.productId).subscribe(product => {
                this.product = product;
                this.initForm(product);
                this.loaded = true;
            });
        });
    }
    initForm(product = {}) {
        const variants = product.variants ? product.variants.map(v => this.createVariant(v.name, v.price)) : [];
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](product.name),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](product.description),
            thumbnail: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](product.thumbnail),
            variants: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormArray"](variants)
        });
    }
    addVariant() {
        this.variants.push(this.createVariant());
    }
    removeVariant(index) {
        this.variants.removeAt(index);
    }
    createVariant(name = null, price = null) {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](name),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](price)
        });
    }
    get variants() {
        return this.form.get('variants');
    }
    submit() {
        if (this.product) {
            this.productService.updateProduct(this.product.id, this.form.value).subscribe();
        }
        else {
            this.productService.createProduct(this.form.value).subscribe(id => {
                this.router.navigate(['/edit-product', id]);
            });
        }
    }
};
EditProductComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_product_services_product_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] }
];
EditProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-product',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-product.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/product/components/edit-product/edit-product.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-product.component.scss */ "./src/app/product/components/edit-product/edit-product.component.scss")).default]
    })
], EditProductComponent);



/***/ }),

/***/ "./src/app/product/components/products-list-item/products-list-item.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/product/components/products-list-item/products-list-item.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".product {\n  margin: 10px;\n  display: grid;\n  grid-template-columns: 100px auto 100px 100px;\n  grid-template-rows: auto auto;\n  grid-template-areas: \"thumbnail name edit price\" \"thumbnail description edit price\";\n  gap: 10px;\n}\n.product__name {\n  grid-area: name;\n}\n.product__thumbnail {\n  grid-area: thumbnail;\n  width: 100px;\n  height: 100px;\n}\n.product__price {\n  grid-area: price;\n}\n.product__description {\n  grid-area: description;\n}\n.product__edit {\n  grid-area: edit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL1Byb2R1Y3REYXRhYmFzZS9Qcm9kdWN0RGF0YWJhc2Uvc3JjL2FwcC9wcm9kdWN0L2NvbXBvbmVudHMvcHJvZHVjdHMtbGlzdC1pdGVtL3Byb2R1Y3RzLWxpc3QtaXRlbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvZHVjdC9jb21wb25lbnRzL3Byb2R1Y3RzLWxpc3QtaXRlbS9wcm9kdWN0cy1saXN0LWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDZDQUFBO0VBQ0EsNkJBQUE7RUFDQSxtRkFDRTtFQUdGLFNBQUE7QUNKRjtBRE1FO0VBQ0UsZUFBQTtBQ0pKO0FET0U7RUFDRSxvQkFBQTtFQUNBLFlBbkJhO0VBb0JiLGFBcEJhO0FDZWpCO0FEUUU7RUFDRSxnQkFBQTtBQ05KO0FEU0U7RUFDRSxzQkFBQTtBQ1BKO0FEVUU7RUFDRSxlQUFBO0FDUkoiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0L2NvbXBvbmVudHMvcHJvZHVjdHMtbGlzdC1pdGVtL3Byb2R1Y3RzLWxpc3QtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiR0aHVtYm5haWwtc2l6ZTogMTAwcHg7XG5cbi5wcm9kdWN0IHtcbiAgbWFyZ2luOiAxMHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6ICR0aHVtYm5haWwtc2l6ZSBhdXRvIDEwMHB4IDEwMHB4O1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICBcInRodW1ibmFpbCBuYW1lIGVkaXQgcHJpY2VcIlxuICAgIFwidGh1bWJuYWlsIGRlc2NyaXB0aW9uIGVkaXQgcHJpY2VcIjtcblxuICBnYXA6IDEwcHg7XG5cbiAgJl9fbmFtZSB7XG4gICAgZ3JpZC1hcmVhOiBuYW1lO1xuICB9XG5cbiAgJl9fdGh1bWJuYWlsIHtcbiAgICBncmlkLWFyZWE6IHRodW1ibmFpbDtcbiAgICB3aWR0aDogJHRodW1ibmFpbC1zaXplO1xuICAgIGhlaWdodDogJHRodW1ibmFpbC1zaXplO1xuICB9XG5cbiAgJl9fcHJpY2Uge1xuICAgIGdyaWQtYXJlYTogcHJpY2U7XG4gIH1cblxuICAmX19kZXNjcmlwdGlvbiB7XG4gICAgZ3JpZC1hcmVhOiBkZXNjcmlwdGlvbjtcbiAgfVxuXG4gICZfX2VkaXQge1xuICAgIGdyaWQtYXJlYTogZWRpdDtcbiAgfVxufVxuIiwiLnByb2R1Y3Qge1xuICBtYXJnaW46IDEwcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwcHggYXV0byAxMDBweCAxMDBweDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG87XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwidGh1bWJuYWlsIG5hbWUgZWRpdCBwcmljZVwiIFwidGh1bWJuYWlsIGRlc2NyaXB0aW9uIGVkaXQgcHJpY2VcIjtcbiAgZ2FwOiAxMHB4O1xufVxuLnByb2R1Y3RfX25hbWUge1xuICBncmlkLWFyZWE6IG5hbWU7XG59XG4ucHJvZHVjdF9fdGh1bWJuYWlsIHtcbiAgZ3JpZC1hcmVhOiB0aHVtYm5haWw7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cbi5wcm9kdWN0X19wcmljZSB7XG4gIGdyaWQtYXJlYTogcHJpY2U7XG59XG4ucHJvZHVjdF9fZGVzY3JpcHRpb24ge1xuICBncmlkLWFyZWE6IGRlc2NyaXB0aW9uO1xufVxuLnByb2R1Y3RfX2VkaXQge1xuICBncmlkLWFyZWE6IGVkaXQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/product/components/products-list-item/products-list-item.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/product/components/products-list-item/products-list-item.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ProductsListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsListItemComponent", function() { return ProductsListItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProductsListItemComponent = class ProductsListItemComponent {
    constructor() {
        this.readonly = true;
    }
    get priceMin() {
        if (this.product.variants.length === 1) {
            return this.product.variants[0].price;
        }
        const prices = this.product.variants.map(v => v.price);
        const min = Math.min(...prices);
        return min;
    }
    get priceMax() {
        if (this.product.variants.length === 1) {
            return null;
        }
        const prices = this.product.variants.map(v => v.price);
        const max = Math.max(...prices);
        return max;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProductsListItemComponent.prototype, "product", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProductsListItemComponent.prototype, "readonly", void 0);
ProductsListItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-products-list-item',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./products-list-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/product/components/products-list-item/products-list-item.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./products-list-item.component.scss */ "./src/app/product/components/products-list-item/products-list-item.component.scss")).default]
    })
], ProductsListItemComponent);



/***/ }),

/***/ "./src/app/product/components/products-list/products-list.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/product/components/products-list/products-list.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".search-bar {\n  width: 100%;\n  display: flex;\n}\n.search-bar__input {\n  flex: 1;\n  margin-right: 20px;\n}\n.search-bar__operator {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL1Byb2R1Y3REYXRhYmFzZS9Qcm9kdWN0RGF0YWJhc2Uvc3JjL2FwcC9wcm9kdWN0L2NvbXBvbmVudHMvcHJvZHVjdHMtbGlzdC9wcm9kdWN0cy1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9kdWN0L2NvbXBvbmVudHMvcHJvZHVjdHMtbGlzdC9wcm9kdWN0cy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7QUNDRjtBRENFO0VBQ0UsT0FBQTtFQUNBLGtCQUFBO0FDQ0o7QURFRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0L2NvbXBvbmVudHMvcHJvZHVjdHMtbGlzdC9wcm9kdWN0cy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaC1iYXIge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcblxuICAmX19pbnB1dCB7XG4gICAgZmxleDogMTtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIH1cblxuICAmX19vcGVyYXRvciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICB9XG59XG4iLCIuc2VhcmNoLWJhciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnNlYXJjaC1iYXJfX2lucHV0IHtcbiAgZmxleDogMTtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuLnNlYXJjaC1iYXJfX29wZXJhdG9yIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59Il19 */");

/***/ }),

/***/ "./src/app/product/components/products-list/products-list.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/product/components/products-list/products-list.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ProductsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsListComponent", function() { return ProductsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm2015/keycodes.js");
/* harmony import */ var _services_product_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/product/product.service */ "./src/app/product/services/product/product.service.ts");




var SearchOperator;
(function (SearchOperator) {
    SearchOperator[SearchOperator["AND"] = 0] = "AND";
    SearchOperator[SearchOperator["OR"] = 1] = "OR";
})(SearchOperator || (SearchOperator = {}));
let ProductsListComponent = class ProductsListComponent {
    constructor(productService) {
        this.productService = productService;
        this.readonly = true;
        this.allProducts = [];
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["COMMA"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["ENTER"]];
        this.keywords = [];
        this.searchOperator = SearchOperator.OR;
        this.SearchOperator = SearchOperator;
    }
    ngOnInit() {
        this.productService.getProducts().subscribe(products => {
            this.allProducts = products;
            this.filterProducts();
        });
    }
    addKeyword(event) {
        const value = (event.value || '').trim();
        if (value) {
            this.keywords.push(value.toLowerCase());
        }
        if (event.input) {
            event.input.value = '';
        }
        this.filterProducts();
    }
    removeKeyword(keyword) {
        const index = this.keywords.indexOf(keyword);
        if (index >= 0) {
            this.keywords.splice(index, 1);
        }
        this.filterProducts();
    }
    changeOperator(event) {
        this.searchOperator = event.value;
        this.filterProducts();
    }
    filterProducts() {
        if (!this.keywords.length) {
            return this.filteredProducts = [...this.allProducts];
        }
        const operatorMapper = {
            [SearchOperator.AND]: Array.prototype.every,
            [SearchOperator.OR]: Array.prototype.some
        };
        const filterFunction = operatorMapper[this.searchOperator];
        this.filteredProducts = this.allProducts.filter(product => filterFunction.call(this.keywords, keyword => product.name.toLowerCase().match(keyword) || product.name.toLowerCase().match(keyword)));
    }
};
ProductsListComponent.ctorParameters = () => [
    { type: _services_product_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProductsListComponent.prototype, "readonly", void 0);
ProductsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-products-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./products-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/product/components/products-list/products-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./products-list.component.scss */ "./src/app/product/components/products-list/products-list.component.scss")).default]
    })
], ProductsListComponent);



/***/ }),

/***/ "./src/app/product/product.module.ts":
/*!*******************************************!*\
  !*** ./src/app/product/product.module.ts ***!
  \*******************************************/
/*! exports provided: ProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModule", function() { return ProductModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _components_products_list_products_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/products-list/products-list.component */ "./src/app/product/components/products-list/products-list.component.ts");
/* harmony import */ var _components_products_list_item_products_list_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/products-list-item/products-list-item.component */ "./src/app/product/components/products-list-item/products-list-item.component.ts");
/* harmony import */ var _services_product_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/product/product.service */ "./src/app/product/services/product/product.service.ts");
/* harmony import */ var _components_edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/edit-product/edit-product.component */ "./src/app/product/components/edit-product/edit-product.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm2015/chips.js");
/* harmony import */ var _common_app_common_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/app-common.module */ "./src/app/common/app-common.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _products_page_products_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../products-page/products-page.component */ "./src/app/products-page/products-page.component.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");

















let ProductModule = class ProductModule {
};
ProductModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _components_products_list_products_list_component__WEBPACK_IMPORTED_MODULE_3__["ProductsListComponent"],
            _components_products_list_item_products_list_item_component__WEBPACK_IMPORTED_MODULE_4__["ProductsListItemComponent"],
            _components_edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_6__["EditProductComponent"],
            _products_page_products_page_component__WEBPACK_IMPORTED_MODULE_14__["ProductsPageComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _common_app_common_module__WEBPACK_IMPORTED_MODULE_12__["AppCommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__["MatChipsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__["MatRadioModule"]
        ],
        providers: [
            _services_product_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"]
        ],
        entryComponents: [
            _components_products_list_products_list_component__WEBPACK_IMPORTED_MODULE_3__["ProductsListComponent"],
            _products_page_products_page_component__WEBPACK_IMPORTED_MODULE_14__["ProductsPageComponent"],
            _components_edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_6__["EditProductComponent"]
        ],
        exports: [
            _components_products_list_products_list_component__WEBPACK_IMPORTED_MODULE_3__["ProductsListComponent"],
            _components_products_list_item_products_list_item_component__WEBPACK_IMPORTED_MODULE_4__["ProductsListItemComponent"]
        ]
    })
], ProductModule);



/***/ }),

/***/ "./src/app/product/services/product/product.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/product/services/product/product.service.ts ***!
  \*************************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let ProductService = class ProductService {
    constructor(firestore) {
        this.firestore = firestore;
        this.collectionName = 'products';
    }
    getProducts() {
        return this.firestore.collection(this.collectionName).valueChanges({ idField: 'id' });
    }
    getProduct(id) {
        return this.firestore.collection(this.collectionName)
            .doc(id)
            .get()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(snapshot => (Object.assign({ id: snapshot.id }, snapshot.data()))));
    }
    updateProduct(id, product) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["defer"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.firestore.collection(this.collectionName).doc(id).update(product)));
    }
    createProduct(product) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["defer"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.firestore.collection(this.collectionName).add(product)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(ref => ref.id)));
    }
};
ProductService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] }
];
ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ProductService);



/***/ }),

/***/ "./src/app/products-page/products-page.component.scss":
/*!************************************************************!*\
  !*** ./src/app/products-page/products-page.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzLXBhZ2UvcHJvZHVjdHMtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/products-page/products-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/products-page/products-page.component.ts ***!
  \**********************************************************/
/*! exports provided: ProductsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsPageComponent", function() { return ProductsPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProductsPageComponent = class ProductsPageComponent {
};
ProductsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-products-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./products-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/products-page/products-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./products-page.component.scss */ "./src/app/products-page/products-page.component.scss")).default]
    })
], ProductsPageComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared */ "./src/environments/shared.ts");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


const environment = Object.assign({}, _shared__WEBPACK_IMPORTED_MODULE_1__["shared"], { production: false });
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/environments/shared.ts":
/*!************************************!*\
  !*** ./src/environments/shared.ts ***!
  \************************************/
/*! exports provided: shared */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shared", function() { return shared; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// put your firebase keys there

const shared = {
    firebase: {
        apiKey: "AIzaSyDMjQyilRZ7vPQvZemV96jk0kvGb-BQ8LU",
        authDomain: "productdatabase-2a003.firebaseapp.com",
        databaseURL: "https://productdatabase-2a003.firebaseio.com",
        projectId: "productdatabase-2a003",
        storageBucket: "productdatabase-2a003.appspot.com",
        messagingSenderId: "1053709773453",
        appId: "1:1053709773453:web:6302d629477024cc7ad0c4"
    }
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/ProductDatabase/ProductDatabase/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map