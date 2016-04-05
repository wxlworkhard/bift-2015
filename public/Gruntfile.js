// Generated on 2014-09-02 using generator-angular 0.9.5
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Configurable paths for the application
    var appConfig = {
        app: './',
        dist: './dist'
    };

    // Define the configuration for all the tasks
    grunt.initConfig({

        appConfig: appConfig,

        // Watches files for changes and runs tasks based on the changed files
        watch: {
            // js: {
            //     files: ['<%= appConfig.app %>/scripts/{,*/}*.js'],
            // },
      
            sass: {
                files: ['<%= appConfig.app %>/styles/{,*/}*.{scss,sass}'],
                tasks: ['sass', 'copy:app']
            },
            
            gruntfile: {
                files: ['Gruntfile.js'],
            }
        },

        // Empties folders to start fresh
        clean: {
            app: '.tmp'
        },

        // Run some tasks in parallel to speed up the build process
        concurrent: {
        },

        // Compiles Sass to CSS
        sass: {
            app: {
                options: {
                    compass: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= appConfig.app %>/styles',
                    src: ['*.scss'],
                    dest: '.tmp/styles',
                    ext: '.css'
                }]
            }
        },
    
        cssmin: {
            app: {
                files: {
                    '<%= appConfig.app %>/styles/main.css': [
                        '.tmp/styles/{,*/}*.css'
                    ]
                }
            }
        },

        copy: {
            app: {
                expand: true,
                cwd: '.tmp/styles/',
                src: '*.{css,map}',
                dest: '<%= appConfig.app %>/styles'
            }
        }       
    });


    grunt.registerTask('serve', [
        'clean:app',
        'sass',
        'copy:app',
        'watch'
    ]);

    grunt.registerTask('build', [
        'clean:dist',
        'concurrent:dist',
        'autoprefixer',
        'cssmin',
        'imagemin',
        'copy:dist',
        'devilfish',
        'uglify'
    ]);
};
