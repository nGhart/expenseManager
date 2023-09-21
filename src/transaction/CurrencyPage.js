import React from 'react';
import { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';

const CurrencyPage = () => {
  const [dollarRate, setDollarRate] = useState([]);

  useEffect(() => {
    const getDollarRate = async () => {
      try {
        const response = await fetch(
          'https://openexchangerates.org/api/latest.json?app_id=8c5690895ad74c588012c10fc4bb6da0'
        );
        const data = await response.json();
        setDollarRate(data.rates.GHS);
      } catch (error) {
        console.log(error);
      }
    };

    getDollarRate();
  });

  return (
    <Col style={{ textAlign: 'center' }}>
      <h3>Exchange rate</h3>
      <p>
        <span style={{ fontSize: '20px', fontWeight: 700 }}>1 </span>USD :
        <span style={{ fontSize: '20px', fontWeight: 700 }}>{dollarRate} </span>
        GHC
      </p>
    </Col>
  );
};

export default CurrencyPage;
