import React from 'react'

const Header = ({ course }) => {
    return (
      <h2>{course.name}</h2>
    )
  } 
  
  const Total = ({ parts }) => {
    // Need to set an initial value for the reduce accumulator work correctly in this instance
    // const sum = parts.reduce((acc, part) => acc + part.exercises) // incorrectly infers that acc should be an object, as part.exercises is an attribute of part object
    // alternative method would have been to chain map and reduce, so that the exercises from each object are first places in their own array

    /** 
    const altSum = parts.map(part => part.exercises).reduce((acc, val)=> acc+val);
    console.log(altSum);
    **/  
      
    
    const sum = parts.reduce((acc, part) => {return acc + part.exercises}, 0);
    
  
    return(
      <p><b>Total of {sum} exercises</b></p>
    ) 
  }
  
  const Part = ({part}) => {
    return (
      <p>
        {part.name} {part.exercises}
      </p>    
    )
  }
  
  const Content = ({parts}) => { 
     
     return (
       <div>
       {parts.map(part => 
          <Part part={part} key={part.id}/>
       )}
       </div>
     )
  }
  
  
  const Course = ({course}) => {
  
    return (
      <div>
        <Header course={course} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
    )
  }



export default Course