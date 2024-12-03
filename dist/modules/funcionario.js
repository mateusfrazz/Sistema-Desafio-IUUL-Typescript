"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
const pessoa_1 = require("./pessoa");
class Funcionario extends pessoa_1.Pessoa {
    salario;
    cargo;
    constructor(cpf, nome, telefone, salario) {
        super(cpf, nome, telefone);
        this.salario = salario;
        this.cargo = [];
    }
    //chmando o metodo da interface IUsuario
    autenticar() {
        return true;
    }
}
exports.Funcionario = Funcionario;
