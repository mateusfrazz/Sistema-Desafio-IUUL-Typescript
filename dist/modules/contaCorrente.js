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
    // criando o metodo para realizar a transferencia entre contas
    transferir(contaDestino, valor) {
        const saldoConta = this.calculoSaldo();
        if (saldoConta <= 0) {
            console.log(`Você não saldo suficiente na sua conta para realizar a transferencia`);
        }
        else if (valor > saldoConta) {
            console.log(`O valor de ${valor} que você está tentando transferir é menor que o saldo da sua conta`);
        }
        else if (this.limite <= 0) {
            console.log(`Você não tem limite para realizar a sua transferencia`);
        }
        else {
            this.sacar(valor); //retira o valor da conta atual
            contaDestino.depositar(valor); // adiciona o valor a conta de destino
        }
    }
    //metodo para adicionar limite
    adicionarLimite(limiteConta) {
        this.limite += limiteConta;
        console.log(`O limite de ${limiteConta} foi adicionado com sucesso`);
    }
}
exports.ContaCorrente = ContaCorrente;
