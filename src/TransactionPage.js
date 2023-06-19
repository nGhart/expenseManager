import React, { useEffect, useState } from 'react';
import AddTransaction from './transaction/AddTransaction';
import Transactions from './transaction/Transactions';

const TransactionPage = (props) => {
  const handlePorps = () => {
    console.log(props);
  };
  handlePorps();
  return (
    <div>
      <AddTransaction />
      <Transactions />
    </div>
  );
};

export default TransactionPage;
