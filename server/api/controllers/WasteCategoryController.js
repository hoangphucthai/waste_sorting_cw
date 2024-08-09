const mongoose = require('mongoose');
const Category = mongoose.model('Category')

exports.list_all_challenges = (req, res) => {
    Category.find(
        {},
        (err, categories) => {
            if(err) res.send(err);
            res.json(categories);
        }
    );
};

exports.create_a_challenge = (req, res) => {
    const newCategory = new Vocab(req.body);
    newChallenge.save((err, category) => {
        if(err) res.send(err);
        res.json(category);
    });
};

exports.read_a_challenge = (req, res) => {
    Category.findById(
        req.prams.challengeId,
        (err, category) => {
            if(err) res.send(err);
            res.json(category);
        }
    );
};


exports.update_a_challenge = (req, res) => {
    Category.findOneAndUpdate(
        {_id: req.params.challengeId},
        req.body,
        {new: true},
        (err, category) => {
            if(err) res.send(err);
            res.json(category);
        }
    );
};

exports.delete_a_challenge = (req, res) => {
    Category.deleteOne(
        {_id: req.params.challengeId},
        err => {
            if (err) res.send(err);
            res.json({
                message: 'Category successfully deleted',
                _id: req.params.challengeId
            });
        }
    );
};