"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cadena = (function () {
    function Cadena(cadena) {
        this.cadena = cadena;
    }
    Object.defineProperty(Cadena.prototype, "palindromo", {
        get: function () {
            var reversa = this.cadena.split("").reverse().join("").toLowerCase();
            reversa = reversa.replace(/\s/g, "");
            if (reversa == this.cadena.replace(/\s/g, "").toLowerCase()) {
                return true;
            }
            else {
                return false;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cadena.prototype, "vocales", {
        get: function () {
            var letras = this.cadena.split("");
            var total = 0;
            for (var _i = 0, letras_1 = letras; _i < letras_1.length; _i++) {
                var letra = letras_1[_i];
                switch (letra.toLowerCase()) {
                    case "a":
                        total++;
                        break;
                    case "e":
                        total++;
                        break;
                    case "i":
                        total++;
                        break;
                    case "o":
                        total++;
                        break;
                    case "u":
                        total++;
                        break;
                }
            }
            return total;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cadena.prototype, "letras", {
        get: function () {
            var total = 0;
            var letras = this.cadena.split("");
            for (var _i = 0, letras_2 = letras; _i < letras_2.length; _i++) {
                var letra = letras_2[_i];
                if (/[a-z]/.test(letra.toLocaleLowerCase()))
                    total++;
            }
            return total;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cadena.prototype, "palabras", {
        get: function () {
            var total = 0;
            var palabras = this.cadena.split(" ");
            for (var _i = 0, palabras_1 = palabras; _i < palabras_1.length; _i++) {
                var palabra = palabras_1[_i];
                if (palabra.length != 0)
                    total++;
            }
            return total;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cadena.prototype, "text", {
        get: function () {
            return this.cadena;
        },
        enumerable: true,
        configurable: true
    });
    return Cadena;
}());
exports.Cadena = Cadena;
