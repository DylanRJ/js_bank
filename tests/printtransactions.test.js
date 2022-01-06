const PrintTransactions = require('../src/printtransactions');

describe('PrintTransactions', () => {

  example = new PrintTransactions();
  transactions = [{amount: 10, type: 'credit', date: '05/01/2022', balance: 10}, {amount: 5, type: 'debit', date: '06/01/2022', balance: 5}]

  it('is defined', () => {
    expect(example).toBeDefined();
  });

  it('contains header', () => {
    expect(example.header).toContain('date || credit || debit || balance');
  });

  it('prints transactions', () => {
    expect(example.generateTransactions(transactions)).toContain('05/01/2022 || 10 || || 10');
  });

});