const path = require('path')
const express = require('express')

const activityRoutes = require('./activities')
const server = express()

server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/v1/activities', activityRoutes)

module.exports = server
