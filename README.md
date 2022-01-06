# Bank

## How to install

In your terminal, follow these steps:

```
$ git clone https://github.com/DylanRJ/bank_test.git
$ cd bank_test
$ npm install
```

## How to use

Make sure you have [Node.js](https://nodejs.org/en/) installed. Within the
repository directory:

```JavaScript
$ node
> const bank_machine_file = require('./src/bankmachine');
> const bankmachine = new bank_machine_file;
> bankmachine.deposit(1000, '10/01/2012');
> bankmachine.deposit(2000, '13/01/2012');
> bankmachine.withdraw(500, '14/01/2012');
> bankmachine.printStatement()

`date || credit || debit || balance
14/01/2012 || || 500 || 2500
13/01/2012 || 2000 || || 3000
10/01/2012 || 1000 || || 1000`
```

## Technology

* Language: JavaScript (ES6)
* Testing: Jest

## Testing

* All tests passing
* Test coverage 100%

## Classes

* BankMachine: For interacting with the bank, like an ATM
* AccountBalance: For keeping track of balance
* AccountTransactions: Keeps a log of the transactions
* PrintTransactions: For printing statements