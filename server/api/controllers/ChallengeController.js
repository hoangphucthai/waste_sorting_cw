const mongoose = require('mongoose');
const Challenge = mongoose.model('Challenge')

exports.list_all_challenges = (req, res) => {
    Challenge.find(
        {},
        (err, challenges) => {
            if(err) res.send(err);
            res.json(challenges);
        }
    );
};

exports.create_a_challenge = (req, res) => {
    const newChallenge = new Challenge(req.body);
    newChallenge.save((err, challenge) => {
        if(err) res.send(err);
        res.json(challenge);
    });
};

exports.read_a_challenge = (req, res) => {
    Challenge.findById(
        req.prams.challengeId,
        (err, challenge) => {
            if(err) res.send(err);
            res.json(challenge);
        }
    );
};


exports.update_a_challenge = (req, res) => {
    Challenge.findOneAndUpdate(
        {_id: req.params.challengeId},
        req.body,
        {new: true},
        (err, challenge) => {
            if(err) res.send(err);
            res.json(challenge);
        }
    );
};

exports.delete_a_challenge = (req, res) => {
    Challenge.deleteOne(
        {_id: req.params.challengeId},
        err => {
            if (err) res.send(err);
            res.json({
                message: 'Challenge successfully deleted',
                _id: req.params.challengeId
            });
        }
    );
};