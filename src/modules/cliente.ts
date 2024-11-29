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
    listarEnderecos():void{
        
    }
}