import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import { IngredientesPage } from '../pages/ingredientes/ingredientes'
//import { IngPag } from 'ingrediente';

@Component({
    selector:'my-component',
    templateUrl:'foo.html'
})

export class MyComponent{
    public data : any = {myToggle:true};
    constructor(public navCtrl: NavController){
    }

    isClicked(val){
        console.log("Vegetariana: "+ val);
    }

    public getIngredientes(val:number){
       let json : any;
        switch(val){
           
            case 1 :
            json =
             { 
                 pizza:" Champiñones",
                 ingredientes: ["Champiñones", "masa", "queso", "etc."]
             };
             
             break;
            case 2 : 
              json={ 
                 pizza:"Espinacas",
                 ingredientes: ["Espinacas", "masa", "queso"," etc."]
             };
            break;
            case 3 : 
               json={ 
                 pizza:" Elotes",
                 ingredientes: ["Elotes", "masa", "queso", "etc."]
             };
            break;
            case 4 : 
               json={ 
                 pizza:" Hawaiana",
                 ingredientes: ["Jamón", "piña",  "masa", "queso", "etc."]
             };
            break;
            case 5 : 
              json={ 
                 pizza:" Peperoni",
                 ingredientes: ["Peperoni", "masa", "queso", "etc"]
             };
            break;
            case 6 : 
               json={ 
                 pizza:"Mexicana",
                 ingredientes: ["Tocino", "carne", "masa", "queso", "etc."]
             };
            break;
        }
        
        this.navCtrl.push(IngredientesPage,json);
    }

}

