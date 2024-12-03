//importando a classe Pessoa
import { Pessoa } from "./pessoa";
//importando os endereçoes do cliente
import { Enderecos } from "./endereco";
export class Cliente extends Pessoa{
    protected vip: boolean
    //passando a classe Enderecos e atribuindo a um array
    protected listaEnderecos: Enderecos[] = [];
    constructor(
        cpf:string,
        nome:string,
        telefone:string,
        vip:boolean,
    ){
        super(cpf,nome,telefone);
        this.vip = vip;
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

    
}

