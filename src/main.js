import Vue from 'vue';
import VueLocalForage from '../node_modules/vlf/index.js'
//import VueLocalForage from 'vlf'

Vue.use(VueLocalForage);

import App from './App.vue';


const app = new Vue({
    // router,
    render: createEle => createEle(App),
    beforeCreate: function(){
      console.log("started the app");
      // can inhale user data content if passed from server
    }
}).$mount('#App')
