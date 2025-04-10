import { DioAccount } from "./DioAccount"
export class CompanyAccount extends DioAccount  {
constructor(name: string, Balance: number = 0.0, accountNumber: number, credit : number ){
    super(name,Balance,accountNumber,credit)
}



public getLoan(Ammount : number) : void {
    this.deposit(Ammount); 
}



}