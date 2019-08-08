const jwt = require('jsonwebtoken');

const fs = require('fs')
const path = require('path')

const fastify = require('fastify')({
  logger: true
})

fastify.decorate('inValidToken', (request, reply) => {
  reply.code(500).type('text/html').send('invalid token')
})

module.exports = (req, res, next) => {
    try {
      var bearerHeader = req.headers['authorization']
      var token
      req.authenticated = false
      if (bearerHeader){
          var bearer = bearerHeader.split(" ")
          token = bearer[1]
          jwt.verify(token, fs.readFileSync(path.join(__dirname, 'shared.crt')), { algorithms: ['RS256'] })
          next()
          }
        } catch (err) {
          console.log(err)
          return fastify.inValidToken(req, res)
        }
}
