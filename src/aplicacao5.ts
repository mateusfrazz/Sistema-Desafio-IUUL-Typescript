import { Cliente } from "./modules/cliente";
import { Enderecos } from "./modules/endereco";
import { ContaCorrente } from "./modules/contaCorrente";
import { ContaPoupanca } from "./modules/contaPoupanca";

const enderecoCliente1 =  new Enderecos ("9888-345", "888","66","Sorveteria","São Vicente","MG" )
const cliente1 = new Cliente (
    "0988723988749",
    "Mateus Costa Mendes",
    "98998878734",
    true,
    [enderecoCliente1]
)

//criando uma nova conta
const contaCorrenteCliente1 = new ContaCorrente(0)
cliente1.associarConta(contaCorrenteCliente1) //associando a conta ao cliente

//efetuando os depositos
contaCorrenteCliente1.depositar(300)
//alterando o limite da conta do cliente para 100
contaCorrenteCliente1.alterarLimite(100)

//atribuindo o endereço ao cliente 2
const enderecoCliente2 =  new Enderecos ("9888-345", "888","66","Hamburgueria","Jonvile","MG" )
const cliente2 = new Cliente( 
    "0988723988749",
    "Marcos",
    "98998878734",
    true,
    [enderecoCliente2]
);
const contaCorrenteCliente2 = new ContaCorrente(0)
cliente2.associarConta(contaCorrenteCliente2)
contaCorrenteCliente2.depositar(100)
//realizando a transferencia de 1000 de uma conta para a outra
contaCorrenteCliente1.transferir(contaCorrenteCliente2, 1000)






