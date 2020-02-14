const express = require('express')
const request = require('superagent')
const db = require('./db.js')

const router = express.Router()

router.use(express.json())

router.get('/', (req, res) => {
  
  db.getActivity()
    .then(activity => {
      console.log(activity)
    })
})

module.exports = router
