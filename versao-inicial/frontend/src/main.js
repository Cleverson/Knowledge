import 'font-awesome/css/font-awesome.css';
import Vue from 'vue';
import App from './App';

import './config/bootstrap';
import './config/msgs';
import store from './config/store';
import router from './config/router';

Vue.config.productionTip = false;

// TEMPORÁRIO!
require('axios').defaults.headers.common['Authorization'] =
    'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkNsZXZlcnNvbiBBZHJpYW5vIGRvcyBTYW50b3MgRGlhcyIsImVtYWlsIjoiY2xldmVyc29uLnMuZGlhc0BnbWFpbC5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNTUxODE2MTQ4LCJleHAiOjE1NTIwNzUzNDh9.xb_kWb9IvGZqY2hVhrBLTTzG7QsQ_jo1Q3onzfp3M98';

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app');
