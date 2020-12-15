import React, {useState} from 'react';

function Counterist() {
    
    const [count, setCount] = useState(5)

    function minusCountZero() {
      setCount(prevCount => prevCount-=0.1)
    }
  
    function plusCountZero() {
      setCount(prevCount => prevCount+=0.1)
    }
    return (
    
      <div>
        <h1>0.1 Step Counter</h1>
        <button onClick={minusCountZero}>-</button>
        <span>{count}</span>
        <button onClick={plusCountZero}>+</button>
      </div>
    
  
      
    )

}

export default Counterist;