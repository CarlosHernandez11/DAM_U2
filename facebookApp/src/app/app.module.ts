import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//conexion a Firebase
import { AngularFireModule } from 'angularfire2';
export const CONFIG ={
  apiKey: "AIzaSyCgQDWN9SrvZ8wOEJ7kzNw27NMrmzKdjSo",
    authDomain: "fir-app-393f3.firebaseapp.com",
    databaseURL: "https://fir-app-393f3.firebaseio.com",
    projectId: "fir-app-393f3",
    storageBucket: "fir-app-393f3.appspot.com",
    messagingSenderId: "104730738914"
}
@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
