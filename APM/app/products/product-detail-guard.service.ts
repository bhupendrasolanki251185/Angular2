import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router} from '@angular/router';


@Injectable()
export class ProductDetailGuardService implements CanActivate{

    constructor(private _route:Router){
        console.log("ProductDetailGuardService...");
    }
    canActivate(activeRouteSnapshot: ActivatedRouteSnapshot): boolean{

        console.log("canActivate...");
        let id = +activeRouteSnapshot.url[1].path;

        if(isNaN(id) || id <= 0){
            alert(`Incorrect ID! Please Check you Id`);

            this._route.navigate(['/products']);
            return false;
        }
        return true;
    }
}