import { Account } from "./Account.js";
export class SavingAccount extends Account {
  constructor(accountNumber, ownerName, balance, interestRate) {
    super(accountNumber, ownerName, balance);
    this._interestRate = interestRate;
  }
  addInterest() {
    const interest = (this._interestRate * this._balance) / 100;
    this._balance += interest
    console.log(`存款利息${interest}, 餘額:${this._balance}。`);
  }
}