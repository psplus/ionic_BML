import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
@IonicPage()
@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {
private id =  this.navParams.get('id');
private loading = this.loadingCtrl.create({
        content: 'Getting patient info ...'
});
private ptdata= { if_name: '',hn:''};
private result:any;
  constructor(public navCtrl: NavController,public loadingCtrl: LoadingController, public navParams: NavParams,public authService: AuthServiceProvider) {
  }

  ionViewDidLoad() {
    this.call_patientinfo();
    this.call_patienResult();
  }
    call_patientinfo():void{
         this.loading.present();
        var token = localStorage.getItem("_token");
        let body = 'user=' + this.id+"&token="+token;
        var received:any;
        this.authService.postdata(body,'getinfo').then((result)=>{
            received = JSON.stringify(result);
            this.ptdata = JSON.parse(received);     
        },(err)=>{ console.log(err); });
    }
    call_patienResult():void{
        var token = localStorage.getItem("_token");
        let body = 'user=' + this.id+"&token="+token;
        var received:any;
        this.authService.postdata(body,'get_pt_result').then((result)=>{
            this.loading.dismiss();
            received = JSON.stringify(result);
            this.result = JSON.parse(received);
            console.log(received);         
        },(err)=>{ console.log(err); });
    }

}
