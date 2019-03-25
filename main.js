const rp = require('request-promise');
const mongoose = require('mongoose');
const User = require('./config/models');
const db = require('./config/keys').mongoURI;
const initUser = require('./initUser');

const imgname = 'alec_profile_pic.jpg';
const firstname = 'Alec';

const info = {
    firstname: 'Alec',
    lastname: 'Mather',
    username: 'aymather',
    bio: 'site creator'
}

initUser(info, imgname);