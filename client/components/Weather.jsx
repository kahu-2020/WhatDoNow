import React from 'react'
import {getWeather} from '../actions'

import {connect} from 'react-redux'

class Weather extends React.Component {

  componentDidMount () {
    this.props.dispatch(getWeather())
  }
 
 render() {
  return (
  <div className='app'>

    <p>{this.props.weather.map(weather => <li>{weather}</li>)}</p>

    
    
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
