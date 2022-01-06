const AccountBalance = require('../src/accountbalance');

describe('AccountBalance', () => {

  beforeEach(() => {
    accountBalance = new AccountBalance();
  });

  it('exists', () => {
    expect(typeof accountBalance).toBeDefined();
  });

  it('starts empty', () => {
    expect(accountBalance.balance).toEqual(0);
  });

  it('#deposit', () => {
    accountBalance.deposit(5);
    expect(accountBalance.balance).toEqual(5);
  });

  it('#withdraw', () => {
    accountBalance.deposit(10);
    accountBalance.withdraw(5);
    expect(accountBalance.balance).toEqual(5);
  });
  
});