import React from 'react';
import AddTransaction from './transaction/AddTransaction';
import Transactions from './transaction/Transactions';
import Container from 'react-bootstrap/Container';

const TransactionPage = () => {
  return (
    <Container style={{ marginTop: '50px' }}>
      <AddTransaction />
      <Transactions />
    </Container>
  );
};

export default TransactionPage;
