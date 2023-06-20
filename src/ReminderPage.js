import React, { Component } from 'react';
import Reminders from './reminders/Reminders';
import AddReminder from './reminders/AddReminder';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Stack from 'react-bootstrap/Stack';
import './App.css';

class ReminderPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
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
      ],
    };
  }
  addReminder = (user) => {
    user.id = Math.floor(Math.random() * 10000);
    this.setState({
      users: [...this.state.users, user],
    });
  };

  deleteReminder = (id) => {
    let remainingReminders = this.state.users.filter((user) => user.id !== id);
    this.setState({
      users: remainingReminders,
    });
  };
  editReminder = (id, newInfo) => {
    this.setState({
      users: this.state.users.map((user) => (user.id === id ? newInfo : user)),
    });
  };
  render() {
    return (
      <div className="to-do-app">
        <Container>
          <Row>
            <Col>
              <Stack gap={2} className="col-md-12 mx-auto">
                <div>Add Reminder</div>

                <div>
                  <AddReminder newReminder={this.addReminder} />
                </div>
              </Stack>
            </Col>
          </Row>

          <div>
            <Stack gap={2} className="col-md-12 mx-auto">
              <Reminders
                usersData={this.state.users}
                deleteReminder={this.deleteReminder}
                editReminder={this.editReminder}
              />
            </Stack>
          </div>
        </Container>
      </div>
    );
  }
}

export default ReminderPage;
