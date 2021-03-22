import logo from './logo.svg';
import {useState} from 'react';
import { Router, navigate } from '@reach/router';
import './App.css';
import Display from './components/Display';

function App() {

  const [type, setType] = useState("");
  const [id,  setId] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/${type}/${id}`);
  }

  return (
    <div className="App">
      <h1>This is Star Wars!</h1>
      <div>
        <form onSubmit={submitHandler}>
          <p>Type: <input type="text" value={type} onChange={(e)=> {setType(e.target.value)}}></input></p>
          <p>Id: <input type="text" value={id} onChange={(e)=> {setId(e.target.value)}}></input></p>
          <p><input type="submit" value="Search!"></input></p>
        </form>
      </div>
      <Router>
        <Display path="/:type/:id"/>
      </Router>
    </div>
  );
}

export default App;
