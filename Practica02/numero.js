"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Numero = (function () {
    function Numero(numero) {
        this.numero = numero;
    }
    Numero.prototype.sumar = function (numero) {
        return this.numero + numero;
    };
    Numero.prototype.resta = function (numero) {
        return this.numero - numero;
    };
    Numero.prototype.factorial = function (numero) {
        if (numero < 0)
            return -1;
        else if (numero == 0)
            return 1;
        else
            return (numero * this.factorial(numero - 1));
    };
    Object.defineProperty(Numero.prototype, "primo", {
        get: function () {
            var primo = false;
            for (var i = 1; i < this.numero; i++) {
                if (this.numero % i == 0 && i != 1 && i != this.numero) {
                    primo = false;
                    break;
                }
                else
                    primo = true;
            }
            return primo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Numero.prototype, "valor", {
        get: function () {
            return this.numero;
        },
        enumerable: true,
        configurable: true
    });
    return Numero;
}());
exports.Numero = Numero;
