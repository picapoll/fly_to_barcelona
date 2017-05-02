angular.module('mainApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/templates/home.html',
        controller: 'homeController'
      })
      .when('/Resultprice', {
        templateUrl: '/templates/resultprice.html',
        controller: 'searchController'
      })

  })
