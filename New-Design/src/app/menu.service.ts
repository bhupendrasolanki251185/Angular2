import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {

  constructor() { }

  getMenus(){
    //This could be a service call for dynamic menus
    return [
      { id: 0, text: 'ADMINISTRATOR', name: 'ADMINISTRATOR',  url:'/dashboard'}, 
      { id: 1, text: 'LOCATION', name: 'Location',  url:'/dashboard'}, 
      { id: 2, text: 'TAG', name: 'TAG',  url:'/dashboard'}, 
      { id: 3, text: 'ADD DOCUMENT',  name: 'ADD DOCUMENT',  url:'/dashboard'}, 
      { id: 4, text: 'NEW FOLDER',  name: 'NEW FOLDER',  url:'/dashboard'}, 
      { id: 4, text: 'ADD SITE',  name: 'ADD SITE',  url:'/dashboard'}, 
      { id: 4, text: 'DELETE',  name: 'DELETE',  url:'/dashboard'}
    ];
  }

}