<template>

<div>
<div class="columns" style="margin-left:-3.4rem;padding-top: 13px;margin-bottom: 0px;">
<div class="toolbar">

     <div class="tool_strip">
         <h2 class="title is-6">Vendors</h2>
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
           <div>
              <router-link class="button is-primary is-small" :to="'/vendors/create'" >Create New</router-link>
          </div>
         </li>
      
        </ul>
     </div>
     
</div>

</div>
     
<div class="columns" style="margin-left:-3.4rem;padding-top: 13px;">

   

    <table class="table is-fullwidth">
       <thead>
       <tr>
        
        <th> Company Name</th>
        <th> Contact Person</th>
        <th> Email</th>
        <th> Phone</th>
        <th> </th>
       

       </tr>

       </thead>


         <tbody>
                <tr v-for="(vendor, index) in vendors">
                <td><router-link :to="'/vendors/'+vendor.id+'/view'" >{{vendor.name}}</router-link></td>
                <td>{{vendor.contact}} </td>
                <td>{{vendor.email}} </td>
                <td>{{vendor.phone}}  </td>
                <td></td>
                <td> </td>
              </tr>
         </tbody>
     </table>

</div>

</div>  

</template>


<script>
import axios from 'axios';
 export default {
   name:"vendors",
   data () {
    return {
      msg: '',
      vendors:[],
      links:'',
      meta:'',
      page: this.$route.query.page || 1,
    }
  },
  mounted () {

    
     // clear query_param
    this.$store.commit('setQueryParam',null)

    //this.$store.dispatch('getProducts')

     this.$store.dispatch('getVendors',{page:this.page})
         .then(response=>{
             this.vendors = response.data.data;
             this.links = response.data.links;
             this.meta = response.data.meta;
     })


  },
  methods:{

    paginationClick: function ($event) {
            if ($event.target.id <= this.meta.last_page) {
                //alert($vent.target.id)

            this.$store.dispatch('getVendors',{page:$event.target.id})
                .then(response=>{
                  this.vendors = response.data.data
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