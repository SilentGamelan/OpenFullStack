import React from 'react'

const Header = (courses)=> {
  return (
  <h1>{courses.course.name}</h1>
  )
}

const Part = (part)=> {
  return(
    <div>
      {part.name} {part.exercises}
    </div>
  )
}

const Content = (courses)=>{
  return (
    <div>
      <Part name={courses.course.parts[0].name} exercises={courses.course.parts[0].exercises} />
      <Part name={courses.course.parts[1].name} exercises={courses.course.parts[1].exercises} />
      <Part name={courses.course.parts[2].name} exercises={courses.course.parts[2].exercises} />
      </div>
    )
}

const Total = (courses) => {
  return (
    <p>
      Number of exercises {courses.course.parts[0].exercises + courses.course.parts[1].exercises + courses.course.parts[2].exercises}
    </p>
  )
}


const App = ()=> {
  const course = { 
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises : 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      { 
        name: 'State of a component',
        exercises:  14
      }
    ]
  };
  
  
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App;