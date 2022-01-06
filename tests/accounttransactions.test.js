const AccountTransactions = require('../src/accounttransactions');

describe('AccountTransactions', () => {

  beforeEach(() => {
    accountTransactions = new AccountTransactions;
  });

  it('#addTransaction', () => {
    accountTransactions.addTransaction('transaction');
    expect(accountTransactions.transactions).toContain('transaction');
  });

  it('adds mutliple transactions', () => {
    accountTransactions.addTransaction('transaction1');
    accountTransactions.addTransaction('transaction2');
    expect(accountTransactions.transactions).toEqual(['transaction1', 'transaction2']);
  });

});