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
var router_1 = require("@angular/router");
var product_http_service_1 = require("./product.http.service");
var ProductDetailComponent = (function () {
    function ProductDetailComponent(_activate, _route, _http) {
        this._activate = _activate;
        this._route = _route;
        this._http = _http;
        this.pageTitle = "Product Details";
    }
    ProductDetailComponent.prototype.onBack = function () {
        console.log("onBack...");
        this._route.navigate(['/products']);
    };
    ProductDetailComponent.prototype.ngOnInit = function () {
        // this._http.getProduct()
        //                     .subscribe((productInfo) => { 
        //                                                     this.product = productInfo; 
        //                                                     console.log("ProductDetailComponent", this.product)
        //                                                 }
        //                     ,(error) => this.errMessage = <any>error)
        var id = +this._activate.snapshot.params["id"];
        this.pageTitle += ": " + id;
        console.log("id===", id);
    };
    return ProductDetailComponent;
}());
ProductDetailComponent = __decorate([
    core_1.Component({
        templateUrl: "app/products/product-detail.component.html"
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        product_http_service_1.ProductHttpService])
], ProductDetailComponent);
exports.ProductDetailComponent = ProductDetailComponent;
//# sourceMappingURL=product-detail.component.js.map