import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
//Injecting Services......
//import { ProductService } from './product.service';
//Injecting HTTP Services......
import { ProductHttpService } from './product.http.service';
import { Observable } from 'rxjs/Observable';
@Component({
    // selector : "pm-product-list", 
    moduleId : module.id,
    templateUrl : "product-list.component.html",
    styleUrls : ['product-list.component.css']
})

export class ProductListComponent implements OnInit{
    pageTitle : string = "Product List";
    imageWidth : number = 50;
    imageMargin : number = 2;
    showImage : boolean = true;
    filterList : string = "";
    errorMessage:string = "";
    products : IProduct[] = null;

    //In order to make methord Parameter Public and Protected we will make variable as private _product.
    // Injecting Local service 
    /*constructor(private _products : ProductService){
        console.log("_products", _products);
        //this.products = _products.getProduct();
        
    }*/


    //In order to make methord Parameter Public and Protected we will make variable as private _product.
    // Injecting HTTP service
    constructor(private _products : ProductHttpService){
        console.log("_products", _products);
        //this.products = _products.getProduct();
        
    }

    ngOnInit():void{
        console.log("On Init......");

        // Injecting Local service 
        //this.products = this._products.getProduct();

         // Injecting HTTP service 
       this._products.getProduct()
                      .subscribe((productsDetails) => {
                                    this.products = productsDetails
                                }
                                ,(error) => {
                                    this.errorMessage = <any>error
                                });

        console.log("products", this.products)
    }

    toggleImage():void{
        this.showImage = !this.showImage;
    }

    onNotify(message:string):void{
        console.log("onNotify");
        this.pageTitle = message;
    }
}

