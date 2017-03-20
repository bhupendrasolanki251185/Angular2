import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

import { ActivatedRoute, Router } from '@angular/router';
import { ProductHttpService } from './product.http.service';

@Component({
    templateUrl : "app/products/product-detail.component.html"
})

export class ProductDetailComponent implements OnInit{
    pageTitle: string = "Product Details";
    product:IProduct[];
    errMessage: string;

    constructor(private _activate:ActivatedRoute
                ,private _route: Router
                ,private _http: ProductHttpService){

    }
    onBack():void{
        console.log("onBack...");
        this._route.navigate(['/products']);
    }

    ngOnInit():void{
        // this._http.getProduct()
        //                     .subscribe((productInfo) => { 
        //                                                     this.product = productInfo; 
        //                                                     console.log("ProductDetailComponent", this.product)
        //                                                 }
        //                     ,(error) => this.errMessage = <any>error)

        let id = +this._activate.snapshot.params["id"];
        this.pageTitle += `: ${id}`;
        console.log("id===", id);
    }
}