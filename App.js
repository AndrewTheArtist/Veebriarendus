import React, {useState} from 'react';
import Counter from './Counter';
import Counterist from './Counterist';
import './index.css';



function App() {
  const [count, setCount] = useState(5)

  function minusCount() {
    setCount(prevCount => prevCount-1)
  }

  function plusCount() {
    setCount(prevCount => prevCount+1)
  }

  return (
    
    <div>
      <h1>1 Step Counter</h1>
      <button   onClick={minusCount}>-</button>
      <span>{count}</span>
      <button onClick={plusCount}>+</button>
      <Counter/>
      <Counterist />

    </div>
  
    

    
  )
}
export default App;
