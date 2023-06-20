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
      id: 'iuiu34@322',
    },
    {
      date: '2023-12-09',
      name: 'wert',
      category: 'Food',
      price: 300.3,
      payment: 'Cash',
      transaction: 'Income',
      id: 'iuiu34#32278',
    },
    {
      date: '2023-12-09',
      name: 'wert',
      category: 'Food',
      price: 300.3,
      payment: 'Cash',
      transaction: 'Income',
      id: 'iuiu343227*878',
    },
    {
      date: '2023-12-09',
      name: 'four',
      category: 'Food',
      price: 2000.3,
      payment: 'Cash',
      transaction: 'Expense',
      id: 'iuiugtyh673!4322',
    },
    {
      date: '2023-12-09',
      name: 'five',
      category: 'Food',
      price: 300.3,
      payment: 'Cash',
      transaction: 'Income',
      id: 'iuiu3ewrew43227@#8',
    },
    {
      date: '2023-12-09',
      name: 'six',
      category: 'Food',
      price: 300.3,
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
