/*
 * Типів транзацкій всього два.
 * Можна покласти або зняти гроші з рахунку.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

/*
 * Кожна транзакція - це об'єкт з властивостями: id, type і amount
 */

const account = {
  // Поточний баланс рахунку
  balance: 0,

  // Історія транзакцій
  transactions: [],

  /*
   * Метод створює і повертає об'єкт транзакції.
   * Приймає суму і тип транзакції.
   */
  createTransaction(amount, type) {
    let transaction;
    const date = new Date();
    return (transaction = {
      id: `${date.getUTCHours()}${date.getUTCMinutes()}${date.getUTCSeconds()}${Math.floor(
        Math.random() * 100
      )}`,
      amount,
      type,
    });
  },

  /*
   * Метод відповідає за додавання суми до балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій
   */
  deposit(amount) {
    this.balance += amount;
    const newDeposit = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(newDeposit);
    return `Deposit ${amount} with id ${
      this.transactions[this.transactions.length - 1]["id"]
    }`;
  },

  /*
   * Метод відповідає за зняття суми з балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій.
   *
   * Якщо amount більше, ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливо, недостатньо коштів.
   */
  withdraw(amount) {
    if (amount > account.balance)
      return "Cannot complete withdraw, balance is less than transaction amount";

    this.balance -= amount;
    const newWidthdraw = this.createTransaction(amount, Transaction.WITHDRAW);
    this.transactions.push(newWidthdraw);
    return `Withdraw ${amount} with id ${
      this.transactions[this.transactions.length - 1]["id"]
    }`;
  },

  /*
   * Метод повертає поточний баланс
   */
  getBalance() {
    return account.balance;
  },

  /*
   * Метод шукає і повертає об'єкт транзакції по id
   */
  getTransactionDetails(id) {
    let info = null;
    for (const transaction of this.transactions) {
      if (transaction.id === id) {
        info = transaction;
      }
      if (!info) return "There is no transaction with this id";
      return info;
    }
  },

  /*
   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
  getTransactionTotal(type) {
    let totalTransactionAmount = 0;
    for (const operation of this.transactions) {
      if (operation.type === type) {
        totalTransactionAmount += Number(operation.amount);
      }
    }
    if (totalTransactionAmount === 0)
      return "There is no operation with this type";
    return totalTransactionAmount;
  },
};

// =============================
// create Transaction func

// console.log(account.createTransaction(200, Transaction.DEPOSIT));
// ==============================
// check created operations

// console.log(account.deposit(500));
// console.log(account.deposit(500));
// console.log(account.deposit(500));
// console.log(account.withdraw(400));
// ===============================
// get balance, transaction details by id

// console.log(account.getBalance());
// console.log(account.getTransactionDetails(account.transactions[0]["id"]));
// console.log(account.getTransactionDetails(12345));
// ===============================
// total amount by operation type
// console.log(account.getTransactionTotal(Transaction.WITHDRAW));
