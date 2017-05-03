angular.module('mainApp')
  .controller('cityautocompletecontroller', function ($scope, amadeusservice) {

    $scope.getAutocomplete = function (city) {
      var city = $scope.city


      console.log(city)

      amadeusservice.getAutocomplete($scope.city)
        .then(function (response) {
            console.log("data arrived!")
            $scope.listautocomplete=response
        })
    }
})

