export class Cadena{
    cadena:string;

    constructor( cadena:string){
        this.cadena = cadena;
    }

    get palindromo(): boolean {
       let reversa: string=this.cadena.split("").reverse().join("").toLowerCase();
       reversa = reversa.replace(/\s/g,"");
        if(reversa == this.cadena.replace(/\s/g,"").toLowerCase()){
            return true;
        }else{
            return false;
        }
    }
    get vocales():number{
        let letras : Array<string> = this.cadena.split("");
        var total:number = 0;
        for(let letra of letras ){
         switch (letra.toLowerCase()) {
             case "a": total++;
                 break;
             case "e": total++;
                 break;
             case "i": total++;
                 break;
             case "o": total++;
                 break;
             case "u": total++;
                 break;
         }
        }
        return total;
    }

    get letras():number{
        var total : number = 0;
        let letras : Array<string> = this.cadena.split("");
        for(let letra of letras){
            if(/[a-z]/.test(letra.toLocaleLowerCase()))
            total++;
        }
        return total;
    }

    get palabras():number{
        var total:number=0;
        let palabras : Array<string> = this.cadena.split(" ");
        for(let palabra of palabras){
            if(palabra.length!=0)
                total++
        }
        return total;
    }

    get text():string{
        return this.cadena;
    }


}