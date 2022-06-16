const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    resetToken: String,
    resetTokenExp: Date,
    activeToken: String,
    active: Boolean,
});

module.exports = mongoose.model('User', userSchema);
