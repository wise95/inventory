
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');


import Vue from 'vue'
import App from './App.vue'
import store from './components/store'
import VueRouter from 'vue-router'
import VeeValidate from 'vee-validate';
import config from './config.js';
import Notifications from 'vue-notification'

import LeftNaviBar from './components/LeftNaviBar.vue'
import TopHeader from './components/TopHeader.vue'


import VuejsDialog from "vuejs-dialog"

import 'vuejs-dialog/dist/vuejs-dialog.min.css';
import ProductTable from './components/products/ProductTable.vue'
import PurchaseOrders from './components/purchaseorders/PurchaseOrders.vue'


import AuthorizedClients from './components/passport/AuthorizedClients.vue'
import Clients from './components/passport/Clients.vue'
import PersonalAccessTokens from './components/passport/PersonalAccessTokens.vue'
import TrendChart from "vue-trend-chart"

Vue.use(TrendChart)




import VueAxios from "vue-axios"
Vue.use(VueAxios)

import VueResource from 'vue-resource'
Vue.use(VueResource)

Vue.use(VueRouter)
Vue.use(VeeValidate)
Vue.use(Notifications)
Vue.use(VuejsDialog)

import VTooltip from 'v-tooltip'

Vue.use(VTooltip)







import jQuery from "jquery"
const $ = jQuery
window.$ = $;




import {router} from './router.js'


Vue.component('example-component', require('./components/ExampleComponent.vue'));

var vm = new Vue({
    el: '#root',
    router,store,
    data: {
        msg: "Hello World"
    },
    components:{
     	app: App,
     	product_table: ProductTable,
      purchase_orders : PurchaseOrders,
      left_navi_bar: LeftNaviBar,
      app_header:TopHeader,
      passport_authorized_clients:AuthorizedClients,
      passport_clients:Clients,
      passport_personal_access_tokens:PersonalAccessTokens


    },
    mounted(){
      
    }
    
});

global.vm = vm;

window.Vue = Vue;

export default Vue;