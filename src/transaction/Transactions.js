import React from 'react';
import { useSelector } from 'react-redux';
import Stack from 'react-bootstrap/Stack';
import SingleTransaction from './SingleTransaction';

const Transactions = () => {
  const state = useSelector((state) => {
    return state.userReducer;
  });
  return (
    <>
      <Stack gap={2} style={{ marginTop: '5px' }}>
        {state.transactions.map((item) => {
          return <SingleTransaction key={item.id} user={item} />;
        })}
      </Stack>
    </>
  );
};

export default Transactions;
