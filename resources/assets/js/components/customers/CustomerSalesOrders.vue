<template>
<section>
    <table class="table is-fullwidth">
       <thead>
       <tr>
        <th> Date </th>
        <th> Sales Order #</th>
        <th> Staus</th>
        <th style="text-align:right;padding-right:40px"> Amount</th>

       </tr>

       </thead>


         <tbody>

              <tr v-for="(so, index) in salesorders">
                <td>{{so.order_date}} </td>
                <td><router-link :to="'/salesorders/'+so.id+'/view'" > {{so.sonumber}}</a> </router-link></td>
                <td>{{so.status}}</td>
                <td style="text-align:right;padding-right:40px">{{so.total.toFixed(2)}}</td>
              </tr>
       


         </tbody>
     </table>

</div>

  
</section>
</template>


<script>
import axios from 'axios';



 export default {
   name:"customer_salesorders",
   data () {
    return {
      msg: '',
      salesorders:[]
    }
  },
  mounted () {

    axios.get('api/customers/'+this.$route.params.id+"/salesorders")
    .then(response => {
     this.salesorders =  response.data.data
    })
    .catch(error => {
      console.log(error);
    });


  },

  methods: {

  }
 }

</script>