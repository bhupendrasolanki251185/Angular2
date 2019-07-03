import { Component, OnInit } from '@angular/core';
import { MenuService } from "app/menu.service";
import { LayoutService } from "app/layout.service";
import { DetailService } from "app/detail.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  menuList = [];
  tiles = [];
  isExpendedMenu = false;
  rows: Array<Object>=[];
  user: object = {};
  list = [];

  constructor(private patientService: DetailService, private menuService: MenuService, private layoutService: LayoutService) {

  }
  ngOnInit() {
    this.menuList = this.menuService.getMenus();
    this.tiles = this.layoutService.getMainLayout();
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    console.log('user', this.user);

    if (this.user['role'] == 'Patient') {
      this.patientService.getDetails().subscribe(result => {
        console.log('patient', result);
        this.list = result;
        this.list.forEach(element => {
          var text = element['owner'].substring(element['owner'].indexOf("#") + 1, element['owner'].length);
          console.log('owner',text);
          if (text == this.user['name']) {
            this.rows.push(element);
          }
        });


        //this.rows=result;
      });
    }
    else if (this.user['role'] == 'Doctor') {
      this.patientService.getDetails().subscribe(result => {
        this.list = result;
        this.list.forEach(element => {
          var text = element['doctor'].substring(element['doctor'].indexOf("#") + 1, element['doctor'].length);
          if (text == this.user['name']) {
          console.log('Doctor',text);          
            this.rows.push(element);         
          }
      });
    });
    console.log('Rows', this.rows);

  }}

  onMenuToggle(isExpended) {
    this.isExpendedMenu = isExpended;
  }

  getClassName() {
    return this.isExpendedMenu ? 'squeeze' : 'normal';
  }

}
