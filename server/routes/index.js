'use strict'

const { Router } = require('express')
const router = Router()

router.use(require('./quote-route'))
router.use(require('./meetup-route'))
router.get('/',function (req,res) {
  res.json ({
    "quotes": "https://zoo-api.herokuapp.com/api/v1/quotes",
    "meetups" : "https://zoo-api.herokuapp.com/api/v1/meetups"
  })
})

module.exports = router;
