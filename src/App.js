//import logo from './logo.svg';
import './App.css';
import { useState } from "react";


export default function App() {
  const [black, setBlack] = useState(true);
  const [red, setRed] = useState(true);
  const [blue, setBlue] = useState(true);

  const [color, setColor] = useState(0);

  const [state, setState] = useState({
    name: '',
    email: '',
    phone: '',
    gender: 0,
    subscription: true,
  });

  const [nameInput, setNameInput] = useState('');

  const jsObject = {
    textInput : '',
    color: 0
  };


  const showBlack = () => {
    setBlack(true);
    setRed(false);
    setBlue(false);
  };

  const showRed = () => {
    setBlack(false);
    setRed(true);
    setBlue(false);
  };

  const showBlue = () => {
    setBlack(false);
    setRed(false);
    setBlue(true);
  };

  const renderBackground = () => {
    if (black) {
      return <div className = "blackColor"/>;
    } else if (blue){
      return <div className = "blueColor"/>;
    } else {
      return <div className = "redColor"/>;
    } 
  }

  const selectColor = (newColor) => {
    setColor(newColor);
  }

  const renderBackgroundVersionTwo = () => {
    switch (color) {
      case 0:
        return <div className="blackColor" />;
      case 1:
        return <div className="redColor" />;
      case 2:
        return <div className="blueColor" />;
      default:
        return <div className="blackColor" />;
    }
  };

  return (
    <div className = "App">
      { renderBackgroundVersionTwo() }
        <div className = "leftRect">
          <div className="square">
            <div onClick={showBlack}>
              <h3>Black</h3>
            </div>
          </div>
          <div className="square">
            <div onClick={showRed}>
              <h3>Red</h3>
            </div>
          </div>
          <div className="square">
            <div onClick={showBlue}>
              <h3>Blue</h3>
            </div>
          </div>
        <div className="square">
          <div onClick={() => selectColor(0)}>
            <h3>New Black</h3>
          </div>
        </div>
        <div className="square">
          <div onClick={() => selectColor(1)}>
            <h3>New Red</h3>
          </div>
        </div>
        <div className="square">
          <div onClick={() => selectColor(2)}>
            <h3>New Blue</h3>
          </div>
        </div>
        name: 
        <input
          value={state.name}
          onChange={(e) => {
            console.log(e.target.value);
            setState(
              {
                ...state,
                name: e.target.value
              }
            );
          }}
        />
        email: <input 
          value={state.email}
          onChange={(e) => {
            setState({
              ...state,
              email: e.target.value
            });
          }}
        />
        phone: <input 
          value={state.phone}
        />
        </div> 
      {/* <div className = "blackColor">
            
      </div> */}
    </div>
  )

}