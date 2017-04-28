import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
    name:"dateFormat"
})

export class DateFormatPipe implements PipeTransform{
    transform(value:any,arg:any):any {
        let date:Date;
        let format:any;
        date = new Date(value);
        switch(arg){
            case "DD/LL/AA":          
                return `${date.getDay()}/${this.month(date.getMonth())}/${(date.getFullYear()+"").substr(2,3)}`;
            case "AA/MM/DD":
                return `${(date.getFullYear()+"").substr(2,3)}/${date.getMonth()}/${date.getDay()}`;
            case "AAA/LL/DD":
                return `${(date.getFullYear()+"").substr(1,3)}/${this.month(date.getMonth())}/${date.getDay()}`;
            case "DD/LL/AAAA":
                return `${date.getDay()}/${this.month(date.getMonth())}/${date.getFullYear()}`;
        }
    }

    private month(mes:number):string{
        let meses:any =['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        return meses[mes];
    }
}