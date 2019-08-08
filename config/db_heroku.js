process.env.DB_USER = 'svenhoutmeyers'
process.env.DB_PASS = 'fBRkZAnR3JkwuY'

module.exports = {
  url : 'mongodb://' + process.env.DB_USER + ':' + process.env.DB_PASS + '@ds343127.mlab.com:43127/heroku_0hffx6ds'
};
