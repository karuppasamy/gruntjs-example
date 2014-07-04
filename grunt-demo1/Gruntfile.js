module.exports = function(grunt){
	grunt.registerTask('default', function() {
		console.log('Hello from Grunt!');
		grunt.log.writeln('Hello from Grunt!');
	})	

	grunt.registerTask('greet', function(name) {
		grunt.log.writeln('Hi there, ' + name);
	})

	grunt.registerTask('addNumbers', function(first, second) {
		if(isNaN(Number(first))) {
			grunt.warn('The first argument must be a Number');
		}

		if(isNaN(Number(second))) {
			grunt.warn('The second argument must be a Number');
		}

		var answer = Number(first) + Number(second);
		grunt.log.writeln(first + ' + ' + second + ' is ' + answer);
	})

	grunt.registerTask('praise', 'Have Grunt say nice things about you.', function() {
		var praise = ["You're awesome!", "You're the best developer ever!"]
		var pick = praise[(Math.floor(Math.random() * praise.length))];
		grunt.log.writeln(pick);
	})

	grunt.registerTask('all', ['default', 'greet:mrblack', 'addNumbers:1:5'])
}