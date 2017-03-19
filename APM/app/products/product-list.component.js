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
//Injecting Services......
//import { ProductService } from './product.service';
//Injecting HTTP Services......
var product_http_service_1 = require("./product.http.service");
var ProductListComponent = (function () {
    //In order to make methord Parameter Public and Protected we will make variable as private _product.
    // Injecting Local service 
    /*constructor(private _products : ProductService){
        console.log("_products", _products);
        //this.products = _products.getProduct();
        
    }*/
    //In order to make methord Parameter Public and Protected we will make variable as private _product.
    // Injecting HTTP service
    function ProductListComponent(_products) {
        this._products = _products;
        this.pageTitle = "Product List";
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.showImage = true;
        this.filterList = "";
        this.errorMessage = "";
        this.products = null;
        console.log("_products", _products);
        //this.products = _products.getProduct();
    }
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("On Init......");
        // Injecting Local service 
        //this.products = this._products.getProduct();
        // Injecting HTTP service 
        this._products.getProduct()
            .subscribe(function (productsDetails) {
            _this.products = productsDetails;
        }, function (error) {
            _this.errorMessage = error;
        });
        console.log("products", this.products);
    };
    ProductListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    ProductListComponent.prototype.onNotify = function (message) {
        console.log("onNotify");
        this.pageTitle = message;
    };
    return ProductListComponent;
}());
ProductListComponent = __decorate([
    core_1.Component({
        selector: "pm-product-list",
        moduleId: module.id,
        templateUrl: "product-list.component.html",
        styleUrls: ['product-list.component.css']
    }),
    __metadata("design:paramtypes", [product_http_service_1.ProductHttpService])
], ProductListComponent);
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=product-list.component.js.map