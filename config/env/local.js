'use strict';

// Rename this file to local.js for having a local configuration variables that
// will not get commited and pushed to remote repositories.
// Use it for your API keys, passwords, etc.

/* For example:
*/
module.exports = {
  db: {
	//   
    //uri: 'mongodb://group5b:group5b@ds031872.mongolab.com:31872/bnshape_db',
	uri: 'mongodb://jthakore:passw0rd@ds033915.mongolab.com:33915/bookie',
    options: {
      user: '',
      pass: ''
    }
  },
};