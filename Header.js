import React, {Component} from 'react';
import {MainContext} from './contex'

class Header extends Component {
  render(){
      return(
            <div className="box-topheader row">
                <div className="headerSubleft col-md-6">
                <MainContext.Consumer>
                    {(context)=>{
                      return(
                        <h2>{context}</h2>
                      )
                    }}
                </MainContext.Consumer>
     <ol className="breadcrumb">
        <li className="breadcrumb-item"><a href="dashboard.html">{this.props.title}</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
                </ol>
                </div>
                <div className="headerSubright col-md-6">
                <div className="dropdown">
                    <button className="btn notification dropdown-toggle" onClick={this.props.openNav}>
      
                    <span>03</span>
                    
                    </button>
                    {/* <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="/#">Action</a>
                    <a className="dropdown-item" href="/#">Another action</a>
                    <a className="dropdown-item" href="/#">Something else here</a>
                    </div> */}
                </div>

                <div className="dropdown">
                    <button className="btn user-profile dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span>
                        <img src="assets/img/svg/Avatar.png" alt="avatar" className="mCS_img_loaded"/> 
                        <span>Candra Stewart</span> 
                    </span>
                    <span>
                        <img src="assets/img/svg/Combined Shape.svg" alt="menu" className="mCS_img_loaded"/>
                    </span>
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="/#">Action</a>
                    <a className="dropdown-item" href="/#">Another action</a>
                    <a className="dropdown-item" href="/#">Something else here</a>
                    </div>
                </div>
                </div>
            </div>           
        )
    }
}

export default Header