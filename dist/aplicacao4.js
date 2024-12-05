"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cliente_1 = require("./modules/cliente");
const endereco_1 = require("./modules/endereco");
const contaCorrente_1 = require("./modules/contaCorrente");
const contaPoupanca_1 = require("./modules/contaPoupanca");
//definindo o endereço dos dois clientes
const endereco1 = new endereco_1.Enderecos("29701-780", "342", "34", "comercial", "Colatina", "ES");
const endereco2 = new endereco_1.Enderecos("877709", "877", "98", "casa do arroz", "São Paulo", "SP");
// criando a conta corrente do primeiro cliente 
const contaCorrente1 = new contaCorrente_1.ContaCorrente(2000);
//criando a conta poupança do primeiro cliente
const contaPoupanca1 = new contaPoupanca_1.ContaPoupanca(2000);
const client1 = new cliente_1.Cliente("330.195.804-47", "Camila Marcela", "(11) 99502-1081", true, [endereco1]);
const client2 = new cliente_1.Cliente("028.498.734-46", "Nair Fátima Gomes", "(69) 98192-9716", false, [endereco2]);
//realizando o deposito de 1000 na conta corrente
contaCorrente1.depositar(1000);
//realizando um deposito para a conta Poupança
contaPoupanca1.depositar(1000);
//realizando a transferencia da conta corrente para a conta poupança
contaCorrente1.transferir(contaPoupanca1, 500);
//exibindo o saldo atul das duas contas
contaCorrente1.exibirSaldoAtual();
contaPoupanca1.exibirSaldoAtual();
