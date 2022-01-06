class AccountTransactions {

  constructor() {
    this.transactions = [];
  };

  addTransaction = (transaction) => {
    this.transactions.push(transaction);
  };

};

module.exports = AccountTransactions;