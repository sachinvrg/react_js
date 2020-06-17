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
import Stylesheets from  './components/stylesheets'
import './srtyle.css'
import Style from './appstylw.module.css' 
import Form from './components/form' 
import { render } from '@testing-library/react';

function App() {
  
   return (
     <div className="App">
      <Form/>
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
   <Namelist/>
    <Stylesheets primary={true}/>
     <h1 className='textDanger'>css file message</h1>
       <h1 className={Style.success}> module content  </h1>
       <Namelist />
     */}
  
 

    </div>
  );

}

export default App;
