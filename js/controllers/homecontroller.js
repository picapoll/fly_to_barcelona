angular.module('mainApp')
    .controller('homecontroller', function($scope, $rootScope, $location,amadeusservice) {
        $rootScope.section = 'home'
        var departureDate = moment().format('YYYY-MM-DD')        
        $rootScope.departureDate = departureDate


        $scope.getflights = function(city, departureDate, budget) {
            $location.path('/search/' + $scope.city +'/'+$scope.budget +'/'+ $scope.departureDate)
console.log(departureDate)
            // var city = $scope.city
            // var departureDate = $scope.departureDate
            // var budget = $scope.budget
            // amadeusservice.getflightstoBCN($scope.city, $scope.departureDate, $scope.budget)
            //     .then(function(response) {
            //         console.log("data arrived!")
            //         $rootScope.listflights = response
            //         console.log($rootScope.listflights)
            //     })

        }
    })
