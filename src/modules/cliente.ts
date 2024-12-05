//importando a classe Pessoa
import { Pessoa } from "./pessoa";
//importando os endereçoes do cliente
import { Enderecos } from "./endereco";
//importando a classe conta corrente
import { ContaCorrente } from "./contaCorrente";
import { ContaPoupanca } from "./contaPoupanca";
export class Cliente extends Pessoa{
    protected vip: boolean
    //passando a classe Enderecos e atribuindo a um array
    protected listaEnderecos: Enderecos[] = [];
     //criando o parametro para informar que ele pode receber a conta corrente ou conta poupança
    protected conta?: ContaCorrente | ContaPoupanca;
    constructor(
        cpf:string,
        nome:string,
        telefone:string,
        vip:boolean, 
        enderecos: Enderecos[]
    ){
        super(cpf,nome,telefone);
        this.vip = vip;
        this.listaEnderecos = enderecos;//armazena os endereços recebidos no array
    }

    //metodo para listar os endereços do usuario
    protected listarEnderecos():void{
        //pra cada item dentro da minha lista de endereços, ele percorre todos os itens
       this.listaEnderecos.forEach((endereco:Enderecos)=>{
         console.log("--------------------------------------")
         console.log(`Este é o cep ${endereco.cep}`)
         console.log(`Este é o logradouro ${endereco.logradouro}`)
         console.log(`Este é o numero ${endereco.numero}`)
         console.log(`Este é o complemento ${endereco.complemento}`)
         console.log(`Está é a cidade ${endereco.cidade}`)
         console.log(`Este é a UF ${endereco.uf}`)
       })
    }

    //metodo para associar uma conta ao cliente
    public associarConta(conta: ContaCorrente | ContaPoupanca):void{
        this.conta = conta;
        console.log(` Conta numero ${this.conta.obterNumeroConta()} associada com sucesso ao ciente ${this.nome}`)
    }

    public getConta(): ContaCorrente | ContaPoupanca | undefined{
        return this.conta
    }

    
}

