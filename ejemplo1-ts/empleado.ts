export class Empleado{
    name: string;
    lastname:string;
    salary: number;
    private _fullname:string;

    constructor(name:string, lastname:string, salary:number){
        this.name = name;
        this.lastname = lastname;
        this.salary = salary;
        this._fullname = `${this.name} ${this.lastname}`;
        }

    get fullName (): string{
        return this._fullname;
    }
}