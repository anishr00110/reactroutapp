import React, { Component } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter,Route } from 'react-router-dom'
import Home from './components/Home'
import List from './components/List'
import Create from './components/Create'



 class App extends Component {
  render() {
    return (
      <BrowserRouter>
       <div className="App">
         <Navbar/>
         <Route path='/home' component={Home}/>
         <Route path='/list' component={List}/>
         <Route path='/create' component={Create}/>

       </div>
     </BrowserRouter>
    );
  }
}

export default App
