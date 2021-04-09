const knex = require('knex')
const knexfile = require('./knexfile')
const { Model } = require('objection')

function dbInit () {
    try {
        const dbInit = knex(knexfile.development)
        Model.knex(dbInit)

        console.log('Database Connection Successful')
    } catch (err) {
        console.error(err)
    }
}

module.exports = dbInit