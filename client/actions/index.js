import request from 'superagent'
import { getWeatherApi } from '../api'

export const GOT_WEATHER = 'GOT_WEATHER'

export function gotWeather(weather) {

  return {
    type: 'GOT_WEATHER',
    weather: weather.consolidated_weather,

  }
}

export function getWeather() {
  return (dispatch) => {
    getWeatherApi()
      .then(weather => {
        
        return dispatch(gotWeather(weather))
      })
  }
}
