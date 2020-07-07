import React, { Component, createContext } from 'react';


export const MainContext = createContext();

 class ContextProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: 'to be changed'
        }
    }  
//  changeTitle = (e) => {
//         this.setState({
//             title:' CHANGE occures '
//         })     
//     }
    render() {                                                                      
        return (
            <MainContext.Provider value={'VALUE is here '}>

            </MainContext.Provider>
        )
    }
}
 export default ContextProvider;


