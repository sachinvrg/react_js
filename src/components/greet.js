import React from 'react' 


// function greet()
// {
//     return <h1>hello balkrishna</h1>
// }
 const greet = (props) =>{
     console.log(props)
     return (
         <div>
        <h1>hello {props.name} </h1>
        {props.children}
        </div>
     )
 } 

export default greet 