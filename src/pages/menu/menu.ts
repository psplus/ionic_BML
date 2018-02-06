import { AccountPage } from './../account/account';
//import { DatalistPage } from './../datalist/datalist';
import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, Nav } from 'ionic-angular';
import { GatePage } from '../gate/gate';

export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
  type: string;
}

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
    
 rootPage = 'DatalistPage';
 @ViewChild(Nav) nav: Nav;
  pages: PageInterface[] = [
    { title: 'HOME', pageName: 'DatalistPage', tabComponent: 'DatalistPage', index: 0, icon: 'home',type:'fn' },
    { title: 'ACCOUNT', pageName: 'AccountPage', tabComponent: 'AccountPage', index: 1, icon: 'contacts',type:'fn' }
  ];    
    
  constructor(public navCtrl: NavController) {
  }

openPage(page: PageInterface) {
    let params = {};
    // The index is equal to the order of our tabs inside tabs.ts
    if (page.index) {
      params = { tabIndex: page.index };
    }
 
    if (page.pageName == "AccountPage") {
        this.navCtrl.push(AccountPage);
    }
  }
 
  isActive(page: PageInterface) {
    if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
      return 'primary';
    }
    return;
  }
    logout():void{
        window.localStorage.clear(); 
        this.navCtrl.push(GatePage);
    }

}
