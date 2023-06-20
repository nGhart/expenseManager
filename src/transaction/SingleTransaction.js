import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTransaction } from '../appSlice/appSlice';
import EditTransaction from './EditTransaction';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const SingleTransaction = (props) => {
  const dispatch = useDispatch();
  let colourTransaction;
  colourTransaction =
    props.user.transaction === 'Income'
      ? (colourTransaction = 'green')
      : (colourTransaction = 'red');

  return (
    <Container
      // key={props.user.id}
      style={{
        padding: '5px',
        borderRadius: '5px',
        boxShadow: '2px 2px 2px 2px grey',
        // display: 'flex',
        // flexDirection: 'row',
        // width: '100%',
        // backgroundColor: 'white',
        // justifyContent: 'space-between',
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
          <p style={{ padding: '5px' }}>{props.user.date}</p>
          <p
            style={{
              backgroundColor: `${colourTransaction}`,
              padding: '5px',
              color: 'white',
              fontWeight: 700,
              borderRadius: '5px',
            }}
          >
            {props.user.transaction}
          </p>
        </div>
      </Row>
      <Row
        style={{
          margin: 'auto',
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
              padding: '10px',
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
            <h6 style={{ fontWeight: 700 }}>{props.user.name}</h6>
            <p style={{ fontStyle: 'italic' }}>
              Category:{props.user.category}
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
              {props.user.price}
            </span>
          </h6>
          <p>{props.user.payment}</p>
        </Col>
      </Row>
      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
        }}
      >
        <EditTransaction
          user={props.user}
          editTransaction={props.editTransaction}
        />

        <button
          style={{
            width: '60px',
            backgroundColor: 'grey',
            color: 'white',
            borderRadius: '5px',
            margin: '2px',
            border: 'none',
          }}
          onClick={() => {
            dispatch(deleteTransaction(props.user.id));
          }}
        >
          Delete
        </button>
      </div>
      {/* <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <button
          style={{
            width: '60px',
            backgroundColor: 'grey',
            color: 'white',
            borderRadius: '5px',
            margin: '2px',
            border: 'none',
          }}
          onClick={() => {}}
        >
          Edit
        </button>
        <button
          style={{
            width: '60px',
            backgroundColor: 'grey',
            color: 'white',
            borderRadius: '5px',
            margin: '2px',
            border: 'none',
          }}
          onClick={() => {
            dispatch(deleteTransaction(props.user.id));
          }}
        >
          Delete
        </button>
      </div> */}
    </Container>
  );
};
export default SingleTransaction;
