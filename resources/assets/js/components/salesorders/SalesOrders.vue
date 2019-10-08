<template>
<section>
<div class="columns" style="margin-left:-3.4rem;padding-top: 13px;margin-bottom: 0px;">
<div class="toolbar">

     <div class="tool_strip">
         <h2 class="title is-6">Sales Orders </h2>
     </div>

     <div>

       <ul class="toolbar_menu">
         <li>
            <nav class="pagination is-rounded" role="navigation" aria-label="pagination">

                    <ul style="margin-left:10px" class="pagination-list">

                        <li>{{meta.from}} - {{meta.to}} of {{meta.total}} </li>

                        <li><span class="pagination-ellipsis">&hellip;</span></li>

                        <li  :class="meta.current_page ==  1 && 'disabled'"><a class="pagination-link" @click="paginationClick" :id="(meta.current_page -1)"><</a> </li> 
                        <li  :class="meta.current_page === meta.last_page && 'disabled'"><a class="pagination-link" @click="paginationClick" :id="(meta.current_page +1)">></a></li>
                        <li ><span class="pagination-ellipsis">&hellip;</span></li>

                    </ul>
            </nav>
         </li>
        <li>
            <router-link class="button is-primary is-small" :to="'/salesorders/create'" >Create New</router-link>
        </li>
        </ul>
     </div>

     
</div>

</div>
     
<div class="columns" style="margin-left:-3.4rem;padding-top: 13px;margin-bottom: 0px;">
    <table class="table is-fullwidth">
       <thead>
       <tr>
        <th> Date </th>
        <th> Sales Order #</th>
        <th> Customer Name</th>
        <th> Staus</th>
        <th style="text-align:right;padding-right:40px"> Amount</th>

       </tr>

       </thead>


         <tbody>

              <tr v-for="(so, index) in salesorders">
                <td>{{so.order_date}} </td>
                <td><router-link :to="'/salesorders/'+so.id+'/view'" > {{so.sonumber}}</a> </router-link></td>
                <td>{{so.customer.firstname}} {{so.customer.lastname}}</td>
                <td>{{so.status}}</td>
                <td style="text-align:right;padding-right:40px">{{total(so).toFixed(2)}}</td>
              </tr>
       


         </tbody>
     </table>

</div>

  
</section>
</template>


<script>
import axios from 'axios';



 export default {
   name:"bills",
   data () {
    return {
      msg: '',
      salesorders:[],
      meta:'',
      links:'',
      page: this.$route.query.page || 1,
    }
  },

computed: {
    query_param () {
      return this.$store.state.query_param
    }
},
mounted () {

  // clear query_param
    this.$store.commit('setQueryParam',null)

    //this.$store.dispatch('getProducts')

     this.$store.dispatch('getSalesOrders',{page:this.page})
         .then(response=>{
             this.salesorders = response.data.data;
             this.links = response.data.links;
             this.meta = response.data.meta;
      })

  },

  methods: {

    sub_total:function(products){
      let sum=0
      products.forEach((row, i)=> {
        sum=sum+ row.unit_price*row.qty
      })

      return sum;

    },

    calculate_discount:function(so){
      if(so.discount_type=='d'){
        return Number(so.discount);
      }

      if(so.discount_type=='p'){
        return so.discount/100*( Number(this.sub_total(so.products)) +Number(this.sub_total(so.products))* Number(so.tax_percentage/100))
      }


    },

    total:function(so){
      return Number(this.sub_total(so.products)) - Number(this.calculate_discount(so)) + (Number(this.sub_total(so.products)) * so.tax_percentage/100);
    },


    paginationClick: function ($event) {
            if ($event.target.id <= this.meta.last_page) {
                //alert($vent.target.id)

            this.$store.dispatch('getSalesOrders',{page:$event.target.id})
                .then(response=>{
                  this.salesorders = response.data.data
                  this.links = response.data.links
                  this.meta = response.data.meta

                  this.$router.replace({query: {page:$event.target.id}})
                  this.$store.commit('setQueryParam',this.$route.query)

              })
            }
    }
  }
 }

</script>