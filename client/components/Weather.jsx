import React from 'react'
import {getWeather} from '../actions'

import {connect} from 'react-redux'

class Weather extends React.Component {

  componentDidMount () {
    this.props.dispatch(getWeather())
  }
 
 render() {
  return (
    <div>

    <ul>
          {this.props.weather.map(weather => 
      <li>Cloud Cover: {weather.weather_state_name} <br/>
          Temperature: {weather.the_temp} <br/></li>)}
    </ul>
    
    
    
  </div>
  )
}

}
function mapStateToProps(reduxState) {
  return {
    weather: reduxState.weather
  }
}

export default connect(mapStateToProps)(Weather)
