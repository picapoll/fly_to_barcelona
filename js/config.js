angular.module('mainApp')
    .config(function($routeProvider) {
        
        $routeProvider

            .when('/', {
                templateUrl: '/templates/home.html',
                controller: 'homeController'
            })
            .when('/Resultprice/:search:item', {
                templateUrl: '/templates/resultsprice.html',
                controller: 'searchController'
            })
    })
