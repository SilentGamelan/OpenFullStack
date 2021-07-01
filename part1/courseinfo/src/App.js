import React, {useState} from 'react'

const App = ()=> {
  const [counter, setCounter] = useState(0);

  const incByOne = ()=> setCounter(counter+1);
  const setToZero= ()=> setCounter(0);
  const decByOne = ()=> setCounter(counter-1);
    

  return (
    <div>
    <div>{counter}</div>
    <button onClick={decByOne}>-1</button>
    <button onClick={setToZero}>CLEAR</button>
    <button onClick={incByOne}>+</button>

    </div>
  )
}

export default App