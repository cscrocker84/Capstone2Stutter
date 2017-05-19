'use strict'

const { json } = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')
const { connect } = require('./database/database')
const session = require('express-session')//REDISSTUFF
const RedisStore = require('connect-redis')(session)//REDISSTUFF
const bcrypt =require('bcrypt')
const app = express()
const PORT = process.env.PORT || 3000

const {quoteSchema, Zookeeper, Animal} = require('./models/models.js')

app.use(express.static('client'))

app.use(json())

app.use(session({//REDISSTUFF
  'store': new RedisStore({
    url: process.env.REDIS_URL || 'redis://localhost:6379'
  }),
  'secret': 'supersecretkey' //fine to put this on github
}))
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST,HEAD, OPTIONS,PUT, DELETE, PATCH");
  next();
});

const HTML5_EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const User = mongoose.model('User', {
  email: {
    type: String,
    lowercase: true,
    required: true,
    match: [HTML5_EMAIL_REGEX, 'Please enter a valid email address'],
    index: { unique: true },
  },
  password: String
})

app.post(`/api/register`, ({body: {email, password}}, res) => {
      console.log("hitting the register api route")
      return new Promise((resolve, reject) => {
      bcrypt.hash(password, 15, (err, hash) => {
              if (err) {
                reject(err)
              } else {
                resolve(hash)
              }
            })
          })
      .then(hash => User.create({ email, password: hash }))
      // .then(() => res.redirect('/#!/login'))
      .catch(console.error)
})


const quoteSchema = {
    quote: String,
    author: String,
    date: Date,
}
