import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <Row
    //style={{ backgroundColor: 'green' }}
    >
      <Navbar
        className="navBar"
        //variant="underline"
        fill
        variant="tabs"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '50px',
          padding: '2px',
          textAlign: 'center',
          overflow: 'hidden',
          //backgroundColor: 'blue',
          zIndex: '0',
        }}
      >
        <Col className="navItems">
          <NavLink to="/">Home</NavLink>
        </Col>
        <Col className="navItems">
          <NavLink to="transaction">Transactions</NavLink>
        </Col>
        <Col className="navItems">
          <NavLink to="summary">Summary</NavLink>
        </Col>
        <Col className="navItems">
          <NavLink to="budget">Budget</NavLink>
        </Col>
        <Col className="navItems">
          <NavLink to="reminder">Reminders</NavLink>
        </Col>
      </Navbar>
    </Row>
  );
}

export default Navigation;
