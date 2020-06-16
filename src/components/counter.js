import React,{Component} from 'react'

class counter extends Component
{
    constructor(){
        super()
        this.state = {
            count:0
        }
    }
    increment(){
    //     this.setState({
    //         count: this.state.count + 1
    //     },()=>{console.log(this.state.count);   })
    //  }
    this.setState(prevstate =>({
      count: prevstate.count + 1
    }))
}
     incrementfive(){
         this.increment()
         this.increment()
         this.increment()
         this.increment()
         this.increment()
         
     }
 render(){
     return(
         <div>
             count -{this.state.count} <br></br>
             <button onClick={()=>{this.incrementfive()}}>inncrement</button>
         </div>
     )
 }
}
 
export  default counter