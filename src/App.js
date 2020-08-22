import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

/*----------- 1 React Component Recap
  // similar in look , similar in data
function App() {
  return (
    <div className="App">
      <Student></Student>
      <Student></Student>
      <Student></Student>
      <header className="App-header">
        <p>React Component Recap</p>
      </header>
    </div>
  );
}
function Student() {
  const studentStyle = {
    border: '2px solid cyan',
    margin: '10px'
  }
  // return <div style={{border:'2px solid cyan'}}>
  return <div style={studentStyle}>
    <h4>I am a student</h4>
    <h5>I live in BD</h5>
  </div>
}
--------------*/


/*----------- 2 React Component Recap
  // similar in look , different in data start
function App() {
  const students = ['Salma','Naima'];
  return (
    <div className="App">
      <Student name={students[1]} city="Sylhet"></Student>
      <Student name="Arif"></Student>
      <Student name={students[0]}></Student>
      <Student></Student>
      <header className="App-header">
        <p>React Component Recap</p>
      </header>
    </div>
  );
}
function Student(props) {
  console.log(props);
  // console.log(props.name);
  const studentStyle = {
    border: '2px solid cyan',
    margin: '10px'
  }
  // return <div style={{border:'2px solid cyan'}}>
  return (
    <div style={studentStyle}>
      <h4>I am {props.name}</h4>
      <h5>I live in {props.city || 'Dhaka'}</h5>
    </div>
  )
  // similar in look , different in data end
}

--------------*/


/*----------- 3 How to write and destructure usestate
function App() {
  // useState start
  const nayoks = ['Amir', 'Shahrukh', 'Salman'];
  return (
    <div className="App">
      <MovieCounter></MovieCounter>
      <Nayok name={nayoks[1]} age="56"></Nayok>
      <Nayok name="Akshey"></Nayok>
      <Nayok name={nayoks[0]}></Nayok>
      <Nayok></Nayok>
      <header className="App-header">
        <p>React Component Recap</p>
      </header>
    </div>
  );
}
function MovieCounter() {
  const [count, setCount] = useState(0);
  // console.log(count, setCount);
  // const handleClick = () =>console.log('someone is clicked');
  const handleClick = () => setCount(count + 1);
  return (
    <div>
      <button onClick={handleClick}>Add Movie</button>
      <h3>Numbers Of Movie : {count} </h3>
      <MovieDisplay movies={count}></MovieDisplay>
      <MovieDisplay movies={count + 10}></MovieDisplay>
      <MovieDisplay movies={count + 5}></MovieDisplay>
      <MovieDisplay movies={count}></MovieDisplay>
    </div>
  )
}
function MovieDisplay(props) {
  return (
    <h4>Movies I have Acted : {props.movies}</h4>
  )
}
function Nayok(props) {
  console.log(props);
  // console.log(props.name);
  const nayokStyle = {
    border: '2px solid cyan',
    margin: '10px'
  }
  // return <div style={{border:'2px solid cyan'}}>
  return (
    <div style={nayokStyle}>
      <h4>I am {props.name}</h4>
      <h5>I have done 5 movies in {props.age || 30}</h5>
    </div>
  )
  // useState end
}
--------------*/

/*----------- 4 Render multiple component from an array recap 
function App() {
  //const nayoks = ['Amir', 'Shahrukh', 'Salman','Rithik', 'Ranbir'];//array
  const nayoks = [{ name: 'Salman', age: 50 }, { name: 'Amir', age: 56 }, { name: 'Shahrukh', age: 30 }, { name: 'Rithik', age: 15 }];
  return (
    <div className="App">
      <MovieCounter></MovieCounter>
      {
        // nayoks.map(nayok => <li>{nayok}</li>) //--> by list for array
        //nayoks.map(nk => <Nayok name={nk}></Nayok>)//-->>by component for array
        nayoks.map(nk => <Nayok name={nk.name} age={nk.age}></Nayok>) // by component for object
      }
      <header className="App-header">
        <p>React Component Recap</p>
      </header>
    </div>
  );
}
function MovieCounter() {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount(count + 1);
  return (
    <div>
      <button onClick={handleClick}>Add Movie</button>
      <h3>Numbers Of Movie : {count} </h3>
      <MovieDisplay movies={count}></MovieDisplay>
      <MovieDisplay movies={count + 10}></MovieDisplay>
      <MovieDisplay movies={count + 5}></MovieDisplay>
    </div>
  )
}
function MovieDisplay(props) {
  return (
    <h4>Movies I have Acted : {props.movies}</h4>
  )
}
function Nayok(props) {
  console.log(props);
  const nayokStyle = {
    border: '2px solid cyan',
    margin: '10px'
  }
  return (
    <div style={nayokStyle}>
      <h4>I am {props.name}</h4>
      <h5>I have done 5 movies in {props.age || 30}</h5>
    </div>
  )
}
 --------------*/


/*----------- 5 Load data from API using useEffect recap --------------*/
function App() {
  const [nayoks, setNayoks] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setNayoks(data))

  }, [])
  return (
    <div className="App">
      <MovieCounter></MovieCounter>
      {
        nayoks.map(nk => <Nayok name={nk.name} key={nk.id} age={nk.age}></Nayok>) // by component for object
      }
      <header className="App-header">
        <p>React Component Recap</p>
      </header>
    </div>
  );
}
function MovieCounter() {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount(count + 1);
  return (
    <div>
      <button onClick={handleClick}>Add Movie</button>
      <h3>Numbers Of Movie : {count} </h3>
      <MovieDisplay movies={count}></MovieDisplay>
      <MovieDisplay movies={count + 10}></MovieDisplay>
      <MovieDisplay movies={count + 5}></MovieDisplay>
    </div>
  )
}
function MovieDisplay(props) {
  return (
    <h4>Movies I have Acted : {props.movies}</h4>
  )
}
function Nayok(props) {
  console.log(props);
  const nayokStyle = {
    border: '2px solid cyan',
    margin: '10px'
  }
  return (
    <div style={nayokStyle}>
      <h4>I am {props.name}</h4>
      <h5>I have done 5 movies in {props.age || 30}</h5>
    </div>
  )
}
export default App;
