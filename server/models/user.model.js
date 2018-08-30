const mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');


const UserSchema = mongoose.Schema({
	userid: Number,
    firstname: String,
    lastname: String,
    username: String,
    password: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);