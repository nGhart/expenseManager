import React, { useState } from 'react';
import Stack from 'react-bootstrap/Stack';
import EditReminders from './EditReminders';

import Modal from 'react-bootstrap/Modal';
function Reminder(props) {
  const deleteContact = (e) => {
    e.preventDefault();
    props.deleteContact(props.userInfo.id);
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="mb3" closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalMain">
          <EditReminders
            userInfo={props.userInfo}
            editContact={props.editContact}
            closeModal={handleClose}
          />
        </Modal.Body>
      </Modal>

      <Stack
        direction="horizontal"
        gap={3}
        className=" todo-row"
        style={{
          backgroundColor: 'rgb(162, 197, 243)',
          boxShadow: '2px 2px 2px 2px grey',
          borderRadius: '5px',
          padding: '5px',
          marginBottom: '5px',
          borderRadius: '5px',
          height: '50px',
        }}
      >
        <h6 style={{ width: '30%' }}>{props.userInfo.bill}</h6>
        <h6>GHC {props.userInfo.cost}</h6>
        <div className=" ms-auto">
          <h6>{props.userInfo.due}</h6>
        </div>
        <div
          className="icons"
          style={{
            padding: '5px',
          }}
        >
          <div onClick={handleShow}>✎</div>
          <div className="deleteIcon" onClick={deleteContact}>
            ✖
          </div>
        </div>
      </Stack>
    </>
  );
}

export default Reminder;
