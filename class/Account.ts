export abstract class Account {
    private name: string;
    private Balance: number;
    private accountNumber: number
    private credit : number 

    constructor(name: string, balance: number = 0.0, accountNumber: number, credit : number) {
        this.name = name;
        this.Balance = balance
        this.accountNumber = accountNumber
        this.credit = credit
    }

   
    deposit(amount: number): void {
        if (amount <= 0) {
            throw new Error("Deposit amount must be greater than zero.");
        }
        this.Balance += amount;
    }

    withdraw(amount: number): void {
        if (amount <= 0) {
            throw new Error("Withdrawal amount must be greater than zero.");
        }
        if (amount > this.Balance) {
            throw new Error("Insufficient funds.");
        }
        this.Balance -= amount;
    }

    emprestimo =  () : void => console.log('uma pessao pediu um emprestimo')


  
  public getname() : string {
    return this.name
  }


public setBame(name : string) {
    this.name = name;
}



public getNumberAccount() : number {
    return this.accountNumber
}

public getBalance() : number {
    return this.accountNumber
}


public setLoan(loan : number) {
    this.credit = loan;
}

public getLoan() : number {
    return this.credit
}


}