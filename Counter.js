import React, {useState} from 'react';

function Counter() {
    const [count, setCount] = useState(5)

    function minusCountTwo() {
      setCount(prevCount => prevCount-2)
    }
  
    function plusCountTwo() {
      setCount(prevCount => prevCount+2)
    }
    return (
    
      <div>
        <h1>2 Step Counter</h1>
        <button onClick={minusCountTwo}>-</button>
        <span>{count}</span>
        <button onClick={plusCountTwo}>+</button>
      </div>
      
  
      
    )

}

export default Counter;
