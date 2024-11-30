"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conta_1 = require("./conta");
class ContaCorrente extends conta_1.Conta {
    limite;
    constructor(numero, limite) {
        super(numero);
        this.limite = limite;
    }
    calcularSaldo() {
    }
    transferir(Conta, contaDestino, valorTransferencia) {
    }
}
