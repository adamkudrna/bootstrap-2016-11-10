'use strict';

module.exports = function (grunt) {

  var options = {

    // External configs
    pkg: grunt.file.readJSON('package.json'),

    // Paths
    paths: {
      src: './',
      dist: './',
      bower: 'bower_components',
      templates: './',
      temp: '.tmp',
    },

    // Development
    devUrl: 'localhost',
  };

  require('time-grunt')(grunt);

  require('load-grunt-config')(grunt, { config: options });

  // See the `grunt/` directory for individual task configurations.
};
