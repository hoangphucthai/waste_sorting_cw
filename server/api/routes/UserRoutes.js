// Gotta update the link based on the controller
const userBuilder = require('../controllers/UserController')

module.exports = app =>{

    app.route('/users/:userId')
        .get(userBuilder.view_user_info)
        .put(userBuilder.update_user_info)
        .delete(userBuilder.delete_user_info);

    app.route('/users/login')
        .post(userBuilder.user_login);

    app.route('/users/register')
        .post(userBuilder.user_register);

}