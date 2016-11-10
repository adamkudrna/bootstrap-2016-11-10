'use strict';

module.exports = {

  'build-css': [
    'less',
    'postcss',
  ],

  build: [
    'clean',
    'build-css',
    'copy',
  ],

  dev: [
    'build',
    'browserSync',
    'watch',
  ],

  default: [
    'build',
  ],

};
