import React from 'react';
import Modal from 'react-bootstrap/Modal';
const Budget = () => {
  const deleteReminder = (e) => {
    e.preventDefault();
    props.deleteReminder(props.userInfo.id);
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>

        <EditReminders
          userInfo={props.userInfo}
          editReminder={props.editReminder}
          closeModal={handleClose}
        />
      </Modal>

      <Stack
        direction="horizontal"
        gap={3}
        style={{
          backgroundColor: 'rgb(162, 197, 243)',
          boxShadow: '2px 2px 2px 2px grey',
          borderRadius: '5px',
          padding: '5px',
          marginBottom: '5px',
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
          <div className="deleteIcon" onClick={deleteReminder}>
            ✖
          </div>
        </div>
      </Stack>
    </>
  );
};
export default Budget;
