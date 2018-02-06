import { Component } from '@angular/core';
//import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { IonicPage, NavController,AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
//import { AccountPage } from '../account/account';
/**
 * Generated class for the GatePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gate',
  templateUrl: 'gate.html',
})
export class GatePage {
  public msg = 'wait for session';
  public msg2 = '';
  private tok ="IAMOUTOFSESSION";
  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {
      if(localStorage.getItem("_token")!=null){
          this.tok =   localStorage.getItem("_token");
      }
      if(this.tok != "IAMOUTOFSESSION") {
            var c_name = localStorage.getItem("_name");  
            this.msg2 += "welcome "+c_name+" redirect to DataList";
            //this.showAlert("Info","Welcome "+localStorage.getItem("_name"),'continue');
            //this.navCtrl.push(AccountPage);
            this.navCtrl.setRoot('MenuPage');
      } else {
            setTimeout(() => {  this.msg2 = "session null please login";  },800);
            setTimeout(() => {  this.navCtrl.push(LoginPage);  },1000);
            
        }
  }
    
  
    

  ionViewDidLoad() {
      
  }
  onLoadNewPlace():void {
    this.navCtrl.push(LoginPage);
  }
    
  showAlert(title,subTitle,btn):void {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: subTitle,
      buttons: [btn]
    });
    alert.present();
  }
    
    
}
