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
    <ul className='weather'>
          {this.props.weather.map(weather => {
           return (
      <p>
        DATE:   {new Date(weather.applicable_date).toDateString()}<br/>
        CLOUD COVER:  {weather.weather_state_name} <br/>
        TEMP:   {weather.the_temp} <br/>
      </p>
          )})}
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
