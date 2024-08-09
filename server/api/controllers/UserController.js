const mongoose = require('mongoose');
const User = mongoose.model('User');

// library for password checking
const bcrypt = require('bcryptjs');

exports.view_user_info = (req, res) => {
    const newUser = new User(req.body);
    newUser.save((err, user) => {
        if(err) res.send(err);
        res.json(user);
    });
};

exports.update_user_info = (req, res) => {
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

exports.user_login = (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
        if (err) res.send(err);
        if (!user) {
            return res.status(404).send('User not found');
        }

        // Check if password matches
        bcrypt.compare(req.body.password, user.password, (err, isMatch) => {
            if (err) res.send(err);
            if (!isMatch) {
                return res.status(401).send('Incorrect password');
            }

            res.json({
                message: 'Login successful',
                user: user
            });
        });
    });
};


exports.user_register = (req, res) => {
    const newUser = new User(req.body);
    // Hash the password before saving
    bcrypt.hash(newUser.password, 10, (err, hash) => {
        if (err) res.send(err);
        newUser.password = hash;

        newUser.save((err, user) => {
            if (err) res.send(err);
            res.json(user);
        });
    });
};