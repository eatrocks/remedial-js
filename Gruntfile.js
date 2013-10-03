module.exports = function(grunt) {

    grunt.initConfig({
        execute: {
            //https://npmjs.org/package/grunt-execute
            target: {
                src: ['for.js']
            }
        },
        watch: {
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