"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
var ProductHttpService = (function () {
    function ProductHttpService(_http) {
        this._http = _http;
        this._prductUrl = "api/products/products.json";
    }
    ProductHttpService.prototype.getProduct = function () {
        return this._http.get(this._prductUrl)
            .map(function (respone) {
            console.log("respone", respone);
            return respone.json();
        })
            .do(function (data) {
            console.log("data==>", JSON.stringify(data));
        })
            .catch(this.errorHandler);
    };
    ProductHttpService.prototype.errorHandler = function (err) {
        console.error(err);
        return Observable_1.Observable.throw(err.json().error || "server error");
    };
    return ProductHttpService;
}());
ProductHttpService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ProductHttpService);
exports.ProductHttpService = ProductHttpService;
//# sourceMappingURL=product.http.service.js.map