const mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');


const UserSchema = mongoose.Schema({
<<<<<<< HEAD
=======
	userid: Number,
>>>>>>> 1de99c9... all commited!
    firstname: String,
    lastname: String,
    username: String,
    password: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);