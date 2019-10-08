<template>
   <section>
   
     <div class="columns">
        <div class="column is-12">

          <div class="columns">

            <div class="column is-3">  
              <div class="label"> Sales Order # </div>
              <div class="label_value"> {{salesorder.sonumber}} </div>
            </div>

             

            <div class="column is-3">  
              <div class="label">Status </div>
              <div class="label_value">{{salesorder.status }}</div>
            </div>
 
            <div class="column is-3">  
              <div class="label">Created Date </div>
              <div class="label_value">{{salesorder.order_date}}</div>
            </div>

             <div class="column is-3">  
              <div class="label"> Shipment Date </div>
              <div class="label_value"> {{salesorder.shipment_date}} </div>
            </div>




          </div>

          <div class="columns">

           

            <div class="column is-3">  
              <div class="label">Customer </div>
              <div class="label_value">{{salesorder.customer.firstname }}  {{salesorder.customer.lastname }}</div>
            </div>


          </div>




       

        

         
          <div class="columns">
            <div class="column is-3">
              <div class="label">Billing Address</div>
              <div class="label_value"> {{salesorder.customer.bill_address}}  </div>
              <div class="label_value"> {{salesorder.customer.bill_city}} </div>
              <div class="label_value"> {{salesorder.customer.bill_state}} {{salesorder.customer.bill_zip}}</div>
              <div class="label_value"> {{salesorder.customer.bill_country}} </div>

            </div>

             <div class="column is-3">
               <div class="label">Shipping Address</div>
               <div class="label_value"> {{salesorder.customer.ship_address}} </div>
               <div class="label_value"> {{salesorder.customer.ship_city}}  </div>
               <div class="label_value"> {{salesorder.customer.ship_state}} {{salesorder.customer.ship_zip}}  </div>
               <div class="label_value"> {{salesorder.customer.ship_country}} </div>



            </div>


          </div>




        </div>
  
    </div>



     
      

      <div class="columns">
        <div class="column is-12">

      <table class="table is-fullwidth">
       <thead>
       <tr style="background-color: #f9f9f9;">
        <th> Product Name </th>
        <th> Unit Price</th>
        <th> Qty</th>
        <th  style="text-align:right;padding-right:30px"> Amount</th>

       </tr>

       </thead>


         <tbody>

          <tr v-for="(product, index) in salesorder.products">
            <td>{{product.name}} </td>
            <td>{{product.unit_price}} </td>
            <td>{{product.qty}}  </td>
            <td style="text-align:right;padding-right:30px"> {{(product.unit_price*product.qty).toFixed(2)}} </td>
          </tr>

          <tr style="border-bottom-width:0">
            <td style="border:none"> </td>
            <td style="border:none"> </td>
            <td style="border:none" class="label is-field-title">Sub Total </td>
            <td style="border:none;text-align:right;padding-right:30px">{{sub_total().toFixed(2)}} </td>
          </tr>

          <tr style="border-bottom-width:0">
            <td style="border:none"> </td>
            <td style="border:none"> </td>
            <td style="border:none" class="label is-field-title">{{salesorder.tax_code }} - {{salesorder.tax_percentage}}% </td>
            <td style="border:none;text-align:right;padding-right:30px">{{(sub_total()*salesorder.tax_percentage/100).toFixed(2)}} </td>
          </tr>

            <tr style="border-bottom-width:0">
            <td style="border:none"> </td>
            <td style="border:none"> </td>
            <td style="border:none" class="label is-field-title">Discount </td>
            <td class="right-align" style="border:none;padding-right:30px">({{calculate_discount().toFixed(2)}}) </td>
          </tr>



                
          <tr style="border:none">
            <td style="border:none"> </td>
            <td style="border:none"> </td>
            <td style="border:none;background-color: antiquewhite;" class="title is-6">Total</td>
            <td  class="title is-6" style="border:none;background-color:antiquewhite;padding-right:30px;text-align:right">
              

              {{total().toFixed(2)}}
            </td>

          </tr>

         </tbody>

      </table>
        </div>
      </div>
     

     </section>
 

 
  

</template>


<script>
import axios from 'axios'

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

    sub_total:function(){
      let sum=0
      this.salesorder.products.forEach((row, i)=> {
          sum=sum+ row.unit_price*row.qty
      })

      return sum;

    },
    calculate_discount:function(){
      if(this.salesorder.discount_type=='d'){
          return Number(this.salesorder.discount);
      }

      if(this.salesorder.discount_type=='p'){
        return this.salesorder.discount/100*( Number(this.sub_total()) +Number(this.sub_total())* Number(this.salesorder.tax_percentage/100))
      }
   

    },

    total:function(){
      return Number(this.sub_total()) - Number(this.calculate_discount()) + (Number(this.sub_total()) * this.salesorder.tax_percentage/100);
    }
    
  }
 }

</script>

<style>
.right-align{
  text-align:right;
  padding-right: 20px;
}

</style>