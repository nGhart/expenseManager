import React from 'react';
import { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';

const CurrencyPage = () => {
  const [dollarRate, setDollarRate] = useState([]);
  const [euroRate, setEuroRate] = useState([]);

  useEffect(() => {
    const getDollarRate = async () => {
      try {
        const response = await fetch(
          'http://data.fixer.io/api/latest?access_key=b71430f5e7f1f8ca97f3a5be11eab7b7'
        );
        const data = await response.json();
        setDollarRate(data.rates.GHS);
      } catch (error) {
        console.log(error);
      }
    };
    getDollarRate();
  });
  useEffect(() => {
    const getEuroRate = async () => {
      try {
        const response = await fetch(
          'http://data.fixer.io/api/latest?access_key=b71430f5e7f1f8ca97f3a5be11eab7b7'
        );
        const data = await response.json();
        setEuroRate(data.rates.GHS);
      } catch (error) {
        console.log(error);
      }
    };
    getEuroRate();
  });

  return (
    <Col style={{ textAlign: 'center' }}>
      <h3>Dollar rate</h3>
      <span>1 USD:</span>x GHC
      <span></span>
    </Col>
  );
};

export default CurrencyPage;
