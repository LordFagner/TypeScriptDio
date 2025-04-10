import { Account } from "./Account"
export class peopleAccount extends Account  {

    readonly doc_id : number

constructor(name: string, Balance: number = 0.0, accountNumber: number, credit : number ,doc : number){
    super(name,Balance,accountNumber,credit)
    this.doc_id = doc
}
 exibirDoc  = (): void => {console.log(this.doc_id)}

 emprestimo =  () : void => console.log('uma pessao pediu um emprestimo')



}