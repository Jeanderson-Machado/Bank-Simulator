import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";
import { MenagerAccount } from "./class/MenagerAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(1, "Nath", 10);

const companyAccount: CompanyAccount = new CompanyAccount("DIO", 20);

const menagerAccount: MenagerAccount = new MenagerAccount("Julio", 20);

peopleAccount.deposit(100);
peopleAccount.withdraw(20);
console.log(peopleAccount.getBalance());

companyAccount.deposit(100);
companyAccount.withdraw(30);
companyAccount.getLoan(80);
console.log(companyAccount.getBalance());

menagerAccount.deposit(200);
menagerAccount.withdraw(20);
console.log(menagerAccount.getBalance());
