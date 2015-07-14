(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name home.controller:DomaCtrl
   *
   * @description
   *
   */
  angular
    .module('home')
    .controller('DomaCtrl', DomaCtrl);

  function DomaCtrl($scope, $http) {
    $scope.name = "ROBOT";
    $scope.sen = function(){
      $http.post("http://10.80.49.2:8080/go", "2,0").
        success(function() {
          $scope.name = "USPEH";
        }).
        error(function() {
          $scope.name = "NEUSPEH";
        });

    };
  }

}());
