import React,{Component} from 'react'

class Form extends Component
{
    constructor(props){
        super(props)
       this.state={
           Username:'',
           comments:'',
           topic:'React'
       }
    }
    handelusername= (event) =>{
       this.setState({
           Username: event.target.value
       })
    }
    commmenthandler = (event)=>{
        this.setState({
            comments: event.target.value
        })  
    }
    topichandler = (event)=>{
        this.setState({
            topic: event.target.value
        })
    }
    handelsubmit = event =>{
        alert(`${this.state.Username}  ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }
    render(){
        const {Username,comments,topic} = this.state
     return(
         <form onSubmit={this.handelsubmit}>
             <div>
             <label>Username</label>
             <input type='text' value={Username} onChange={this.handelusername}></input>
             </div>
            <div>
                <label>Comments</label>
                    <textarea value={comments}
                           onChange={this.commmenthandler}>
                    </textarea>
            </div>
            <div>
                topic
                <select value={topic}
                        onChange={this.topichandler}>
                            <option value='react'>react</option>
                            <option value='angular'>angular</option>
                            <option value='veu'>veu</option>
                            <option value='express'>express</option>
                </select>
            </div>
            <button type='submit'>Submit</button>
         </form>
     )
 }
}
 
export  default Form
