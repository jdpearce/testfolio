// Karma configuration
// Generated on Tue Feb 14 2017 16:49:01 GMT+0000 (GMT Standard Time)

module.exports = function (config) {
    config.set({
  
      // base path that will be used to resolve all patterns (eg. files, exclude)
      basePath: '',
  
  
      // frameworks to use
      // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
      frameworks: ['jasmine'],
  
  
      // list of files / patterns to load in the browser
      files: [
        'test/index.ts'
      ],
  
  
      // list of files to exclude
      exclude: [
      ],
  
  
      // preprocess matching files before serving them to the browser
      // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
      preprocessors: {
        'test/index.ts': ['webpack', 'sourcemap']
      },
  
      webpack: {
        resolve: {
          extensions: ['.ts', '.js'],
        },
        module: {
          rules: [
            { test: /\.html$/, use: [{ loader: "html-loader" }] },
            { test: /\.tsx?$/, use: [{ loader: "awesome-typescript-loader", query: { inlineSourceMap: true } }] },
            { test: /\.css$/, use: [{ loader: "css-loader" }] },
            { test: /\.scss$/, use: [{ loader: "css-loader!sass-loader" }] },
            { test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/, use: 'file-loader' }
          ]
        },
        devtool: 'inline-source-map'
      },
  
      // Webpack please don't spam the console when running in karma!
      webpackMiddleware: {
        // webpack-dev-middleware configuration
        // i.e.
        noInfo: true,
        // and use stats to turn off verbose output
        stats: {
          // options i.e. 
          chunks: false
        }
      },
  
      // test results reporter to use
      // possible values: 'dots', 'progress'
      // available reporters: https://npmjs.org/browse/keyword/karma-reporter
      reporters: ['progress', 'junit'],
  
  
      // web server port
      port: 9876,
  
  
      // enable / disable colors in the output (reporters and logs)
      colors: true,
  
  
      // level of logging
      // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
      logLevel: config.LOG_INFO,
  
  
      // enable / disable watching file and executing tests whenever any file changes
      autoWatch: true,
  
  
      // start these browsers
      // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
      browsers: ['PhantomJS'],
  
  
      // Continuous Integration mode
      // if true, Karma captures browsers, runs the tests and exits
      singleRun: false,
  
      // Concurrency level
      // how many browser should be started simultaneous
      concurrency: Infinity
    })
  }
  