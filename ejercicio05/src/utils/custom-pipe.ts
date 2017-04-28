import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:"userExtract"
})

export class userExtractPipe implements PipeTransform{
    transform(value:any,arg):any {
        let newVal: any;
        if(arg =="firstname"){
            newVal = value.name.split(" ")[0];
        }else if(arg=="lastname"){
            newVal = value.name.split(" ")[1];
        }else if(arg=="age"){
            let hoy = new Date();
            newVal = hoy.getFullYear() - value.birthYear;  
        }
        return newVal;
    }
}