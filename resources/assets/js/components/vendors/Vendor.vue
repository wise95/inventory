<template>

  <div class="columns">
  <div class="column is-4">
        <vendor_table> </vendor_table>
  </div>

  <div class="column is-8 po_right_column">
     
  <div style="overflow: hidden;" class="po_header">

      <div style="float:left">   <h2 style="padding-left:15px" class="title is-6"> {{vendor.name}} </h2> </div>
      <div style="float:right">

       <router-link class="button is-primary is-small" :to="'/vendor/create'" >Create New</router-link>
      
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
         <router-link exact class="nav-link"  active-class="active" :to="'/vendors/'+$route.params.id+'/view'">Contact Info </router-link>

       </li>

     


       <li class="nav-item">
         <router-link class="nav-link"  active-class="active" :to="'/vendors/'+$route.params.id+'/view/purchaseorders'">Purchase Orders</router-link>
       </li>


      <li class="nav-item">
         <router-link exact class="nav-link"  active-class="active" :to="'/vendors/'+$route.params.id+'/view/bills'">Bills </router-link>

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
import VendorTable from './VendorTable.vue'

 export default {
   name:"vendor",
   data () {
    return {
      vendor:''
    }
  },

  components:{

      vendor_table: VendorTable,
     
  },

  watch: {
    '$route' (to, from) {
         axios.get('api/vendors/'+to.params.id)
          .then(response => {
            this.vendor =  response.data.data
          })
          .catch(error => {
            console.log(error);
          });
        }
    },


  mounted () {

   axios.get('api/vendors/'+this.$route.params.id)
    .then(response => {
      this.vendor =  response.data.data
      
      
    })
    .catch(error => {
      console.log(error);
    });


  },

 }

</script>