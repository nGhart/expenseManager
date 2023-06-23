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
      <h3>Euro rate</h3>
      <p>
        <span style={{ fontSize: '24px', fontWeight: 700 }}>1</span> USD :{' '}
        <span style={{ fontSize: '24px', fontWeight: 700 }}>{dollarRate}</span>{' '}
        GHC
      </p>
      <p>
        <span style={{ fontSize: '24px', fontWeight: 700 }}>1</span> EUR :{' '}
        <span style={{ fontSize: '24px', fontWeight: 700 }}>{euroRate}</span>{' '}
        GHC
      </p>
    </Col>
  );
};

export default CurrencyPage;
