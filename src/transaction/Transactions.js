import React from 'react';
import Stack from 'react-bootstrap/Stack';
import { useEffect } from 'react';
import SingleTransaction from './SingleTransaction';
import { useDispatch, useSelector } from 'react-redux';
import { getBalance, getEachTotal } from '../appSlice/appSlice';

const Transactions = () => {
  // const state = useSelector((state) => {
  //   return state.userReducer;
  // });
  const state = useSelector((state) => {
    return state.userReducer;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEachTotal());
  }, dispatch(getBalance())[state]);

  return (
    <>
      <section
        style={{
          textAlign: 'center',
          display: 'flex',
          width: '100%',
          height: '50px',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'fixed',
          left: 0,
          marginBottom: '2000px',
          padding: '5px',
        }}
        className="menu"
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
      <Stack gap={2} style={{ marginTop: '55px' }}>
        {state.transactions.map((item) => {
          return <SingleTransaction key={item.id} user={item} />;
        })}
      </Stack>
    </>
  );
};

export default Transactions;
