//importando a classe Pessoa
import { Pessoa } from "./pessoa";

export class Cliente extends Pessoa{
    protected vip: boolean
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