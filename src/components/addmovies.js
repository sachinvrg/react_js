import React, { useState } from'react'

const Addmovies= ()=>{
    const [name,setName] = useState('')
    const [price,setPrice] = useState('')


     const updateName = (e)=>{
       setName(e.target.value)
     }
     const updatePrice = (e)=>{
        setPrice(e.target.value)
      }

        return(
            <form>
                <input name='name' type="text" value={name} onChange={updateName}/>
                <input name='price' type="text" onChange={updatePrice}/>
                <button> Submit </button>
            </form>
        )
}
 export default Addmovies