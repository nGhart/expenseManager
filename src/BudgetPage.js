import React, { useState } from 'react';
import Reminders from './reminders/Reminders';
import AddReminder from './reminders/AddReminder';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import './App.css';

const BudgetPage = () => {
  const [users, setUsers] = useState([
    {
      catName: 'Water',
      budget: 70,
      id: '3454ght783ttt',
    },
    {
      catName: 'Electricity',
      budget: 230,
      id: '3454ght783tt89',
    },
  ]);

  const addReminder = (user) => {
    user.id = Math.floor(Math.random() * 10000);
    setUsers([...users, user]);
  };

  const deleteReminder = (id) => {
    const remainingReminders = users.filter((user) => user.id !== id);
    setUsers(remainingReminders);
  };

  const editReminder = (id, newInfo) => {
    setUsers(users.map((user) => (user.id === id ? newInfo : user)));
  };
  let sortedReminders = users.slice().sort((a, b) => (a.due > b.due ? 1 : -1));
  //.sort((a, b) => (new Date(a.due) > new Date(b.due) ? 1 : -1));
  //let nextReminders;
  console.log(users);
  console.log(sortedReminders);
  return (
    <Container
      style={{
        marginTop: '50px',
        //     .to-do-app {
        //   /* width: 100%; */
        //   height: 100vh;
        //   display: flex;
        //   justify-content: center;
        //   min-height: 600px;
        //   /* width: 500px; */
        //   margin: 60px auto;
        //   padding: 20px;
        // }
      }}
    >
      <h1 style={{ textAlign: 'center' }}>Reminders</h1>
      <Row>
        <Col>
          <Stack gap={2} className="col-md-12 mx-auto">
            <div>
              <AddReminder newReminder={addReminder} />
            </div>
          </Stack>
        </Col>
      </Row>
      <div>
        <Stack gap={2} className="col-md-12 mx-auto">
          <Reminders
            usersData={users}
            deleteReminder={deleteReminder}
            editReminder={editReminder}
          />
        </Stack>
      </div>
    </Container>
  );
};

export default BudgetPage;
