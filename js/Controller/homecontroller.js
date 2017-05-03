angular.module('mainApp')
    .controller('homeController', function($scope, $rootScope, $location) {
        $rootScope.section = 'home'
        $scope.search = function(e) {
            e.preventDefault()

        }
    })
