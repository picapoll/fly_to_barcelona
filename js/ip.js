// $.getJSON("http://freegeoip.net/json/", function (data) {
//     var country = data.country_name;
//     var ip = data.ip;
// });

function GetCountry($scope, $http) {
    $http.get('http://ipinfo.io/json').
    success(function(data) {
        $scope.location = data;
        $scope.country = 'fr';
        if (data.country != 'FR') $scope.country = "en";
    });
}
