'use strict';

const assert = require('assert');
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
/** 
 * what is the balance of my bank account 
 * to get the balance you have to: 
 * add up all the transactions 
 * - loop all the transactions 
 * add up all the amouts and get the total 
 * very smilar to vehicle and crew members 
 * 
 * the account class is keeping all the transactions 
 * 
 * balance method 
 * deposit method (amt)
 * charge method(amt)
 * 
 * transaction class: 
 * - date 
 * - amount 
 * - payee -- add a new line item 
 */



class BankAccount {
  acccountNumber;
  owner;
  transactions;

  constructor(inputAccountNumber, inputOwner) {
    this.acccountNumber = inputAccountNumber;
    this.owner = inputOwner;
    this.transactions = [];
  }
  // This method does not take any input, 
  //and returns the current balance on the account. 
  //The balance is computed by summing up the amounts in the transactions array.
  // starting off with 0 balance
  balance() {
    let sum = 0
    // if sum is 0 we loop every transaction to check balance
    for (let i = 0; i < this.transactions.length; i++) {
      // also inspect what is charged in the transaction
      sum = sum + this.transactions[i].amount
    }
    return sum;

  }
  //This method takes in a single input, the deposit amount. 
  //This method should create a new transaction representing the deposit, 
  //and add it to the transactions array.
  // create a new instance in deposit
  deposit(amt) {
    // is the amt grater than zero?? y or n
    // new instance of local varible push deposit in the transaction array creating a new transaction
    // push the deposit into the transaction
    // console.log(amt);

    if (amt > 0) {
      let deposit = new Transaction(amt, "deposit")
      this.transactions.push(deposit)
    } else {
      console.log(`deposit failed, zero transactions`)

    }

    // This method takes in the payee and amount,
    // creates a new transaction with the payee and amount, 
    // and adds the transaction to the transaction array.
  }
  charge(amt, payee) {
    if (this.balance() >= amt){
    let charge = new Transaction((amt * -1), payee)
    this.transactions.push(charge)
  } else {
  console.log(`Insufficent funds, purchase invalidated`)
  }
}
}


// to get balance you have to add up all the transactions
class Transaction {
  date; // date of the transaction
  amount; // amount 
  payee;

  constructor(inputAmount, inputPayee) {
    this.amount = inputAmount;
    this.payee = inputPayee;
    this.date = new Date(); // record new date 
  }

}


// const testTransaction = new Transaction(20, "Walmart");
// console.log(testTransaction)


const testAccount = new BankAccount(487384279, "Sarah");
console.log(testAccount)

testAccount.deposit(100);
console.log(testAccount);

testAccount.deposit(-10);
console.log(testAccount);

testAccount.deposit(30);
console.log(testAccount);

// console.log(testAccount.balance());

testAccount.charge(130, "Walmart");
console.log(testAccount.balance());

// new account should have 0 balance
// console.log(account1.balance()) // 0

// account1.charge("Target", 10)
// // can not charge to the account if the balance is zero
// console.log(account1.balance()) // 0 
// // transaction should not have gone though 
// console.log(account.transaction.length) // 0

// // deposit 100
// account1.deposit(100);

// account1.charge ("Freebirds", 20);
// console.log(account1.balance()) //80

// account1.charge("Diamonds Direct", 1000)
// console.log(account1.balance()) //80

// account1.charge("Target", -15); // refund 
// console.log(account1.balance()) //95

// account.deposit(-10);
// console.log(account1.balance) //95


// the bank account class does not store the balance 
// in stead it stores an array of Transactions 
//to get the balance, you loop throught the transactions, and sum up the ammounts 