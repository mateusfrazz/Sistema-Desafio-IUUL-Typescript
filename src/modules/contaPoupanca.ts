import { Conta } from "./conta";

export class ContaPoupanca extends Conta{
    private taxaRendimento : number = 0.005;
    constructor(limite : number){
         super(limite);
         this.limite = limite;
    }
      calculoSaldo(): number {
          const saldoBase = super.calculoSaldo()//chamando o metodo calcularSaldo da classe base
          const rendimento = saldoBase * this.taxaRendimento; //aplica o rendimento
          return saldoBase + rendimento;//Retorna o saldo com rendimento
      }
}