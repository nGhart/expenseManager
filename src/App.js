import './App.css';
import 'react-calendar/dist/Calendar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import Routing from './Routing';
import Navigation from './components/Navigation';
import AddTransaction from './transaction/AddTransaction';

function App() {
  return (
    <BrowserRouter>
      <section style={{ position: 'relative' }}>
        <Navigation />
        <AddTransaction />
        <Routing />
      </section>
    </BrowserRouter>
  );
}

export default App;
