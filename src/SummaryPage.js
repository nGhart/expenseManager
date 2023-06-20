import React from 'react';
import { useSelector } from 'react-redux';
import Category from './charts/Category';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BarChart, XAxis, YAxis, Legend, Bar, CartesianGrid } from 'recharts';

const SummaryPage = () => {
  const state = useSelector((state) => {
    return state.userReducer;
  });
  console.log(state.transactions);
  const justExpense = state.transactions.filter(
    (item) => item.transaction === 'Expense'
  );
  console.log(justExpense);
  const justCat = justExpense.map((item) => ({
    cat: item.category,
    amount: Number(item.price),
  }));

  console.log(justCat);
  const catAmounts = {};

  for (const item of justCat) {
    const { cat, amount } = item;
    if (catAmounts[cat]) {
      catAmounts[cat] += amount;
    } else {
      catAmounts[cat] = amount;
    }
  }

  const uniqueCats = Object.entries(catAmounts).map(([cat, amount]) => ({
    cat,
    amount,
  }));

  console.log(uniqueCats);

  return (
    <Container style={{ marginTop: '50px' }}>
      SummaryPage
      <Row>
        <Col id="category"></Col>
        <Col id="transaction">
          <BarChart
            width={500}
            height={300}
            data={uniqueCats}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="transaction" />
            <YAxis />

            <Legend />
            <Bar dataKey="amount" fill="#8884d8" />
          </BarChart>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default SummaryPage;
