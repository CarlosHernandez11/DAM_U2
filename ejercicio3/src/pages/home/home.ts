import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Final} from '../final/final';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  formulario: FormGroup;
  public param: any ;
  public final: any = Final;
  public edo: boolean ;
  public interes: boolean = true;
  public nac : boolean= true;
 
  constructor(
    public navCtrl: NavController,
    public fb: FormBuilder
  ) {
    this.formulario=this.createMyForm();
  }

  private createMyForm(){
    //Creamos el formulario 
    return this.fb.group({
      nombre:['',[Validators.required,Validators.minLength(3)]],
      email:['',[Validators.required, Validators.pattern(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)]],
      nacimiento:['',[Validators.required]],
      estado:['1',[Validators.required]],
      genero:['M',[Validators.required]],
      isc:['false'],
      tic:['false'],
      mec:['false'],
      otr:['false'],
    });
  }


  enviar(){
    /*1.- revisamos el estado civil 
      2.- revisamos el genero3
      3.- revisamos que seleccione al menos un interes
      4.- se envia la informacion
     */
    this.param = this.formulario.value;
    // ---------------------------------- 1 -----------------
    switch(this.param.estado){
      case "1": this.param.estado="Soltero/a";
      break;
      case "2": this.param.estado = "Casado/a";
      break;
      case "3": this.param.estado = "Comprometido/a";
      break;
      case "4": this.param.estado = "Divorciado/a";
      break;
      case "5": this.param.estado = "Viudo/a";
      break;
    }
    //------------------------------------- 2 --------------------
     if(this.param.genero ==='M'){
      this.param.genero="Hombre";
    }else{
      this.param.genero="Mujer";
    }
    // ------------------------------------- 3 -------------------
    if(this.formulario.get('isc').value === true || this.formulario.get('tic').value === true || this.formulario.get('mec').value === true || this.formulario.get('otr').value=== true){
       //----------------------------------- 4 -------------------
       this.navCtrl.push(Final,this.param);
    }else{
      this.interes = false;
    }
  
  }
 //---------------------------- Validacion del select -------------------
  selectValid(){
      if(this.formulario.get("estado").hasError("required")){
        this.edo= false;
      }else
        this.edo = true;
  }
  //---------------------------- Validacion de la fecha _-----------------
  dateValid(){
   if(this.formulario.get("nacimiento").hasError("required")){
        this.nac= false;
      }else
        this.nac = true;
  }
}
