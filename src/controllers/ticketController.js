// External Dependancies
const boom = require('boom')

// Get Data Models
const Ticket = require('../models/Tickets')

// Get all tickets
exports.getTickets = async (req, reply) => {
  try {
    const tickets = await Ticket.find()
    return tickets
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Get single ticket by ID
exports.getSingleTicket = async (req, reply) => {
  try {
    const id = req.params.id
    const ticket = await Ticket.findById(id)
    return ticket
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Add a new ticket
exports.addTicket = async (req, reply) => {
  try {
    const ticket = new Ticket(req.body)
    return ticket.save()
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Update an existing ticket
exports.updateTicket = async (req, reply) => {
  try {
    const id = req.params.id
    const ticket = req.body
    const { ...updateData } = ticket
    const update = await Ticket.findByIdAndUpdate(id, updateData, { new: true })
    return update
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Delete a ticket
exports.deleteTicket = async (req, reply) => {
  try {
    const id = req.params.id
    const ticket = await Ticket.findByIdAndRemove(id)
    return ticket
  } catch (err) {
    throw boom.boomify(err)
  }
}
