require('./bootstrap');
import { createApp } from 'vue';
import App from './components/App.vue';
import router from './router'


createApp(App).use(router).mount("#app");


// window.Vue = require('vue').default;

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);


// const app = new Vue({
//     el: '#app',
//     router,

// });

