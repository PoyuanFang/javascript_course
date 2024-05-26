import { Account } from "./Account.js";
const MyAccount = new Account("510214", "Fang", 1000);
MyAccount.deposit(100);
MyAccount.withdraw(100);
console.log(MyAccount.getBalance());

import { SavingAccount } from "./SavingAccount.js";

import { CheckingAccount } from "./CheckingAccount.js";
const myCheckingAccount = new CheckingAccount("12345", "Poyuan", 1000,);
myCheckingAccount.withdraw(100);
myCheckingAccount.withdraw(100);
myCheckingAccount.withdraw(100);
myCheckingAccount.resetTransactionCount();
myCheckingAccount.withdraw(100);
myCheckingAccount.withdraw(100);
myCheckingAccount.withdraw(100);
