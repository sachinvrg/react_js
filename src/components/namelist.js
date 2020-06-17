import React from 'react'
import Person from './personlist'
function namelist(){
    const names=['krish','vishwas','bk','kannu','kannu']
    const listname=[{name:'bk',age:22,id:1},{name:'vishwas',age:25,id:2}]
    const jsonlist= listname.map(person=><Person key={person.name} person={person}/>)
        
    return(
     <div>
     {
        names.map((name,index) => <h1 key={index}>{index} {name}</h1>)
     }
     <div className='textDanger'>{jsonlist}</div>
     </div>
  )
}

export default namelist