import React,{Component} from 'react'
import Regcomp from '../Regcomp';
import Purecomp from './purecomponent';
import MemoComponent from './MemoComponent';

class Parentcomp extends Component
{
 constructor(props){
     super(props)
     this.state={
         name:'balkrishna'
     }
 }
 componentDidMount(){  
     setInterval(() => {
         this.setState({
             name:'balkrishna'
         })
     }, 2000);
 }   
 render(){
     console.log('parentComponet render');
     
     return(
         <div>
     Parent  component{ this.state.name}
     <MemoComponent/>
     {/* <Regcomp name={this.state.name}></Regcomp>
     <Purecomp name={this.state.name}></Purecomp> */}
     </div>
     )
 }
}
 
export  default Parentcomp
