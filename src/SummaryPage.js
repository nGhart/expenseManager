import React from 'react';
import { useSelector } from 'react-redux';
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
    <>
      <section
        id="transactions"
        style={{
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <h1
          className="h1hed"
          style={{
            position: 'fixed',
            top: 50,
            left: 0,
            textAlign: 'center',
            width: '100%',
            alignItems: 'center',
            backgroundColor: 'rgb(58, 108, 155)',
            padding: '10px',
            zIndex: '1',
            margin: 0,
          }}
        >
          Transaction Summary
        </h1>
        <div
          className="summaryNav"
          style={{
            backgroundColor: 'cornflowerblue',
            margin: '0',
            padding: '5px',
            display: 'flex',
            width: '100%',
            justifyContent: 'space-around',
            fontSize: '20px',
            position: 'fixed',
            top: 104,
            left: 0,
            height: '50px',
            alignContent: 'center',
            textAlign: 'center',
            zIndex: '1',
          }}
        >
          <div>
            <a href="#transactions">By Transaction</a>
          </div>
          <div>
            <a href="#expenses">By Expenses</a>
          </div>
          <div>
            <a href="#income">By Income</a>
          </div>
        </div>
      </section>
      <section style={{ marginTop: '200px' }}>
        <Row
          style={{
            border: '1px solid grey',
            margin: '10px',
          }}
        >
          <h2>Transactions by transaction type</h2>
          <Col sm={4}>
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
          <Col sm={8} id="chartTrans">
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

        <Row
          id="expenses"
          style={{
            border: '1px solid grey',
            margin: '10px',
            marginTop: '50px',
            zIndex: 0,
          }}
        >
          <h2>Transactions by Expenses</h2>
          <Col sm={4} id="categoryTotal">
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
          <Col sm={8} id="categoryChart">
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
        <Row
          id="income"
          style={{
            border: '1px solid grey',
            margin: '10px',
            marginTop: '50px',
          }}
        >
          <h2>Transactions by Income Source</h2>
          <Col sm={4} id="incomeTotal">
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
          <Col sm={8} mid="incomeChart">
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
      </section>
    </>
  );
};

export default SummaryPage;
