'use strict';

/* Controllers */

var mainControllers = angular.module('mainControllers', []);

phonecatControllers.controller('ItemListCtrl', ['$scope', '$http',
  function ItemListCtrl($scope, $http) {
    $http.get('data/menu.json').success(function(data){
		$scope.menuItems = data;
	});
  }]);

//Commented for the edit menu items
/*phonecatControllers.controller('ItemOrderCtrl', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);*/
