import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule, MdDialogModule } from '@angular/material';
import { FormsModule } from "@angular/forms";
import { LayoutService } from "app/layout.service";
import { MenuService } from "app/menu.service";
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginService } from "app/login/login.service";
import { TableComponent } from './table/table.component';
import { DetailService } from "app/detail.service";
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    MenuComponent,
    DashboardComponent,
    TableComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MaterialModule, 
    MdDialogModule,
    FormsModule,
    NgxDatatableModule,
    BrowserAnimationsModule,
     RouterModule.forRoot([
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'table',
        component: TableComponent
      }
    ])
  ],
  providers: [MenuService, LayoutService, LoginService,DetailService],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent]
})
export class AppModule { }
