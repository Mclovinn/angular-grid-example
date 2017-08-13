'use strict';

module.exports = (config) => {
    config.set({
        basePath: './',
        frameworks: ['jasmine'],
        files: [
            'app/js/public/angular/angular.min.js',
            'app/js/public/angular-route/angular-route.min.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'app/js/public/angular-bootstrap-/ui-bootstrap.min.js',
            'app/js/public/angular-bootstrap/ui-bootstrap-tpls.js',
            'app/js/public/angulargrid/angulargrid.min.js',
            'app/js/public/ng-lodash/build/ng-lodash.min.js',
            'app/js/app.js',
            'app/js/config.js',
            'app/js/controllers/*.js',
            'app/js/services/*.js',
            'unit-test/services/*.js',
            'unit-test/controllers/*.js'
        ],
        preprocessors: {
            'app/js/app.js' : ['coverage'],
            'app/js/config.js' : ['coverage'],
            'app/js/controllers/*.js' : ['coverage'],
            'app/js/services/*.js': ['coverage']
        },
        reporters: ['progress', 'junit', 'coverage'],
        colors: true,
        autoWatch: true,
        browsers: ['Firefox', 'Chrome'],
        plugins : [
            'karma-firefox-launcher',
            'karma-chrome-launcher',
            'karma-junit-reporter',
            'karma-jasmine',
            'karma-coverage'
            ],
        singleRun: true,
        junitReporter : {
            outputFile: 'test_out/result_test.xml',
            suite: 'unit'
        },
        coverageReporter: {
            dir : 'coverage/',
            reporters: [
                { type: 'cobertura', subdir: '.', file: 'coverage.txt' },
                { type: 'html', subdir: 'report-html' },
            ]
        }
    });
};
