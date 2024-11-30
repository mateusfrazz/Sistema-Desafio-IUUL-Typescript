import { Pessoa } from "./pessoa";
import { IUsuario } from "./IUsuario";

export class Funcionario extends Pessoa implements IUsuario{
    protected salario: number;
    constructor(cpf:string, nome:string, telefone:string, salario:number){
        super(cpf,nome,telefone)
        this.salario = salario
     }
     //chmando o metodo da interface IUsuario
     autenticar(): boolean {
         return true;
     }
}