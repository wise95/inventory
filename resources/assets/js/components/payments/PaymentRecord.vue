<template>

<section>
  <div class="columns" style="margin-left:-2.7rem;padding-top: 13px;margin-bottom: 13px;">
<div class="toolbar">

     <div class="tool_strip">
         <h2 class="title is-6">Record Payment </h2>
     </div>

     
     
     <div>
        <a class="button is-primary is-small" @click="create_new" >Save</a>
        <router-link class="button is-primary is-small" :to="'/purchaseorders/create'" >Create New</router-link>
        
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

      <div class="column is-3">
              <div class="field">
                <label class="label is-field-title">Payment #</label>

                <div >
                  <label>{{paymentnumber}}</label>
                </div>
             
              </div>

      </div>
      
      


    </div>



    <div class="columns" style="margin-bottom:0px">
    
    

      <div class="column is-3">
              <div class="field">
                <label class="label is-field-title">Invoice Created Date</label>

                <div >
                  <label>{{invoice.created_at}}</label>
                </div>

               
              </div>

      </div>

      <div class="column is-3">
              <div class="field">
                <label class="label is-field-title">Status</label>
                <label>{{invoice.status}}</label>
                </div>
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
              <div class="field">
                <label class="label is-field-title">Amount</label>
                <div class="control">
                  <input class="input is-small" type="text" v-model="amount" v-validate="'required'" name='amount'>
                </div>
              </div>

      </div>

      <div class="column is-3">
              <div class="field">
                <label class="label is-field-title">Reference#</label>
                 <div class="control">
                  <input class="input is-small" type="text" v-model="reference" name='reference'>
                </div>
                </div>
            

      </div>


        <div class="column is-3">
              <div class="field">
                <label class="label is-field-title">Payment Method</label>
                 <div class="control">
                  <input class="input is-small" type="text" v-model="paymentmethod" name='paymentmethod'>
                </div>
                </div>
            

      </div>



       <div class="column is-3">
              <div class="field">
                <label class="label is-field-title">Created Date</label>
                <div class="control">
                  
                   <datepicker :format="'yyyy-MM-dd'" :input-class="'input is-small'" name="created_date" v-model="created_date"></datepicker>
                   
                </div>

                
              </div>

      </div>

    </div>





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
    amount: {
      required: () => 'Your name is empty'
    }
  }
};

Validator.localize('en', dict);


 export default {
   name:"purchaseorders",
   data () {
    return {
      
   invoice:'',
   created_date:'',
   reference:'',
   amount:'',
   paymentmethod:'',
   paymentnumber:'',


    }
  },

  components:{
     
      Datepicker
  },

  

  

mounted () {

   
    axios.get('api/invoices/'+this.$route.params.id)
      .then(response => {
        this.invoice =  response.data.data
        
     
      })
      .catch(error => {
        console.log(error);
    });

   
     axios.get('api/payments/getnextnumber')
      .then(response => {
        this.paymentnumber =  response.data
        
     
      })
      .catch(error => {
        console.log(error);
    });


    

},
methods:{
  create_new: function(){



     let payload = {
     invoice_id:this.invoice.id,
     amount:this.amount,
     reference:this.reference,
     paymentmethod:this.paymentmethod,
     paymentnumber:this.paymentnumber,
     salesorder_id:this.invoice.salesorder.id,
     
   };


   axios.post('api/payments', payload)
   .then(response =>{ 
        this.$router.push("/invoices/"+this.invoice.id+"/view")
        //console.log(response);
      })
   .catch(function (error) {
    console.log(error);
  });

 },
}

  
 }

</script>