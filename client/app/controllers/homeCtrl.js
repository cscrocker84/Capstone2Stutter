app.controller('homeCtrl', function($scope, $location, authFactory, postFactory, posts, user) {
    $scope.ShowLikes = function(like) {
        $http.get(`./addQuote`)
        .then(function(saved) {
            console.log('saved', saved)
        })
    }
 //materialize Modals below
  $('#loginButton').click(() => {
    $('#loginModal').modal('open')
  })

  $('.registerButton').click(() => {
    $('#registerModal').modal('open')
  })

  $('#newPost').click(() => {
    $('#postModal').modal('open')
  })
})
