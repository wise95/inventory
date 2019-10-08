<template>
<div>

    <nav class="panel">

        <div class="panel-block">

            <nav class="pagination is-rounded" role="navigation" aria-label="pagination">

                <ul style="margin-left:10px" class="pagination-list">

                    <li>{{meta.from}} - {{meta.to}} of {{meta.total}} </li>

                    <li><span class="pagination-ellipsis">&hellip;</span></li>

                    <li  :class="meta.current_page ==  1 && 'disabled'">
                        <a class="pagination-link" @click="paginationClick" :id="(meta.current_page -1)"><</a> </li> 
                        <li  :class="meta.current_page === meta.last_page && 'disabled'"><a class="pagination-link" @click="paginationClick" :id="(meta.current_page +1)">></a></li>
                    <li><span class="pagination-ellipsis">&hellip;</span></li>

                </ul>
            </nav>

        </div>
        <p class="panel-tabs">
            <a class="is-active">All</a>
            <a>Active</a>
            <a>Inactive</a>
            <a>sources</a>
            <a>forks</a>
        </p>

        <div style="overflow-y: scroll;" v-bind:style="{ height: m_height+'px' }">

            <router-link class="nav-link salesorder-block-panel" v-for="(product, index) in products" active-class="is-active" :to="{path:'/products/'+product.id+'/view',query:query_param}">

                <div class="salesorder-block">

                    <div class="orderdetails">
                        <div class="label is-field-title"> {{product.name}} </div>
                        <div class="label"> </div>
                    </div>

                    <div class="orderstatus">
                        <div class="open"></div>
                        <div></div>
                    </div>

                </div>

            </router-link>

        </div>

        <div class="panel-block">
            <button class="button is-link is-outlined is-fullwidth">
                reset all filters
            </button>
        </div>
    </nav>

</div>
</template>

<script>
import axios from "axios";
export default {
    name: "product_table",
    data() {
        return {
            msg: "My Product Table",
            products: [],
            products2: [],
            keyword: "",
            links: "",
            meta: "",
            m_height: window.innerHeight - 100,
            page: this.$route.query.page || 1
        };
    },

   computed: {
    query_param () {
      return this.$store.state.query_param
    }
  },

    mounted() {

        console.log("page is"+this.page)
        axios
            .get("api/products")
            .then(response => {
                //this.products = response.data.data;
                //this.products2 = response.data.data;
                //this.links = response.data.links;
                //this.meta = response.data.meta;
                console.log(this.products);
            })
            .catch(error => {
                console.log(error);
            });
    
         this.$store.dispatch('getProductTable',{page:this.page})
         .then(response=>{
             this.products = response.data.data;
             this.links = response.data.links;
             this.meta = response.data.meta;
         })
    
    },
    methods: {
        onTextChange: function () {
            this.products = this.products2.filter(item => {
                let productname = item.name.toLowerCase();
                if (productname.indexOf(this.keyword.toLowerCase()) >= 0) {
                    return item;
                }
            });
        },

        

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
};
</script>
