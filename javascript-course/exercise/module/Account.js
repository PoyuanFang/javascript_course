export class Account {
  static bankName = '柏元銀行'
  #accountNumber;
  #ownerName;
  #balance;
  constructor(accountNumber, ownerName, balance) {
    this.#accountNumber = accountNumber;
    this.#ownerName = ownerName;
    this.#balance = balance || 0;
    console.log(this);
  }
  deposit(cash) {
    if (cash > 0) {
      this.#balance += cash;
    }
    console.log(`金額${cash}入帳成功,餘額${this.#balance}`);
  }
  withdraw(cash) {
    if (cash > this.#balance) {
      console.log(`餘額不足，提款失敗`)
    } else {
      this.#balance -= cash;
      console.log(`金額${cash}提款成功,餘額${this.#balance}`)
    }
  }
  getBalance() {
    console.log(`餘額:${this.#balance}`);
    return this.#balance;
  }
}

