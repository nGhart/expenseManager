import React from 'react';
import { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';

const CurrencyPage = () => {
  const [rate, getRate] = useState([]);

  useEffect(() => {
     axios.get('http://data.fixer.io/api/latest?access_key=b71430f5e7f1f8ca97f3a5be11eab7b7'
       )
       .then((review) => {
         getRate(review.data.GHS);
       })
       .catch((error) => {
         console.log(error);
       });
   }, []);

  return (
    <Col style={{ textAlign: 'center' }}>
      <h3>Exchange Rates</h3>
      <span>1 USD : {rate} GHC</span>
    </Col>
  );
};

export default CurrencyPage;
