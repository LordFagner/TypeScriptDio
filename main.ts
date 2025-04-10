import { CompanyAccount } from "./class/CompanyAccount";
import { EspecialDioAccount } from "./class/EspecialDioAccount";
import { peopleAccount } from "./class/peopleAccount";


// Criando instâncias
const pessoa = new peopleAccount("João", 100, 123, 500)
const empresa = new CompanyAccount("EmpresaTech", 5000, 456, 10000)
const especial = new EspecialDioAccount("Maria", 200, 789, 1000)

// Métodos PeopleAccount
console.log(`\n--- Conta Pessoa ---`)
console.log(`Nome: ${pessoa.getname()}, Saldo: ${pessoa.getBalance()}`)
pessoa.deposit(50)
pessoa.withdraw(30)
console.log(`Saldo atual: ${pessoa.getBalance()}`)
pessoa.emprestimo()

// Métodos CompanyAccount
console.log(`\n--- Conta Empresa ---`)
console.log(`Nome: ${empresa.getname()}, Saldo: ${empresa.getBalance()}`)
empresa.getLoan(1000)
empresa.withdraw(200)
console.log(`Saldo atual: ${empresa.getBalance()}`)

// Métodos EspecialDioAccount
console.log(`\n--- Conta Especial ---`)
console.log(`Nome: ${especial.getname()}, Saldo: ${especial.getBalance()}`)
especial.depositEx(100)
especial.withdraw(50)
console.log(`Saldo atual: ${especial.getBalance()}`)