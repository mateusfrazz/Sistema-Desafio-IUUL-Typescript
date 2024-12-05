"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaPoupanca = void 0;
const conta_1 = require("./conta");
class ContaPoupanca extends conta_1.Conta {
    taxaRendimento = 0.005;
    constructor() {
        super();
    }
    calculoSaldo() {
        const saldoBase = super.calculoSaldo(); //chamando o metodo calcularSaldo da classe base
        const rendimento = saldoBase * this.taxaRendimento; //aplica o rendimento
        return saldoBase + rendimento; //Retorna o saldo com rendimento
    }
}
exports.ContaPoupanca = ContaPoupanca;
