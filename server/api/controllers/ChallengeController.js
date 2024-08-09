const mongoose = require('mongoose');
const Challenge = mongoose.model('Challenge')

exports.list_all_challenges = (req, res) => {
    Challenge.find(
        {},
        (err, words) => {
            if(err) res.send(err);
            res.json(words);
        }
    );
};

exports.create_a_challenge = (req, res) => {
    const newChallenge = new Vocab(req.body);
    newChallenge.save((err, wor) => {
        if(err) res.send(err);
        res.json(word);
    });
};

exports.read_a_challenge = (req, res) => {
    Challenge.findById(
        req.prams.challengeId,
        (err, word) => {
            if(err) res.send(err);
            res.json(word);
        }
    );
};


exports.update_a_challenge = (req, res) => {
    Challenge.findOneAndUpdate(
        {_id: req.params.challengeId},
        req.body,
        {new: true},
        (err, word) => {
            if(err) res.send(err);
            res.json(word);
        }
    );
};

exports.delete_a_challenge = (req, res) => {
    Challenge.deleteOne(
        {_id: req.params.wordId},
        err => {
            if (err) res.send(err);
            res.json({
                message: 'Challenge successfully deleted',
                _id: req.params.wordId
            });
        }
    );
};