import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { GatePage } from '../pages/gate/gate';
import { ResultPage } from '../pages/result/result';
import { AccountPage } from '../pages/account/account';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    GatePage,AccountPage,ResultPage
  ],
  imports: [
    BrowserModule,HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    GatePage,AccountPage,ResultPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider
  ]
})
export class AppModule {}
