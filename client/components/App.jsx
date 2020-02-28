import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Weather from './Weather'
import Buttons from './Buttons'
import Activity from './Activity'
import HamMenu from './HamMenu'


class App extends React.Component{
 

  render() {
    return (

    <Router>
      <div>
        <h1 className='header'>I'M GOING TO BE <br />
        WHOLESOME AS FUCK, <br></br> AND DO SOME</h1>
        <Activity />
        <Buttons />
        <Weather />
        <Route path='/hammenu' component={HamMenu} />
      </div>
    </Router>
    )
  }  
}

export default App