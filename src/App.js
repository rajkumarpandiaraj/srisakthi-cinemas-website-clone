import './App.css';
import Nav from './components/Nav';
import {BrowserRouter as Router} from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Home from './components/layout/Home';
import Bookticket from './components/layout/Bookticket';
import Movies from './components/layout/Movies';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/book-ticket' exact component={Bookticket} />
          <Route path='/movies' exact component={Movies} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
