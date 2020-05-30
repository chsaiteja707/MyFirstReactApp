import React, { Component } from 'react';
import './App.css'

import QuickView from './QuickView/QuickView';
import Products from './Products/Products';
import ShowClients from './ShowClients/ShowClients';

class App extends Component{
  render(){
    return (
      <div className="App">
        <h1>This is from App</h1>
        <QuickView />
        <Products />
        <ShowClients />
      </div>
    )
  }
}

export default App; 