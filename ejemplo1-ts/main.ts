import {Empleado} from './empleado';

let emps = new Array<Empleado>();

emps.push(new Empleado("Carlos Eduardo","Hernández Velador",20000));
emps.push(new Empleado("Angel","Hernández Velador",10000));


for(let emp of emps){
    console.log(emp.fullName);
}

emps.forEach(emp=>{
    console.log(emp);
});