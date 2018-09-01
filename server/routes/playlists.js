let router = require('express').Router()
let Playlists = require('../models/playlist')

//routes.. get post put delete...
router.get('/', (req, res, next) => {
    Playlists.find({})
    .then(playlists => res.send(playlists))
    .catch(next)
})

router.post('/', (req, res, next ) => {
    Playlists.create(req.body)
    .then(playlist => {
        res.send(playlist)
    }) .catch(next)
})

router.put('/:id',(req, res, next) => {
    Playlists.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.send({
        message: 'Success'
    }))
    .catch(next)
})

router.delete('/:id', (req, res, next) => {
    Playlists.findByIdAndRemove(req.params.id)
    .then(() => res.send ({
        message: 'It worked'
    })) .catch(next)
})  

router.put

module.exports = router