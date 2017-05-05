angular.module('mainApp')
    .controller('resultscontroller', function($scope, $rootScope, $routeParams,amadeusservice) {
        $rootScope.section = 'results'
        var citySearch = $routeParams.city
        $scope.city = citySearch
        var budgetSearch = $routeParams.budget
         $scope.budget = budgetSearch

        var departureDate = moment().format('YYYY-MM-DD')        
        var dateSearch = $routeParams.departureDate
        $scope.departureDate = departureDate

        console.log(citySearch)
        console.log(budgetSearch)
        console.log(departureDate)

        amadeusservice.getflightstoBCN($scope.city, $scope.departureDate, $scope.budget)
            .then(function(response) {
                console.log("data arrived!")
                $rootScope.listflights = response
                console.log($rootScope.listflights)
            })


    })
