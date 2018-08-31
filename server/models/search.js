let mongoose = require('mongoose')
let Schema = mongoose.Schema
let schemaName = 'Search'

let schema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  pin: {
    type: String,
    required: true
  }
})


module.exports = mongoose.model(schemaName, schema)