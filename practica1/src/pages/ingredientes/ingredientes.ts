import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Ingredientes page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-ingredientes',
  templateUrl: 'ingredientes.html'
})
export class IngredientesPage {

  constructor( public navCtrl:NavController,
        public params:NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad IngredientesPage');
  }

}
