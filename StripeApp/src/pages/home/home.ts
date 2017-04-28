import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
declare var Stripe: any;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private token:string;
  private ngForm: any = {
    cc:'4242424242424242',
    cvc:'123',
    month:'12',
    year:'2020'
  }
  constructor(public navCtrl: NavController) {
    console.log(Stripe);
    Stripe.setPublishableKey('pk_test_NRcHAUuyMgdnos71yJ6gtbia');
  }

  onSubmit(){
    Stripe.card.createToken({
      number:this.ngForm.cc,
      cvc: this.ngForm.cvc,
      exp_month:this.ngForm.month,
      exp_year: this.ngForm.year
    },(status, response)=> this.stripeResponseHeader(status,response));
  }
  
  stripeResponseHeader(status, response){
    if(response.error){
      console.log('Error');
      console.log(response.error.message);
    }
    this.token=response.id;
    this.navCtrl.push(ThankYouPage,{token: this.token})
  } 
}
