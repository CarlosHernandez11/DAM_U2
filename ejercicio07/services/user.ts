import { Injectable } from '@angular/core';

@Injectable()
export class UserService{

    private _name:string;
    private _age: number;

    constructor(){
        this._name="Alexis";
        this._age=23;
    }

    get name():string{
        return this._name;
    }

    set name(newVal){
        this._name=newVal;
    }

    get age():number{
        return this._age;
    }

    set age(newVal){
        this._age=newVal;
    }
}