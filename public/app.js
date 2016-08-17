var app = angular.module('Loopstir', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider.
      when('/', {
        templateUrl: '/views/home.html',
        controller: 'homeController'
      })
      .when('/support', {
        templateUrl: '/views/support.html',
        controller: 'supportController'
      })
      .otherwise({
        redirectTo: '/views/home.html'
      });

      $locationProvider.html5Mode(true);
  }]);

app.run(function ($rootScope) {

    $rootScope.debug = false;
    $rootScope.loopstirApiDev = 'http://api.dev.loopstir.com';
    $rootScope.loopstirApiProd = 'http://api.loopstir.com';
});
