import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private user: any;
  private fecha:any;

  constructor(public navCtrl: NavController) {
    this.user={
      name:'Carlos Eduardo',
      birthYear: 1994
    }

    this.fecha='11/07/1994';
  }
  

}
