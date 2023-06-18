import './App.css';
import 'react-calendar/dist/Calendar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import Routing from './Routing';

function App() {
  return (
    <BrowserRouter>
      <div className="App"></div>
      <Routing />
    </BrowserRouter>
  );
}

export default App;
