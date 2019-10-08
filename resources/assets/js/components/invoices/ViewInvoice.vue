<template>

<section>
  <div class="columns" style="margin-left:-2.7rem;padding-top: 13px;margin-bottom: 13px;">
<div class="toolbar">

     <div class="tool_strip">
         <h2 class="title is-6">Invoice Details </h2>
     </div>

     
     
     <div>

        <a class="button is-small" v-tooltip.right="'Generate PDF'" >
           <span class="icon"  @click="create_pdf">
               <i class="far fa-file-pdf"></i>
           </span>
         
        </a>
       
        <router-link class="button is-primary is-small" :to="'/payments/'+invoice.id+'/record'" >Record Payment</router-link>
        
     </div>
     
</div>

</div>

  <div class="columns" style="background-color:#ffffff">
 

  <div class="column is-12" style="margin-left:-2.7rem; background-color:#ffffff;padding-top: 13px;padding-left: 1.5rem;">


    <div class="columns" style="margin-bottom:0px">
    
      <div class="column is-3">
              <div class="field">
                <label class="label is-field-title">Invoice #</label>
                <div >
                  <label>{{invoice.invnumber}}</label>
                </div>
              </div>

      </div>


     <div class="column is-3">
              <div class="field">
                <label class="label is-field-title">Sales Order #</label>

                <div >
                  <router-link :to="'/salesorders/'+invoice.salesorder.id+'/view'" > {{invoice.salesorder.sonumber}}</a> </router-link>
                  
                </div>
             
              </div>

      </div>
      


    </div>



    <div class="columns" style="margin-bottom:0px">
    
    

      <div class="column is-3">
              <div class="field">
                <label class="label is-field-title">Created Date</label>

                <div >
                  <label>{{invoice.created_at}}</label>
                </div>

               
              </div>

      </div>

      <div class="column is-3">
              <div class="field">
                <label class="label is-field-title">Status</label>
                <label> <span class="tag is-warning">{{invoice.status}}</span></label>
                </div>
            

      </div>



     <div class="column is-3">

        <div class="field">
                <label class="label is-field-title">Due Date</label>
                <div >
                  <label>{{invoice.due_date}}</label>
                </div>

              </div>

      </div>




      <div class="column is-3">

        <table class="table is-fullwidth is-bordered" id="grid_table">
       <thead>
       <tr>
        <th> Payment # </th>
       

        <th style="text-align:right"> Amount</th>
      </tr>
         </thead>

         <tr  v-for="(payment, index) in payments" >
          <td><router-link  :to="'/payments/'+payment.id+'/view'" >{{payment.paymentno}}</router-link> </td>
          <td style="text-align:right">
            {{payment.amount.toFixed(2)}} 
            </td>


         </tr>

       </table>
             

      </div>

      

    </div>






    <div class="columns" style="margin-bottom:0px">
    
      <div class="column is-3">
              <div class="field">
                <label class="label is-field-title">Customer</label>
              

              <label class="label">{{invoice.salesorder.customer.firstname }}  {{invoice.salesorder.customer.lastname }}</label>

               <label class="label">Phone:   {{invoice.salesorder.customer.phone }}</label>

              </div>

              

      </div>
    </div>

    <div class="columns" style="margin-bottom:0px">
    
      <div class="column is-3">
         <label class="label is-field-title">Billing Address</label>
              <div> <label> {{invoice.salesorder.customer.bill_address}} </label> </div>
              <div> <label> {{invoice.salesorder.customer.bill_city}}  </label> </div>
              <div> <label>{{invoice.salesorder.customer.bill_state}} {{invoice.salesorder.customer.bill_zip}}  </label> </div>
              <div> <label> {{invoice.salesorder.customer.bill_country}} </label> </div>

      </div>
        
      <div class="column is-3">
          <label class="label is-field-title">Shipping Address</label>
               <div> <label> {{invoice.salesorder.customer.ship_address}} </label> </div>
               <div> <label> {{invoice.salesorder.customer.ship_city}}  </label> </div>
               <div> <label>{{invoice.salesorder.customer.ship_state}} {{invoice.salesorder.customer.ship_zip}}  </label> </div>
               <div> <label> {{invoice.salesorder.customer.ship_country}} </label> </div>
      </div>

    </div>


     

     

   
      <table class="table is-fullwidth is-bordered" id="grid_table">
       <thead>
       <tr>
        <th> Product Name </th>
       

        <th> Unit Price</th>
        <th> Qty</th>
       
        <th style="text-align:right"> Amount</th>
       

       </tr>

       </thead>


         <tbody>

          <tr v-for="(product, index) in product_grid">

            <td>{{product.name}} </td>
            <td>{{product.unit_price.toFixed(2)}} </td>
            <td> <input class="input is-small"   v-model='product_grid[index].invoiced_qty'   /> </td>
            <td style="text-align:right"> {{(product_grid[index].unit_price*product_grid[index].invoiced_qty).toFixed(2)}}</td>
            

          </tr>

      

          <tr style="border-bottom-width:0">
           
           
            <td style="border:none"> </td>
            <td style="border:none"> </td>
            <td style="border:none;" class="label is-field-title">Sub Total </td>
            <td style="border:none; text-align: right;">{{sub_total()}} </td>
          </tr>

          <tr style="border-bottom-width:0">
           
            
            <td style="border:none"> </td>
            <td style="border:none"> </td>
            <td style="border:none" class="label is-field-title">
                <div style="display:flex;justify-content: space-between">
                  <div> Tax </div> 

                  <label> {{invoice.salesorder.tax_percentage }} % </label>
                  
                </div>
             </td>
            <td style="border:none;text-align: right;">{{Number(caculate_tax())}} </td>
          </tr>

           <tr style="border-bottom-width:0">
            
            
            <td style="border:none"> </td>
            <td style="border:none"> </td>
            <td style="border:none" class="label is-field-title">


              <div style="display:flex;justify-content: space-between">
              <div>Discount </div>

              
            

            </div>




             </td>
            <td style="border:none;text-align: right;">({{Number(caculate_discount())}})</td>
          </tr>


                
                 <tr style="border:none">
                        
                        
                        <td style="border:none"> </td>
                        <td style="border:none"> </td>
                        <td style="border:none;background-color: antiquewhite;" class="title is-6">Total</td>
                        <td  class="title is-6" style="border:none;background-color: antiquewhite;text-align: right;">{{total()}}</td>

                 </tr>

                
         </tbody>

      </table>
  </div>

 
    


 </div>

 
</section>  

</template>


<script>
import axios from 'axios'
import Datepicker from 'vuejs-datepicker';
import { Validator } from 'vee-validate';

const dict = {
  custom: {
    sonumber: {
      required: 'Order# is empty'
    },
    name: {
      required: () => 'Your name is empty'
    }
  }
};

Validator.localize('en', dict);

function test(){
  alert('inside test')
}

 export default {
   name:"purchaseorders",
   data () {
    return {
      invoice:[],
      salesorder:[],
      payments:[],
      invnumber:'',
      sonumber:'',
      qty:'', 
      customer_id:'',
      products:[],
      isAddActive:false,
      products:[],
      keyword:'',
      key:'',
      unit_price:'',
      qty:'',
      product_grid:[],
      customers:[],
      customer:'',
      tax_percentage:'',
      created_date:new Date(),
      status:'Created',
      shipment_date:'',
      shipment_date_error:false,
      tax_id:'',
      
      total_tax:'',
      tax_percentage:'',
      discount:'',
      discount_type:'d',
      discount_total:0.00,
      due_date:'',
      due_date_error:false



    }
  },

  components:{
     
      Datepicker
  },

  watch: {

    
  },

  

mounted () {

   
    axios.get('api/invoices/'+this.$route.params.id)
      .then(response => {
        this.invoice =  response.data.data
        console.log(this.$route.params.id);
        

        this.invoice.products.forEach((row, i)=> {
        row.qtynew=row.qty
        this.product_grid.push(row)
        this.payments=this.invoice.payments
        })
      })
      .catch(error => {
        console.log(error);
    });


},

  methods:{


    create_pdf:function(){


    axios('api/pdf/invoice/'+this.$route.params.id,{
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

    sub_total:function(){
      let sum=0
      this.product_grid.forEach((row, i)=> {
          sum=sum+ row.unit_price*row.invoiced_qty
      })
      return sum;
    },

    caculate_tax:function(){
      this.total_tax =(this.sub_total()*this.invoice.salesorder.tax_percentage/100).toFixed(2) 
      return this.total_tax;
    },

    total:function(){
        return (Number(this.sub_total()) + Number(this.caculate_tax())-Number(this.caculate_discount()) )
    },

    caculate_discount:function(){
      if(this.invoice.salesorder.discount_type=='d'){
        this.discount_total= this.invoice.salesorder.discount
        
      }

      if(this.invoice.salesorder.discount_type=='p'){
        this.discount_total= ( Number(this.sub_total()) + Number(this.total_tax))* this.invoice.salesorder.discount/100
        
      }

      return this.discount_total
    }
  }
 }

</script>