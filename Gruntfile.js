'use strict';

module.exports = (grunt) => {
    grunt.initConfig({
        jshint: {
            files: ['app/js/**/*.js', '!app/js/public/**/*.js', 'Gruntfile.js'],
            options: {
                jshintrc: true
            }
        },
        nodemon: {
            dev: {
                script: 'server.js',
                options: {
                    nodeArgs: ['--debug'],
                    ext: 'js,html',
                }
            }
        },
        concurrent: {
            default: ['nodemon'],
            debug: ['nodemon'],
            options: {
                logConcurrentOutput: true,
                limit: 10
            }
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js'
            },
            unitWithAuto: {
                configFile: 'karma.conf.js',
                singleRun: true
            }
        },
        less: {
            compile: {
                options: {
                    paths: ['app/css']
                },
                files: {
                    'app/css/main.layout.css': 'app/css/main.less'
                }
            },
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-karma');

    //Default task (start server)
    grunt.registerTask('default', ['less:compile', 'concurrent:default']);

    //Check the syntax
    grunt.registerTask('lint', ['jshint']);

    //Run unit-tests
     grunt.registerTask('tests', ['karma:unitWithAuto']);

     //Compile Styles less
     grunt.registerTask('less-compile', ['less:compile'])
};
