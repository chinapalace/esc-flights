const fareportal = require('../services/fareportal');

module.exports = app => {
  app.get('search/flights',
    fareportal.api)
}

app.get(
  '/auth/google/callback',
  passport.authenticate('google'),
  (req, res) => {
    res.redirect('/');
  }
);