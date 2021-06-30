import React from 'react'

// !!NB - remember using fat arrow and brackets is shorthand for 
// ()=>{ return (expression)} where the function is only a single expression
/** 
 const App = ()=> (
  <div>
    <p>Hello World</p>
  </div>
)
**/

const Hello = (props)=> {
  return (
    <div>
      <p>G'day {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = ()=> {

  const name = 'Peter';
  const age = 10;

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Cobber" age={25+23}/>
      <Hello name={name} age={age} />
      
    </div>
  )
}

export default App;
