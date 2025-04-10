import { CompanyAccount } from "./class/CompanyAccount";
import { peopleAccount } from "./class/peopleAccount";

let contaPessoa : peopleAccount = new peopleAccount('fagner',10000 ,1213 ,0.0 ,13131)
let ContaEmpresa : CompanyAccount = new CompanyAccount('dio', 210001, 321,100002)


console.log(contaPessoa)
console.log(ContaEmpresa)

contaPessoa.emprestimo();
ContaEmpresa.emprestimo();