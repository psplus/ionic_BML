import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
let apiUrl = "http://bangkoklab.iam-ps.info/service/";
/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

  constructor(public http: Http) {
    console.log('Hello AuthServiceProvider Provider');
  }
    postdata(credetials,type){
        return new Promise((resolve,reject)=>{
          let headers = new Headers({
			'Content-Type': 'application/x-www-form-urlencoded'
		  });
          let options = new RequestOptions({
			headers: headers
		  });
            this.http.post(apiUrl+type,credetials,options).subscribe(res =>{ 
            resolve(res.json());
            },(err)=>{ reject(err); });
        });
    }

}
