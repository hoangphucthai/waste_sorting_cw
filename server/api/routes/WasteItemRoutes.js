// Gotta update the link based on the controller
const itemBuilder = require('../controllers/WasteItemController')

module.exports = app =>{
    app.route('waste-items')
        .get(itemBuilder.list_all_items)
        .post(itemBuilder.create_an_item)

    app.route('waste-items/:itemId')
        .get(itemBuilder.read_an_item)
        .put(itemBuilder.update_an_item)
        .put(itemBuilder.add_item_to_category)
        .put(itemBuilder.remove_item_from_category)
        .delete(itemBuilder.delete_an_item);


}