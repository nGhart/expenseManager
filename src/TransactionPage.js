import React, { useEffect } from 'react';
import AddTransaction from './transaction/AddTransaction';
import Transactions from './transaction/Transactions';
import { useDispatch, useSelector } from 'react-redux';
import { getBalance, getEachTotal } from './appSlice/appSlice';
import Container from 'react-bootstrap/Container';

const TransactionPage = () => {
  // const state = useSelector((state) => {
  //   return state.userReducer;
  // });
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getEachTotal());
  // }, dispatch(getBalance())[state]);

  return (
    <Container style={{ marginTop: '50px' }}>
      <AddTransaction />
      <Transactions />
    </Container>
  );
};

export default TransactionPage;
