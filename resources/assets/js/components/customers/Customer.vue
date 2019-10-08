<template>

    <div class="columns" style="margin-left: -4.3rem;">
  <div class="column is-3" style="padding-right: 0px;">
        <customer_table> </customer_table>
  </div>

  <div class="column is-9 po_right_column">
     
  <div style="overflow: hidden;" class="po_header">

      <div style="float:left">   <h2 style="padding-left:15px" class="title is-6"> {{customer.firstname}} {{customer.lastname}} </h2> </div>
      <div style="float:right">

       <router-link class="button is-primary is-small" :to="'/customers/create'" >Create New</router-link>
      
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
         <router-link exact class="nav-link"  active-class="active" :to="'/customers/'+$route.params.id+'/view'">Contact Info </router-link>

       </li>

     


       <li class="nav-item">
         <router-link class="nav-link"  active-class="active" :to="'/customers/'+$route.params.id+'/view/salesorders'">Sales Orders</router-link>
       </li>


      <li class="nav-item">
         <router-link exact class="nav-link"  active-class="active" :to="'/customers/'+$route.params.id+'/view/invoices'">Invoices </router-link>

       </li>
    
       <li class="nav-item">
         <router-link class="nav-link"  active-class="active" :to="'/customers/'+$route.params.id+'/view/payments'">Payments</router-link>
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
import CustomerTable from './CustomerTable.vue'

 export default {
   name:"customer",
   data () {
    return {
      customer:''
    }
  },

  components:{

      customer_table: CustomerTable,
     
  },

  watch: {
    '$route' (to, from) {
         axios.get('api/customers/'+to.params.id)
          .then(response => {
            this.customer =  response.data.data
          })
          .catch(error => {
            console.log(error);
          });
        }
    },


  mounted () {

   axios.get('api/customers/'+this.$route.params.id)
    .then(response => {
      this.customer =  response.data.data
      
      
    })
    .catch(error => {
      console.log(error);
    });


  },

 }

</script>