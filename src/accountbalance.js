class AccountBalance {

  constructor() {
    this.balance = 0;
  };

  deposit = (amount) => {
    this.balance += amount;
  };

  withdraw = (amount) => {
    this.balance -= amount;
  };

};

module.exports = AccountBalance;