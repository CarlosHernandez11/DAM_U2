import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component({
    templateUrl: "otherPage.html"
})

export class OtherPage{

    constructor(public navCtrl:NavController, public params: NavParams){

    }

    goBack(){
        this.navCtrl.pop();
    }
}