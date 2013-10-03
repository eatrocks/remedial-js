module.exports = function(grunt) {

    grunt.initConfig({
        execute: {
            //https://npmjs.org/package/grunt-execute
            target: {
                src: ['for.js']
            }
        }
    });

    grunt.loadNpmTasks('grunt-execute');

}