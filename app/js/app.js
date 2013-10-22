'use strict';

/* App Module */

var indiaMarketApp = angular.module('indiaMarketApp', [
  'ngRoute',
  'mainControllers'
]);

indiaMarketApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/menu', {
        templateUrl: 'partials/itemslist.html',
        controller: 'ItemListCtrl'
      }).
      when('/orderItems', {
        templateUrl: 'partials/orderpage.html',
        controller: 'ItemOrderCtrl'
      }).
      otherwise({
        redirectTo: '/menu'
      });
  }]);
