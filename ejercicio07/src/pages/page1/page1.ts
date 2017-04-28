import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserService } from '../../services/user';
import { Page2 } from '../page2/page2';


@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html',
})
export class Page1 {

  private user:any;
  private nav:any;

  constructor(public navCtrl: NavController, user: UserService, nav: NavController) { //Si lleva el public es para usarlo en toda la clase
    
    this.user=user;
    this.nav=nav;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page1');
  }

  goToPage2(){
    this.nav.push(Page2);
  }

}
