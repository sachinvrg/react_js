import React from 'react'

function Memocomp({name}){
    return(
        <div>
            {name}
        </div>
    )
}

 export default React.memo(Memocomp)