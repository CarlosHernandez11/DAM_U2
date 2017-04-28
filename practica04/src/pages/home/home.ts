import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public res:number=0;
  public n1:number=0;
  public n2:number=0;
  public op:string;

  constructor(public navCtrl: NavController) {
  }

  public calcular(operacion:number){
      let res:number;
      let n1:number ,n2 : number;
      n1 =Number(this.n1);
      n2 =Number(this.n2);
    switch(operacion){
      case 1: this.op = "+";
              this.res= this.suma(n1 , n2);
        break;
      case 2:this.op = "-";
             this.res= n1-n2;
        break;
      case 3:this.op = "/";
             this.res= n1/n2;
        break;
      case 4:this.op = "*";
             this.res= n1*n2;
        break;
      case 5:this.op = "%";
             this.res= n1%n2;
        break;     
    }
  }

  suma(n1:number , n2:number):number{
    return n1+n2;
  }

}
