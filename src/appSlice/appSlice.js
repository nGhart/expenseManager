import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  transactions: [
    {
      date: '2023-12-09',
      name: 'wert',
      category: 'Food',
      price: 2000.3,
      payment: 'Cash',
      transaction: 'Expense',
      id: 'iuiu34322',
    },
    {
      date: '2023-12-09',
      name: 'wert',
      category: 'Food',
      price: 300.3,
      payment: 'Cash',
      transaction: 'Income',
      id: 'iuiu3432278',
    },
    {
      date: '2023-12-09',
      name: 'wert',
      category: 'Food',
      price: 300.3,
      payment: 'Cash',
      transaction: 'Income',
      id: 'iuiu343227878',
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

      state.totalIncome = totalIncome;
      state.totalExpense = totalExpense;
    },
    getBalance: (state) => {
      let difference;
      difference = state.totalIncome - state.totalExpense;
      let balance = difference.toFixed(2);
      state.balance = balance;
      // console.log(state.balance);
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
