import React,{Component} from 'react'

class usergreeting extends Component
{
    constructor(props){
        super(props)
        this.state ={
            isloggedin:true
        }
    }
   
 render(){
     return this.state.isloggedin && <div>user logged in</div>
    //  return(
    //      this.state.isloggedin ?
    //      <div>welcome bk</div>:
    //      <div>welcome guest</div>
    //  )
    //  let message 
    //  if (this.state.isloggedin) {
    //      message= <div> welcome user</div>
    //  }else{
    //      message=<div> guest log in </div>
    //  }
    //   return(
    //   <div>{message}</div>
    //   )
    //  if(this.state.isloggedin){
    //     return( 
    //           <div> welcome  bk</div>
    //         )
    //  } else{
    //      return(
    //     <div>welcome guest</div>
    //     )
    //  }
    //  return(
    //      <div>
    //  <div>welcome bk</div>
    //  <div>welcome guest</div>
    //  </div>
    //  )
  }
}
 
export  default usergreeting
