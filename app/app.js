'use strict';

angular
  .module('App', [
    'ngRoute',


  ])
  .config(function ($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: "Home/home.html"
    })

      .otherwise({
        redirectTo: '/'
      });

  });
