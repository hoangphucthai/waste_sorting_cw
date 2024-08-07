const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WasteCategorySchema = new Schema(
    {
        name: {
            type: String,
            required: 'Category name cannot be blank'
        },
        discription: {
            type: String,
        },
        guidline: {
            type: String,
            default: 'None'
        },
        
    },
    {collation: 'wasteCategory'}
)