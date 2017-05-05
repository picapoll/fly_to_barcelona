angular.module('mainApp')
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'templates/home.html',
                controller: 'homeController'
            })
            .when('/:search/:city', {
                templateUrl: 'templates/results.html',
                controller: 'resultsController'
            })
    })
