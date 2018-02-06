import { Component } from '@angular/core';
import { App,MenuController  } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(app: App,public  menu: MenuController) {
    menu.enable(true);
  }
    openMenu() {
   this.menu.open();
 }

}
