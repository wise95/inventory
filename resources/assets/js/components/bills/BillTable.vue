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


 <router-link  class="nav-link salesorder-block-panel"  v-for="(bill, index) in bills"  active-class="is-active" :to="'/bills/'+bill.id+'/view'" > 
 
  <div class="salesorder-block">

  <div class="orderdetails">
      <div class="label is-field-title">  {{bill.billnumber}} </div>
      <div class="label"> {{bill.purchaseorder.ponumber}}</div>
  </div>

  <div class="orderstatus">
     <div class="open"> {{bill.status}} </div>
     <div>{{bill.total}} </div>
  </div>

  </div>

</router-link>





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
    <li><a class="pagination-link" @click="paginationClick" id="1"  href="javascript:void(0)" aria-label="Goto page 1">1</a></li>
    <li><span class="pagination-ellipsis">&hellip;</span></li>
    <li><a class="pagination-link" @click="paginationClick" :id="(meta.current_page -1)" aria-label="Goto page 45">{{meta.current_page -1}}</a></li>
    <li><a class="pagination-link is-current" aria-label="Page 46" aria-current="page">{{meta.current_page}}</a></li>
    <li><a class="pagination-link" @click="paginationClick"  :id="(meta.current_page +1)" aria-label="Goto page 47">{{meta.current_page+1}}</a></li>
    <li><span class="pagination-ellipsis">&hellip;</span></li>
    <li><a class="pagination-link" @click="paginationClick" :id="meta.last_page" >{{meta.last_page}}</a></li>
  </ul>
</nav>




</div>

</template>


<script>
import axios from 'axios';
 export default {
   name:"bill_table",
   data () {
    return {
      msg: 'My Product Table',
      bills:[],
      purchaseorders2:[],
      keyword:'',
      links:'',
      meta:''

    }
  },

  mounted () {

    axios.get('/api/bills')
    .then(response => {
     this.bills =  response.data.data
     this.purchaseorders2 =  response.data.data
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
        
          this.bills=this.purchaseorders2.filter(item=>{

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
          //alert($vent.target.id)
          axios.get('/api/bills?page='+$vent.target.id)
            .then(response => {
             this.bills =  response.data.data
             this.purchaseorders2 =  response.data.data
             this.links= response.data.links
             this.meta= response.data.meta
                        console.log(this.products)
            })
            .catch(error => {
              console.log(error);
            });

         }
  }


 }

</script>


