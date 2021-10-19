//import logo from './logo.svg';
import './App.css';
import { useState } from "react";


export default function App() {
  const [black, setBlack] = useState(true);
  const [red, setRed] = useState(true);
  const [blue, setBlue] = useState(true);

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

  return (
    <div className = "App">
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
        </div> 
      <div className = "blackColor">
            { renderBackground() }
      </div>
    </div>
  )

}