angular.module('mainApp')
    .controller('homecontroller', function($scope, $rootScope, $location, amadeusservice) {
        
        $rootScope.section = 'home'
        var departureDate = moment().format('YYYY-MM-DD')
        $rootScope.departureDate = departureDate

        //autocomplete

        //   amadeusservice.autocomplete()
        //       .then(function (city) {
        //             $scope.citys = city
        // })

        $scope.selected = ''
        $scope.citiesAutocomplete = [{
            'value': 'PAR',
            'label': 'Paris [PAR]'
        }, {
            'value': 'CDG',
            'label': 'Paris Charles de Gaulle Airport [CDG]'
        }, {
            'value': 'ORY',
            'label': 'Paris Orly Airport [ORY]'
        }, {
            'value': 'BVA',
            'label': 'Paris - Beauvais–Tillé Airport [BVA]'
        }, {
            'value': 'XCR',
            'label': 'Paris - Châlons Vatry Airport [XCR]'
        }, {
            'value': 'LBG',
            'label': 'Paris–Le Bourget Airport [LBG]'
        }, {
            'value': 'LON',
            'label': 'London [LON]'
        }, {
            'value': 'LHR',
            'label': 'London Heathrow Airport [LHR]'
        }, {
            'value': 'LGW',
            'label': 'London Gatwick Airport [LGW]'
        }, {
            'value': 'STN',
            'label': 'London - Stansted Airport [STN]'
        }, {
            'value': 'LTN',
            'label': 'London - Luton Airport [LTN]'
        }, {
            'value': 'LCY',
            'label': 'London City Airport [LCY]'
        }, {
            'value': 'ELS',
            'label': 'East London Airport [ELS]'
        }, {
            'value': 'YXU',
            'label': 'London International Airport [YXU]'
        }, {
            'value': 'SEN',
            'label': 'London Southend Airport [SEN]'
        }]
    
        $scope.getflights = function() {
            var codeDestination = $scope.selected.value
            var urlSearch = '/search/' + codeDestination + '/' + $scope.budget + '/' + $scope.departureDate
            $location.path(urlSearch)
        }


    })


// amadeusservice.autocomplete()
//     .then(function(response) {
//         console.log("data arrived!")
//         $scope.city = response
//         console.log($scope.city)
//     })
