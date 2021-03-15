import react, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Boxes from './components/Boxes';
import New from './components/New';

// redux

function App() {

  const [boxes, setBoxes] = useState([
    {color: "blue"},
    {color: "red"},
    {color: "yellow"}
  ])

  const createBox = (box) => {
    setBoxes([...boxes, box])
  };

  return (
    <div className="App">
      <h1>Hello world!</h1>
      <New createBox={createBox}/>
      <Boxes boxes={boxes} />
    </div>
  );
}

export default App;
