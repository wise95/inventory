<template>

<div>
<div class="columns" style="margin-left:-3.4rem;padding-top: 13px;margin-bottom: 0px;">
<div class="toolbar">

     <div class="tool_strip">
         <h2 class="title is-6">Purchase Orders </h2>
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
            <router-link class="button is-primary is-small" :to="'/purchaseorders/create'" >Create New</router-link>
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
        <th> Prchasae Order #</th>
        <th> Vendor Name</th>
        <th> Staus</th>
        <th style="text-align:right;padding-right:20px"> Amount</th>

       </tr>

       </thead>


         <tbody>

                <tr v-for="(purchaseorder, index) in purchaseorders">
                <td>{{purchaseorder.created_at}} </td>
                <td><router-link :to="'/purchaseorders/'+purchaseorder.id+'/view'" > {{purchaseorder.ponumber}}</a> </router-link></td>
                <td>{{purchaseorder.vendor}} </td>
                <td>{{purchaseorder.status}} </td>
                <td style="text-align:right;padding-right:20px">{{purchaseorder.total.toFixed(2)}}  </td>

              </tr>
       


         </tbody>
     </table>

</div>

</div>  

</template>


<script>
import axios from 'axios';
 export default {
   name:"purchaseorders",
   data () {
    return {
      msg: '',
      purchaseorders:[],
      page: this.$route.query.page || 1,
      links: "",
      meta: "",
    }
  },


  computed: {
    products () {
      return this.products
    },
    query_param () {
      return this.$store.state.query_param
    }
  },

  mounted () {
    // clear query_param
    this.$store.commit('setQueryParam',null)

    //this.$store.dispatch('getProducts')

     this.$store.dispatch('getPurchaseOrders',{page:this.page})
         .then(response=>{
             this.purchaseorders = response.data.data;
             this.links = response.data.links;
             this.meta = response.data.meta;
      })


  },

  methods:{

    paginationClick: function ($event) {
            if ($event.target.id <= this.meta.last_page) {
                //alert($vent.target.id)

            this.$store.dispatch('getPurchaseOrders',{page:$event.target.id})
              .then(response=>{
                this.purchaseorders = response.data.data
                this.links = response.data.links
                this.meta = response.data.meta

                this.$router.replace({query: {page:$event.target.id}})
                this.$store.commit('setQueryParam',this.$route.query)

            })

               /*
                axios
                    .get("api/purchaseorders?page=" + $vent.target.id)
                    .then(response => {
                        this.purchaseorders = response.data.data;
                      
                        this.links = response.data.links;
                        this.meta = response.data.meta;
                      
                        //console.log(this.$route.path);
                        //this.$route.query = {...this.$route.query, page: 100}

                        this.$router.replace({query: {page:$vent.target.id}})
                        
                        this.$store.commit('setQueryParam',this.$route.query)

                    })
                    .catch(error => {
                        console.log(error);
                    });

                    */
            }
        }

  }
 }

</script>