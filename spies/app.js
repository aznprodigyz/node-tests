var db = require('./db.js');

module.exports.handleSignUp = (email, password) => {
  //check if email exist
  //save user to database
  db.saveUser({email,password});
  //send welcome email
};
