import React from 'react';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import {
  BarChart,
  XAxis,
  YAxis,
  Legend,
  Bar,
  PieChart,
  Pie,
  Tooltip,
  Label,
  Cell,
  LabelList,
} from 'recharts';

const SummaryPage = () => {
  const state = useSelector((state) => {
    return state.userReducer;
  });
  //console.log(state.transactions);

  // Category pie chart
  const justExpense = state.transactions.filter(
    (item) => item.transaction === 'Expense'
  );
  //console.log(justExpense);
  const catArray = justExpense.map((item) => ({
    cat: item.category,
    amount: Number(item.price),
  }));
  //console.log(catArray);
  const catAmounts = {};
  for (const item of catArray) {
    const { cat, amount } = item;
    if (catAmounts[cat]) {
      catAmounts[cat] += amount;
    } else {
      catAmounts[cat] = amount;
    }
  }
  //console.log(catAmounts);
  const uniqueCats = Object.entries(catAmounts).map(([cat, amount]) => ({
    cat,
    amount,
  }));
  //console.log(uniqueCats);

  // Income to expense chart
  const transArray = state.transactions.map((item) => ({
    trans: item.transaction,
    transAmount: Number(item.price),
  }));
  //console.log(transArray);

  const transTotal = {};
  for (const item of transArray) {
    const { trans, transAmount } = item;
    if (transTotal[trans]) {
      transTotal[trans] += transAmount;
    } else {
      transTotal[trans] = transAmount;
    }
  }
  //console.log(transTotal);
  const uniqueTrans = Object.entries(transTotal).map(
    ([trans, transAmount]) => ({
      trans,
      transAmount,
    })
  );
  // console.log(uniqueTrans);
  // Transactions by income
  const justIncome = state.transactions.filter(
    (unit) => unit.transaction === 'Income'
  );
  //console.log(justIncome);
  const incomeArray = justIncome.map((item) => ({
    incomeCat: item.category,
    incomeTotal: Number(item.price),
  }));
  //console.log(incomeArray);
  const incomeAmounts = {};
  for (const item of incomeArray) {
    const { incomeCat, incomeTotal } = item;
    if (incomeAmounts[incomeCat]) {
      incomeAmounts[incomeCat] += incomeTotal;
    } else {
      incomeAmounts[incomeCat] = incomeTotal;
    }
  }
  console.log(incomeAmounts);
  const uniqueIncome = Object.entries(incomeAmounts).map(
    ([incomeCat, incomeTotal]) => ({
      incomeCat,
      incomeTotal,
    })
  );
  console.log(uniqueIncome);
  const colors = [
    'cornflowerblue',
    'red',
    'blue',
    'indianred',
    'orange',
    'deeppink',
    'purple',
    'yellow',
    'green',
  ];
  return (
    <Container style={{ marginTop: '60px', textAlign: 'center' }}>
      <h1>Transaction Summary</h1>
      <Row
        id="transaction"
        style={{ border: '1px solid grey', margin: '10px' }}
      >
        <h2>Transactions by transaction type</h2>
        <Col sm={6}>
          <Table bordered hover style={{ maxWidth: '320px', margin: 'auto' }}>
            <thead>
              <tr>
                <th>Transaction</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {uniqueTrans.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.trans}</td>
                    <td>{item.transAmount}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
        <Col sm={6} id="chartTrans">
          <BarChart
            layout="vertical"
            width={300}
            height={200}
            data={uniqueTrans}
            style={{ margin: 'auto' }}
          >
            <XAxis type="number" dataKey="transAmount" />
            <YAxis dataKey="trans" type="category" />

            <Legend />
            <Bar dataKey="transAmount" name="Total" fill="cornflowerblue" />
          </BarChart>
        </Col>
      </Row>

      <Row style={{ border: '1px solid grey', margin: '10px' }}>
        <h2>Transactions by Expenses</h2>
        <Col sm={6} id="categoryTotal">
          <Table bordered hover style={{ maxWidth: '320px', margin: 'auto' }}>
            <thead>
              <tr>
                <th>Expense</th>
                <th>Total</th>
              </tr>
            </thead>
            {uniqueCats.map((item, index) => {
              return (
                <tbody key={index}>
                  <tr>
                    <td>{item.cat}</td>
                    <td>{item.amount}</td>
                  </tr>
                </tbody>
              );
            })}
          </Table>
        </Col>
        <Col sm={6} id="categoryChart">
          <PieChart width={300} height={300} style={{ margin: 'auto' }}>
            <Pie
              dataKey="amount"
              // nameKey={}
              isAnimationActive={false}
              nameKey="cat"
              data={uniqueCats}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              name="Categories"
            >
              {uniqueCats.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index]}>
                  <Label value="cat" position="inside" />
                </Cell>
              ))}

              <LabelList
                dataKey="cat"
                position="outside"
                stroke="grey"
                strokeWidth={0.5}
              />
            </Pie>

            <Tooltip />
          </PieChart>
        </Col>
      </Row>
      <Row style={{ border: '1px solid grey', margin: '10px' }}>
        <h2>Transactions by Income Source</h2>
        <Col sm={6} id="incomeTotal">
          <Table bordered hover style={{ maxWidth: '320px', margin: 'auto' }}>
            <thead>
              <tr>
                <th>Income Source</th>
                <th>Total</th>
              </tr>
            </thead>
            {uniqueIncome.map((item, index) => {
              return (
                <tbody key={index}>
                  <tr>
                    <td>{item.incomeCat}</td>
                    <td>{item.incomeTotal}</td>
                  </tr>
                </tbody>
              );
            })}
          </Table>
        </Col>
        <Col sm={6} id="incomeChart">
          <PieChart width={300} height={300} style={{ margin: 'auto' }}>
            <Pie
              dataKey="incomeTotal"
              isAnimationActive={false}
              nameKey="incomeTotal"
              data={uniqueIncome}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
            >
              {uniqueIncome.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index]}>
                  <Label value={entry.incomeCat} position="inside" />
                </Cell>
              ))}
              <LabelList
                dataKey="incomeCat"
                position="outside"
                stroke="grey"
                strokeWidth={0.5}
              />
            </Pie>

            <Tooltip />
          </PieChart>
        </Col>
      </Row>
    </Container>
  );
};

export default SummaryPage;
