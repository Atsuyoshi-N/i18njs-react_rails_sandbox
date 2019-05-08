process.env.NODE_ENV = process.env.NODE_ENV || 'development'
/* rails-erb-loader-dependencies ./../config/locales/ */

const environment = require('./environment')

module.exports = environment.toWebpackConfig()
