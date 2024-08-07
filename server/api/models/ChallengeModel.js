const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ChallenegSchema = new Schema(
    {
        description: {
            type: String,
            default: 'none'
        },
        level: {
            type: String,
            default: 'easy'
        },
        score: {
            type: Int16Array,
            default: 0
        }
    },
    // specifying a name for the collection
    {collection: 'challenge'}
)

// solidify this Schema as a data model with mongoose and 
// export it from this file
module.exports = mongoose.model('Challenge', ChallenegSchema)