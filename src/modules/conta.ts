import { Credito } from "./credito";
import { Debito } from "./debito";

export abstract class Conta{
    protected numeroConta:number;
    //definindo um array para armazenar os creditos
    protected creditoConta : Credito[] = []

    //definindo um array para armazenar os Debitos
    protected debitoConta : Debito[] = []
    constructor(){
    this.numeroConta = this.gerarNumeroConta();
    }

    //criando o metodo para gerar o numero de conta do cliente de forma aleatoria ao ser instanciada uma classe filho
    private gerarNumeroConta():number{
       return Math.floor(Math.random()*10000)+1;// definindo o retorno para gerar o numero da conta
    }

    //criando o metodo de deposito 
    depositar(valorDeposito:number): void{
      if(valorDeposito <= 0){  //verificação para noa permitir que o cliente informe um valor  de Deposito negativo 
           console.log(`O valor de $${valorDeposito}Reais, não é valido,  Informe um valor de Deposito valido por gentileza`)
      } else{
          const novoCredito = new Credito(valorDeposito, new Date())// cri_ando o parametro para armazenar o valor do deposito e a data atual
          this.creditoConta.push(novoCredito);//adicionando o credito ao array
          console.log(this.logDeposito())
      }
    }

    //criando o metodo sacar seguindo os parametros da classe debito
     protected sacar(valorSaque:number):void{
      const saldoAtual = this.calculoSaldo();
      if(valorSaque <= 0){
          console.log(`O valor de Saque de R$${valorSaque} é um valor invalido, por favor informe um valor valido`)
      }else if(saldoAtual < valorSaque){
          console.log(`Saldo insuficiente, você tentou sacar R$${valorSaque}, mas seu saldo é de R$${saldoAtual}`)
      }
       else{
         const novoDebito = new Debito(valorSaque, new Date());
         this.debitoConta.push(novoDebito);
         console.log(`O valor de R$${valorSaque} foi sacado com sucesso`)
         console.log("---------------------------------")
         console.log(this.logSaque())
      }
    }

    //metodo para realizar o calculo do saldo da conta 
    calculoSaldo(): number {
      const totalCreditos = this.creditoConta.reduce((acumulador, transacao) => acumulador + transacao.valor, 0);
      const totalDebitos = this.debitoConta.reduce((acumulador, transacao) => acumulador + transacao.valor, 0);
      return totalCreditos - totalDebitos;
  }

    //METODO PARA EXIBIR O LOG DE MOVIMENTAÇÃO DE DEPOSITO DO CLIENTE 
     private logDeposito():void{
        this.creditoConta.forEach((transacaoDeposito:Credito)=>{
           console.log("------------------------")
           console.log("RECIBO DE TRANSAÇÃO")
           console.log(`Valor do Deposito R$${transacaoDeposito.valor}`)
           console.log(`Horario do Deposito ${transacaoDeposito.data.toLocaleString("pt-BR")}`)
        })
    }

    //METODO PARA EXIBIR O LOG DE MOVIMENTAÇÃO DE SAQUE DO CLIENTE
    private logSaque():void{
         this.debitoConta.forEach((transacaoSaque: Debito)=>{
             console.log("----------------------")
             console.log("RECIBO DE TRANSAÇÃO")
             console.log(`Valor do Saque R$${transacaoSaque.valor}`)
             console.log(`Horario do Saque ${transacaoSaque.data.toLocaleString("pt-BR")}`) // formatar a data e hora para os padroes pt-br
            })
    }
  }


