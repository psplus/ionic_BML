import { Component } from '@angular/core';
import { IonicPage, NavController,LoadingController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { ResultPage } from '../result/result';
/**
 * Generated class for the DatalistPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-datalist',
  templateUrl: 'datalist.html',
})
export class DatalistPage {
public host_name = localStorage.getItem("_name");
private alldata="";
private loading = this.loadingCtrl.create({
        content: 'Please wait...'
});
  constructor(public navCtrl: NavController,public loadingCtrl: LoadingController,public authService: AuthServiceProvider) {
    
    
    this.onLoadPlace();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DatalistPage');
  }
  onLoadPlace():void {
    this.loading.present();
    var hosp_id = localStorage.getItem("_code");
    var token = localStorage.getItem("_token");
    let body = 'user=' + hosp_id+"&token="+token;
    var received:any;
      
    this.authService.postdata(body,'getlabtable_beta').then((result)=>{
        this.loading.dismiss();
        received = JSON.stringify(result);
        this.alldata = JSON.parse(received);
        //console.log(received);         
    },(err)=>{ console.log(err); });
  }
openPage(ser):void{
    let data = {id:ser}
        console.log(ser);
    this.navCtrl.push(ResultPage,data);
}

}
