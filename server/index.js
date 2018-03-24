/*jshint node:true*/
module.exports = function(app) {

  // Log proxy requests
  var morgan = require('morgan');
  app.use(morgan('dev'));
};
