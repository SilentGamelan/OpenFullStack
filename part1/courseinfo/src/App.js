import React, {useState} from 'react'


const Display = props => <div>{props.value}</div>

const Button = (props) => (
  <button onClick={props.handleClick}>{props.buttonText}</button>
)

const App = ()=> {
  const [value, setValue] = useState(0);

  const setToValue = (newValue) => () => setValue(newValue);

  return (
    <div>
      <Display value={value} />
      <Button handleClick={setToValue(1000)} buttonText="1000" />
      <Button handleClick={setToValue(0)} buttonText="0"/>
      <Button handleClick={setToValue(value+1)} buttonText="+1" />
    </div>
  )

};

export default App