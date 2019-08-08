// External Dependancies
const mongoose = require('mongoose')

const ticketSchema = new mongoose.Schema({
  title: String,
  eventId: String,
  userId: String,
  orginazerUserId: String,
  orginazerName: String,
  eventMetaData: {
    type: Map,
    of: String
  }
})

module.exports = mongoose.model('Ticket', ticketSchema)
