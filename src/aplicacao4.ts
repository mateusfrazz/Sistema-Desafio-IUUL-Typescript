import { Cliente } from "./modules/cliente";
import { Enderecos } from "./modules/endereco";
import { ContaCorrente } from "./modules/contaCorrente";
import { ContaPoupanca } from "./modules/contaPoupanca";

//definindo o endereço dos dois clientes
const endereco1 = new Enderecos ("29701-780","342", "34", "comercial","Colatina","ES")
const endereco2 = new Enderecos ("877709", "877", "98","casa do arroz", "São Paulo", "SP")

// criando a conta corrente do primeiro cliente 
const contaCorrente1 = new ContaCorrente(2000)

//criando a conta poupança do primeiro cliente
const contaPoupanca1 = new ContaPoupanca(2000)

const client1 = new Cliente (
    "330.195.804-47",
    "Camila Marcela",
    "(11) 99502-1081",
     true,
    [endereco1]
     )
const client2 = new Cliente(
    "028.498.734-46",
    "Nair Fátima Gomes",
    "(69) 98192-9716",
    false,
    [endereco2]
)
//realizando o deposito de 1000 na conta corrente
contaCorrente1.depositar(1000);

//realizando um deposito para a conta Poupança
contaPoupanca1.depositar(1000);

//realizando a transferencia da conta corrente para a conta poupança
contaCorrente1.transferir(contaPoupanca1, 500)

//exibindo o saldo atul das duas contas
contaCorrente1.exibirSaldoAtual()
contaPoupanca1.exibirSaldoAtual()