import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTransaction } from '../appSlice/appSlice';
import { Modal, Form, Button } from 'react-bootstrap';

const EditTransaction = (props) => {
  const [transactions, setTransactions] = useState({
    name: props.user.name,
    id: props.user.id,
    date: props.user.date,
    category: props.user.category,
    price: props.user.price,
    payment: props.user.payment,
    transaction: props.user.transaction,
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    setTransactions({ ...transactions, [e.target.name]: e.target.value });
  };
  const handleEdit = (e) => {
    e.preventDefault();
    let newTransaction = {
      name: transactions.name,
      number: transactions.number,
      location: transactions.location,
      id: props.user.id,
    };
    dispatch(editTransaction({ id: props.user.id, newTransaction }));
    handleClose();
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow}>Edit</button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <div>
          <Button
            type="submit"
            onClick={handleClose}
            style={{ textAlign: 'right' }}
          >
            <span className="material-symbols-outlined">cancel</span>
          </Button>
        </div>
        <Form
          style={{
            width: '100%',
            minHeight: '300px',
            margin: '5px',
            padding: '10px',
          }}
          onSubmit={handleEdit}
        >
          <Form.Group>
            <Form.Control
              type="text"
              name="transaction"
              value={transactions.transaction}
              onChange={handleChange}
            ></Form.Control>
            {/* <Form.Check
              inline
              label="Expense"
              name="transaction"
              type="radio"
              id="Expense"
              value="Expense"
              // checked={transactions.transaction === 'Expense'}
              onChange={handleChange}
            />
            <Form.Check
              inline
              label="Income"
              name="transaction"
              type="radio"
              id="Income"
              value="Income"
              // checked={transactions.transaction === 'Income'}
              onChange={handleChange}
            /> */}
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formBasicDate"
            style={{
              height: '15%',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Form.Label
              style={{
                width: '30%',
              }}
            >
              Date
            </Form.Label>
            <Form.Control
              type="date"
              name="date"
              value={transactions.date}
              onChange={handleChange}
            ></Form.Control>
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formBasicExpense"
            style={{
              height: '15%',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Form.Label
              style={{
                width: '30%',
              }}
            >
              Transaction
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Description"
              maxLength={20}
              name="name"
              value={transactions.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group
            className="mb-3"
            controlId="exampleFormCategory"
            style={{
              height: '15%',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Form.Label
              style={{
                width: '30%',
              }}
            >
              Category
            </Form.Label>
            {/* <Form.Select
              aria-label="Default select example"
              type="text"
              onChange={handleChange}
              name="category"
              value={transactions.category}
            >
              <option> Choose Category</option>
              <option value="Food">Food and Drink</option>
              <option value="2">Transport</option>
              <option value="3">Utilities</option>
            </Form.Select> */}
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlAmount"
            style={{
              height: '15%',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Form.Label
              style={{
                width: '30%',
              }}
            >
              Amount
            </Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Amount"
              onChange={handleChange}
              name="price"
              value={transactions.price}
              required
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlPayment"
            style={{
              height: '15%',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Form.Label
              style={{
                width: '30%',
              }}
            >
              Payment Method
            </Form.Label>
            <div key={`inline-radio`} className="mb-3">
              {/* <Form.Check
                inline
                label="Cash"
                name="payment"
                type="radio"
                id="cash"
                value={transactions.payment}
                checked={transactions.payment === 'Cash'}
                onChange={handleChange}
              />
              <Form.Check
                inline
                label="Card"
                name="payment"
                type="radio"
                id="card"
                value={'Card'}
                checked={transactions.payment === 'Card'}
                onChange={handleChange}
              />
              <Form.Check
                inline
                label="Mobile Money"
                name="payment"
                value={transactions.payment}
                type="radio"
                id="mobileMoney"
                checked={transactions.payment === 'Mobile Money'}
                onChange={handleChange}
              /> */}
            </div>
          </Form.Group>
          <Form.Group
            style={{
              height: '100%',
              width: '100%',
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              border: 'none',
            }}
          >
            <Button type="submit" style={{ width: '150px' }}>
              <span>Edit</span>
            </Button>
          </Form.Group>
        </Form>
      </Modal>
    </>
  );
};

export default EditTransaction;
