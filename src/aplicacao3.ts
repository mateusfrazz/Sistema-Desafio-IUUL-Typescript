import { Cliente } from "./modules/cliente";
import { Enderecos } from "./modules/endereco";
import { ContaCorrente } from "./modules/contaCorrente";
//adicionando os endereços para o usuario 
const endere1 = new Enderecos ("60861-162","3244","56","quadra3", "Fortaleza","CE")
//instancinando um novo cliente
const cliente1 = new Cliente (
    "648.069.855-03", 
    "Allana Ester Alana Baptista",
    "(85) 99191-9528",true,
    [endere1]
)

//criando uma nova conta corrente 
const contaCorrente1 = new ContaCorrente (500);

//associando  aconta ao cliente
cliente1.associarConta(contaCorrente1);

//verificando a associação
const contaDoCliente = cliente1.getConta();
if (contaDoCliente){
    console.log(`A conta do cliente é: ${contaDoCliente.obterNumeroConta()}`)
}

//efetuando os depositos na conta Corrente do cliente
contaCorrente1.depositar(100);
contaCorrente1.depositar(100);
contaCorrente1.depositar(100);

//efetuando o saque da conta corrente do cliente
contaCorrente1.sacar(50);

//exibindo o saldo atual da conta 
contaCorrente1.exibirSaldoAtual()


