'use strict'

const mongoose = require('mongoose');

const MONGODB_URL = `mongodb://bigchuck11:Ohiosucks11@ds131151.mlab.com:31151/stuttercapstone`

mongoose.Promise = Promise;

module.exports.connect = () => mongoose.connect(MONGODB_URL)
