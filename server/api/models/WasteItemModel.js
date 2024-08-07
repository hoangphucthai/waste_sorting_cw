const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WasteSchema = new Schema(
    // name, email, password, and waste 
    // sorting scores.
    {
        name: {
            type: String,
            required: 'Name cannot be blank'
        },
        category: {
            type: String,
            default: 'none'
        },
        instruction: {
            type: String,
            default: 'none'
        },
        
    },

    {collection: 'wasteItem'}
)