import logo from './logo.svg';
import {useState} from 'react';
import { Router } from '@reach/router';
import './App.css';
import ShowAll from './components/ShowAll';
import New from './components/New';
import DisplayOne from './components/DisplayOne';
import Edit from './components/Edit';
import Error from './components/Error';

function App() {

  const [data, setData] = useState();

  // handler

  return (
    <div className="App">
      <h1>This is the app!</h1>
      <Router>
        <ShowAll path="/" data={data}/>
        <New path="/new" />
        <DisplayOne path="/show/:id" />
        <Edit path="/edit/:id" />
        <Error path="/:url" />
      </Router>
    </div>
  );
}

export default App;
