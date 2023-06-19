import { Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <>
      <Navbar style={{ backgroundColor: 'green' }} data-bs-theme="dark">
        <Container>
          <Row>
            <Nav className="me-auto">
              <NavLink to="/">Home</NavLink>

              <NavLink to="transaction">Transactions</NavLink>

              <NavLink to="summary">Summary</NavLink>

              <NavLink to="budget">Budget</NavLink>

              <NavLink to="reminders">Reminders</NavLink>
            </Nav>
          </Row>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
