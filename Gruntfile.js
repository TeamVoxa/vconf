module.exports = gruntConfig;

function gruntConfig(grunt) {
  var
    pkg = grunt.file.readJSON('package.json'),
    tasks = require('./tasks/grunt');

  grunt.initConfig({
    mochaTest: tasks.mochaTest
  });

  for (var task in pkg.devDependencies) {
    if (task !== 'grunt' && !task.indexOf('grunt')) {
      grunt.loadNpmTasks(task);
    }
  }

  grunt.registerTask('test', [
    'mochaTest'
  ]);
}