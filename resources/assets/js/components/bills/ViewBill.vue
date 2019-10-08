<template>

	<div class="columns" style="background-color: #fff">
		 <div class="column is-12">

    
	<div class="columns">
      <div class="column is-3">
        <div class="label">Purchase Order # </div>
              <div class="label_value"><router-link exact class="nav-link"  :to="'/purchaseorders/'+bill.purchaseorder.id+'/view'">{{bill.ponumber}}</router-link></div>
        </div>

        <div class="column is-3">
        <div class="label">Bill # </div>
              <div class="label_value">{{bill.billnumber}}</div>
        </div>

         <div class="column is-3">
              <div class="label">Bill Created On</div>
              <div class="label_value">{{bill.created_at}}</div>
         </div>

          <div class="column is-3">
              <div class="label">Balance Due</div>
              <div class="label_value">{{balance_due().toFixed(2)}}</div>
         </div>


    </div>

    	<div class="columns">
      <div class="column is-3">
        <div class="label">Vendor</div>
              <div class="label_value">{{vendorInfo.name}}</div>
        </div>

      </div>







	      	<table class="table is-fullwidth">
		        <thead>
		           	<tr>
			            <th>Product Name </th>
			            <th>Received Qty</th>
			            <th>Unit Price</th>
			            <th>Amount </th>
		           	</tr>
		        </thead>
		        <tbody>
			          <tr v-for="(product, index) in bill.products">
			            <td>{{product.name}}</td>
			            <td>{{product.received_qty}}</td>
			            <td>{{product.unit_price}}</td>
			            <td>{{(product.unit_price*product.received_qty).toFixed(2)}}</td>
		          	</tr>

		          	 <tr style="border-bottom-width:0">
                        <td style="border-bottom-width:0"> </td>
                        <td style="border-bottom-width:0"> </td>
                        <td style="border-bottom-width:0" class="label is-field-title">Sub Total </td>
                        <td style="border-bottom-width:0">{{sub_total().toFixed(2)}} </td>

		          	 </tr>

                

                 <tr style="border-bottom-width:0">
                        <td style="border-bottom-width:0"> </td>
                        <td style="border-bottom-width:0"> </td>
                        <td style="border-bottom-width:0;background-color: antiquewhite;" class="table_label is-field-title">Payment Made</td>
                  <td  class="table_label" style="border-bottom-width:0;background-color: antiquewhite;">({{payment_made().toFixed(2)}})  </td>

                 </tr>

                 <tr style="border-bottom-width:0">
                        <td style="border-bottom-width:0"> </td>
                        <td style="border-bottom-width:0"> </td>
                        <td style="border-bottom-width:0" class="label is-field-title">Balance Due</td>
                        <td>{{balance_due().toFixed(2)}} </td>

                 </tr>

		        </tbody>
	        </table>

  		</div>
    </div>

</template>


<script>
import axios from 'axios'
export default {
   name:"purchaseorders",
   
   data () {
    return {
      msg: '',
      bill:[],
      modal_display:false,
      received_products:[],
      vendorInfo:''
    }
  },

  components:{
      
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
      
      axios.get('/api/vendors/'+this.bill.purchaseorder.vendor_id)
      .then(response => {
       this.vendorInfo =  response.data.data
       
      })
    })
    .catch(error => {
      console.log(error);
    });
    
  },

  methods:{
 
   sub_total:function(){
      let sum=0
      this.bill.products.forEach((row, i)=> {
          sum=sum+ row.unit_price*row.received_qty
      })
      return sum;
    },

    payment_made:function(){
      let sum=0
      this.bill.payments.forEach((row, i)=> {
          sum=sum+ row.amount *1.0
      })
      return sum;
    },
    balance_due:function(){
      return this.sub_total()- this.payment_made()
    }
    
  }
 }

</script>