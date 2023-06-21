import React, { useState } from 'react';
import Reminders from './reminders/Reminders';
import AddReminder from './reminders/AddReminder';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import './App.css';

const ReminderPage = () => {
  const [users, setUsers] = useState([
    {
      bill: 'Water',
      cost: 70,
      due: '2023-09-04',
      id: '3454ght783ttt',
    },
    {
      bill: 'Electricity',
      cost: 230,
      due: '2023-09-02',
      id: '3454ght783tt89',
    },
    {
      bill: 'Internet',
      cost: 350,
      due: '2023-09-06',
      id: '3454ght783t',
    },
    {
      bill: 'Rubbish Collection',
      cost: 60,
      due: '2023-09-07',
      id: '3454t783ttt',
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
      }}
    >
      <h1 style={{ textAlign: 'center' }}>Reminders</h1>
      <Row
        style={{
          margin: 'auto',
        }}
      >
        <Col sm={{ span: 6, offset: 3 }}>
          <Stack gap={2} className="col-md-12 mx-auto">
            <Row>
              <AddReminder newReminder={addReminder} />
            </Row>
          </Stack>
        </Col>
      </Row>
      <div>
        <Stack
          gap={2}
          className="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 mx-auto"
        >
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

export default ReminderPage;
