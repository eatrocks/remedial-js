module.exports = function(grunt) {

    grunt.initConfig({
        execute: {
            //https://npmjs.org/package/grunt-execute
            target: {
                src: ['for.js']
            }
        },
        watch: {
            //http://gruntjs.com/sample-gruntfile
            //https://github.com/gruntjs/grunt-contrib-watch
            files: ['for.js'],
            tasks: ['execute'],
            options: {
                spawn: false
            }
        }
    });

    grunt.loadNpmTasks('grunt-execute');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['execute']);

}