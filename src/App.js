import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from  './components/greet'
import Welcome from  './components/welcome'
import Message from  './components/message'
import Counter from  './components/counter'
import Functionclick from  './components/functionClick'
import Classclick from  './components/classclick'
import Eventbind from  './components/eventbind'
import { render } from '@testing-library/react';

function App() {
  
   return (
    <div className="App">
       <Greet name='krish'>
        <p>this is children props</p>
      </Greet>
      {/*<Greet name='react' >
       <button>action</button>
        </Greet>
     <Welcome/> */}
     {/* <Message/> */}
     {/* <Counter/> */}
   {/* <Greet name='krish' heroName='superman'/> */}
   {/* <Functionclick /> */}
   
   <Eventbind/>

    </div>
  );

}

export default App;
