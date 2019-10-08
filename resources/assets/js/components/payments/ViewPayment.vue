<template>

<section>
  <div class="columns" style="margin-left:-2.7rem;padding-top: 13px;margin-bottom: 13px;">
<div class="toolbar">

     <div class="tool_strip">
         <h2 class="title is-6">Payment Receipt</h2>
     </div>

     
     
     <div>
       <a class="button is-small" v-tooltip.right="'Generate PDF'" >
           <span class="icon"  @click="create_pdf">
               <i class="far fa-file-pdf"></i>
           </span>
         
        </a>

        <a class="button is-primary is-small" @click="create_pdf">PDF</a>
        
        
     </div>
     
</div>

</div>

  <div class="columns" style="background-color:#ffffff">
 

  <div class="column is-12" style="margin-left:-2.7rem; background-color:#ffffff;padding-top: 13px;padding-left: 1.5rem;">


    <div class="columns" style="margin-bottom:0px">
    
      <div class="column is-3">
              <div class="field">
                <label class="label is-field-title">Payment #</label>
                <div >
                  <label>{{payment.paymentno}}</label>
                </div>
              </div>

      </div>


     <div class="column is-3">
              <div class="field">
                <label class="label is-field-title">Sales Order #</label>

                <div >
                  <router-link :to="'/salesorders/'+payment.invoice.salesorder.id+'/view'" > {{payment.invoice.salesorder.sonumber}}</a> </router-link>
                  
                </div>
             
              </div>

      </div>
      


    </div>



    <div class="columns" style="margin-bottom:0px">
    
    

      <div class="column is-3">
              <div class="field">
                <label class="label is-field-title">Receipt Created Date</label>

                <div >
                  <label>{{payment.created_at}}</label>
                </div>

               
              </div>

      </div>

      <div class="column is-3">
              <div class="field">
                <label class="label is-field-title">Payment Method</label>
                <label>{{payment.paymentmethod}}</label>
                </div>
            

      </div>



     <div class="column is-3">

       

      </div>




      <div class="column is-3">

  
             

      </div>

      

    </div>






    <div class="columns" style="margin-bottom:0px">
    
      <div class="column is-3">
              <div class="field">
                <label class="label is-field-title">Bill To</label>
              

              <label class="label">{{payment.invoice.salesorder.customer.firstname }}  {{payment.invoice.salesorder.customer.lastname }}</label>

               <label class="label">Phone:   {{payment.invoice.salesorder.customer.phone }}</label>
               <div> <label> {{payment.invoice.salesorder.customer.bill_address}} </label> </div>
              <div> <label> {{payment.invoice.salesorder.customer.bill_city}}  </label> </div>
              <div> <label>{{payment.invoice.salesorder.customer.bill_state}} {{payment.invoice.salesorder.customer.bill_zip}}  </label> </div>
              <div> <label> {{payment.invoice.salesorder.customer.bill_country}} </label> </div>

              </div>

              

      </div>
    </div>

  


     

     

   
      <table class="table is-fullwidth is-bordered" id="grid_table">
       <thead>
       

       <tr>
        
        <th> Invoice #</th>
        <th> Invoice Date</th>
        <th> Invoiced Amount</th>
        <th> Paid Amount</th>
       </tr>

       </thead>


         <tbody>

          <tr >

            <td>  <router-link :to="'/invoices/'+payment.invoice.id+'/view'" >{{payment.invoice.invnumber}}</router-link ></td>
            <td>{{payment.created_at}}</td>
            <td>{{payment.invoice.total.toFixed(2)}}</td>
            <td>{{payment.amount.toFixed(2)}}</td>
            

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



 export default {
   name:"viewpayment",
   data () {
    return {
    
      payment:''



    }
  },

  components:{
     
      Datepicker
  },

  watch: {

    
  },

  

mounted () {
   axios.get('api/payments/get/'+this.$route.params.id)
      .then(response => {
        this.payment =  response.data.data
       
      })
      .catch(error => {
        console.log(error);
    });

},

  methods:{

    create_pdf:function(){


    axios('api/pdf/invoicepayment/'+this.$route.params.id,{
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