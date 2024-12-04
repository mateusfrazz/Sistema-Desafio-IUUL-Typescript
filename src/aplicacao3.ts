import { Cliente } from "./modules/cliente";
import { Enderecos } from "./modules/endereco";

const endere1 = new Enderecos ("60861-162","3244","56","quadra3", "Fortaleza","CE")
const cliente1 = new Cliente (
    "648.069.855-03", 
    "Allana Ester Alana Baptista",
    "(85) 99191-9528",true,
    [endere1]
)
