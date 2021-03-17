import logo from './logo.svg';
import './App.css';

import { Router, Link, navigate } from '@reach/router';
import Users from './components/Users';
import User from './components/User';
import Help from './components/Help';

function App() {

  // state variables

  const goHomeEvent = (e) => {
    // return back to path="/"
    navigate("/");
  }

  return (
    <div className="App">
      <Link to="/">Home</Link> | <Link to="/help">Help</Link>
      <br/>
      <button onClick={goHomeEvent}>Go home!</button>

      <Router>
        <Users path="/"/>
        <Help path="/help"/>
        <User path="/user/:id"/>
      </Router>
    </div>
  );
}

export default App;
