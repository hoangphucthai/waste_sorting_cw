const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        name: {
            type: String,
            required: 'Name cannot be blank'
        },
        email: {
            type: String,
            required: 'Email cannot be blank'
        },
        password: {
            type: String,
            required: 'Password cannot be blank'
        },
        wasteScore: {
            type: Int32Array,
            default: 0
        },
    },
    {collation: 'user'}
)