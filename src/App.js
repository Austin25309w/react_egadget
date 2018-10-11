import React, { Component } from 'react';
import Router from './Router'
import { NavLink } from 'react-router-dom'


const Navigation = ( props ) => <div>
  <ul style={{border: '1px solid red', borderRadius:'10px'}}>
  <h1 style={{color:'red'}}>eGadget</h1>
    <li><NavLink to= '/'>Home</NavLink></li>
    <li><NavLink to='/cart'>Cart</NavLink></li>
    </ul>
</div>

class App extends Component {
  render() {
    return (
      <div className="page-container">
      <Navigation />
        
        
        <Router />
        
      </div>
    );
  }
}

export default App;
