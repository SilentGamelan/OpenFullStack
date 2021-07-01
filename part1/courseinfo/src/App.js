import React, {useState} from 'react'

const Display = ({counter}) => <div>{counter}</div>;
 
const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>;

const App = ()=> {
  const [counter, setCounter] = useState(0);

  const incByOne = ()=> setCounter(counter+1);
  const setToZero= ()=> setCounter(0);
  const decByOne = ()=> setCounter(counter-1);
    
  const decText = "-";
  const clearText = "CLEAR";
  const incText = "+";


  return (
    <div>
    <Display counter={counter}/>
    <Button handleClick={decByOne} text={decText} />
    <Button handleClick={setToZero} text={clearText} />
    <Button handleClick={incByOne} text={incText}/>
    </div>
  )
};

export default App