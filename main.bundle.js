webpackJsonp([1],{

/***/ "./src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./src async recursive";

/***/ }),

/***/ "./src/app/api/methods.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_forkJoin__ = __webpack_require__("./node_modules/rxjs/add/observable/forkJoin.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_forkJoin__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GitApiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GitApiService = (function () {
    function GitApiService(http) {
        this.http = http;
        this.uri = 'https://api.github.com/';
    }
    GitApiService.prototype.getFullData = function (userName) {
        var user_uri = this.uri + "users/" + userName, repos_uri = user_uri + "/repos?per_page=1000";
        var getUserData = this.http.get(user_uri).map(function (res) { return res.json(); }), getRepos = this.http.get(repos_uri).map(function (res) { return res.json(); });
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].forkJoin([getUserData, getRepos]);
    };
    GitApiService.prototype.getRepoReadme = function (repoTitle, user) {
        return this.http.get(this.uri + "repos/" + user + "/" + repoTitle + "/readme")
            .map(function (response) { return response.json(); });
    };
    return GitApiService;
}());
GitApiService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _a || Object])
], GitApiService);

var _a;
//# sourceMappingURL=methods.js.map

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@-webkit-keyframes loading {\r\n    0% {\r\n        background-color: rgba(131, 82, 122, .9);\r\n    }\r\n    30% {\r\n        background-color: rgba(255,165,0, .9); \r\n    }\r\n    70% {\r\n        background-color: rgba(54, 128, 55, .9);\r\n    }\r\n    100% {\r\n        background-color: rgba(131, 82, 122, .9);\r\n    }\r\n}\r\n@keyframes loading {\r\n    0% {\r\n        background-color: rgba(131, 82, 122, .9);\r\n    }\r\n    30% {\r\n        background-color: rgba(255,165,0, .9); \r\n    }\r\n    70% {\r\n        background-color: rgba(54, 128, 55, .9);\r\n    }\r\n    100% {\r\n        background-color: rgba(131, 82, 122, .9);\r\n    }\r\n}\r\n.main {\r\n    transition: background .5s ease;\r\n    min-height: 100%;\r\n}\r\n.main:before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 8px;\r\n    opacity: 0;\r\n    background-color: rgba(131, 82, 122, .5);\r\n    transition: opacity 1.5s ease;\r\n    -webkit-animation: loading .3s infinite;\r\n            animation: loading .3s infinite;\r\n}\r\n.main.loading:before {\r\n    opacity: 1;\r\n}\r\n.main.error {\r\n  background-color: rgba(248, 80, 50, .5); \r\n}\r\n.main.loading {\r\n  background-color: rgba(255,165,0, .5); \r\n}\r\n.main.success {\r\n  background-color: rgba(0, 153, 247, .5);\r\n}\r\n.container {\r\n    width: 80%;\r\n    margin: 0 auto;\r\n    padding: 15px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<section \n  [ngClass]=\"{'success': application.status === 'success', \n                      'error': application.status === 'error',\n                      'loading': application.status === 'loading'}\"\n  class=\"main\"      \n>\n  <div class=\"container\">\n    \n    <app-search \n      [query]=\"query\" \n      (request)=\"onSearch($event)\"\n    >\n    </app-search>\n\n    <h2 *ngIf=\"application.status === 'error'\">Error:{{ application.error }}</h2>\n\n    <div *ngIf=\"repositories && user.login\">\n      <app-title [userData]=\"user\"> </app-title> \n      <app-repos \n        [repos]=\"repositories\" \n        (onRedirect)=\"redirectToGit($event)\"\n        (showReadme)=\"onShowReadmePreview($event)\"\n      >\n      </app-repos>\n    </div>\n  </div>\n  <app-readme \n    [readmeContent]=\"readme.content\"\n    *ngIf=\"readme.isVisible\"\n    (close)=\"onCloseReadme($event)\"\n  >\n  </app-readme>  \n</section>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_methods__ = __webpack_require__("./src/app/api/methods.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_utils__ = __webpack_require__("./src/app/utils/utils.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(requests) {
        this.requests = requests;
        this.user = __WEBPACK_IMPORTED_MODULE_2__utils_utils__["a" /* defaultUserData */];
        this.query = __WEBPACK_IMPORTED_MODULE_2__utils_utils__["b" /* defaultQuery */];
        this.readme = __WEBPACK_IMPORTED_MODULE_2__utils_utils__["c" /* defaultReadme */];
        this.application = __WEBPACK_IMPORTED_MODULE_2__utils_utils__["d" /* defaultAppBehavior */];
        this.repositories = __WEBPACK_IMPORTED_MODULE_2__utils_utils__["e" /* defaultRepositories */];
    }
    AppComponent.prototype.onError = function (error_message) {
        this.application.error = error_message;
        this.application.status = 'error';
        this.repositories = __WEBPACK_IMPORTED_MODULE_2__utils_utils__["e" /* defaultRepositories */].slice();
        this.user = Object.assign({}, __WEBPACK_IMPORTED_MODULE_2__utils_utils__["a" /* defaultUserData */]);
    };
    AppComponent.prototype.onSuccess = function () {
        this.application.error = null;
        this.application.status = 'success';
    };
    AppComponent.prototype.run = function () {
        var _this = this;
        var userName = this.query;
        this.application.status = 'loading';
        this.requests.getFullData(userName).subscribe(function (data) {
            var userData = data[0], repositories = data[1];
            _this.user = {
                img: userData.avatar_url,
                name: userData.name,
                login: userData.login
            };
            _this.repositories = repositories.map(function (repo) { return ({
                name: repo.name,
                language: repo.language
            }); });
            _this.onSuccess();
        }, function (error) {
            if (error.status === 404)
                _this.onError("User " + _this.query + " not found!");
            else
                _this.onError('Connection or server error!');
        });
    };
    AppComponent.prototype.onSearch = function (q) {
        this.query = q;
        this.query ? this.run() : this.onError("Type user login, it's empty now!");
    };
    AppComponent.prototype.readmeErrorHandler = function (error) {
        this.readme.isVisible = true;
        this.application.status = 'success';
        error.status === 404 ? this.readme.content = 'No readme in this repository!' : this.readme.content = 'Connection or server error!';
    };
    AppComponent.prototype.readmeEvent = function (repoName, fn) {
        this.application.status = 'loading';
        this.requests.getRepoReadme(repoName, this.user.login).subscribe(fn, this.readmeErrorHandler.bind(this));
    };
    AppComponent.prototype.redirectToGit = function (repo) {
        var redirect = this.readmeEvent.bind(this, repo.name);
        redirect(function (response) {
            window.location.href = response.html_url;
        });
    };
    AppComponent.prototype.onCloseReadme = function () {
        this.readme.isVisible = false;
    };
    AppComponent.prototype.onShowReadmePreview = function (repo) {
        var _this = this;
        var showReadmeModal = this.readmeEvent.bind(this, repo.name);
        showReadmeModal(function (response) {
            _this.application.status = 'success';
            _this.readme.isVisible = true;
            _this.readme.content = atob(response.content);
        });
    };
    AppComponent.prototype.ngOnInit = function () {
        if (this.query)
            this.run();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_methods__["a" /* GitApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_methods__["a" /* GitApiService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_search_component__ = __webpack_require__("./src/app/components/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_user_component__ = __webpack_require__("./src/app/components/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_repos_component__ = __webpack_require__("./src/app/components/repos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_readme_component__ = __webpack_require__("./src/app/components/readme.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__api_methods__ = __webpack_require__("./src/app/api/methods.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_search_component__["a" /* SearchComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_user_component__["a" /* UserComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_repos_component__["a" /* ReposComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_readme_component__["a" /* ReadmeComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__api_methods__["a" /* GitApiService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/components/readme.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReadmeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReadmeComponent = (function () {
    function ReadmeComponent() {
        this.close = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
    }
    ReadmeComponent.prototype.onClose = function () {
        this.close.emit();
    };
    return ReadmeComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], ReadmeComponent.prototype, "readmeContent", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]) === "function" && _a || Object)
], ReadmeComponent.prototype, "close", void 0);
ReadmeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-readme',
        template: "<div class=\"modal\">\n                   <div class=\"content\">\n                       <textarea name=\"\" id=\"\" readonly>{{ readmeContent }}</textarea>\n                   </div>\n                   <div class=\"overlay\" (click)=\"onClose()\"></div>\n                </div>",
        styles: ["\n        .modal, .overlay {\n            width: 100%;\n            height: 100%;\n            top: 0;\n            left: 0;\n        }\n        .modal {\n            position: fixed;\n            \n            z-index: 2;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n        }\n       .overlay {\n           position: absolute;\n           z-index: 1;\n           background-color: rgba(0,0,0,.8);\n       }\n       .content {\n           position: relative;\n           z-index: 3;\n           border-radius: 6px;\n           width: 60%;\n           min-width: 320px;\n           height: 500px;\n           overflow: hidden;\n           box-shadow: 0 0 25px 0 rgba(0,0,0,.8);\n           background-color: #fff;\n           padding: 15px;\n       }\n       .content textarea {\n           width: 100%;\n           height: 100%;\n           resize: none;\n           outline: none;\n           border: none;\n       }\n    "]
    })
], ReadmeComponent);

var _a;
//# sourceMappingURL=readme.component.js.map

/***/ }),

/***/ "./src/app/components/repos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReposComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReposComponent = (function () {
    function ReposComponent() {
        this.onRedirect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        this.showReadme = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
    }
    ReposComponent.prototype.goToGitReadme = function (repo, todo) {
        this.onRedirect.emit(repo);
    };
    ReposComponent.prototype.showReadmePreview = function (repo, todo) {
        this.showReadme.emit(repo);
    };
    return ReposComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Array)
], ReposComponent.prototype, "repos", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]) === "function" && _a || Object)
], ReposComponent.prototype, "onRedirect", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]) === "function" && _b || Object)
], ReposComponent.prototype, "showReadme", void 0);
ReposComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-repos',
        template: " <div>\n                    <h3 *ngIf=\"repos.length === 0\"> No repositiries </h3>\n                    <h3 *ngIf=\"repos.length > 0\"> Repositories list: </h3>\n                    <div class=\"repos\" *ngIf=\"repos\">\n                        <ul class=\"repos-list\">\n                            <li *ngFor=\"let repo of repos\">\n                                <span (click)=\"goToGitReadme(repo)\">{{repo.name}}</span>\n                                <br>\n                                <i>Language: {{repo.language}}</i>        \n                                <p class=\"readme\">\n                                    <button (click)=\"goToGitReadme(repo)\">Go To Readme</button>\n                                    <button (click)=\"showReadmePreview(repo)\">Preview</button>\n                                </p>\n                            </li>\n                        </ul>\n                    </div>\n                </div> ",
        styles: ["\n        .repos-list {\n            display: inline-block;\n        }\n        .repos-list li {\n            line-height: 1.5;\n        }\n        .repos-list li span {\n            transition: transform .5s ease;\n            display:inline-block;\n        }\n        .repos-list li span:hover {\n            cursor: pointer;\n            transform: translateX(25px);\n        }\n    "]
    })
], ReposComponent);

var _a, _b;
//# sourceMappingURL=repos.component.js.map

/***/ }),

/***/ "./src/app/components/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchComponent = (function () {
    function SearchComponent() {
        this.request = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
    }
    SearchComponent.prototype.makeRequest = function (q) {
        this.request.emit(q);
    };
    return SearchComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], SearchComponent.prototype, "query", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]) === "function" && _a || Object)
], SearchComponent.prototype, "request", void 0);
SearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-search',
        template: "\n            <div class=\"search\">\n                <form name=\"search\" (submit)=\"makeRequest(query)\">\n                    <label>\n                        <input type=\"text\" \n                            name=\"search-value\" \n                            [(ngModel)]=\"query\" \n                            placeholder=\"Type user login here\"\n                        />\n                        <button> FIND </button>\n                    </label>\n                </form>\n            </div>\n    ",
        styles: ["\n    .search { \n        font-weight: normal;\n    }\n    input {\n        width: calc(100% - 125px);\n        height: 40px;\n        text-indent: 15px;\n        font-size: 25px;\n    }\n    button {\n        padding: 8px 20px;\n        font-size: 25px;\n        border:none;\n    }\n    "]
    })
], SearchComponent);

var _a;
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ "./src/app/components/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserComponent = (function () {
    function UserComponent() {
    }
    return UserComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Array)
], UserComponent.prototype, "userData", void 0);
UserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-title',
        template: "<div class=\"header\">\n                <div class=\"header-content\" *ngIf=\"userData\" >\n                    <div class=\"header-img-wrapper\">\n                        <img class=\"header-img\" [src]=\"userData.img\" alt=\"\">\n                    </div>\n                    <div class=\"header-txt\">\n                        <h1 class=\"header-login\">Login: {{userData.login}}</h1>\n                        <p class=\"header-user-name\">Name: {{userData.name}}</p>\n                    </div>\n                </div>\n              </div>",
        styles: ["\n        .header-img-wrapper {\n            width: 75px;\n            height: 75px;\n            border-radius: 50%;\n            overflow: hidden;\n        }\n        .header-img {\n            max-width: 100%;\n            height: auto;\n        }\n        .header-img-wrapper {\n            float: left;\n        }\n        .header-txt {\n            float: right;\n            width: calc(100% - 100px);\n        }\n        .header-content:after {\n            content: '';\n            display: table;\n            clear: both;\n        }\n        .header-login {\n            margin: 5px 0;\n        }\n        .header-content {\n            margin: 20px 0;\n        }\n    "]
    })
], UserComponent);

//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ "./src/app/utils/utils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return defaultUserData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return defaultAppBehavior; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return defaultQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return defaultReadme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return defaultRepositories; });
var defaultUserData = {
    name: '',
    img: '',
    login: ''
};
var defaultAppBehavior = {
    error: '',
    status: 'success'
};
var defaultQuery = '';
var defaultReadme = {
    link: '',
    content: '',
    isVisible: false
};
var defaultRepositories = [];
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map