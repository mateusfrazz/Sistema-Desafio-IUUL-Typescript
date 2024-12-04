import { Cliente } from "./modules/cliente";
import { Enderecos } from "./modules/endereco";

//criando endereços para o cliente 
const endereco1 = new Enderecos("74484-130", "123", "33","Casa","São Paulo", "SP");
const endereco2 = new Enderecos("74484-140", "321", "43","casa grande","São Vicente", "MG");
const endereco3 = new Enderecos("12334-435", "887", "87","Hotel Maresia","Rio de Janeiro", "RJ")

//criando cliente com uma lista de endereços
const cliente1 = new Cliente (
    "402.984.263-15",
    "Márcia Lavínia Rezende",
    "(62) 98687-7031",
    true,
    [endereco1,endereco2,endereco3]//passa um array de ebdereços
);