let mongoose = require('mongoose')
let Schema = mongoose.Schema
let schemaName = 'Playlist'

let schema = new Schema({
    name: {
        type: String
    }
})

module.exports = mongoose.model(schemaName, schema)