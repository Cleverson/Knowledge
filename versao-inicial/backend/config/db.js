const config = require('../knexfile')
const knex = require('knex')(config)

// Em produção não é recomendado carregar as migrações no start do programa
knex.migrate.latest([config])
module.exports = knex
