import React,{PureComponent} from 'react'
import Regcomp from '../Regcomp';
import Purecomp from './purecomponent';

class Parentcomp extends PureComponent
{
 constructor(props){
     super(props)
     this.state={
         name:'balkrishna'
     }
 }
//  componentDidMount(){  
//      setInterval(() => {
//          this.setState({
//              name:'balkrishna'
//          })
//      }, 200);
//  }   
 render(){
     console.log('parentComponet render');
     
     return(
         <div>
     Parent  component{ this.state.name}
     <Regcomp name={this.state.name}></Regcomp>
     <Purecomp name={this.state.name}></Purecomp>
     </div>
     )
 }
}
 
export  default Parentcomp
