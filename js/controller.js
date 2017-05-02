angular.module('mainApp')
    .controller('searchController', function($scope,$routeProvider, skyscannerService) {

	$scope.cityOriginQuery = 'London'

            $scope.cityOrigin = function() {
                var query = $scope.cityOriginQuery
                skyscannerService.cityOrigin(query)
                    .then(function(response) {
                    	console.log(response)
                    })
            }
})


