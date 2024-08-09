const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.view_user_info = (req, res) => {
    const newUser = new User(req.body);
    newUser.save((err, user) => {
        if(err) res.send(err);
        res.json(user);
    });
};

exports.udpdate_user_info = (req, res) => {
    User.findOneAndUpdate(
        {_id: req.params.userId},
        req.body,
        {new: true},
        (err, user) => {
            if(err) res.send(err);
            res.json(user);
        }
    );
};

exports.delete_user_info = (req, res) => {
    User.deleteOne(
        {_id: req.params.userId},
        err => {
            if (err) res.send(err);
            res.json({
                message: 'User successfully deleted',
                _id: req.params.userId
            });
        }
    );
};

// Still need method for login and register