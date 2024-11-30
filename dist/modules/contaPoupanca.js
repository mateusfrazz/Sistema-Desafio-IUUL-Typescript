"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaPoupanca = void 0;
const conta_1 = require("./conta");
class ContaPoupanca extends conta_1.Conta {
    constructor(numero) {
        super(numero);
    }
}
exports.ContaPoupanca = ContaPoupanca;
