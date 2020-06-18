import React,{PureComponent} from 'react'

class purecomp extends PureComponent
{
 render(){
     console.log('purecomponet');
     
     return(
         <div>
     <h1>pure component {this.state.name}</h1>
     </div>
     )
 }
}
 
export  default purecomp
