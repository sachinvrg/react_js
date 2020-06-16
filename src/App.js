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
import Parentcomponent from  './components/parentcomponent'
import Usergreeting from  './components/usergreeting'
import Namelist from  './components/namelist'
import { render } from '@testing-library/react';

function App() {
  
   return (
     <div className="App">
    {/* {   <Greet name='krish'>
       <p>this is children pr</p>
       </Greet>
       <Greet name='react' >
        <button>action</button>
         </Greet>
      <Welcome/> 
      <Message/>
      <Counter/> 
    <Greet name='krish' heroName='superman'/> 
   <Functionclick /> 
   <Eventbind/>
   <Parentcomponent/>
   <Usergreeting/>
     */}
  <Namelist/>

    </div>
  );

}

export default App;
