export class Credito{
    public valor:number
    public  data: Date
    constructor(
         valor:number,
         data: Date,
    ){
        this.data = new Date();
        this.valor = valor;
    }


}