<template>

  <div class="columns" style="margin-left: -4.3rem;">
  <div class="column is-3" style="padding-right: 0px;">
        <product_table> </product_table>
  </div>

  <div class="column is-9 po_right_column">
     
  <div style="overflow: hidden;" class="po_header">

      <div style="float:left">   <h2 style="padding-left:15px" class="title is-6">  Product # {{product.sku}} </h2> </div>
      <div style="float:right">

       <router-link class="button is-primary is-small" :to="'/products/create'" >Create New</router-link>
      
        <a class="button is-small">
           <span class="icon">
               <i class="far fa-file-pdf"></i>
           </span>
         
        </a>
        
        <a class="button is-small">
           <span class="icon">
              <i class="fab fa-github"></i>
           </span>
          <span>GitHub</span>
        </a>

       
      </div>
  </div>

   





     <div class="tabs product_navbar" style="margin-bottom: 0.5rem;" >
      <ul class="nav nav-tabs ">
        <li class="nav-item">
         <router-link exact class="nav-link"   :class="$route.name === 'product.info' && 'active'"    :to="{path:'/products/'+$route.params.id+'/view',query:query_param}">Product Info </router-link>

       </li>
       <li class="nav-item">
         <router-link class="nav-link"  active-class="active" :to="{path:'/products/'+$route.params.id+'/view/vendor',query:query_param}">Vendor</router-link>
       </li>
    
       <li class="nav-item">
         <router-link class="nav-link"  active-class="active" :to="'/products/'+$route.params.id+'/view/history'">History</router-link>
       </li>
    
    </ul>

    </div>
      
     
     


        <transition name="fade" mode="out-in">
        <router-view class="view two"   ></router-view>
        </transition>

        
 </div>

  </div>

 </div>
  

</template>


<script>
import axios from 'axios'
import ProductTable from './ProductTable.vue'

 export default {
   name:"product",
   data () {
    return {
      product:''
    }
  },

  computed: {
    query_param () {
      return this.$store.state.query_param
    }
  },

  components:{

      product_table: ProductTable,
     
  },

  watch: {
    '$route' (to, from) {
         axios.get('api/products/'+to.params.id)
          .then(response => {
            this.product =  response.data.data
          })
          .catch(error => {
            console.log(error);
          });
        }
    },


  mounted () {

    

  axios.get('api/products/'+this.$route.params.id)
    .then(response => {
      this.product =  response.data.data
    })
    .catch(error => {
      console.log(error);
    });
  },

 }

</script>