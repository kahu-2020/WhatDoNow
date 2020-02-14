const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const connection = require('knex')(config)

function getActivity(db = connection) {
    return db('activities')
    .select()
}

module.exports = {getActivity}

// route where DB function is actually called and information is responded
// api function that visits that route from the client side and gets data
// action that when dispatched, calls the api function and adds data that is returned into our global state
// mapStateToProps so that we can then access the global state and see the data