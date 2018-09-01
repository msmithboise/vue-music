let mongoose = require('mongoose')
let Schema = mongoose.Schema
let schemaName = 'Song'

let schema = new Schema({
    title: {
        type: String
    },
    artist: {
        type: String
    },
    album: {
        type: String
    }
})

module.exports = mongoose.model(schemaName, schema)