const path = require('path')
const express = require('express')

const weatherRoutes = require('./weather')
const server = express()

server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/v1/weather', weatherRoutes)

module.exports = server
