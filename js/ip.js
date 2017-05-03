// $.getJSON("http://freegeoip.net/json/", function (data) {
//     var country = data.country_name;
//     var ip = data.ip;
// });

// $('#ip-response').on('click', function(e) {
//     e.preventDefault()
//     var nameArtist = $('#artist-name').val()
//     var urlGetIP = 'http://freegeoip.net/json/'

//     $.ajax({
//         url: urlGetIP,
//         success: function(data) {
//             var artistsFound = data.artists.items // we create a filter(data.artists.items) we just want items in our array of objects
//             var optionsIp = '<li>Hi</li>' //we'll put all the option artist here

//             artistsFound.forEach(function(artistData) { //now with our array filtered and full of artists searched previously, can create and put the results
//                 optionsArtists += '<option value="' + artistData.id + '">' + artistData.name + '</option>'
//             })

//             $('#artists-selection').html(optionsArtists);
//         }
//     })
//     $('.artists').show();
// })

// angular.module('mainApp')
//     .controller('GetCountry', function($scope, $http) {
//         $http.get('http://ipinfo.io/json')
//         success(function(data) {
//             $scope.location = data;
//             $scope.country = 'fr';
//             if (data.country != 'FR') $scope.country = "en";
//         });
//     })

// jQuery(document).ready(function($) {
//     jQuery.getScript('http://www.geoplugin.net/javascript.gp', function() {
//         var country = geoplugin_countryName();
//         var zone = geoplugin_region();
//         var district = geoplugin_city();
//         console.log("Your location is: " + country + ", " + zone + ", " + district);
//     });
// });

// function geoplugin_city() { return 'Dobroyd Point';} 
// function geoplugin_region() { return 'New South Wales';} 
// function geoplugin_regionCode() { return '02';} 
// function geoplugin_regionName() { return 'New South Wales';} 
// function geoplugin_areaCode() { return '0';} 
// function geoplugin_dmaCode() { return '0';} 
// function geoplugin_countryCode() { return 'AU';} 
// function geoplugin_countryName() { return 'Australia';} 
// function geoplugin_continentCode() { return 'OC';} 
// function geoplugin_latitude() { return '-33.873600';} 
// function geoplugin_longitude() { return '151.144699';} 
// function geoplugin_currencyCode() { return 'AUD';} 
// function geoplugin_currencySymbol() { return '&#36;';} 
// function geoplugin_currencyConverter(amt, symbol) { 
// 	if (!amt) { return false; } 
// 	var converted = amt * 0.9587170632; 
// 	if (converted <0) { return false; } 
// 	if (symbol === false) { return Math.round(converted * 100)/100; } 
// 	else { return '&#36;'+(Math.round(converted * 100)/100);} 
// 	return false; 
// }