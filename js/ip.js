$.getJSON("http://freegeoip.net/json/", function (data) {
    var country = data.country_name;
    var ip = data.ip;
});