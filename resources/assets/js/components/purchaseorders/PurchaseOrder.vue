<template>

<div class="columns" style="margin-left: -4.3rem;">
  <div class="column is-3" style="padding-right: 0px;">
        <purchase_order_table> </purchase_order_table>
  </div>

  <div class="column is-9 po_right_column">
     
  <div style="overflow: hidden;" class="po_header">
   

      <div style="float:left">  <h2 style="padding-left:15px" class="title is-6"> Purchase Order # {{purchaseorder.ponumber}} </h2> </div>
      <div style="float:right">

        <a class="button is-small" v-tooltip.right="'Generate PDF'" >
           <span class="icon"  @click="create_pdf">
               <i class="far fa-file-pdf"></i>
           </span>
         
        </a>
       

        <a class="button is-small" v-tooltip.right="'Delete'">
           <span class="icon"  v-confirm="{ok: delete_po, cancel: doNothing, message: 'Are you sure, you want to delete this purchase order?'}"  >
               <i class="far fa-trash-alt"></i>
           </span>
         
        </a>
        
        <a class="button is-small">
           <span class="icon">
              <i class="fab fa-github"></i>
           </span>
          <span>GitHub</span>
        </a>

        <router-link class="button is-primary is-small" :to="'/purchaseorders/create'" >Create New</router-link>

      </div>
  </div>

   





     <div class="tabs product_navbar" style="margin-bottom: 0.5rem;">
      <ul class="nav nav-tabs ">
        <li class="nav-item">
         <router-link exact class="nav-link"  active-class="active" :to="'/purchaseorders/'+$route.params.id+'/view'">Purchase Order</router-link>

       </li>
       <li class="nav-item">
         <router-link class="nav-link"  active-class="active" :to="'/purchaseorders/'+$route.params.id+'/view/receives'">Receives</router-link>
       </li>
    
       <li class="nav-item">
         <router-link class="nav-link"  active-class="active" :to="'/purchaseorders/'+$route.params.id+'/view/bills'">Bills</router-link>
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
import PurchaseOrderTable from './PurchaseOrderTable.vue'
import ViewPurchaseOrder from './ViewPurchaseOrder.vue'

 export default {
   name:"purchaseorders",
   data () {
    return {
      msg: '',
      purchaseorder:[],
      purchase_order_number:'xxx',
      vendor_id:'',
      keyword:''

    }
  },

  components:{

      purchase_order_table: PurchaseOrderTable,
      hello:ViewPurchaseOrder
  },

  watch: {
    '$route' (to, from) {
         axios.get('api/purchaseorders/get/'+to.params.id)
          .then(response => {
            this.purchaseorder =  response.data.data
          })
          .catch(error => {
            console.log(error);
          });
        }
    },


  mounted () {

   axios.get('api/purchaseorders/get/'+this.$route.params.id)
    .then(response => {
      this.purchaseorder =  response.data.data
      
      
    })
    .catch(error => {
      console.log(error);
    });


  },

  methods:{

     delete_po:function(){
         axios.get('api/purchaseorders/'+this.$route.params.id+"/delete")
          .then(response => {
               this.$notify({
                group: 'foo',
                type: response.data.type,
                title: response.data.title,
                text:  response.data.message
               });
               if(response.data.type=="success")
               this.$router.push("/purchaseorders/all")
          })
          .catch(error => {
            console.log(error);
          });

     
    },

    doNothing:function(){

    },

    create_pdf:function(){
      axios('api/pdf/purchaseorder/'+this.$route.params.id,{
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