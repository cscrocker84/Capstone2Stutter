'use strict'

app.factory('quoteFactory', ($q, $http) => {

    const profileFactory = {}
    const postedURL = './addUserPost'

  return {
    newPost(link, title) {
      console.log('NEW POST')
      return authFactory.getUser()
        .then((user) => {
          return $http.post(``, {
            uid: user.uid,
            quote: title,
            url: link,
          })
        })
    },
