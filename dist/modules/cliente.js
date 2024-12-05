"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
//importando a classe Pessoa
const pessoa_1 = require("./pessoa");
class Cliente extends pessoa_1.Pessoa {
    vip;
    //passando a classe Enderecos e atribuindo a um array
    listaEnderecos = [];
    //criando o parametro para informar que ele pode receber a conta corrente ou conta poupança
    conta;
    constructor(cpf, nome, telefone, vip, enderecos) {
        super(cpf, nome, telefone);
        this.vip = vip;
        this.listaEnderecos = enderecos; //armazena os endereços recebidos no array
    }
    //metodo para listar os endereços do usuario
    listarEnderecos() {
        //pra cada item dentro da minha lista de endereços, ele percorre todos os itens
        this.listaEnderecos.forEach((endereco) => {
            console.log("--------------------------------------");
            console.log(`Este é o cep ${endereco.cep}`);
            console.log(`Este é o logradouro ${endereco.logradouro}`);
            console.log(`Este é o numero ${endereco.numero}`);
            console.log(`Este é o complemento ${endereco.complemento}`);
            console.log(`Está é a cidade ${endereco.cidade}`);
            console.log(`Este é a UF ${endereco.uf}`);
        });
    }
    //metodo para associar uma conta ao cliente
    associarConta(conta) {
        this.conta = conta;
        console.log(` Conta numero ${this.conta.obterNumeroConta()} associada com sucesso ao ciente ${this.nome}`);
    }
    getConta() {
        return this.conta;
    }
}
exports.Cliente = Cliente;
