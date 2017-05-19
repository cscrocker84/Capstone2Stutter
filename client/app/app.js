const app = angular.module('stutter', ['ngRoute'])

app.config(['$routeProvider', function($routeProvider){
      $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'homeCtrl'
      // }).when('/add', {
      //   templateUrl: 'partials/addQuotes.html',
      //   controller: 'AddQuoteCtrl'
      }).when('/meetups', {
        templateUrl: 'partials/meetups.html',
        controller: 'meetupCtrl'
      }).when('/login', {
        templateUrl: 'partials/login.html',
        controller: 'loginCtrl'
      }).otherwise({
        redirectTo: '/'
      })
}])
