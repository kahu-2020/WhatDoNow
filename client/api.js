import request from 'superagent'

const weatherUrl = '/api/v1/weather'

export function getWeather() {
    return request
    .get(weatherUrl)
    .then(res => res.body)
    .then(body => console.log(body))
}