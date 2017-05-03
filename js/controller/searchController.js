angular.module('mainApp')
  .controller('searchController', function ($scope, amadeusservice) {

   var today = moment().format('YYYY-MM-DD')
   console.log(today)
   // $scope.buget = 500
    $scope.departureDate= today 
    
    $scope.getflights = function (city, departureDate,budget) {
      var city = $scope.city
      var departureDate = $scope.departureDate
      var buget = $scope.buget

      console.log(city)

      amadeusservice.getflightstoBCN($scope.city,$scope.departureDate,$scope.buget)
        .then(function (response) {
            console.log("data arrived!")
            $scope.listflights=response
        })
    }
})


