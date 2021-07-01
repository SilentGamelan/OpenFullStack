# OpenFullStack


## Javascript Revision Notes

### Arrow notation

multiple parameters require parentheses

```
const expo = (a, b) => {
  return Math.pow(a, b);
  // NB - could use new exponentiation operator - a ** b
}

```

single parameter does not require parenthesed and if single return statement, can be on one line.

```
const square = p => {
  console.log(p);
  return p * p;
}

const oneLineSquare = p => p*p;

```

Defining a function in this way (without explicit use of `function` keyword is referred to as a **function expression**

### Objects

Dot notation can be used to add properties to an object, however bracket notation must be used if a space is present in the key/value:

```
const myObject = {
  name: 'Dave',
  age: '42',
}

myObject.colour = 'black';
myObject['secret number'] = 1234;

// can also use variables to hold the required property name
const fieldName = 'age';
console.log(myObject[fieldName]); // 42
```

### var, let, const

`var` declares a **function scoped** variable, can be reassigned, if declared outside of a function is **globally scoped**

`const` = creates a immutable binding between a **block scoped** variable and object, NOT immutable objects.
For primitives, the value referred to *is* immutable, but this is not the case for complex data-types.
!! To create an immutable object, we should use [Object.freeze()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) 

`let` = **block scoped**, non-reassignable variable


### Arrays

!! As above, remember that arrays are objects and as such can be modified even if declared `const`
```
const a=[1,2,3];
a[0] = 100;
console.log(a) // [100,2,3]
```

Can use forEach loops on arrays, remember to use alternative syntax if need to alter the array (or use different methods such as `.map()`)
```
    a.forEach(value) => {
        value++; // has no effect on contents of a
}

  t.forEach((val, index)=> {
    t[index] = val*val;
  
  });
  console.log(t); // [1, 4, 9]
```

### Destructuring Assignment:
 can assign specific vars and "collect" the remaining items in a collection by using square brackets,  **spread syntax** and **rest syntax** `...`

```
// Asssigning separate from declaration, with rest syntax
const arr = [5, 4, 3, 2, 1];
const [first, second, ...rest] = arr;

console.log(first, second, rest); // 1 2 [3, 4, 5];
```

**Object destructuring**
```
// copying into new variables
const o = {name: 'Steve', age: 42};
const {name: nameVar, age: ageVar} = o;
console.log(nameVar, ageVar); // steve 42;
```

```
// Swapping variables
let a = 13;
let b = 31;
[a,b]=[b,a]
console.log(a, b) // 31 13
```

### Rest Parameters and the arguments Object
!! Note only ONE rest param allowed in function calls, and it must be the final parameter
!! calling a function without reaching rest parameter will assign an empty array to it

!! Rest parameters are real arrays - argument object is not
* `arguments` does **not** support array methods
* 
```
function sumEverything(...manyArgs) {
    return manyArgs.reduce((previous, current)=> {
        return previous+current;
    });
}

console.log(sumEverything(1, 2, 3)); // 6
console.log(sumEverything(1, 2, 3, 3, 2, 1)); // 12

function sumFirstTwoAndReturnRest(a,b, ...rest) {
    console.log(a+b); 
    return rest;
}

sumFirstTwoAndReturnRest(1, 2, 3, 4, 5, 6, 7); // prints 3, returns [3, 4, 5, 6, 7]

// not passing value to rest parameter
sumFirstTwoAndReturnRest(1, 2); // prints 3, returns []

```


## React Notes

* props and their values can be "hard coded" strings or results of JavaScript expressions
  * if JavaScript expression, it must be wrapped with curly braces.
  * props are **read-only** 
* React component names must be capitalized
  * tag names are case sensitive - `<footer>` where component = Footer will create a blank footer element
* React components typically need at least one *root element* (such as an enclosing `<div>`)
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
* **Don't** directly mutate states of react components
  * ```
  const [componentState, setComponentState] = useState([]);
  setComponentState(componentState.concat("Yes Do This));
  componentState.concat("Don't Do This);

## [Lifting State Up](https://reactjs.org/docs/lifting-state-up.html)
> Often, several components need to reflect the same changing data. We recommend lifting the shared state up to their closest common ancestor. 

If separate components deal with shared states, then it is *not* a good idea to keep independent stores of the state values within each component.
It is better to "lift the state" to the *closest common ancestor component* of all of the components that requre access to that state.

We can describe this component that "owns" the shared state as being the *"source of truth"* for the child components in terms of this shared state.

The example given in the above link uses a temperature calculator component.
Rather than separate F and C components, each storing a temperature value, it uses a generic temperatureInput that accepts temperature, scale, and an appropriate onTemperatureChange handler reference, passed via props
passed down by the Calculator component.

The need to pass a handler reference is partly due to the fact that props are **read only**. In order for a sub-component to change the value of a controlled state owned by a parent component, it must call the owning component's setter method.

Note that to make this work, the temperatureInput component must make use of `bind` and `e.target.value` to set the correct context for `this`

                    -> constructor()
temperatureInput    -> handleChange()
                    -> render()

                    -> constructor()
calculator          -> handleCelciusChange(temperature)
                    -> handleFarenheitChange(temperate)
                    -> render()
                      - scale
                      - temperature
                      - celsius
                      - farenheit


### Functional Programming
  It is common to use functional programming techniques in React, such as preferring **immutable data structures**

  For instance, rather than modifying an existing array we may prefer to use `concat` as it creates a *new* array that includes the concatenated data item:
```
  const t = [1, 2, 3]
  const t2 = t.concat(4)

  console.log(t)    // [1,2,3]
  console.log(t2)   // [1,2,3,4]
```

`.map()` can also be used if the array contents are to be altered, as it also builds a new array

```
const t = [1,2,3];
const t2 = t.map(value => value*2);
console.log(t2); // [2, 4, 6];

const htmlArray = t2.map(value => '<li>' + value = '</li>'); // ['<li>2</li>', etc]


```
---

## Babel Notes
* Babel is a *transpiler*
  * It converts various extensions/dialects of JS into backwards compatible vanilla JS code
  * Generally used to convert current ECMAscript Javascript Standard code into older Javascript versions which are better supported by older browsers


&nbsp;

## Hooks and React Hooks

Hooking is a method provided by software (whether the underlying OS, or an application/runtime on top of the O/S) to allow running of custom code upon interception of *function calls*, *messages*, or *events*.

The hook code may replace or augment the hooked functionalities - that is, A hook may occur before, after, or instead of the hooked event.

For example, a hook could be written to intercept keyboard strokes and write them into a file, before displaying to screen as normal (a key logger).
Alternatively, a hook could be used to entirely replace an existing API functionality by intercepting the API call, and returning. To the calling code, this hooking may be invisible - this is a common approach used in malware, such as rootkits.


Hooks can have various implementations, allowing the use of callbacks being a common example.

A significant and powerful aspects of hooks, is that they can allow modification of program behaviour **at run-time**.

**React hooks**

The [motivation](https://reactjs.org/docs/hooks-intro.html#motivation) for React Hooks states that 
1. It’s hard to reuse stateful logic between components
2. Complex components become hard to understand
3. Classes confuse both people and machines

And states that 
> Hooks allow you to reuse stateful logic without changing your component hierarchy
> Hooks let you split one component into smaller functions based on what pieces are related (such as setting up a subscription or fetching data)
> Hooks let you use more of React’s features without classes.


In relation to fullstackopen, the use of React Hooks means that 
> we have no need for defining objects with methods


NB - Javascript defines 'this' differently **depending on *how* a method is called**

Most significantly, an object's method will "lose track" of the context of `this` if the method is called via a *reference* and will instead use the *global context*.
```
const myObject = {
  name: "Dave",
  speak: function() {
    console.log('Hello, my name is' + this.name)
  }
};

myObject.speak() // 'hello my name is Dave'

const referenceToMyObjectMethod = myObject.speak;
referenceToMyObjectMethod(); // 'hello my name is undefined' 

// A common occurance where this may be an issue is

setTimeout(myObject.greet, 1000); // again, undefined

```
We can mitigate against this by using the `bind` keyword

```
setTimeout(myObject.greet.bind(myObject), 1000) // the context of this is manually set to be myObject
```

!!NB = **Don't** use arrow functions for object methods, as `this` will be completely broken

&nbsp;

## React and JavaScript Classes

The `class` syntax was introduced in ES6, and was a controversial addition.

The created objects are still based on JS's prototypical inheritance, yet the behaviour and syntax is similar to Java objects.

```
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log('hello, my name is ' + this.name)
  }
}

const dave = new Person('Dave', 42);
dave.greet();
```

`class` syntax is common in Node.js and older React code, but React Hooks means that we can avoid using it.

&nbsp;

### Hoisting

Hoisting occurs because function and variable declarations are read into memory during the compilation stage.
This has the *effect* of "putting declarations at the top of code blocks" (whether global or functions), although not done in reality.

Note that 
**Only declarations are hoisted**
If a var is declared and initalised on the *same or later* line, hoisting will not occur.
However, if a hoistable var is initalised **above** its declaration, hoisting *will* occur.  

Additionally `let` and `const` initialisation **cannot** be hoisted.

```
function hoisted() {
    console.log(hoistedVar); // undefined
    hoistedVar = "Whee";
    console.log(hoistedVar); // "Whee"
    var hoistedVar;
}

function notHoisted() {
  console.log(notHoistedVar); // Syntax error
  var notHoistedVar = "Nope";
}

```

**Function Hoisting**
```
function hoisty() {
    thisIsHoisted();
    function thisIsHoisted() {
        console.log("I'm Hoisted");
    }
}
```

**Variable Hoisting**
```
function variableHoisting(){
   console.log(hoistMyVar(hoistedVar));
    function hoistMyVar(whee) {
        return "Hoisted!";
    }
    var hoistedVar;
}
```

---
### ECMAscript edition numbers vs modern naming:
---
| Edition/Version | Name | Features |
|-----------------|------|---|
| 5   | - | strict mode 
| 6   | ES2015 | import modules, class declarations, iterators/generators, for-of loops, arrow notation, let/const, promises, template literals
| 7   | ES2016 | block-scoping, destructuring, exp operator (**), await/async, Array.prototype.includes
| 8   | ES2017 | Object.values, Object.entries, Object.getOwnPropertyDescriptors, more concurrency, atomics
| 9   | ES2018 | spread operator (...), rest parameters, async iteration, Promise.protoype.finally, RegEx tweaks
| 10  | ES2019 | Array.prototype.flat [flattens array to specified depth], Array.prototype.flatMap, Changes to: Array.sort() Object.fromEntries()
| 11  | ES2020 | BigInt primitives, nullish coalescing operator (??) [returns right-hand operand if left-hand is null or undefined. Can be chained for nested properties]
| 12  | ES2021 |


# Recommended JavaScript Materials
> There exist both good and poor guides for JavaScript on the Internet. Most of the links on this page relating to JavaScript feature reference Mozilla's JavaScript Guide.
> 
> It is highly recommended to immediately read A re-introduction to JavaScript (JS tutorial) on Mozilla's website.
>
> If you wish to get to know JavaScript deeply there is a great free book series on the Internet called You-Dont-Know-JS.
> 
> Another great resource for learning JavaScript is javascript.info.
> 
> egghead.io has plenty of quality screencasts on JavaScript, React, and other interesting topics. Unfortunately, some of the material is behind a paywall.

* [A re-introduction to JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript)
* [You-Dont-Know-JS](https://github.com/getify/You-Dont-Know-JS)
* [javascript.info](javascript.info)
* [egghead.io](egghead.io)

---

# TODO
- [] **[Read React Hooks API documentation](https://reactjs.org/docs/hooks-reference.htm)**
  - [] Basic Hooks
    - [] useState
    - [] useEffect
    - [] useContext
  - Additional Hooks
    - [] useReducer
    - [] useCallback
    - [] useMemo
    - [] useRef
    - [] useImperativeHandle
    - [] useLayoutEffect
    - [] useDebugValue