import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import Form from './components/Form';

function App() {

  const [name, setName] = useState("Unicorns");

  return (
    <div className="App">
      <h1>Hello {name}</h1>
      <Form name={name} setName={setName}/>
    </div>
  );
}

export default App;
