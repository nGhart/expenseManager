import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  transactions: [
    {
      date: '2023-12-09',
      name: 'Waakye',
      category: 'Food and Drink',
      price: 20.0,
      payment: 'Cash',
      transaction: 'Expense',
      id: 'iuiu3',
    },
    {
      date: '2023-12-09',
      name: 'Water',
      category: 'Utilities',
      price: 50,
      payment: 'Mobile Money',
      transaction: 'Expense',
      id: '4#32278',
    },
    {
      date: '2023-12-09',
      name: 'Makola',
      category: 'Transport',
      price: 9,
      payment: 'Cash',
      transaction: 'Expense',
      id: 'iuiu*878',
    },
    {
      date: '2023-12-10',
      name: 'Uber',
      category: 'Transport',
      price: 21,
      payment: 'Cash',
      transaction: 'Expense',
      id: 'i7*878',
    },
    {
      date: '2023-12-09',
      name: 'Little Mermaid',
      category: 'Entertainment',
      price: 100,
      payment: 'Cash',
      transaction: 'Expense',
      id: 'iuiugty2',
    },
    {
      date: '2023-12-09',
      name: 'Salary',
      category: 'Salary',
      price: 1500,
      payment: 'Cash',
      transaction: 'Income',
      id: 'wrew43227@#8',
    },
    {
      date: '2023-12-09',
      name: 'rent',
      category: 'Household',
      price: 500,
      payment: 'Cash',
      transaction: 'Expense',
      id: 'iuiu34327#@erew8',
    },
    {
      date: '2023-12-09',
      name: 'Interest',
      category: 'Investment',
      price: 500,
      payment: 'Cash',
      transaction: 'Income',
      id: 'iuiwe87#@8',
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
