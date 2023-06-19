import './App.css';
import 'react-calendar/dist/Calendar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import Routing from './Routing';
import Navigation from './components/Navigation';

function App() {
  return (
    <BrowserRouter>
      <section style={{ margin: '15px' }}>
        <Navigation />
        <Routing />
      </section>
    </BrowserRouter>
  );
}

export default App;
