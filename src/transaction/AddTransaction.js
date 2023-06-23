import React from 'react';
import { v1 as uuid } from 'uuid';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { addTransaction } from '../appSlice/appSlice';
import Row from 'react-bootstrap/Row';

const AddTransaction = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [state, setState] = useState({
    date: '',
    name: '',
    category: '',
    price: '',
    payment: 'Cash',
    transaction: 'Expense',
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      date: state.date,
      name: state.name,
      category: state.category,
      price: state.price,
      payment: state.payment,
      transaction: state.transaction,
      id: uuid(),
    };
    dispatch(addTransaction(newTransaction));
    setState({
      date: '',
      name: '',
      category: '',
      price: '',
      payment: '',
      transaction: '',
    });
    // console.log(state.price);
    // console.log(typeof state.price);
    handleClose();
  };

  return (
    <Row>
      <Button
        variant="primary"
        onClick={handleShow}
        className="addButton"
        style={{
          position: 'fixed',
          right: '10px',
          top: '70%',
          margin: '15px',
          marginRight: '8px',
          width: '50px',
          height: '50px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgb(32, 76, 117)',
          border: 'none',
          borderRadius: '50%',
        }}
      >
        <span
          className="material-symbols-outlined"
          style={{
            fontSize: '45px',
          }}
        >
          add
        </span>
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Form
          style={{
            width: '100%',
            minHeight: '300px',
            margin: '5px',
            padding: '10px',
          }}
          onSubmit={handleSubmit}
        >
          <Form.Group
            style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'space-between',
            }}
          >
            <Button
              type="submit"
              style={{
                width: '150px',
                backgroundColor: 'transparent',
                color: 'grey',
                padding: '0',
                border: 'none',
              }}
            >
              <span
                className="material-symbols-outlined returnArrow"
                onClick={handleClose}
              >
                arrow_back
              </span>
            </Button>
            <Button
              type="submit"
              style={{
                width: '150px',
                backgroundColor: 'transparent',
                color: 'grey',
                padding: '0',
                border: 'none',
              }}
            >
              <span
                type="submit"
                // style={{
                //   fontSize: '40px',
                // }}
                className="material-symbols-outlined returnArrow"
              >
                done
              </span>
            </Button>
          </Form.Group>
          <Form.Group>
            <Form.Check
              inline
              label="Expense"
              name="transaction"
              type="radio"
              id="Expense"
              value="Expense"
              checked={state.transaction === 'Expense'}
              onChange={handleChange}
            />
            <Form.Check
              inline
              label="Income"
              name="transaction"
              type="radio"
              id="Income"
              value="Income"
              checked={state.transaction === 'Income'}
              onChange={handleChange}
            />
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
              value={state.date}
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
              value={state.name}
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
            <Form.Select
              aria-label="Default select example"
              type="text"
              onChange={handleChange}
              name="category"
              value={state.category}
            >
              <option> Choose Category</option>
              <option></option>
              <option>EXPENSE</option>
              <option value="Food and Drink">Food and Drink</option>
              <option value="Transport">Transport</option>
              <option value="Groceries">Groceries</option>
              <option value="Utilities">Utilities</option>
              <option value="Household">Household</option>
              <option value="Health-care">Health-care</option>
              <option value="Vehicle">Vehicle</option>
              <option value="Loans">Loans</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Miscellaneous">Miscellaneous</option>
              <option></option>
              <option>INCOME</option>
              <option value="Salary">Salary</option>
              <option value="Investment">Investment</option>
              <option value="Pension">Pension</option>
              <option value="Rental Income">Rental Income</option>
              <option value="Gifts">Gifts</option>
            </Form.Select>
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
              value={state.price}
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
              <Form.Check
                inline
                label="Cash"
                name="payment"
                type="radio"
                id="cash"
                value="Cash"
                checked={state.payment === 'Cash'}
                onChange={handleChange}
              />
              <Form.Check
                inline
                label="Card"
                name="payment"
                type="radio"
                id="card"
                value="Card"
                checked={state.payment === 'Card'}
                onChange={handleChange}
              />
              <Form.Check
                inline
                label="Mobile Money"
                name="payment"
                value="Mobile Money"
                type="radio"
                id="mobileMoney"
                checked={state.payment === 'Mobile Money'}
                onChange={handleChange}
              />
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
          ></Form.Group>
        </Form>
      </Modal>
    </Row>
  );
};
export default AddTransaction;
