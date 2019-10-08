<template>

  <div class="columns" style="margin-left: -4.3rem;">
  <div class="column is-3" style="padding-right: 0px;">
        <sales_order_table> </sales_order_table>
  </div>

  <div class="column is-9 po_right_column">
     
  <div style="overflow: hidden;" class="po_header">

      <div style="float:left">  <h2 style="padding-left:15px" class="title is-6"> Sales Order # {{salesorder.sonumber}} </h2> </div>
      <div style="float:right">


        <a class="button is-small">
           <span class="icon" @click="create_pdf">
               <i class="far fa-file-pdf"></i>
           </span>
         
        </a>
        
        <a class="button is-small">
           <span class="icon">
              <i class="fab fa-github"></i>
           </span>
          <span>GitHub</span>
        </a>

        <router-link class="button is-primary is-small" :to="'/salesorders/create'" >Create New</router-link>

      </div>
  </div>

   





     <div class="tabs product_navbar" style="margin-bottom: 0.5rem;">
      <ul class="nav nav-tabs ">
        <li class="nav-item">
         <router-link exact class="nav-link"  active-class="active" :to="'/salesorders/'+$route.params.id+'/view'">Sales Order</router-link>

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
  

</template>


<script>
import axios from 'axios'
import SalesOrderTable from './SalesOrderTable.vue'


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

    create_pdf:function(){
      axios('api/pdf/salesorder/'+this.$route.params.id,{
        method: 'GET',
      responseType: 'blob' //Force to receive data in a Blob Format
      })
     .then(response => {//Create a Blob from the PDF Stream
      const file = new Blob(
        [response.data], 
        {type: 'application/pdf'});//Build a URL from the file
      const fileURL = URL.createObjectURL(file);//Open the URL on new Window
      window.open(fileURL);})
      .catch(error => {
      console.log(error);
      });
    },
    
  }
 }

</script>