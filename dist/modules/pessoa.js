"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
//definindo a classe pessoa
class Pessoa {
    cpf;
    nome;
    telefone;
    constructor(cpf, nome, telefone) {
        this.cpf = cpf;
        this.nome = nome;
        this.telefone = telefone;
    }
}
exports.Pessoa = Pessoa;
