import request from 'superagent'

const weatherUrl = '/api/v1/weather'

export function getWeatherApi() {
    return request
    .get(weatherUrl)
    .then(res => res.body)
}