import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { userExtractPipe } from '../utils/custom-pipe';
import { DateFormatPipe } from '../utils/ejercicio-pipe';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    userExtractPipe,
    DateFormatPipe
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
