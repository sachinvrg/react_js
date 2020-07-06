import React, { useState, createContext } from 'react'
export const MainContext = createContext()

export const MovieProvider = props => {

    const [movies, setmovies] = useState([
        {
            name: 'harry potter',
            price: "10$",
            id: 7882
        },
        {
            name: 'Game of throns',
            price: "0$",
            id: 782
        },
        {
            name: 'inceoptins',
            price: "0$",
            id: 782
        }

    ])

    return (

        <MainContext.Provider value={[movies,setmovies]}>
            {props.children}
        </MainContext.Provider>
    )
}


