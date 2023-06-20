import './App.css';
import 'react-calendar/dist/Calendar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import Routing from './Routing';
import Navigation from './components/Navigation';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <Container fluid>
        <Navigation />
        <Routing />
      </Container>
    </BrowserRouter>
  );
}

export default App;
