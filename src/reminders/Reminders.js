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
            deleteContact={props.deleteContact}
            editContact={props.editContact}
          />
        );
      })}
    </>
  );
};

export default Reminders;
