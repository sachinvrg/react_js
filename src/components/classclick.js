import React,{Component} from 'react'

class classClick extends Component
{
    clickhandler(){
        console.log('click tthe button');
        
    }
 render(){
     return(
         <div>
     <button onClick={this.clickhandler}>Click me</button>
     </div>
     )
 }
}
 
export  default classClick
