import React from 'react'
import {getWeather} from '../api'


const App = () => (
  <div className='app'>
    <button onClick={getWeather}>get weather</button>
  </div>
)

export default App
