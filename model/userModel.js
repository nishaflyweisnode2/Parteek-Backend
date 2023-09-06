const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    typeofMember: {
        type: String,
        enum: ["FAI Employess", "FAI Members"],
    },
    username: {
        type: String,
        // unique: true
    },
    email: {
        type: String,
        // unique: true
    },
    password: {
        type: String,
    },
    mobile: String,
    image: String,
    address1: String,
    address2: String

}, { timestamps: true });

const User = mongoose.model('User', userSchema);


module.exports = User;
