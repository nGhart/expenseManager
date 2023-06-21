import React from 'react';
import Budget from './Budget';
const BudgetList = (props) => {
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

export default BudgetList;
