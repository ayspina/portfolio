const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

// Determine how much time it will take to perform the hash 
const SALT_ROUNDS = 6; // anything > 10 will be noticeably long 

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        // Will not allow the same email to sign up twice 
        unique: true,
        // Will delete any space before and after the string 
        trim: true,
        // Not case-sensitive 
        lowercase: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        minLength: 3,
        required: true
    }
}, {
    timestamps: true,
    toJSON: {
        transform: function(doc, ret) {
            delete ret.password;
            return ret;
        }
    }
});

userSchema.pre('save', async function(next) {
    // 'this' is the user doc
    if (!this.isModified('password')) return next();
    // update the password with the computed hash 
    this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
    return next();
});

module.exports = mongoose.model('User', userSchema);