angular.module('mainApp')
    .controller('resultsController', function($scope, $rootScope, $routeParams) {
    $rootScope.section = 'results'
    var itemSearch = $routeParams.city
    $scope.city = itemSearch
    
    
  })