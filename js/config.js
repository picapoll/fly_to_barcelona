angular.module('mainApp')
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'templates/home.html',
                controller: 'homecontroller'
            })
            .when('/:search/:city', {
                templateUrl: 'templates/results.html',
                controller: 'resultscontroller'
            })
    })
