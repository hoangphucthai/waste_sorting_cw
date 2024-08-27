import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'semantic-ui-css/semantic.css';
// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');


/* 
 I added bootstrap here because I wanna use it, you can try to use it too
*/