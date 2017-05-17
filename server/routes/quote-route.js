'use strict'

const {Router} = require('express')
const router = Router()

const {getQuotes, addQuote, deleteQuote, updateQuote} = require('../controllers/quoteCtrl')

console.log("quote");

router.get('/quotes', getQuotes)
router.post('/quotes', addQuote)
router.patch('/quotes/', updateQuote)
router.delete('/quotes/', deleteQuote)

module.exports = router
