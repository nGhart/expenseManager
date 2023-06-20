import React from 'react';
import Reminder from './Reminder';

const Reminders = (props) => {
  return (
    <>
      {props.usersData.map((user) => {
        return (
          <Reminder
            userInfo={user}
            key={user.id}
            deleteReminder={props.deleteReminder}
            editReminder={props.editReminder}
          />
        );
      })}
    </>
  );
};

export default Reminders;
