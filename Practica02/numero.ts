export class Numero{
    numero : number;

    constructor(numero:number){
        this.numero = numero;
    }

    public sumar(numero:number):number{  
        return this.numero + numero;
    }

    public resta(numero:number):number{  
        return this.numero - numero;
    }

    public factorial(numero:number):number{
        if(numero<0)
            return -1;
        else
            if(numero == 0 )
                return 1;
            else
                return (numero * this.factorial(numero -1));
    } 

    get primo():boolean{
        var primo = false;
        for(let i= 1 ; i < this.numero;i++){
            if(this.numero % i == 0 && i!=1 && i != this.numero){
                primo= false;
                break;
            }
            else    
                primo= true;
        }
        return primo;
    }      

    get valor():number{
        return this.numero;
    }
}