"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
const credito_1 = require("./credito");
const debito_1 = require("./debito");
class Conta {
    numeroConta;
    //definindo um array para armazenar os creditos
    creditoConta = [];
    //definindo um array para armazenar os Debitos
    debitoConta = [];
    constructor() {
        this.numeroConta = this.gerarNumeroConta();
    }
    //criando o metodo para gerar o numero de conta do cliente de forma aleatoria ao ser instanciada uma classe filho
    gerarNumeroConta() {
        return Math.floor(Math.random() * 10000) + 1; // definindo o retorno para gerar o numero da conta
    }
    //criando o metodo de deposito 
    depositar(valorDeposito) {
        if (valorDeposito <= 0) { //verificação para noa permitir que o cliente informe um valor  de Deposito negativo 
            console.log(`O valor de $${valorDeposito}Reais, não é valido,  Informe um valor de Deposito valido por gentileza`);
        }
        else {
            const novoCredito = new credito_1.Credito(valorDeposito, new Date()); // criando o parametro para armazenar o valor do deposito e a data atual
            this.creditoConta.push(novoCredito); //adicionando o credito ao array
            console.log(`O valor de R$${valorDeposito} foi depositado com sucesso`);
            console.log("---------------------------------");
            console.log(this.logDeposito());
        }
    }
    //criando o metodo sacar seguindo os parametros da classe debito
    sacar(valorSaque) {
        if (valorSaque <= 0) {
            console.log(`O valor de Saque de R$${valorSaque} é um valor invalido, por favor informe um valor valido`);
        }
        else {
            const novoDebito = new debito_1.Debito(valorSaque, new Date());
            this.debitoConta.push(novoDebito);
            console.log(`O valor de R$${valorSaque} foi sacado com sucesso`);
            console.log("---------------------------------");
            console.log(this.logSaque());
        }
    }
    //METODO PARA EXIBIR O LOG DE MOVIMENTAÇÃO DE DEPOSITO DO CLIENTE 
    logDeposito() {
        this.creditoConta.forEach((transacaoDeposito) => {
            console.log("------------------------");
            console.log("RECIBO DE TRANSAÇÃO");
            console.log(`Valor do Deposito R$${transacaoDeposito.valor}`);
            console.log(`Horario do Deposito ${transacaoDeposito.data.toLocaleString("pt-BR")}`);
        });
    }
    //METODO PARA EXIBIR O LOG DE MOVIMENTAÇÃO DE SAQUE DO CLIENTE
    logSaque() {
        this.debitoConta.forEach((transacaoSaque) => {
            console.log("----------------------");
            console.log("RECIBO DE TRANSAÇÃO");
            console.log(`Valor do Saque R$${transacaoSaque.valor}`);
            console.log(`Horario do Saque ${transacaoSaque.data.toLocaleString("pt-BR")}`); // formatar a data e hora para os padroes pt-br
        });
    }
}
exports.Conta = Conta;
