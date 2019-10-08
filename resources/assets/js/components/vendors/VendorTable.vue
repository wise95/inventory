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
      <a class="is-active">all</a>
      <a>public</a>
      <a>private</a>
      <a>sources</a>
      <a>forks</a>
    </p>

   


    <router-link  class="nav-link panel-block"   v-for="(vendor, index) in vendors"  active-class="is-active" :to="'/vendors/'+vendor.id+'/view'" > 
    <span class="panel-icon">
        <i class="fas fa-barcode" aria-hidden="true"></i>
    </span>
  {{vendor.name}} </router-link>
  <a class="panel-block">
    <span class="panel-icon">
      <i class="fas fa-book" aria-hidden="true"></i>
    </span>
    marksheet
  </a>


  <div class="panel-block">
    <button class="button is-link is-outlined is-fullwidth">
      reset all filters
    </button>
  </div>
</nav>


<nav class="pagination is-rounded" role="navigation" aria-label="pagination">
<!--  <a class="pagination-previous">Previous</a>
  <a class="pagination-next">Next page</a> -->
  <ul class="pagination-list">

    <li>{{meta.from}} - {{meta.to}} of {{meta.total}} </li>
   
    <li><span class="pagination-ellipsis">&hellip;</span></li>
    
    <li>
      <a class="pagination-link" @click="paginationClick" :id="(meta.current_page -1)"><</a>
    </li>


    
    <li><a class="pagination-link" @click="paginationClick"  :id="(meta.current_page +1)" >></a></li>
    <li><span class="pagination-ellipsis">&hellip;</span></li>

  
  </ul>
</nav>




</div>

</template>


<script>
import axios from 'axios';
 export default {
   name:"vendor_table",
   data () {
    return {
      msg: 'My Product Table',
      vendors:[],
      vendors2:[],
      keyword:'',
      links:'',
      meta:''

    }
  },

  mounted () {
    axios.get('api/vendors')
    .then(response => {
     this.vendors =  response.data.data
     this.vendors2 =  response.data.data
     this.links= response.data.links
     this.meta= response.data.meta
     console.log(this.products)
    })
    .catch(error => {
      console.log(error);
    });


  },
  methods:{
        onTextChange: function(){
        
          this.products=this.products2.filter(item=>{
             let productname= item.name.toLowerCase()
                if(productname.indexOf(this.keyword.toLowerCase())>=0){
                    return item
                }
            })

        },

         paginationFirstClick:function($vent){
          alert($vent.target.id)
         },

          paginationClick:function($vent){

          if($vent.target.id <=this.meta.last_page){
          //alert($vent.target.id)
          axios.get('api/products?page='+$vent.target.id)
          .then(response => {
           this.products =  response.data.data
           this.products2 =  response.data.data
           this.links= response.data.links
           this.meta= response.data.meta
           console.log(this.meta)
         })
          .catch(error => {
            console.log(error);
          });

          }

         }
  }


 }

</script>


