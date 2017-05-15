'use strict'

const mongoose = require('mongoose')

const quoteSchema = {
  quote: String,
  author: String
}
const Quote = mongoose.model('quote', quoteSchema)

const Meetup = mongoose.model('meetup', {
  title: String,
  date: Date,
  location: String
})
const User = mongoose.model('user', {
  email: String,
  password: String
})

module.exports = {quoteSchema, Quote, Meetup, User}
