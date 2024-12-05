"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaCorrente = void 0;
const conta_1 = require("./conta");
class ContaCorrente extends conta_1.Conta {
    constructor(limite) {
        super(limite);
    }
    // criando o metodo para realizar a transferencia entre contas
    transferir(contaDestino, valor) {
        const limiteAtual = this.SaldoLimite();
        const saldoConta = this.calculoSaldo();
        if (saldoConta <= 0) {
            console.log(`Você não saldo suficiente na sua conta para realizar a transferencia`);
        }
        else if (valor > saldoConta) {
            console.log(`O valor de ${valor} que você está tentando transferir é menor que o saldo da sua conta`);
        }
        else if (limiteAtual <= 0 || valor > limiteAtual) {
            console.log(`Você não tem limite para realizar a sua transferencia`);
        }
        else {
            this.sacar(valor); //retira o valor da conta atual
            contaDestino.depositar(valor); // adiciona o valor a conta de destino
        }
    }
}
exports.ContaCorrente = ContaCorrente;
