import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuService } from "app/menu.service";

@Component({
  selector: 'side-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    menuList =  [];
  @Output() menuToggle = new EventEmitter();
  isExpended = false;
  activeMenu = 'home';
  menu = {};
  constructor(private menuService: MenuService) { }

  ngOnInit(){
        this.menuList = this.menuService.getMenus();

  }

  toggle(){
    this.isExpended = !this.isExpended;
    this.menuToggle.emit(this.isExpended)
  }

  getClass(menu){
    return menu.name == this.activeMenu? 'active': '';
  }

  setActive(menu){
    this.activeMenu = menu.name;
  }


}
