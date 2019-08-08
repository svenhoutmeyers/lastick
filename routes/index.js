// Import our Controllers
const ticketController = require('../controllers/ticketController')

const checkAuth = require('../middleware/check-auth')

const routes = [
  {
    method: 'GET',
    url: '/api/tickets',
    handler: ticketController.getTickets
  },
  {
    method: 'GET',
    url: '/api/tickets/:id',
    handler: ticketController.getSingleTicket
  },
  {
    method: 'POST',
    url: '/api/tickets',
    preValidation: checkAuth,
    handler: ticketController.addTicket,
    schema: ticketController.addTicketSchema
  },
  {
    method: 'PUT',
    url: '/api/tickets/:id',
    preValidation: checkAuth,
    handler: ticketController.updateTicket
  },
  {
    method: 'DELETE',
    preValidation: checkAuth,
    url: '/api/tickets/:id',
    handler: ticketController.deleteTicket
  }
]

module.exports = routes
