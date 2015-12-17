var app = angular.module('Loopstir', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider.
      when('/', {
        templateUrl: '/views/home.html',
        controller: 'homeController'
      })
      .otherwise({
        redirectTo: '/views/home.html'
      });

      $locationProvider.html5Mode(true);
  }]);

app.run(function ($rootScope) {

});
