# OpenFullStack


## React Notes

* props and their values can be "hard coded" strings or results of JavaScript expressions
  * if JavaScript expression, it must be wrapped with curly braces.
* React component names must be capitalized
  * tag names are case sensitive - `<footer>` where component = Footer will create a blank footer element
* React components typically needs at least one *root element* (such as an enclosing `<div>`)
  * an **array of components** is also valid, but not recommended: 
  ``` 
  const App = ()=> {
    return [
        <h1>Greetings</h1>
        <Hello name="Steve" />
    ]
  }
  ```
  * We can also use **fragments** to avoid littering DOM with extra divs:
  ```
    const App = ()=> {
    return ( 
        <>
            <h1>Greetings</h1>
            <Hello name="Steve" />
        < />
    )
  }
  ```
  * 
