'use strict'

app.factory('quoteFactory', ($q, $http) => {

    const profileFactory = {}
    const postedURL = './addUserPost'

  return {
    newQuote(quote, author) {
      console.log('NEW POST')
      (quote) => {
          return $http.post(``, {
            quote: quote,
            author: author
          })
        }
    },

  getQuotes() {
      return $http.get(``)
        .then(res => res.data)
    },
