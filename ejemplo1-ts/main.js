"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var empleado_1 = require("./empleado");
var emps = new Array();
emps.push(new empleado_1.Empleado("Carlos Eduardo", "Hernández Velador", 20000));
emps.push(new empleado_1.Empleado("Angel", "Hernández", 10000));
for (var _i = 0, emps_1 = emps; _i < emps_1.length; _i++) {
    var emp = emps_1[_i];
    console.log(emp.fullName);
}
emps.forEach(function (emp) {
    console.log(emp);
});
