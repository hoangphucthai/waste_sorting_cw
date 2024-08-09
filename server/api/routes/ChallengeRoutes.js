// Gotta update the link based on the controller
const challengeBuilder = require('../controllers/ChallengeController')

module.exports = app =>{
    app.route('/challenges')
        .get(challengeBuilder.list_all_challenges)
        .post(challengeBuilder.create_a_challenge);


    app.route('/challenges/:challengeId')
        .get(challengeBuilder.read_a_challenge)
        .put(challengeBuilder.update_a_challenge)
        .delete(challengeBuilder.delete_a_challenge)



}