<template>
     
<div class="columns vld-parent" >

   <loading :active.sync="isLoading" 
        :can-cancel="true" 
        :on-cancel="onCancel"
        :is-full-page="fullPage">
  </loading>


    <table class="table is-fullwidth">
       <thead>
       <tr>
        <th> Date </th>
        <th> Invoice #</th>
        <th> Order #</th>
       
        <th> Status</th>
        <th> Due Date</th>
        <th> Amount</th>
        <th> Balance Due</th>


       </tr>

       </thead>


         <tbody>

                <tr v-for="(invoice, index) in invoices">
                <td>{{invoice.created}} </td>
                <td><router-link :to="'/invoices/'+invoice.id+'/view'" > {{invoice.invnumber}}</a> </router-link></td>
                <td>{{invoice.sonumber}}</td>
               
                <td>{{invoice.status}}</td>
                <td>{{invoice.sonumber}}</td>
                <td>{{formatPrice(invoice.total)}}</td>
                <td>{{formatPrice(invoice.due_amount)}}</td>

              </tr>
       


         </tbody>
     </table>

</div>

  

</template>


<script>
  // Import component
import Loading from 'vue-loading-overlay';
    // Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';

import axios from 'axios';
export default {
   name:"invoicepayment",
   data () {
      return {
         invoices:"",
          isLoading: false,
          fullPage: true,

      }
   },

    components: {
        Loading
    },
    mounted () {
      this.isLoading = true
      axios.get('api/customers/'+this.$route.params.id+"/invoices")
        .then(response => {
          this.isLoading = false;
          this.invoices =  response.data
          console.log(response.data)
        })
        .catch(error => {
          console.log(error);
      });
    },
    methods:{
    
    formatPrice(value) {
        let val = (value/1).toFixed(2).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    }
    

    }
}

</script>