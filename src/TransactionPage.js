import React, { useEffect } from 'react';
import AddTransaction from './transaction/AddTransaction';
import Transactions from './transaction/Transactions';
import { useDispatch, useSelector } from 'react-redux';
import { getBalance, getEachTotal } from './appSlice/appSlice';

const TransactionPage = () => {
  const state = useSelector((state) => {
    return state.userReducer;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEachTotal());
  }, dispatch(getBalance())[state]);

  return (
    <div>
      <section
        style={{
          textAlign: 'center',
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <h6>
          Balance{' '}
          <span
            style={{
              color: `${state.balance < 0 ? 'red' : 'black'}`,
            }}
          >
            {state.balance}
          </span>
        </h6>
        <h6>Income GHC{state.totalIncome}</h6>
        <h6>Expense GHC{state.totalExpense}</h6>
      </section>
      <AddTransaction />
      <Transactions />
    </div>
  );
};

export default TransactionPage;
