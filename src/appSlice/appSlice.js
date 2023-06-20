import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  transactions: [
    {
      date: '2023-12-09',
      name: 'Waakye',
      category: 'Food',
      price: 20.0,
      payment: 'Cash',
      transaction: 'Expense',
      id: 'iuiu34@322',
    },
    {
      date: '2023-12-09',
      name: 'Water',
      category: 'Utilities',
      price: 50,
      payment: 'Mobile Money',
      transaction: 'Expense',
      id: 'iuiu34#32278',
    },
    {
      date: '2023-12-09',
      name: 'Makola',
      category: 'Transport',
      price: 9,
      payment: 'Cash',
      transaction: 'Expense',
      id: 'iuiu343227*878',
    },
    {
      date: '2023-12-09',
      name: 'Little Mermaid',
      category: 'Entertainment',
      price: 100,
      payment: 'Cash',
      transaction: 'Expense',
      id: 'iuiugtyh673!4322',
    },
    {
      date: '2023-12-09',
      name: 'Salary',
      category: 'Salary',
      price: 1500,
      payment: 'Cash',
      transaction: 'Income',
      id: 'iuiu3ewrew43227@#8',
    },
    {
      date: '2023-12-09',
      name: 'Rent',
      category: 'Household',
      price: 500,
      payment: 'Cash',
      transaction: 'Income',
      id: 'iuiu34322787#@erew8',
    },
  ],
};
const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    addTransaction: (state, action) => {
      state.transactions = [...state.transactions, action.payload];
    },
    deleteTransaction: (state, action) => {
      state.transactions = state.transactions.filter((item) => {
        if (item.id !== action.payload) {
          return item;
        }
      });
    },
    editTransaction: (state, action) => {
      state.transactions = state.transactions.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload.newTransaction;
        }
        return item;
      });
    },
    getEachTotal: (state) => {
      let totalIncome = 0;
      let totalExpense = 0;

      state.transactions.map((item) =>
        item.transaction === 'Expense'
          ? (totalExpense = totalExpense + Number(item.price))
          : (totalIncome = totalIncome + Number(item.price))
      );

      state.totalIncome = totalIncome.toFixed(2);
      state.totalExpense = totalExpense.toFixed(2);
    },
    getBalance: (state) => {
      let balance;
      balance = state.totalIncome - state.totalExpense;
      state.balance = balance.toFixed(2);
    },
  },
});
export const {
  addTransaction,
  deleteTransaction,
  editTransaction,
  getEachTotal,
  getBalance,
} = transactionSlice.actions;
export default transactionSlice.reducer;
