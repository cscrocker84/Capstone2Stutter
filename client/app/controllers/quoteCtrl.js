app.controller('quoteCtrl', function($scope, $location, quoteFactory) {
  // use quoteid to name file
  // $scope.newQuote = () => {
    // get user
    // new quote
  const popPage = () => {
    quoteFactory.getAll()
    .then((quotes) => {
      $scope.quotes = quotes.quote
      $scope.$apply()
    })
    // put response.data.name (postkey) onto the post
  }

  // $('#postModal').modal({
  //   dismissible: true, // Modal can be dismissed by clicking outside of the modal
  //   opacity: .3, // Opacity of modal background
  //   inDuration: 700, // Transition in duration
  //   outDuration: 700, // Transition out duration
  //   startingTop: '0%', // Starting top style attribute
  //   endingTop: '20%', // Ending top style attribute
  //   ready: function(modal, trigger) {} // Callback for Modal open. Modal and trigger parameters available.

  //     // console.log(modal, }
  //   // complete: function() { console.log('Closed'); } // Callback for Modal close
  // })
})
