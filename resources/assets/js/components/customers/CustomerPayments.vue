<template>
<section>

     
<div class="columns" style="padding-top: 13px;margin-bottom: 0px;">
    <table class="table is-fullwidth">
       <thead>
       <tr>
        <th> Date </th>
        <th> Payment #</th>
        <th> Reference #</th>
        <th style="text-align:right;padding-right:40px"> Amount</th>
       </tr>

       </thead>


         <tbody>

              <tr v-for="(payment, index) in payments">
                <td>{{payment.created} </td>
                <td><router-link :to="'/payments/'+payment.id+'/view'" >{ {{payment.paymentno}}</router-link></td>
               
                <td>{{payment.referencenumber}}</td>
                <td style="text-align:right;padding-right:40px">{{(payment.amount)}}</td>
              </tr>
       


         </tbody>
     </table>

</div>

  
</section>
</template>


<script>
import axios from 'axios';
 export default {
   name:"customer_payments",
   data () {
    return {
      msg: '',
      
      payments:[]
    }
  },
  mounted () {

    axios.get('api/customers/'+this.$route.params.id+"/payments")
    .then(response => {
     this.payments =  response.data
    })
    .catch(error => {
      console.log(error);
    });

   

  },

  methods: {

    

  }
 }

</script>