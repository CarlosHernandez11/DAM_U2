import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserService } from '../../services/user';
import { Page1 } from '../page1/page1';

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html',
})
export class Page2 {

  private user:any;
  private nav:any;
  constructor(public navCtrl: NavController, nav: NavController, user: UserService) {
    this.user=user;
    this.nav=nav;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page2');
  }

  goToPage1(){
    this.nav.push(Page1);
  }

}
