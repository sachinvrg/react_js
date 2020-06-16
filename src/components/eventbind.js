import React,{Component} from 'react'

class eventbind extends Component
{
    constructor(props){
        super(props)
        this.state={
            message:'hello'
        }
        // this.clickhandler = this.clickhandler.bind(this)
    }
    //  clickhandler()
    //  {
    //   this.setState({
    //       message: 'Good bye'
    //   })
    //  }
    clickhandler =()=> {
        
     this.setState({
         message: 'Good bye'
     })
    }
 render(){
     return(
         <div>
             <div>{this.state.message}</div>
            {/* <button onClick={this.clickhandler.bind(this)}>click here</button> */}
            {/* <button onClick={()=>this.clickhandler()}>click here</button> */}
            {/* <button onClick={this.clickhandler}>click here</button> */}
            <button onClick={this.clickhandler.bind(this)}>click here</button>
     </div>
     )
 }
}
 
export  default eventbind
