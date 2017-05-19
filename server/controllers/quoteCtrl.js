'use strict'

const {Quote} = require('../models/model.js')

// Fetches quotes from database when called
// responds with status code 200 and json of quotes if successful
module.exports.getQuotes = (req, res, next) => {
    Quote.find()
        .then(quotes => res.status(200).json({quotes}))
        .catch(error => next(error))
}

module.exports.addQuote = (req, res, next) => {
    let quote = req.body
    Quote.create(quote)
        .then(quote => {
            const id = quote.id
            res.json(quote)
        })
        .catch(err => next(err))
}

module.exports.deleteQuote = (req, res, next) => {
  console.log("req.params.id");
    Quote.findOneAndRemove({_id:req.params.id})
        .then(quote => res.status(200).json({msg: 'successful deletion'}))
        .catch(err => next(err))
}

module.exports.updateQuote = (req,res,next) =>{
  let quote = req.body
  console.log("body",quote);
  Quote.update(quote)
  .then(quote => res.status(200).json(quote))
  .catch(err => next(err))
}
