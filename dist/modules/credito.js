"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Credito = void 0;
class Credito {
    valor;
    data;
    constructor(valor, data) {
        this.data = new Date();
        this.valor = valor;
    }
}
exports.Credito = Credito;
