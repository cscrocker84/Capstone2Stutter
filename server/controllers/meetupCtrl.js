'use strict'

const {Meetup} = require('../models/model.js')

// Fetches meetup from database when called
// responds with status code 200 and json of meetup if successful
module.exports.getMeetups = (req, res, next) => {
    Quote.getAll()
        .then(meetups => res.status(200).json({meetup}))
        .catch(error => next(error))
}

module.exports.addMeetup = (req, res, next) => {
    let meetup = req.body
    Meetup.create(meetup)
        .then(meetup => {
            const id = meetup.id
            res.json(meetup)
        })
        .catch(err => next(err))
}
