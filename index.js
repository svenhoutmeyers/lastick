const fs = require('fs')
const path = require('path')

// Require the fastify framework and instantiate it
const fastify = require('fastify')({
  logger: true,
  https: {
    key: fs.readFileSync(path.join(__dirname, '.', 'https', 'ssl.key')),
    cert: fs.readFileSync(path.join(__dirname, '.', 'https', 'ssl.crt'))
  }
})

// Require external modules
const mongoose = require('mongoose')

// Import Routes
const routes = require('./routes')

// Import Swagger Options
const swagger = require('./config/swagger')

// Import DB Connection
const db = require('./config/db_heroku');

// Register Swagger
fastify.register(require('fastify-swagger'), swagger.options)

process.env.JWT_KEY = 'WV3-4xDQxXkvYGJulC8Y5XOjL0HNV09B4xfHeoGTM4RQhU9fp5eAaGRe6cAtEybH';

// Connect to DB
mongoose.connect(db.url)
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err))

// Loop over each route
routes.forEach((route, index) => {
  fastify.route(route)
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen(process.env.PORT || 3000, '0.0.0.0')
    fastify.swagger()
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
