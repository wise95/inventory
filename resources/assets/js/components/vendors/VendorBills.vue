<template>
      

      <table class="table is-fullwidth">
       <thead>
           <tr>
            <th>Date </th>
            <th>Bill#</th>
            <th>Amount</th>
            <th>Balance Due</th>
           </tr>
       </thead>
         <tbody>
          <tr v-for="(row, index) in bills">
            <td>{{row.created_at}}</td>
            <td> <router-link exact class="nav-link"  :to="'/bills/'+row.bill_id+'/view'">{{row.billnumber}}</router-link></td>
            <td>{{row.total}} </td>
            <td>{{row.due_amount}}</td>
           
          </tr>
         </tbody>

      </table>

</template>


<script>
import axios from 'axios'
export default {
   name:"purchaseorder_bill",
   data () {
    return {
       bills : '',
       received : ''
    }
  },

  components:{
      
  },

  mounted () {

        axios.get('api/vendors/'+this.$route.params.id+"/bills")
        .then(response => {
          this.bills =  response.data
        })
        .catch(error => {
          console.log(error);
        });

 
  },

  methods:{
    
  }
 }

</script>