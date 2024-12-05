"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cliente_1 = require("./modules/cliente");
const endereco_1 = require("./modules/endereco");
//criando endereços para o cliente 
const endereco1 = new endereco_1.Enderecos("74484-130", "123", "33", "Casa", "São Paulo", "SP");
const endereco2 = new endereco_1.Enderecos("74484-140", "321", "43", "casa grande", "São Vicente", "MG");
const endereco3 = new endereco_1.Enderecos("12334-435", "887", "87", "Hotel Maresia", "Rio de Janeiro", "RJ");
//criando cliente com uma lista de endereços
const cliente1 = new cliente_1.Cliente("402.984.263-15", "Márcia Lavínia Rezende", "(62) 98687-7031", true, [endereco1, endereco2, endereco3] //passa um array de ebdereços
);
