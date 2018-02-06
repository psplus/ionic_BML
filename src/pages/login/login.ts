import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController  } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { GatePage } from '../gate/gate';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
 recived:any;
    userdata = {"user":"",pass:""};
  public athen_msg:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private storage: Storage, public authService: AuthServiceProvider,public alertCtrl: AlertController) 
  {
   storage.get('_token').then((val) => { 
  console.log("session:"+val);
  });
 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  showAlert(title,subTitle,btn):void {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: subTitle,
      buttons: [btn]
    });
    alert.present();
  }

  onLoadNewPlace():void {
      let body = 'user=' + this.userdata.user + '&password=' + this.userdata.pass;
    this.authService.postdata(body,'uservalidation').then((result)=>{
        this.recived = JSON.stringify(result);
        const msg = JSON.parse(this.recived);
        console.log(msg._token);
        if(msg.message=="get_the_info"){
           /* this.storage.set('_token', msg._token);
            this.storage.set('_code', msg._user);
            this.storage.set('_name', msg._name);
            this.storage.set('_permisstion', msg._permisstion);*/
            localStorage.setItem('_token', msg._token);
            localStorage.setItem('_code', msg._user);
            localStorage.setItem('_name', msg._name);
            localStorage.setItem('_permisstion', msg._permisstion);
            this.navCtrl.push(GatePage);
        }else if(msg.message=="notacc"){
             this.showAlert("Warning","Incorrect Username or Password",'Try again');
            
        }
         
    },(err)=>{});
  }
}
