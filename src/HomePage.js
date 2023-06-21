import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBalance, getEachTotal } from './appSlice/appSlice';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CurrencyPage from './transaction/CurrencyPage';

const HomePage = () => {
  const state = useSelector((state) => {
    return state.userReducer;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEachTotal());
    dispatch(getBalance());
  }, [
    // dispatch,
    state.transactions,
  ]);
  let lastTransactions;
  const getLastTransactions = () => {
    lastTransactions = state.transactions.slice(-3);
  };
  getLastTransactions();
  return (
    <>
      <Container fluid style={{ fontFamily: 'Carter One', marginTop: '55px' }}>
        <Row style={{ display: 'flex', justifyContent: 'center' }}>
          <Col
            md={{ span: 6, offset: 3 }}
            style={{
              border: '2px solid grey',
              margin: '20px',
              borderRadius: '10px',
              textAlign: 'center',
            }}
          >
            <h3 style={{ textAlign: 'center', padding: '20px' }}>
              Balance:{' '}
              <span
                style={{
                  color: `${state.balance < 0 ? 'red' : 'green'}`,
                }}
              >
                {state.balance}
              </span>
            </h3>
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                margin: 'auto',
                padding: '5px',
                textAlign: 'center',
              }}
            >
              <section>
                <h5>Income: </h5>
                <h4 style={{ color: 'green' }}> GHC {state.totalIncome}</h4>
              </section>
              <section>
                <h5>Expense: </h5>
                <h4 style={{ color: 'red' }}>GHC {state.totalExpense}</h4>
              </section>
            </div>
          </Col>
        </Row>
        <Row style={{ display: 'flex', justifyContent: 'center' }}>
              <h3>Recent Transactions</h3>
          <Col
            md={{ span: 6, offset: 3 }}
            style={{
              border: '2px solid grey',
              margin: '20px',
              borderRadius: '10px',
              textAlign: 'center',
            }}
          >
            {lastTransactions.map((item) => {
              let colourTransaction;
              colourTransaction =
                item.transaction === 'Income'
                  ? (colourTransaction = 'green')
                  : (colourTransaction = 'red');
              return (
                <section
                  key={item.id}
                  style={{
                    padding: '2px',
                    boxShadow: '1px 1px 1px 1px grey',
                    borderRadius: '5px',
                    margin: '5px auto',
                  }}
                >
                  <Row>
                    <div
                      style={{
                        textAlign: 'center',
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontStyle: 'italic',
                      }}
                    >
                      <p style={{ padding: '5px', margin: '0' }}>{item.date}</p>
                      <p
                        style={{
                          color: `${colourTransaction}`,
                          padding: '5px',
                          margin: '0',
                        }}
                      >
                        {item.transaction}
                      </p>
                    </div>
                  </Row>
                  <Row
                    style={{
                      // margin: 'auto',
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Col
                      xs={7}
                      style={{
                        display: 'flex',
                        height: '100%',
                        alignItems: 'center',
                      }}
                    >
                      <section>
                        <h6 style={{ margin: 0, textTransform: 'capitalize' }}>
                          {item.name}
                        </h6>
                        <p style={{ fontStyle: 'italic' }}>
                          Category:{item.category}
                        </p>
                      </section>
                    </Col>
                    <Col style={{ padding: 0 }}>
                      <h6 style={{ margin: 0 }}>
                        GHC <span style={{}}>{item.price}</span>
                      </h6>
                      <p>{item.payment}</p>
                    </Col>
                  </Row>
                </section>
              );
            })}
          </Col>
        </Row>
        <Row style={{ display: 'flex', justifyContent: 'center' }}>
          <Col
            md={{ span: 6, offset: 3 }}
            style={{
              border: '2px solid grey',
              margin: '20px',
              borderRadius: '10px',
              textAlign: 'center',
            }}
          >
            <CurrencyPage />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
