import React,{Component} from 'react'

class lifecycleB extends Component
{
    constructor(props){
        super(props)
         this.state={
        name:'krushna'
         }
         console.log('lifecycle B method constructor');
    }
     static getDerivedStateFromProps(props,state){
        console.log('derives state B');
         
        return null
     }
     componentDidMount(){
         console.log('lifecyle B component');
         
     }
     shouldComponentUpdate(){
        console.log('shouldComponentUpdate called B ');
        return true
    }
    getSnapshotBeforeUpdate(){
        console.log('getSnapshotBeforeUpdate B');
        return null
    }
componentDidUpdate(){
   console.log('componentDidUpdateB');
   }

 render(){
    console.log('render of B cycle');
     return(
       <div>
         <h1>lifwcyle B</h1>
     </div>
     )
 }
}
 
export  default lifecycleB
