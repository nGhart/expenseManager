import React from 'react';
import Row from 'react-bootstrap/Row';
import { useEffect } from 'react';
import SingleTransaction from './SingleTransaction';
import { useDispatch, useSelector } from 'react-redux';
import { getBalance, getEachTotal } from '../appSlice/appSlice';

const Transactions = () => {
  const state = useSelector((state) => {
    return state.userReducer;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEachTotal());
  }, [state]);
  useEffect(() => {
    dispatch(getBalance());
  }, [state]);
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
          // color: 'white',
        }}
        className="transactionHeader"
      >
        <h6>
          Balance{' '}
          <span
            style={{
              color: `${state.balance < 0 ? 'red' : 'black'}`,
              fontFamily: 'Carter One',
            }}
          >
            {state.balance}
          </span>
        </h6>
        <h6>
          Income GHC
          <span
            style={{
              color: 'green',
              // fontWeight: '700',
              fontFamily: 'Carter One',
            }}
          >
            {state.totalIncome}
          </span>
        </h6>
        <h6>
          Expense GHC
          <span
            style={{
              color: 'red',
              // fontWeight: '700',
              fontFamily: 'Carter One',
            }}
          >
            {state.totalExpense}
          </span>
        </h6>
      </section>
      <Row
        style={{
          marginTop: '55px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {state.transactions.map((item) => {
          return <SingleTransaction key={item.id} user={item} />;
        })}
      </Row>
    </>
  );
};

export default Transactions;
