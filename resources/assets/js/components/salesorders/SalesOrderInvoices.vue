<template>
      <div class="columns">
        <div class="column is-12">

      <table class="table is-fullwidth">
       <thead>
           <tr>
            <th>Date </th>
            <th>Invoice#</th>
            <th>Amount</th>
            <th>Balance Due</th>
           </tr>
       </thead>
         <tbody>
          <tr v-for="(row, index) in invoices">
            <td>{{row.created_at}}</td>
            <td> <router-link exact class="nav-link"  :to="'/invoices/'+row.id+'/view'">{{row.invnumber}}</router-link></td>
            <td>{{row.total.toFixed(2)}} </td>
            <td>{{row.total-row.paid_amount}}</td>
           
          </tr>
         </tbody>

      </table>

     <router-link class="button is-primary is-small" :to="'/salesorders/createinvoice/'+this.$route.params.id" >Create New Invoice</router-link>
     </div>
      </div>
     
  

</template>


<script>
import axios from 'axios'
export default {
   name:"purchaseorder_bill",
   data () {
    return {
       bill : '',
       invoices : '',
       m_balance:'',
    }
  },

  components:{
      
  },

  mounted () {

        axios.get('api/salesorders/'+this.$route.params.id)
        .then(response => {
          this.invoices =  response.data.data.invoices
        })
        .catch(error => {
          console.log(error);
        });

 
  },

  methods:{

     
    
  }
 }

</script>