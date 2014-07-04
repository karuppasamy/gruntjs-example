module.exports = function(grunt) {
	grunt.config.init({
		pkg: grunt.file.readJSON('package.json'),
		copyFiles: {
			options: {
				workingDirectory: 'working',
				mainfest: [
					'index.html', 'stylesheets/style.css', 'javascripts/app.js'
				]
			}
		}
	});

	grunt.registerTask('createFolder', 'Create the working folder', function() {
		grunt.config.requires('copyFiles.options.workingDirectory');

		grunt.file.mkdir(grunt.config.get('copyFiles.options.workingDirectory'));
	});

	grunt.registerTask('clean', 'Deletes the working folder and its contents', function() {
		grunt.config.requires('copyFiles.options.workingDirectory');

		grunt.file.delete(grunt.config.get('copyFiles.options.workingDirectory'));
	});

	grunt.registerTask('copyFiles', 'Copy files to the working folder', function() {
		var files, workingDirectory;

		grunt.config.requires('copyFiles.options.mainfest');
		grunt.config.requires('copyFiles.options.workingDirectory');

		files = grunt.config.get('copyFiles.options.mainfest');
		workingDirectory = grunt.config.get('copyFiles.options.workingDirectory');

		files.forEach(function(file) {
			var destination = workingDirectory + '/' + file;
			grunt.log.writeln('Copying ' + file + ' to ' + destination);
			grunt.file.copy(file, destination);
		});

		var content = '<%= pkg.name %> version <%= pkg.version %>';
		content = grunt.template.process(content);
		grunt.file.write(workingDirectory + '/version.txt', content);
		grunt.log.writeln('Version file is created');

	});

	grunt.registerTask('deploy', 'Deploy files', ['clean', 'createFolder', 'copyFiles']);
}