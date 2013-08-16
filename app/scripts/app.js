'use strict';

angular.module('hermajestyamandaApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/hermajesty', {
        templateUrl: 'views/hermajesty.html',
        controller: 'main-control'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'about-control'
      })
      .otherwise({
        redirectTo: '/hermajesty'
      });
  });
