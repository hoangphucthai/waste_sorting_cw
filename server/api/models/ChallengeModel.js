const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WasteSchema = new Schema(
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
    {collection: 'challenge'}
)