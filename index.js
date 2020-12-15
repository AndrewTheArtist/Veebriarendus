import React, {useState} from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Counter = (props) => {

  const [counter, setCounter] = useState(5) ; // muutuja ja muutuja “setter” algne väärtus 5
  const updateCounter = (i) => {setCounter(i)} // funktsioon
  

  return ( 
    <div>
      <h1>Step: {props.step}</h1>
      <button onClick={()=> updateCounter(((Math.max(counter-props.step, 0) )))}>-</button>
      <span> {Math.round((counter*10))/10} </span>
      <button onClick={() =>updateCounter(Math.min(counter+props.step, 10))}>+</button>
    </div>
   ) //JSX

}

const App = () => {
  
return (
  <main>
    <h1>Counters</h1>
    <Counter  step={1}></Counter>
    <Counter step={2}></Counter>
    <Counter step={0.1}></Counter>

  </main>

);
};
ReactDOM.render(<App />, document.getElementById("root"));
