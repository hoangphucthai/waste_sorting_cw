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
            type: Number,
            default: 0
        },
    },
    {collection: 'user'}
)

// solidify this Schema as a data model with mongoose and 
// export it from this file
module.exports = mongoose.model('User', UserSchema)