<template>
   <section>
        <div class="columns">

            <div class="column is-3">  
              <div class="label"> Purchase Order # </div>
              <div class="label_value"> {{purchaseorder.ponumber}} </div>
            </div>
            
            <div class="column is-3">  
              <div class="label">Created Date </div>
              <div class="label_value"> {{purchaseorder.created_date}}</div>
            </div>
 
            <div class="column is-3">  
              <div class="label">Delivery Date </div>
              <div class="label_value">{{purchaseorder.delivery_date}}</div>
            </div>

             <div class="column is-3">  
              <div class="label"> Status</div>
              <div class="label_value"> {{purchaseorder.status}} </div>
            </div>

    </div>

   <div class="columns">

            <div class="column is-3">  
              <div class="label"> Vendor </div>
              <div class="label_value"> {{purchaseorder.vendor}} </div>
            </div>
   </div>

     
      

      <div class="columns">
        <div class="column is-12">

      <table class="table is-fullwidth">
       <thead>
       <tr>
        <th> Product Name </th>
        <th> Unit Price</th>
        <th> Qty</th>
        <th> Amount</th>

       </tr>

       </thead>


         <tbody>

          <tr v-for="(product, index) in purchaseorder.products">
            <td>{{product.name}} </td>
            <td>{{product.unit_price.toFixed(2)}} </td>
            <td>{{product.qty}}  </td>
            <td> {{(product.unit_price*product.qty).toFixed(2)}} </td>
          </tr>

         </tbody>

      </table>
        </div>
      </div>
     

     </section>
 

 
  

</template>


<script>
import axios from 'axios'
import PurchaseOrderTable from './PurchaseOrderTable.vue'

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
    
  }
 }

</script>