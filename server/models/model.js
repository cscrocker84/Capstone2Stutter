'use strict'

const mongoose = require('mongoose')

const quoteSchema = {
  quote: String,
  author: String
}
const Quote = mongoose.model('quote', quoteSchema)

const meetupSchema = {
  title: String,
  date: Date,
  location: String
}
const Meetup = mongoose.model('meetup', meetupSchema)

const userSchema = {
  email: String,
  password: String
}

const User = mongoose.model('user', userSchema)

module.exports = {Quote, Meetup, User}
