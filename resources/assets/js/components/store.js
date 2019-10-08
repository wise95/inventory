import Vuex from  'vuex'
import Vue from 'vue'
import axios from 'axios'
import {router} from '../router.js'

Vue.use(Vuex)

export default new Vuex.Store({

    state: {
        totalTvCount: 10 ,// The TV inventory
        token:localStorage.getItem('access_token') || null,
        products:[],
        query_param:{page:1}
    },

    getters: {

        isLogedIn(state){
            return state.token !=null
        }

    },

    mutations: {
        setToken(state,token){
            state.token =token
        },
        setProducts(state,products){
            state.products=products
        },

        setQueryParam(state,query){
            state.query_param=query
        },

    },
      
    actions: {
        getProducts({dispatch,commit,state}){
        
            axios.defaults.headers.common['Authorization'] = 'Bearer '+ state.token
            return  axios.get('api/products').then((response) => {
                commit('setProducts',response.data.data)
            }).catch((error) => {
                console.log(error)
            })
        
        },

        getProductTable(context, data) {
            return new Promise((resolve, reject) => {
                // Do something here... lets say, a http call using vue-resource
                axios.defaults.headers.common['Authorization'] = 'Bearer '+ context.state.token
                axios.get("api/products?page="+data.page).then(response => {
                    // http success, call the mutator and change something in state
                   

                    resolve(response);  // Let the calling function know that http is done. You may send some data back
                }, error => {
                    // http failed, let the calling function know that action did not work out
                    reject(error);
                })
            })
        },


        getPurchaseOrders(context, data) {
            return new Promise((resolve, reject) => {
                // Do something here... lets say, a http call using vue-resource
                axios.defaults.headers.common['Authorization'] = 'Bearer '+ context.state.token
                axios.get("api/purchaseorders?page="+data.page).then(response => {
                    // http success, call the mutator and change something in state
                   

                    resolve(response);  // Let the calling function know that http is done. You may send some data back
                }, error => {
                    // http failed, let the calling function know that action did not work out
                    reject(error);
                })
            })
        },


        getBills(context, data) {
            return new Promise((resolve, reject) => {
                // Do something here... lets say, a http call using vue-resource
                axios.defaults.headers.common['Authorization'] = 'Bearer '+ context.state.token
                axios.get("api/bills?page="+data.page).then(response => {
                    // http success, call the mutator and change something in state
                   

                    resolve(response);  // Let the calling function know that http is done. You may send some data back
                }, error => {
                    // http failed, let the calling function know that action did not work out
                    reject(error);
                })
            })
        },


        getSalesOrders(context, data) {
            return new Promise((resolve, reject) => {
                // Do something here... lets say, a http call using vue-resource
                axios.defaults.headers.common['Authorization'] = 'Bearer '+ context.state.token
                axios.get("api/salesorders?page="+data.page).then(response => {
                    // http success, call the mutator and change something in state
                   

                    resolve(response);  // Let the calling function know that http is done. You may send some data back
                }, error => {
                    // http failed, let the calling function know that action did not work out
                    reject(error);
                })
            })
        },


        getInvoices(context, data) {
            return new Promise((resolve, reject) => {
                // Do something here... lets say, a http call using vue-resource
                axios.defaults.headers.common['Authorization'] = 'Bearer '+ context.state.token
                axios.get("api/invoices?page="+data.page).then(response => {
                    // http success, call the mutator and change something in state
                   

                    resolve(response);  // Let the calling function know that http is done. You may send some data back
                }, error => {
                    // http failed, let the calling function know that action did not work out
                    reject(error);
                })
            })
        },


        getPayments(context, data) {
            return new Promise((resolve, reject) => {
                // Do something here... lets say, a http call using vue-resource
                axios.defaults.headers.common['Authorization'] = 'Bearer '+ context.state.token
                axios.get("api/payments?page="+data.page).then(response => {
                    // http success, call the mutator and change something in state
                   

                    resolve(response);  // Let the calling function know that http is done. You may send some data back
                }, error => {
                    // http failed, let the calling function know that action did not work out
                    reject(error);
                })
            })
        },

        getCustomers(context, data) {
            return new Promise((resolve, reject) => {
                // Do something here... lets say, a http call using vue-resource
                axios.defaults.headers.common['Authorization'] = 'Bearer '+ context.state.token
                axios.get("api/customers?page="+data.page).then(response => {
                    // http success, call the mutator and change something in state
                   

                    resolve(response);  // Let the calling function know that http is done. You may send some data back
                }, error => {
                    // http failed, let the calling function know that action did not work out
                    reject(error);
                })
            })
        },

        getVendors(context, data) {
            return new Promise((resolve, reject) => {
                // Do something here... lets say, a http call using vue-resource
                axios.defaults.headers.common['Authorization'] = 'Bearer '+ context.state.token
                axios.get("api/vendors?page="+data.page).then(response => {
                    // http success, call the mutator and change something in state
                   

                    resolve(response);  // Let the calling function know that http is done. You may send some data back
                }, error => {
                    // http failed, let the calling function know that action did not work out
                    reject(error);
                })
            })
        },


       // Dashboard

       Dashboard_PurchseOrder_Count(context, data) {
            return new Promise((resolve, reject) => {
                
                axios.defaults.headers.common['Authorization'] = 'Bearer '+ context.state.token
                axios.get("api/vendors?page="+data.page).then(response => {
                    
                    resolve(response);
                }, error => {
                    
                    reject(error);
                })
            })
        },


        action_logout({dispatch,commit,state,getters}){

            if(getters.isLogedIn){
                axios.defaults.headers.common['Authorization'] = 'Bearer '+ state.token
                axios.post('api/user/logout')
                .then(response=>{
                    console.log(response)
                    localStorage.removeItem("access_token")
                    //this.$store.commit('setToken',token)
                    commit('setToken',null)
                    router.push("/login")
                })
                .catch(errors=>{
                    console.log(errors)
                    
                })

            }

        },

        refreshToken(context){

            axios.post('api/user/refresh',{token:context.state.token}).then((response) => {
                console.log("New Token"+response.data.token)
                context.state.token=response.data.token
            }).catch((error) => {
                console.log("error "+error)
            })

        }
    }

})
