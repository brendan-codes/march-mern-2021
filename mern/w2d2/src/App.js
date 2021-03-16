import { useEffect, useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {

  const [pokemon, setPokemon] = useState([
    {name: "Brendan"}
  ]);

  useEffect(() => {

    // the fetch way
    // fetch("https://pokeapi.co/api/v2/pokemon")
    //       .then(response => {
    //         return response.json();
    //     }).then(response => {
    //         console.log(response.results);
    //         setPokemon(response.results);
    //     }).catch(err=>{
    //         console.log(err);
    //     });

    // thi axios way
    axios.get("https://pokeapi.co/api/v2/pokemon")
          .then(response => {
            setPokemon(response.data.response);
            // hide spinning wheels
            // hide loading screens
          })
          .catch(err => console.log(err))

  }, []);

  return (
    <div className="App">
      {
      pokemon.map((poke, index) =>
        <p key={index}>{poke.name}</p>
      )
      }
    </div>
  );
}

export default App;
