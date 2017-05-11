const app = angular.module('Stutter', ['ngRoute'])

app.config(['$routeProvider', function($routeProvider){
      $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeCtrl'
      }).when('/add', {
        templateUrl: 'partials/addQuotes.html',
        controller: 'AddQuoteCtrl'
      }).when('/meetups', {
        templateUrl: 'partials/meetups.html',
        controller: 'MeetupCtrl'
      }).when('/login', {
        templateUrl: 'partials/login.html',
        controller: 'LoginCtrl'
      }).otherwise({
        redirectTo: '/'
      })
}])
