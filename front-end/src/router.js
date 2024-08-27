import vue from 'vue';
// Category
import NewCategory from 'views/category/NewCategory.vue';
import EditCategory from 'views/category/EditCategory.vue';
import ShowCategory from 'views/category/ShowCategory.vue';
// challenge
import NewChallenge from 'views/challenge/NewChallenge.vue';
import EditChallenge from 'views/challenge/EditChallenge.vue';
import ShowChallenge from 'views/challenge/ShowChallenge.vue';
// identificate
import Login from 'views/identificate/Login.vue';
import Register from 'views/identificate/Register.vue';
import ShowUser from 'views/identificate/ShowUser.vue';
import EditUser from 'views/identificate/EditUser.vue';
// item
import NewItem from 'views/item/NewItem.vue';
import EditItem from 'views/item/EditItem.vue';
import ShowItem from 'views/item/ShowItem.vue';
// Other
import Welcome from 'views/Welcome.vue';
import WasteManage from 'views/WasteManage.vue';
import MainPage from 'views/MainPage.vue';

import { component } from 'vue/types/umd';

Vue.use(Router);

/* 
NOTE: You need to modify this route if needed
+ All the route below is just basic routes, and there is maybe contain error, so plese check it again
*/
export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    linkActiveClass: 'active',
    routes: [
        // First appear page
        {
            path: '/',
            redirect: '/welcome'
        },
        {
            path: '/welcome',
            name: 'welcome',
            component: Welcome
        },
        {
            path: '/wasteManage',
            name: 'waste-manage',
            component: WasteManage
        },
        {
            path: '/main',
            name: 'main',
            component: MainPage
        },
        // identificate(user)
        {
            path: '/users/login',
            name: 'login',
            component: Login
        },
        
        {
            path: '/users/register',
            name: 'register',
            component: Register
        },
        
        {
            path: '/users/:userId',
            name: 'show-user',
            component: ShowUser
        },
        {
            path: '/users/:userId/edit',
            name: 'edit-user',
            component: EditUser
        },
        // Category 
        {
            path: '/waste-categories/new',
            name: 'new-category',
            component: NewCategory
        },
        
        {
            path: '/waste-categories/:categoryId/edit',
            name: 'edit-category',
            component: EditCategory
        },
        
        {
            path: '/waste-categories/:categoryId',
            name: 'show-category',
            component: ShowCategory
        },
        // Challenge
        {
            path: '/challenges/new',
            name: 'new-challenge',
            component: NewChallenge
        },
        
        {
            path: '/challenges/:challengeId',
            name: 'show-challenge',
            component: ShowChallenge
        },
        
        {
            path: '/challenges/:challengeId/edit',
            name: 'edit-challenge',
            component: EditChallenge
        },
        // Item
        {
            path: '/waste-items/new',
            name: 'mew-item',
            component: NewItem
        },
        {
            path: '/waste-items/:itemId',
            name: 'show-item',
            component: ShowItem
        },
        {
            path: '/waste-items/:itemId/edit',
            name: 'edit-item',
            component: EditItem
        },
        
        
    ]
})