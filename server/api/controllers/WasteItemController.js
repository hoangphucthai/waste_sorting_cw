const mongoose = require('mongoose');
const Item = mongoose.model('Item')

exports.list_all_items = (req, res) => {
    Item.find(
        {},
        (err, items) => {
            if(err) res.send(err);
            res.json(items);
        }
    );
};

exports.create_a_item = (req, res) => {
    const newItem = new Vocab(req.body);
    newChallenge.save((err, item) => {
        if(err) res.send(err);
        res.json(item);
    });
};

exports.read_a_item = (req, res) => {
    Item.findById(
        req.prams.itemId,
        (err, item) => {
            if(err) res.send(err);
            res.json(item);
        }
    );
};


exports.update_a_item = (req, res) => {
    Item.findOneAndUpdate(
        {_id: req.params.itemId},
        req.body,
        {new: true},
        (err, item) => {
            if(err) res.send(err);
            res.json(item);
        }
    );
};

exports.delete_a_item = (req, res) => {
    Item.deleteOne(
        {_id: req.params.itemId},
        err => {
            if (err) res.send(err);
            res.json({
                message: 'Item successfully deleted',
                _id: req.params.itemId
            });
        }
    );
};