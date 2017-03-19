import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { IProduct } from './product';

@Injectable()

export class ProductHttpService{

    private _prductUrl:string = "api/products/products.json"

    constructor(private _http: Http){}

    getProduct(): Observable<IProduct[]>{
        
        return this._http.get(this._prductUrl)
                          .map((respone:Response) => {
                               console.log("respone", respone)
                               return <IProduct[]>respone.json()
                            })
                          .do((data) =>  {
                              console.log("data==>",JSON.stringify(data))
                            })
                          .catch(this.errorHandler);
    }

    errorHandler(err:Response){
        console.error(err);
        return Observable.throw(err.json().error || "server error")
    }
}