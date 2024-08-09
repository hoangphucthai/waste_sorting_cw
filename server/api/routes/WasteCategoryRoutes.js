// Gotta update the link based on the controller
const categoryBuilder = require('../controllers/WasteCategoryController')

module.exports = app =>{
    app.route('/waste-categories')
        .get(categoryBuilder.list_all_categories)
        .post(categoryBuilder.create_a_category);

    app.route('/waste-categories/:categoryId')
        .get(categoryBuilder.read_a_category)
        .put(categoryBuilder.update_a_category)
        .delete(categoryBuilder.delete_a_category)



}