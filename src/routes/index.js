// Import our Controllers
const ticketController = require('../controllers/ticketController')

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
    handler: ticketController.addTicket,
    schema: ticketController.addTicketSchema
  },
  {
    method: 'PUT',
    url: '/api/tickets/:id',
    handler: ticketController.updateTicket
  },
  {
    method: 'DELETE',
    url: '/api/tickets/:id',
    handler: ticketController.deleteTicket
  }
]

module.exports = routes
