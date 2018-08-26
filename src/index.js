import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Clock from './Clock'
import Toggle from './Toggle'
import Greeting from './Greeting'
import LoginControl from './LoginControl.js'
import NumberList from './NumberList.js'

//const tick = () => {
  //const element = (
    //<div>
      //<h1>Hello, World!</h1>
      //<h2>It is {new Date().toLocaleTimeString()}.</h2>
    //</div>
  //)
  //ReactDOM.render(element, document.getElementById('root'))
//}

//const formatName = (user) => {
  //return user.firstName + ' ' + user.lastName;
//}

//const user = {
  //firstName: 'Adam',
  //lastName: 'Love'
//}

//const element = (
  //<h1>
    //Hello, {formatName(user)}!
  //</h1>
//)

//const Welcome = (props) => {
  //return <h1>Hello, {props.name}</h1>
//}

//const element2 = <Welcome name="Adam" />

//function App2() {
  //return(
  //<div>
    //<Welcome name="Adam" />
    //<Welcome name="Sara" />
    //<Welcome name="Elliot" />
  //</div>
  //)
//}

//function Clock(props) {
  //return (
    //<div>
      //<h1>Hello, World!</h1>
      //<h2>It is {props.date.toLocaleTimeString()}.</h2>
    //</div>
  //)
//}


//function tick() {
  //ReactDOM.render(
    //<Clock date={new Date()}/>,
    //document.getElementById('root')
  //)

//}

//setInterval(tick, 1000)


function App3() {
  return (
    <div>
      <Clock />
      <Clock />
      <Clock />
      <br/>
      <hr />
      <br/>
      <ActionLink />
      <br/>
      <hr />
      <br/>
      <Toggle/>
      <hr />
      <br/>
      <Greeting isLoggedIn={false}/>
      <hr />
      <br/>
      <LoginControl/>
      <hr />
      <br/>
      <NumberList numbers={[1,2,3,4,5]}/>
    </div>
  )
}

function ActionLink() {
  function handleClick(e) {
    e.preventDefault()
    console.log(`The link was clicked!!`)
  }

  return (
    <a href="#" onClick={handleClick}>
      Click Me!
    </a>
  )
}
ReactDOM.render(<App3 />, document.getElementById('root'));
registerServiceWorker();
