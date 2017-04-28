"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Empleado = (function () {
    function Empleado(name, lastname, salary) {
        this.name = name;
        this.lastname = lastname;
        this.salary = salary;
        this._fullname = this.name + " " + this.lastname;
    }
    Object.defineProperty(Empleado.prototype, "fullName", {
        get: function () {
            return this._fullname;
        },
        enumerable: true,
        configurable: true
    });
    return Empleado;
}());
exports.Empleado = Empleado;
