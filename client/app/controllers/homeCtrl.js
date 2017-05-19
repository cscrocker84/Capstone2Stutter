app.controller('homeCtrl', function($scope, $location, quoteFactory){

$scope.editing = false

const popPage = () =>{
  quoteFactory.getAll()
    .then((quotes) => {
      console.log("quotes", quotes);
      $scope.quotes = quotes.quotes,
      console.log("$scope.quotes", $scope.quotes);
      $scope.author = quotes.author,
      $scope.$apply()
    })
}

popPage()

$scope.remove = (quotes) => {
  quoteFactory.remove(quotes)
  .then(() => {
    popPage()
  })
}

$scope.save = (quotes, updateInfo) => {
  quoteFactory.update(quotes, updateInfo)
  .then(() => {
    console.log("updated!!")
    $scope.editing = false;
    popPage()
  })
}



 //materialize Modals below
  // $('#loginButton').click(() => {
  //   $('#loginModal').modal('open')
  // })

  // $('.registerButton').click(() => {
  //   $('#registerModal').modal('open')
  // })

  // $('#newPost').click(() => {
  //   $('#postModal').modal('open')
  // })
})
