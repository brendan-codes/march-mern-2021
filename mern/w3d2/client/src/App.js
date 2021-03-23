import logo from './logo.svg';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Router, Link } from '@reach/router';
import './App.css';
import List from './components/List';
import Create from './components/Create';

function App() {

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/notes")
      .then(response => setNotes(response.data))
      .catch(err => console.log(err))
  }, []);

  const addNote = (note) => {
    setNotes([...notes, note]);
  }

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note._id !== id));
  }



  return (
    <div className="App">
      <h1>Hello welcome to Anonymous Notes!</h1>
      <div>
        <Link to="/">Show All</Link> | <Link to="/new">Create Note</Link>
      </div>
      <hr/>
      <Router>
        <List path="/" notes={notes} deleteNote={deleteNote} />
        <Create path="/new" addNote={addNote}/>
      </Router>
    </div>
  );
}

export default App;
