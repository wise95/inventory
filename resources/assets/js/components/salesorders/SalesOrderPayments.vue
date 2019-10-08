<template>
      <div class="columns">
        <div class="column is-12">

      <table class="table is-fullwidth">
       <thead>
           <tr>
            <th>Date </th>
            <th>Payment#</th>
            <th>Method</th>
            <th>Amount</th>
           </tr>
       </thead>
         <tbody>
          <tr v-for="(row, index) in payments">
            <td>{{row.created_at}}</td>
            <td> <router-link exact class="nav-link"  :to="'/invoices/'+row.id+'/view'">{{row.paymentno}}</router-link></td>
            <td>{{row.paymentmethod}} </td>
            <td>{{row.amount.toFixed(2)}}</td>
           
          </tr>
         </tbody>

      </table>

   
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
       payments : '',
       m_balance:'',
    }
  },

  components:{
      
  },

  mounted () {

        axios.get('api/salesorders/'+this.$route.params.id+"/payments")
        .then(response => {

          this.payments =  response.data.data

          console.log(response.data)
        })
        .catch(error => {
          console.log(error);
        });

 
  },

  methods:{

  
    
  }
 }

</script>