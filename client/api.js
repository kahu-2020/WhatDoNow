import request from 'superagent'

const weatherUrl = '/api/v1/weather'

export function getWeatherApi() {
    return request
    .get(weatherUrl)
    .then(res => res.body)
}

const getActivityApi = '/api/v1/activities'

export function getActApi() {
    return request
    .get(getActivityApi)
    .then(res => res.body)
}