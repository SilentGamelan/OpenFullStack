import React from 'react'

const Header = (header)=> {
  return (
  <h1>{header.headerText}</h1>
  )
}



const Content = (props)=>{
  return (
    <div>
      <div>
        {props.part1} {props.exercise1}
      </div>
      <div>
        {props.part2} {props.exercise2}
      </div>
      <div>
        {props.part3} {props.exercise3}
      </div>
    </div>
    )
}

const Total = (props) => {
  return (
    <p>
      Number of exercises {props.exercise1 + props.exercise2 + props.exercise3}
    </p>
  )
}


const App = ()=> {
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;

  return (
    <div>
      <Header headerText={course} />
      <Content part1={part1} part2={part2} part3={part3} exercise1={exercises1} exercise2={exercises2} exercise3={exercises3} />
      <Total exercise1={exercises1} exercise2={exercises2} exercise3={exercises3} />  
    </div>
  )
}

export default App;
