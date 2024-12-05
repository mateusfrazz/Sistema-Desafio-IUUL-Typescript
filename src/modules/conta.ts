import { Credito } from "./credito";
import { Debito } from "./debito";
import { ContaCorrente } from "./contaCorrente";
import { ContaPoupanca } from "./contaPoupanca";

export abstract class Conta{
    protected numeroConta:number;
    protected limite : number = 0
    //definindo um array para armazenar os creditos
    protected creditoConta : Credito[] = []
    //definindo um array para armazenar os Debitos
    protected debitoConta : Debito[] = []
    constructor(limite:number){
    this.limite = limite;
    this.numeroConta = this.gerarNumeroConta();
    }

    //criando o metodo para gerar o numero de conta do cliente de forma aleatoria ao ser instanciada uma classe filho
    private gerarNumeroConta():number{
       return Math.floor(Math.random()*10000)+1;// definindo o retorno para gerar o numero da conta
    }
     
    public obterNumeroConta():number{
         return this.numeroConta
    }
    //criando o metodo de deposito 
    depositar(valorDeposito:number): void{
      if(valorDeposito <= 0){  //verificação para noa permitir que o cliente informe um valor  de Deposito negativo 
           console.log(`O valor de $${valorDeposito}Reais, não é valido,  Informe um valor de Deposito valido por gentileza`)
      }
      else{
          const novoCredito = new Credito(valorDeposito, new Date())// cri_ando o parametro para armazenar o valor do deposito e a data atual
          this.creditoConta.push(novoCredito);//adicionando o credito ao array
          this.logDeposito()
      }
    }

    //criando o metodo sacar seguindo os parametros da classe debito
      sacar(valorSaque:number):void{
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
         this.logSaque()
      }
    }

    //metodo para realizar o calculo do saldo da conta 
    calculoSaldo(): number {
      const totalCreditos = this.creditoConta.reduce((acumulador, transacao) => acumulador + transacao.valor, 0);
      const totalDebitos = this.debitoConta.reduce((acumulador, transacao) => acumulador + transacao.valor, 0);   
      return totalCreditos - totalDebitos;
  }
  //metodo para exibir o saldo atual da conta 
  exibirSaldoAtual():void{
    const totalCreditos = this.creditoConta.reduce((acumulador, transacao) => acumulador + transacao.valor, 0);
    const totalDebitos = this.debitoConta.reduce((acumulador, transacao) => acumulador + transacao.valor, 0);
    const SaldoAtual = totalCreditos - totalDebitos;
    console.log("--------------------------------------------")
    console.log(`O saldo atual da sua conta é ${SaldoAtual}`)
  }

    //METODO PARA EXIBIR O LOG DE MOVIMENTAÇÃO DE DEPOSITO DO CLIENTE 
    private logDeposito(): void {
      const ultimoDeposito = this.creditoConta[this.creditoConta.length - 1]; // Obtém o último item do array
      if (ultimoDeposito) {
          console.log("------------------------");
          console.log("RECIBO DE TRANSAÇÃO");
          console.log(`Valor do Depósito: R$${ultimoDeposito.valor}`);
          console.log(`Horário do Depósito: ${ultimoDeposito.data.toLocaleString("pt-BR")}`);
      }
  }

    //METODO PARA EXIBIR O LOG DE MOVIMENTAÇÃO DE SAQUE DO CLIENTE
    private logSaque(): void{
        const ultimoSaque = this.debitoConta[this.debitoConta.length -1];
         if(ultimoSaque){
             console.log("----------------------")
             console.log("RECIBO DE TRANSAÇÃO")
             console.log(`Valor do Saque R$${ultimoSaque.valor}`)
             console.log(`Horario do Saque ${ultimoSaque.data.toLocaleString("pt-BR")}`) // formatar a data e hora para os padroes pt-br
            }
    }
    //metodo para adicionar limite
    adicionarLimite(limiteConta: number): void{
      this.limite += limiteConta;
      console.log(`O limite de ${limiteConta} foi adicionado com sucesso`)
  }

  alterarLimite(valorAlterado: number): void{
     this.limite = valorAlterado;
     console.log(`O limite foi alterado, novo limite total da conta é de R$${this.limite}`)
  }

   protected SaldoLimite():number{
     return this.limite
  }
  }


