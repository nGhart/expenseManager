import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBalance, getEachTotal } from './appSlice/appSlice';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const HomePage = () => {
  const state = useSelector((state) => {
    return state.userReducer;
  });
  const dispatch = useDispatch();
  useEffect(
    () => {
      dispatch(getEachTotal());
    },
    dispatch(getBalance()),
    [state]
  );
  const getLastTransactions = () => {
    let lastTransactions;
    lastTransactions = state.transactions.slice(-2);
    console.log(lastTransactions);
  };
  getLastTransactions();

  return (
    <div>
      <Container style={{ fontFamily: 'Carter One' }}>
        <Row
          style={{
            border: '2px solid grey',
            margin: '20px',
            borderRadius: '20px',
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
        </Row>

        <Row
          style={{
            border: '2px solid grey',
            margin: '20px',
            borderRadius: '20px',
          }}
        >
          {state.transactions.map((item) => {
            let colourTransaction;
            colourTransaction =
              item.transaction === 'Income'
                ? (colourTransaction = 'green')
                : (colourTransaction = 'red');
            return (
              <div
                key={item.id}
                style={{
                  padding: '2px',
                  boxShadow: '2px 2px 2px 2px grey',
                  margin: '2px 0',
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
                    <p style={{ padding: '5px' }}>{item.date}</p>
                    <p
                      style={{
                        backgroundColor: `${colourTransaction}`,
                        padding: '5px',
                        color: 'white',
                        // fontWeight: 700,
                        borderRadius: '5px',
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
                    xs={8}
                    style={{
                      display: 'flex',
                      height: '100%',
                      alignItems: 'center',
                    }}
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{
                        backgroundColor: 'red',
                        borderRadius: '50%',
                        // padding: '10px',
                        height: '50px',
                        width: '50px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: '2px',
                      }}
                    >
                      shopping_cart_checkout
                    </span>
                    <section>
                      <h6 style={{ fontWeight: 700 }}>{item.name}</h6>
                      <p style={{ fontStyle: 'italic' }}>
                        Category:{item.category}
                      </p>
                    </section>
                  </Col>
                  <Col>
                    <h6>
                      GHC{' '}
                      <span
                        style={{
                          fontWeight: 'bold',
                        }}
                      >
                        {item.price}
                      </span>
                    </h6>
                    <p>{item.payment}</p>
                  </Col>
                </Row>
              </div>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
