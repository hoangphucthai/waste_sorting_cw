import vue from 'vue';
import Challenge from 'views/Challenge.vue';
import Login from 'views/Login.vue';
import MainPage from 'views/MainPage.vue';
import New from 'views/New.vue';    
import NewCategory from 'views/NewCategory.vue';
import NewItem from 'views/NewItem.vue';    
import Register from 'views/Register.vue';
import ShowCategory from 'views/ShowCategory.vue';
import ShowItem from 'views/ShowItem.vue';
import User from 'views/User.vue';
import WasteManage from 'views/WasteManage.vue';
import Welcome from 'views/Welcome.vue';
import { component } from 'vue/types/umd';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    linkActiveClass: 'active',
    routes: [
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
            path: '/login',
            name: 'login',
            component: Login
        },
        
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        
        {
            path: '/welcome',
            name: 'welcome',
            component: Welcome
        },
        
        {
            path: '/welcome',
            name: 'welcome',
            component: Welcome
        },
        
        {
            path: '/welcome',
            name: 'welcome',
            component: Welcome
        },
        
        {
            path: '/welcome',
            name: 'welcome',
            component: Welcome
        },
        
        {
            path: '/welcome',
            name: 'welcome',
            component: Welcome
        },
        
        {
            path: '/welcome',
            name: 'welcome',
            component: Welcome
        },
        
        {
            path: '/welcome',
            name: 'welcome',
            component: Welcome
        },
        
        {
            path: '/welcome',
            name: 'welcome',
            component: Welcome
        },
        
        
    ]
})