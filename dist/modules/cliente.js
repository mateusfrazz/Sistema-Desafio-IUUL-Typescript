"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
//importando a classe Pessoa
const pessoa_1 = require("./pessoa");
class Cliente extends pessoa_1.Pessoa {
    vip;
    //passando a classe Enderecos e atribuindo a um array
    listaEnderecos = [];
    constructor(cpf, nome, telefone, vip) {
        super(cpf, nome, telefone);
        this.vip = vip;
    }
    listarEnderecos(endereco) {
        if (!endereco === null) {
            console.log(`Esses são os endereços do cliente ${this.nome}`);
        }
        else {
            console.log(`O Cliente ${this.nome} ainda não cadastrou nenhum endereço`);
        }
    }
}
exports.Cliente = Cliente;
