"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaCorrente = void 0;
const conta_1 = require("./conta");
class ContaCorrente extends conta_1.Conta {
    limite = 0;
    constructor(limite) {
        super();
        this.limite = limite;
    }
    transferir(contaDestino, valor) {
    }
}
exports.ContaCorrente = ContaCorrente;
