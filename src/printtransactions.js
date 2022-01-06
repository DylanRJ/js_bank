class PrintTransactions {

  constructor() {
    this.header = 'date || credit || debit || balance\n'
  };

  generateTransactions = (transactions) => {
    return this.header + this.generateTransactionLines(transactions);
  };

  generateTransactionLines = (transactions) => {
    return transactions.map( transaction => {
      if (transaction.type === 'credit') {
        return `${transaction.date} || ${transaction.amount} || || ${transaction.balance}\n`
      } else {
        return `${transaction.date} || || ${transaction.amount} || ${transaction.balance}\n`
      }
    }).reverse().join('');
  };

};

module.exports = PrintTransactions;