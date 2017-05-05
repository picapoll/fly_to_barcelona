angular.module('mainApp')
    .controller('resultscontroller', function($scope, $rootScope, $routeParams,amadeusservice) {
        $rootScope.section = 'results'
        var citySearch = $routeParams.city
        $scope.city = citySearch
        var budgetSearch = $routeParams.budget
         $scope.budget = budgetSearch

        var today = moment().format('YYYY-MM-DD')
        console.log(today)
        $scope.departureDate = today

        amadeusservice.getflightstoBCN($scope.city, $scope.departureDate, $scope.budget)
            .then(function(response) {
                console.log("data arrived!")
                $rootScope.listflights = response
                console.log($rootScope.listflights)
            })


    })
