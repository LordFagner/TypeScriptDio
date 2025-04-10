import { DioAccount } from "./DioAccount";


export class EspecialDioAccount extends DioAccount {

    constructor(name: string, Ballance: number, AccountNumber: number, credit: number) {
        super(name, Ballance, AccountNumber, credit);

    }


   public depositEx(amount: number): void {
        this.deposit(amount + 10);
    }

}