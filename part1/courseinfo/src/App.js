import React from 'react'

const Header = (header)=> {
  return (
  <h1>{header.headerText}</h1>
  )
}

const Part = (part)=> {
  return(
    <div>
      {part.name} {part.exercise}
    </div>
  )
}

const Content = (props)=>{
  return (
    <div>
      <Part name={props.part1.name} exercise={props.part1.exercises} />
      <Part name={props.part2.name} exercise={props.part2.exercises} />
      <Part name={props.part3.name} exercise={props.part3.exercises} />
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
  const part1 = {
    name: 'Fundamentals of React',
    exercises : 10
  }
  const part2 = { 
    name: 'Using props to pass data',
    exercises: 7
  }
  
  const part3 = { 
    name: 'State of a component',
    exercises:  14
  }

  
  return (
    <div>
      <Header headerText={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total exercise1={part1.exercises} exercise2={part2.exercises} exercise3={part3.exercises} />  
    </div>
  )
}

export default App;
