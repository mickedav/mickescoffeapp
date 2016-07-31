'use strict';

angular
  .module('App', [
    'ngRoute',
    'ui.bootstrap'

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
