"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enderecos = void 0;
class Enderecos {
    cep;
    logradouro;
    numero;
    complemento;
    cidade;
    uf;
    constructor(cep, logradouro, numero, complemento, cidade, uf) {
        this.cep = cep;
        this.logradouro = logradouro;
        this.numero = numero;
        this.complemento = complemento;
        this.cidade = cidade;
        this.uf = uf;
    }
}
exports.Enderecos = Enderecos;
