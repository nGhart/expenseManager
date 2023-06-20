import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <Row
    //style={{ backgroundColor: 'green' }}
    >
      <Nav
        //variant="underline"
        fill
        variant="tabs"
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
          <NavLink to="reminders">Reminders</NavLink>
        </Col>
      </Nav>
    </Row>
  );
}

export default Navigation;
