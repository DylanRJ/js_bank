const AccountBalance = require('./accountbalance');
const AccountTransactions = require('./accounttransactions');
const PrintTransactions = require('./printtransactions');

class BankMachine {

  constructor(
      accountbalance = new AccountBalance(),
      accounttransactions = new AccountTransactions(),
      printtransactions = new PrintTransactions()
  ) {
    this.accountBalance = accountbalance;
    this.accountTransactions = accounttransactions;
    this.printTransactions = printtransactions;
  };

  deposit = (amount, date) => {
    this.accountBalance.deposit(amount);
    this.accountTransactions.addTransaction({ amount, type: 'credit', date, balance: this.accountBalance.balance });
  };

  withdraw = (amount, date) => {
    this.accountBalance.withdraw(amount);
    this.accountTransactions.addTransaction({ amount, type: 'debit', date, balance: this.accountBalance.balance });
  };

  printStatement = () => {
    console.log(this.printTransactions.generateTransactions(this.accountTransactions.transactions));
    return this.printTransactions.generateTransactions(this.accountTransactions.transactions)
  };

};

module.exports = BankMachine;