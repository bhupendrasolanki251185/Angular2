import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

import { Router, ActivatedRoute } from '@angular/router';
import { ProductHttpService } from './product.http.service';

@Component({
    templateUrl : "app/products/product-detail.component.html"
})

export class ProductDetailComponent implements OnInit{
    pageTitle: string = "Product Details";
    products:IProduct;

    constructor(private _router:Router
                ,private _activate:ActivatedRoute
                ,private _http: ProductHttpService){

    }
    onBack():void{
        this._router.navigate(['/products']);
    }

    ngOnInit():void{
        
    }
}