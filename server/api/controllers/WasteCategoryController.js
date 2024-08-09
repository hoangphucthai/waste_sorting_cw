const mongoose = require('mongoose');
const Category = mongoose.model('Category')

exports.list_all_categories = (req, res) => {
    Category.find(
        {},
        (err, categories) => {
            if(err) res.send(err);
            res.json(categories);
        }
    );
};

exports.create_a_category = (req, res) => {
    const newCategory = new Vocab(req.body);
    newChallenge.save((err, category) => {
        if(err) res.send(err);
        res.json(category);
    });
};

exports.read_a_category = (req, res) => {
    Category.findById(
        req.prams.categoryId,
        (err, category) => {
            if(err) res.send(err);
            res.json(category);
        }
    );
};


exports.update_a_category = (req, res) => {
    Category.findOneAndUpdate(
        {_id: req.params.categoryId},
        req.body,
        {new: true},
        (err, category) => {
            if(err) res.send(err);
            res.json(category);
        }
    );
};

exports.delete_a_category = (req, res) => {
    Category.deleteOne(
        {_id: req.params.categoryId},
        err => {
            if (err) res.send(err);
            res.json({
                message: 'Category successfully deleted',
                _id: req.params.categoryId
            });
        }
    );
};