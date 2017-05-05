angular.module('mainApp')
    .controller('resultscontroller', function($scope, $rootScope, $routeParams) {
    $rootScope.section = 'results'
    var itemSearch = $routeParams.city
    $scope.city = itemSearch
    
    
  })