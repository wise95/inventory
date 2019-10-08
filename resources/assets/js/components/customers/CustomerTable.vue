<template>

 <div>



   <nav class="panel">
   
    <div class="panel-block">
      <p class="control has-icons-left">
        <input class="input is-small" type="text" placeholder="search" v-model='keyword' v-on:input="onTextChange">
        <span class="icon is-small is-left">
          <i class="fas fa-search" aria-hidden="true"></i>
        </span>
      </p>
    </div>
    <p class="panel-tabs">
      

    </p>

   


    <router-link  class="nav-link panel-block"  v-for="(customer, index) in customers"  active-class="is-active" :to="'/customers/'+customer.id+'/view'" > 
   
  
    <div class="customer" >
    <div class="avator avatar-sm">
      <img class="round_image" src="/images/avator.jpg"/>
    </div>

    <div class="text">
     <h6>{{customer.firstname }}   {{customer.lastname}}  </h6>
     <span> 0773524056 </span>
    </div>
  </div>
  
  </router-link>
  





  <div class="panel-block">
    <button class="button is-link is-outlined is-fullwidth">
      reset all filters
    </button>
  </div>
</nav>






</div>

</template>


<script>
import axios from 'axios';
 export default {
   name:"customer_table",
   data () {
    return {
      msg: 'My customer Table',
      customers:[],
      customers2:[],
      keyword:'',
      links:'',
      meta:''

    }
  },

  mounted () {
    axios.get('api/customers')
    .then(response => {
     this.customers =  response.data.data
     this.customers2 =  response.data.data
     this.links= response.data.links
     this.meta= response.data.meta
     console.log(this.customers)
    })
    .catch(error => {
      console.log(error);
    });


  },
  methods:{
      onTextChange: function(){
        
          this.customers=this.customers2.filter(item=>{

             let customername= item.name.toLowerCase()
                if(customername.indexOf(this.keyword.toLowerCase())>=0){
                    return item
                }
            })

         },

         paginationFirstClick:function($vent){
          alert($vent.target.id)
         },

          paginationClick:function($vent){
          //alert($vent.target.id)
          axios.get('api/customers?page='+$vent.target.id)
            .then(response => {
             this.customers =  response.data.data
             this.customers2 =  response.data.data
             this.links= response.data.links
             this.meta= response.data.meta
                        console.log(this.customers)
            })
            .catch(error => {
              console.log(error);
            });

         }
  }


 }

</script>