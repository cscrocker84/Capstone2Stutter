'use strict'

const {Router} = require('express')
const router = Router()

const {getQuotes, addQuote, deleteQuote, updateQuote} = require('../controllers/quoteCtrl')

router.get('/quotes', getQuotes)
router.post('/quotes', addQuotes)
router.patch('/quotes/:id', updateQuotes )
router.delete('/quotes/:id', deleteQuotes)

module.exports = router
