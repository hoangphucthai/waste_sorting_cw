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

exports.create_an_item = (req, res) => {
    const newItem = new Vocab(req.body);
    newChallenge.save((err, item) => {
        if(err) res.send(err);
        res.json(item);
    });
};

exports.read_an_item = (req, res) => {
    Item.findById(
        req.prams.itemId,
        (err, item) => {
            if(err) res.send(err);
            res.json(item);
        }
    );
};


exports.update_an_item = (req, res) => {
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

exports.delete_an_item = (req, res) => {
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

exports.add_item_to_category = (req, res) => {
    const itemId = req.params.itemId;
    const newCategory = req.body.category;

    Item.findByIdAndUpdate(
        itemId,
        {category: newCategory},
        {new: true},
        (err, req) => {
            if(err) res.send(err);
            res.json(item);
        }
    );

};

exports.remove_item_from_category = (req, res) => {
    const itemId = req.params.itemId;

    Item.findByIdAndUpdate(
        itemId,
        {category: 'none'},
        {new: true},
        (err, req) => {
            if(err) res.send(err);
            res.json(item);
        }
    );

};