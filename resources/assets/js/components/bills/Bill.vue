<template>

 <div class="columns" style="margin-left: -4.3rem;">
  <div class="column is-3" style="padding-right: 0px;">
        <bill_table> </bill_table>
  </div>

  <div class="column is-9 po_right_column">
     
  <div style="overflow: hidden;" class="po_header">

      <div style="float:left">  <h2 style="padding-left:15px" class="title is-6"> Bill # {{bill.billnumber}} </h2> </div>
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
     isVisible:true,
     
     

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

    console.log(this.$route.name)
    if(this.$route.name=="viewbillpayment"){
      this.isVisible=false
    }else{
      this.isVisible=true
    }


  },

  methods:{

    makepayment:function(){
       
        this.showPyametForm=true;
        this.$router.push("/bills/"+this.$route.params.id+"/view/payments")
    }
    
  }
 }

</script>