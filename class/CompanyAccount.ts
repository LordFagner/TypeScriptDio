import { Account } from "./Account"
export class CompanyAccount extends Account  {
Loanplus: number = 500 
constructor(name: string, Balance: number = 0.0, accountNumber: number, credit : number ){
    super(name,Balance,accountNumber,credit)
}

setLoanPlus =  (loan: number) =>{
    this.Loanplus += loan
    console.log(loan)
}

emprestimo =  () : void => console.log('uma empresa pediu um emprestimo')



}