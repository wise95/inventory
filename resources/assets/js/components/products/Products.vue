<template>

<div>
<div class="columns" style="margin-left:-3.4rem;padding-top: 13px;margin-bottom: 0px;">
<div class="toolbar">

    <div class="tool_strip">
         <h2 class="title is-6">Products</h2>
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
            <router-link class="button is-primary is-small" :to="'/products/create'" >Create New</router-link>
        </li>
        </ul>
     </div>
     
</div>

</div>
     
<div class="columns" style="margin-left:-3.4rem;padding-top: 13px;">

   

    <table class="table is-fullwidth">
       <thead>
       <tr>
        <th> SKU </th>
        <th> NAME</th>
        <th> PURCHASE PRICE</th>
        <th> SELLING PRICE</th>
        <th> STOCK ON HAND</th>
        <th> REORDER LEVEL</th>
        

       </tr>

       </thead>


         <tbody>

                <tr v-for="(product, index) in products">
                <td>{{product.sku}} </td>
                <td><router-link :to="{path:'/products/'+product.id+'/view',query:query_param}" > {{product.name}}</a> </router-link></td>
                
                <td>{{product.productprice.retail_price}}  </td>
                <td>{{product.productprice.wholesale_price}}  </td>
                <td>{{product.qty}} </td>
                <td>{{product.reorder_level}} </td>

              </tr>
       


         </tbody>
     </table>

</div>

</div>  

</template>


<script>
import axios from 'axios'
 export default {
   name:"products",
   data () {
    return {
      
       links: "",
       meta: "",
       page: this.$route.query.page || 1,
       products:[]
      
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

     this.$store.dispatch('getProductTable',{page:this.page})
         .then(response=>{
             this.products = response.data.data;
             this.links = response.data.links;
             this.meta = response.data.meta;
         })

  },

  methods:{
            paginationClick: function ($vent) {
            if ($vent.target.id <= this.meta.last_page) {
                //alert($vent.target.id)
                axios
                    .get("api/products?page=" + $vent.target.id)
                    .then(response => {
                        this.products = response.data.data;
                        this.products2 = response.data.data;
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
            }
        }
  }

 }

</script>