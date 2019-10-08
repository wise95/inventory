<template>


   

    <table class="table is-fullwidth">
       <thead>
       <tr>
        <th> Date </th>
        <th> Prchasae Order #</th>
        
        <th> Staus</th>
        <th> Amount</th>

       </tr>

       </thead>


         <tbody>

                <tr v-for="(purchaseorder, index) in purchaseorders">
                <td>{{purchaseorder.created_at}} </td>
                <td><router-link :to="'/purchaseorders/'+purchaseorder.id+'/view'" > {{purchaseorder.ponumber}}</a> </router-link></td>
                
                <td>{{purchaseorder.status}} </td>
                <td>{{purchaseorder.total}}  </td>

              </tr>
       


         </tbody>
     </table>





</template>


<script>
import axios from 'axios';
 export default {
   name:"purchaseorders",
   data () {
    return {
      msg: '',
      purchaseorders:[]
    }
  },
  mounted () {

 
    axios.get('api/vendors/'+this.$route.params.id+"/purchaseorders")
    .then(response => {
     this.purchaseorders =  response.data.data
    // this.products2 =  response.data.data
    // this.links= response.data.links
    // this.meta= response.data.meta
    //            console.log(this.products)
    })
    .catch(error => {
      console.log(error);
    });


  }
 }

</script>