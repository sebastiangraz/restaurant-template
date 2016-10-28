/* ---------------------------------------
    CONFIG
   --------------------------------------- */

var localConfig = require('./local.config.js');

// Project paths
var src     = './source/';
var vendor  = './source/vendor/';
var dist    = './public/';

var config = {
  styles: {
    source: src+'styles/main.scss',
    dest: dist+'assets/styles/',
    autoprefixer: {
      browsers: ['> 5%', 'last 2 versions'],
      cascade: false
    }
  },

  jshint: {
    source: [
      src+'scripts/**/*.js',
      '!**/vendor/**'
    ]
  },

  images: {
    source: src+'images/**/*',
    dest: dist+'assets/images/'
  },

  modernizr: {
    parameters: {
      options: ['setClasses','html5printshiv','fnBind']
    },
    source: dist+'assets/styles/*.css',
    dest: dist+'assets/scripts'
  },

  server: {
    base: dist,
    port: 9000,
    host: '0.0.0.0'
  },

  clean: {
    all: [
      './.sass-cache',
      dist+'assets/scripts',
      dist+'assets/images',
      dist+'assets/styles'
    ]
  },

  scripts: {
    source: './source/scripts/main.js',
    dest: './public/assets/scripts'
  },

  watch: {
    livereload: dist + '**/*.{js,html,php}',
    styles: src + 'styles/**/*.scss',
    styles_output: dist + '**/*.css',
    images: src + 'images/**/*.*',
    scripts: src + 'scripts/**/*.*'
  }
};

module.exports = Object.assign(config, localConfig);
