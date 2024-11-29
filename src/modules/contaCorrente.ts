import { Conta } from "./conta";

class ContaCorrente extends Conta{
    protected limite: number;
    constructor(numero:string,limite:number){
        super(numero)
        this.limite = limite;
     }
     calcularSaldo():void{

     }

     transferir(Conta:string, contaDestino:string, valorTransferencia:number):void{
        
     }
    }