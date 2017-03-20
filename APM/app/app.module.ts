import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'

import { AppComponent }  from './app.component';
import { ProductListComponent }  from './products/product-list.component';
import { ProductFilterPipe }  from './products/product-filter-pipe';
import { StarComponent }  from './shared/star.component';
import { ProductDetailComponent }  from './products/product-detail.component';
import { WelcomeComponent }  from './home/welcome.component';
import { ProductDetailGuardService }  from './products/product-detail-guard.service';


@NgModule({
  imports: [ BrowserModule
            ,FormsModule
            ,HttpModule
            ,RouterModule.forRoot([
              {path : "products", component : ProductListComponent}
              ,{path : "product/:id"
                ,canActivate : [ProductDetailGuardService]
                ,component : ProductDetailComponent}
              ,{path : "welcome", component : WelcomeComponent}
              ,{path : "", redirectTo : "welcome", pathMatch : "full"}
              ,{path : "**", redirectTo : "welcome", pathMatch : "full"}
            ]) ],
  declarations: [ AppComponent
                , ProductListComponent
                , ProductFilterPipe
                ,StarComponent
                ,WelcomeComponent
                ,ProductDetailComponent 
                ],
  providers : [ProductDetailGuardService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
