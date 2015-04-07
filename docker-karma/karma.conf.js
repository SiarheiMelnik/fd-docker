'use strict';

module.exports = function(config) {
    config.set({

        basePath: '',

        frameworks: ['mocha', 'chai'],

        files: [
          'tests/*.js'
        ],

        reporters: ['progress'],

        autoWatch: false,

        colors: true,

        browsers: ['Chrome_without_sandbox'],

        customLaunchers: {
          Chrome_without_sandbox: {
            base: 'Chrome',
            flags: ['--no-sandbox'] // with sandbox it fails under Docker
          }
        },

        singleRun: true,

        browserNoActivityTimeout: 60000,

    });
};
