module.exports = function(grunt) {

    grunt.initConfig({
        execute: {
            // execute a file with node
            //https://npmjs.org/package/grunt-execute
            target: {
                //src: ['for.js']
            }
        },
        watch: {
            //http://gruntjs.com/sample-gruntfile
            //https://github.com/gruntjs/grunt-contrib-watch
            files: ['1-types/*.js', '2-control/*.js', '3-operators/*.js',
                    '4-objects/*.js', '5-functions/*.js', '6-scope/*.js',
                    '7-context/*.js',
                    '!6-scope/block.js',
                    '!node_modules/**/*.js'],
            tasks: ['execute'],
            options: {
                spawn: false
            }
        }
    });

    grunt.loadNpmTasks('grunt-execute');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch']);

    // attach a listener to the watch event
    // https://github.com/gruntjs/grunt-contrib-watch
    grunt.event.on('watch', function(action, filepath, target) {
        //grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
        // modify the execute configuration to run the file that changed with node
        // http://stackoverflow.com/questions/17551720/running-grunt-contrib-jshint-only-on-recently-modified-files
        grunt.config(['execute', 'target', 'src'], filepath)
    });

};