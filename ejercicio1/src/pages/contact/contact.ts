import { Component, ViewChild } from '@angular/core';

import { NavController, Slides } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  @ViewChild('mySlider') slide:Slides;
  constructor(public navCtrl: NavController) {


  }
  ionicViewWillEnter(){
  console.log("Estoy en la fucking pagina 3");
}

onSlideChanged(e){
  let currentIndex = this.slide.getActiveIndex();
  console.log("Estoy en el slide", (currentIndex+1));
}
}
