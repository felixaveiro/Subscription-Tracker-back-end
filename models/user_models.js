import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name:{
        type: 'string',
        required:[true, 'user name is required'],
        trim: true,
        minlength: 2,
        maxlength: 50,
    },
    email:{
        type: 'string',
        required:[true, 'user email is required'],
        unique: true,
        trim: true,
        lowercase: true,
        match: [/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, 'Please fill a valid email address'],
    },
    password: {
        type: String,
        required: [true, 'User Password is required'],
        minlength: 6,
    },

}, { timestamps: true });
const User = mongoose.model('User', userSchema);


export default User;