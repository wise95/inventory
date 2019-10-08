<template>

<section>

  <div class="columns" style="margin-left:-2.7rem;padding-top: 13px;margin-bottom: 13px;">
<div class="toolbar">

     <div class="tool_strip">
         <h2 class="title is-6"> Settings </h2>
     </div>

     
</div>

</div>
 


 <div class="columns" style="margin-left: -4.3rem;">
  <div class="column is-12 po_right_column">

     <div class="tabs product_navbar" style="">
      <ul class="nav nav-tabs " style="margin-left: 20px;">
        <li class="nav-item">
         <router-link exact class="nav-link"  active-class="active" :to="'/setting'">Profile</router-link>

       </li>
       <li class="nav-item">
         <router-link class="nav-link"  active-class="active" :to="'/salesorders/'+$route.params.id+'/view/invoices'">Invoices</router-link>
       </li>
    
       <li class="nav-item">
         <router-link class="nav-link"  active-class="active" :to="'/salesorders/'+$route.params.id+'/view/payments'">Payments</router-link>
       </li>
    
    </ul>

    </div>
      
     
     


        <transition name="fade" mode="out-in">
        <router-view class="view two" ></router-view>
        </transition>

        
 </div>

  </div>

 </div>
</section>

</template>


<script>
import axios from 'axios'
import SalesOrderTable from '../salesorders/SalesOrderTable.vue'


 export default {
   name:"purchaseorders",
   data () {
    return {
      msg: '',
      salesorder:[],
      purchase_order_number:'xxx',
      vendor_id:'',
      keyword:''

    }
  },

  components:{

      sales_order_table: SalesOrderTable,
      
  },

  watch: {
    '$route' (to, from) {
         axios.get('api/salesorders/'+to.params.id)
          .then(response => {
            this.salesorder =  response.data.data

          })
          .catch(error => {
            console.log(error);
          });
        }
    },


  mounted () {

   axios.get('api/salesorders/'+this.$route.params.id)
    .then(response => {
      this.salesorder =  response.data.data
      
      
    })
    .catch(error => {
      console.log(error);
    });


  },

  methods:{
    
  }
 }

</script>