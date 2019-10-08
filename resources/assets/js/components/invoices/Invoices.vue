<template>
     

<div>

<div class="columns" style="margin-left:-3.4rem;padding-top: 13px;margin-bottom: 0px;">
<div class="toolbar">

        <div class="tool_strip">
         <h2 class="title is-6">Invoices</h2>
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
      
        </ul>
     </div>

     
</div>

</div>

<div class="columns" style="margin-left:-3.4rem;padding-top: 13px;">
    <table class="table is-fullwidth">
       <thead>
       <tr>
        <th> Date </th>
        <th> Invoice #</th>
        <th> Order #</th>
        <th> Customer</th>
        <th> Status</th>
        <th> Due Date</th>
        <th style="text-align:right"> Amount</th>
        <th style="text-align:right"> Balance Due</th>


       </tr>

       </thead>


         <tbody>

                <tr v-for="(invoice, index) in invoices">
                <td>{{invoice.invoice_date}} </td>
                <td><router-link :to="'/invoices/'+invoice.id+'/view'" > {{invoice.invnumber}}</a> </router-link></td>
                <td>{{invoice.sonumber}}</td>
                <td>{{invoice.firstname}} {{invoice.lastname}}</td>
                <td>{{invoice.status}}</td>
                <td>{{invoice.invoice_due_date}}</td>
                <td style="text-align:right" >{{invoice.total.toFixed(2)}}</td>
                <td style="text-align:right" v-if="invoice.due_amount!=null" >{{(invoice.total-invoice.due_amount).toFixed(2)}}</td>

              </tr>
       


         </tbody>
     </table>
     </div>

</div>

  

</template>


<script>
import axios from 'axios';
export default {
   name:"invoicepayment",
   data () {
      return {
         invoices:"",
         links:'',
         meta:'',
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

     this.$store.dispatch('getInvoices',{page:this.page})
         .then(response=>{
             this.invoices = response.data.data;
             this.links = response.data.links;
             this.meta = response.data.meta;
         })
    },
    methods:{
      paginationClick: function ($event) {
            if ($event.target.id <= this.meta.last_page) {
                //alert($vent.target.id)

            this.$store.dispatch('getInvoices',{page:$event.target.id})
                .then(response=>{
                  this.invoices = response.data.data
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