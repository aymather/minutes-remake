const rp = require('request-promise');
const mongoose = require('mongoose');
const User = require('./config/models').User;
const db = require('./config/keys').mongoURI;

console.log(db, User);