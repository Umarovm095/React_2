import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <>
  <Test name = 'Emin'/>
  <Test2 name2 = '17'/>
  <Test3 name3 = 'Expovision'/>

  </>
  
  
)

function Test(props) {
  return(
    <span className="name">{props.name}</span>
  )
}

function Test2(props) {
  return(
    <span>{props.name2}</span>
  )
}

function Test3(props) {
  return(
    <span>{props.name3}</span>
  )
}