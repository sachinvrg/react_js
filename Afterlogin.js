import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Sidemenu from './Sidemenu';
import Notification from './Notification';
import Header from './Header';
import Travellers from './../pages/Travellers';
import TravellerProfile from './../pages/TravellersProfile';
import Home from './../pages/Home';
import Suppliers from './../pages/Suppliers';
import Account from './../pages/Account';
import EditAccount from './../pages/EditAccount';
import {ContextProvider} from './contex'



class Afterlogin extends Component {
    closeNav() {
        document.body.classList.toggle('openNotif');
      }
    openNav() {
        document.body.classList.toggle('openNotif');
      }
    render() {
        return (    
           <ContextProvider.Provider >
            <div className="main-rightwrapper">
                <div className="main-rightwrapper">
                <Sidemenu />
                    <Header  openNav={this.openNav}/>
                    <Notification closeNav={this.closeNav}/>
                <Switch>
                    <Route 
                        path="/travellers" 
                        component={Travellers} 
                    />
                    <Route 
                        path="/travellerProfile" 
                        component={TravellerProfile} 
                    />
                    <Route 
                        path="/suppliers" 
                        component={Suppliers} 
                    />
                    <Route 
                         path="/account" 
                        component={Account} 
                    />
                    <Route
                        path="/editaccount" 
                        component={EditAccount} 
                    />
                    <Route 
                        path="/" 
                        exact 
                        component={Home} 
                    />
                    
                </Switch>
                
            </div>
            </div>
            </ ContextProvider.Provider>
        )
    }
}

export default Afterlogin