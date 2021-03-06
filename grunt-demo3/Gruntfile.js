module.exports = function(grunt) {
  grunt.config.init({
    weather: {
      Madurai: 625001,
      Coimbatore: 641001,
      Chennai: 600001
    }
  });

  grunt.registerMultiTask('weather', 'Fetches Weather', function() {
    var done, http, location, request, requestOptions, zipCode;
    location = this.target;
    zipCode = this.data;

    requestOptions = {
      host: 'api.openweathermap.org',
      path: '/data/2.5/weather?units=imperial&q=' + zipCode,
      port: 80,
      method: 'GET'
    }

    http = require('http');
    done = this.async();

    request = http.request(requestOptions, function(response) {
      var buffer = [];

      response.on('data', function(data){
        buffer.push(data);
      });

      response.on('end', function() {
        var weather = JSON.parse(buffer.join());
        console.log(location + ' : ' + weather.main.temp + ' degrees');
        done();
      });
    });
    request.end();
  });
}