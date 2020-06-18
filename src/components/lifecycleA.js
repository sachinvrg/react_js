import React,{Component} from 'react'
import LifecycleB from './LifecycleB';

class lifecycle extends Component
{
    constructor(props){
        super(props)
         this.state={
        name:'krushna'
         }
         console.log('lifecycle A method constructor');
    }
     static getDerivedStateFromProps(props,state){
        console.log('derives state A');
         
        return null
     }
     componentDidMount(){
         console.log('lifecyle A component');
         
     }
     shouldComponentUpdate(){
         console.log('shouldComponentUpdate called A');
         return true
     }
     getSnapshotBeforeUpdate(){
         console.log('getSnapshotBeforeUpdate A');
       return null  
     }
componentDidUpdate(){
    console.log('componentDidUpdate A');
    }
    changestate = () =>{
        this.setState({
            name:'Balkrishna'
        })
    }
 render(){
    console.log('render of A cycle');
     return(
       <div>
           <h1>lifwcyle A</h1>
         <button onClick={this.changestate}>change state</button>
         <LifecycleB/>
     </div>
     )
 }
}
 
export  default lifecycle
