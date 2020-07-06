import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import {Alert, Button} from 'react-bootstrap'
class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: null,
      password: null
    }
    this.inputRef = React.createRef()
  }
  //   login=()=>{
  //    fetch('https://jsonplaceholder.typicode.com/users'+this.state.name).then((response)=>{
  //        response.json().then((result)=>{
  //            console.log(result);
  //            if(result.lenght>0)
  //            {
  //                console.log(this.props.history.push('Welcome'));
  //            }
  //            else{
  //                alert("check log in id or password ")
  //            }
  //            })
  //         })
  //    }
  componentDidMount(){
    this.inputRef.current.focus()
  }

  setData() {
    let data = [{ name: this.state.name, password: this.state.password }]
    localStorage.setItem('name', JSON.stringify(data))
    if (this.state.name == 'bk') {
      this.props.history.push('Welcome')
    }
  }
  render() {
    return (
         <div className=' row align-items-center' style={{height:'90vh'}}>
          <Jumbotron className='col-md-3 mx-auto'>
          <div  ><br /><br />
            <h1 > Log in here !!!</h1><br />
          <div>
                 <input type='text' placeholder="ENTER NAME" className='form-control'
                 ref={this.inputRef}
                  onChange={(event) => { this.setState({ name: event.target.value }) }} />
              </div>  
            <br/>
               <div>
                 <input type="password" placeholder="ENTER PASSWORD " className='form-control'
                   onChange={(event) => { this.setState({ password: event.target.value }) }} />
               </div>
             
            <div className='model-footer'>
            <br/><br />
              <button className="btn btn-light" onClick={() => this.setData()}> LOG IN </button>
            <br/><br />
            </div>
            {/* <Alert variant='warning'> this works</Alert>  this is also one can manage while adding the tag which is just readable*/}
          </div>
          </Jumbotron>
        </div>
      
    )
  }
}

export default Login

