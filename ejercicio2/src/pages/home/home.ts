import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { OtherPage} from '../otherPage/otherPage'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public myString : string = "soy una cadena";
  public myJSON : any ={text:'soy una propiedad de JSON'};
  public otherPage: any = OtherPage;

  constructor(public navCtrl: NavController) {
    
  }

  gotoOtherPage(){
    this.navCtrl.push(OtherPage,{text:'soy un JSON enviado desde push'});
  }

}
