const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WasteItemSchema = new Schema(
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

    {collection: 'item'}
)

// solidify this Schema as a data model with mongoose and 
// export it from this file
module.exports = mongoose.model('Item', WasteItemSchema)