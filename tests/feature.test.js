const BankMachine = require('../src/bankmachine');

describe('feature', () => {
  it('works like a bank machine', () => {
    bankmachine = new BankMachine();
    bankmachine.deposit(10, '05/01/2022');
    bankmachine.deposit(90, '05/01/2022');
    bankmachine.withdraw(25, '06/01/2022');
    output = 'date || credit || debit || balance\n' + '06/01/2022 || || 25 || 75\n' + '05/01/2022 || 90 || || 100\n' + '05/01/2022 || 10 || || 10\n' 
    expect(bankmachine.printStatement()).toEqual(output)
  });
});