module.exports = function(grunt){

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-open');

  grunt.initConfig({
    compass: {
      dist: {
        options: {
          config: 'config.rb'
        }
      }
    },

    watch: {
      options: {
        livereload: true,
        nospawn: true
      },
      html: {
        files: 'htdocs/*.html',
        tasks: []
      },
      sass: {
        files:'htdocs/sass/{,*/}{,*/}*.{scss,sass}',
        tasks: ['compass']
      },
      jslib: {
        files: 'htdocs/js/*.js',
        tasks: []
      }
    },
    connect: {
      livereload: {
        options: {
          port: 9001,
          base: 'htdocs'
        }
      }
    },
    open: {
      server: {
        path: 'http://localhost:<%= connect.livereload.options.port %>'
      }
    }
  });

  grunt.registerTask('default', ['connect','open','watch','compass']);
};