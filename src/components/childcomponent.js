import React from 'react'

function childcomponet(props){
 return(
        <div>
          <button onClick={()=>props.greethandler('child ')}>greet parent</button>
        </div>
    )
}

export default childcomponet    