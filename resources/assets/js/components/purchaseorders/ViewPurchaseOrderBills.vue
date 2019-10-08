<template>
      <div class="columns">
        <div class="column is-12">

      <table class="table is-fullwidth">
       <thead>
           <tr>
            <th>Date </th>
            <th>Bill#</th>
            <th>Amount</th>
            <th>Balance Due</th>
            <th> </th>
           </tr>
       </thead>
         <tbody>
          <tr v-for="(row, index) in bills">
            <td>{{row.created_at}}</td>
            <td> <router-link exact class="nav-link"  :to="'/bills/'+row.id+'/view'">{{row.billnumber}}</router-link></td>
            <td>{{row.total}} </td>
            <td>{{row.amount_due.toFixed(2)}} </td>
            <td><a href="javascript:void(0)" v-confirm="{ok: delete_row, cancel: doNothing, message: 'Are you sure, you want to delete this bill?'}" :id="row.id"  > <i  class="far fa-trash-alt"></i></a> </td>
           
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
       bills : [],
       current_row_id : '',
      
    }
  },

  components:{
      
  },

  mounted () {

        axios.get('api/purchaseorders/'+this.$route.params.id+"/bills")
        .then(response => {
          this.bills =  response.data.data
        })
        .catch(error => {
          console.log(error);
        });

 
  },

  methods:{
     
      doNothing:function(){

      },
    
      delete_row:function(dialog){
       this.current_row_id=dialog.node.id
       let payload = {
           id:this.current_row_id
       }

      axios.post('api/purchaseorders/'+this.$route.params.id+'/deletebill', payload)
      .then(response =>{

         this.$notify({
                group: 'foo',
                type:  response.data.type,
                title: response.data.title,
                text:  response.data.message
               });
           
      })

       axios.get('api/purchaseorders/'+this.$route.params.id+"/bills")
        .then(response => {
          this.bills =  response.data.data
        })

      }
    
  }
 }

</script>