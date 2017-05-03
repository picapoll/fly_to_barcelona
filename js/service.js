angular.module('mainApp')
    .factory('skyscannerService', function($http) {
        function getCityOrigin(username) {
            var apiKey = "sk858097278294566056945278099666"
            var urlcountry =  'http://partners.api.skyscanner.net/apiservices/geo/v1.0?apikey=' + apiKey
            return $http.get(urlcountry)

        }

        return {
            getCityOrigin: getCityOrigin,
            
        }
    })

