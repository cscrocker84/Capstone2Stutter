'use strict'

app.factory('quoteFactory', ($http) => {
  return {
    getAll: function() {
        return new Promise((resolve, reject) =>{
          $http.get(`http://localhost:3000/api/quotes`)
            .then((data) => {
              resolve(data.data)
            })
        })
      },
    add: function(newQuote) {
      return new Promise((resolve, reject) =>{
        $http.post(`http://localhost:3000/api/quotes`)
          .then((data) => {
            resolve(data.quote)
          })
        })
    },
    delete: function(quote) {
      return new Promise((resolve, reject) => {
        $http.delete(`http://localhost:3000/api/quotes`)
          .then((quote) => {
            resolve()
          })
      })
    },
    update: (quote) => {
      return new Promise((resolve, reject) => {
        $http.patch(`http://localhost:3000/api/updateQuotes`, updateInfo)
        .then((data) => {
          resolve()
        })
        .catch((err) => console.log("err:", err))
      })
  }
}
});
