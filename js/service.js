angular.module('mainApp')
    .factory('skyscannerService', function($http) {
        function _getRepos(username) {
        	var apiKey = "sk858097278294566056945278099666"
            var url =  + apiKey 
            return $http.get(url)
        }

        return {
            getDates: _getRepos,
            getInfoProfile: _getInfoProfile
        }
    })
