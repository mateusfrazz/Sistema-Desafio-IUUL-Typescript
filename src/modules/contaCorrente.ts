import { Conta } from "./conta";
import { Credito } from "./credito";
import { Debito } from "./debito";

export class ContaCorrente extends Conta{
     protected clientetest : string
     protected limite : number = 0
     constructor( clientetest : string){
          super()
          this.clientetest = clientetest;
     }
      
     // criando o metodo para realizar a transferencia entre contas
     transferir(contaDestino:Conta, valor:number): void{
         const saldoConta = this.calculoSaldo()
         if(saldoConta <= 0){
              console.log(`Você não saldo suficiente na sua conta para realizar a transferencia`)
         } else if(valor > saldoConta){
              console.log(`O valor de ${valor} que você está tentando transferir é menor que o saldo da sua conta`)
         } else if(this.limite <= 0){
              console.log(`Você não tem limite para realizar a sua transferencia`)
         } else {
          this.sacar(valor);//retira o valor da conta atual
          contaDestino.depositar(valor);// adiciona o valor a conta de destino
         }
     }

     //metodo para adicionar limite
      adicionarLimite(limiteConta: number): void{
         this.limite += limiteConta;
         console.log(`O limite de ${limiteConta} foi adicionado com sucesso`)
     }
}


