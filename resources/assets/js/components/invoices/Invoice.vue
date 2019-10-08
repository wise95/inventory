<template>

  <div class="columns">
  <div class="column is-4">
        <bill_table> </bill_table>
  </div>

  <div class="column is-8 po_right_column">
     
  <div style="overflow: hidden;" class="po_header">

      <div style="float:left">  <h3> Bill # {{bill.billnumber}} </h3> </div>
      <div style="float:right">


      
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
         <router-link exact class="nav-link"  active-class="active" :to="'/bills/'+$route.params.id+'/view'">Bill </router-link>

       </li>
       <li class="nav-item">
         <router-link class="nav-link"  active-class="active" :to="'/bills/'+$route.params.id+'/view/payments'">Payments</router-link>
       </li>
    
       <li class="nav-item">
         <router-link class="nav-link"  active-class="active" :to="'/bills/'+$route.params.id+'/view/history'">History</router-link>
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
import BillTable from './BillTable.vue'
import ViewPurchaseOrder from '../purchaseorders/ViewPurchaseOrder.vue'

 export default {
   name:"bill",
   data () {
    return {
      msg: '',
      bill:[],
      purchase_order_number:'xxx',
      vendor_id:'',
      keyword:'',
     }
  },

  components:{

      bill_table: BillTable,
      hello:ViewPurchaseOrder
  },

  watch: {
    '$route' (to, from) {
         axios.get('/api/bills/get/'+to.params.id)
          .then(response => {
            this.bill =  response.data.data
          })
          .catch(error => {
            console.log(error);
          });
        }
    },


  mounted () {

   axios.get('/api/bills/get/'+this.$route.params.id)
    .then(response => {
      this.bill =  response.data.data
      
      
    })
    .catch(error => {
      console.log(error);
    });


  },

  methods:{

    makepayment:function(){
       
        this.showPyametForm=true;
        this.$router.push("/bills/"+this.$route.params.id+"/view/payments")
    }
    
  }
 }

</script>