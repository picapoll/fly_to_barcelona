angular.module('mainApp')
    .controller('resultscontroller', function($scope, $rootScope, $routeParams,amadeusservice) {
        $rootScope.section = 'results'
        var citySearch = $routeParams.city
        $scope.city = citySearch
        var budgetSearch = $routeParams.budget
         $scope.budget = budgetSearch

         $scope.IsHidden = true;
        $scope.ShowHide = function() {
            console.log('!!!!!')
                //If DIV is hidden it will be visible and vice versa.
            $scope.IsHidden = $scope.IsHidden ? false : true;
        }

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
