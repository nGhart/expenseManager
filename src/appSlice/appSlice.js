import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  transactions: [
    {
      date: '2023-12-09',
      name: 'wert',
      category: 'Food',
      price: '233.30',
      payment: 'Cash',
      transaction: 'Expense',
      id: 'iuiu34322',
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
  },
});
export const { addTransaction, deleteTransaction, editTransaction } =
  transactionSlice.actions;
export default transactionSlice.reducer;
