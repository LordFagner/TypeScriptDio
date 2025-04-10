export abstract class DioAccount {
    private name: string;
    private Balance: number;
    private readonly accountNumber: number
    private credit : number 
    private AccountActive : Boolean = true

    constructor(name: string, balance: number = 0.0, accountNumber: number, credit : number) {
        this.name = name;
        this.Balance = balance
        this.accountNumber = accountNumber
        this.credit = credit
    }

   
    deposit(amount: number): void {
        if (amount <= 0) {
            throw new Error("não é possivel depositar um valor negativo");
        }
        this.Balance += amount;
    }

    withdraw(amount: number): void {
        
        if(!this.AccountActive){
            throw new Error('Conta Inativa')
        }
        
        if (amount <= 0 ) {
            throw new Error("Saque Impossivel, Sua conta Está zerada ");
        }
        else if (amount > this.Balance) {
            throw new Error("Insuficiente.");
        }

        this.Balance -= amount;
    }

    emprestimo =  () : void => console.log('uma pessao pediu um emprestimo')


  
  public getname() : string {
    return this.name
  }


public setName(name : string) {
    this.name = name;
}



public getNumberAccount() : number {
    return this.accountNumber
}

public getBalance() : number {
    return this.accountNumber
}




}