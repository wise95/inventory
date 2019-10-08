<template>

  <div class="columns">
 

  <div class="column is-12 left-border">


    <div class="tabs product_navbar" style="margin-bottom: 0.5rem;">
    <ul class="nav nav-tabs ">
      <li class="nav-item">
         <router-link exact class="nav-link"  active-class="active" :to="'/purchaseorders/create'">Purchase Order</router-link>
        
      </li>
      <li class="nav-item">

          <router-link class="nav-link"  active-class="active" :to="'/purchaseorders/receives'">Receives</router-link>
        
      </li>
      <li class="nav-item">
         <router-link class="nav-link"  active-class="active" :to="'/purchaseorders/returns'">Returns</router-link>
        
      </li>
      <li class="nav-item">
         <router-link class="nav-link"  active-class="active" :to="'/'+$route.params.id+'/purchaseorders'">Purchase Orders</router-link>
        
      </li>
    </ul>

  </div>
     

      <h3> Purchase Order #  </h3>
     

    

      <table class="table is-fullwidth">
       <thead>
       <tr>
        <th> Product Name & Description</th>
        <th> Ordered</th>
        <th> Received</th>
       
        <th> Quantity to Receive</th>
        <th> </th>

       </tr>

       </thead>


         <tbody>

          <tr v-for="(product, index) in product_grid">

            <td>{{product.name}} </td>
            <td>{{product_grid[index].qty}} </td>
            <td> 1 </td>
            <td> <input type="text" /> </td>
            <td> <a href="javascript:void(0)" @click="delete_row" > <i :id="index" class="far fa-trash-alt"></i> </a> </td>
           

          </tr>

           <tr>

            <td> <input class="input is-small" type="text"  v-model:value="keyword" @click="showproducts" >   </td>
            <td> <input class="input is-small" type="text"  v-model:value="unit_price"  >  </td>
            <td>  <input class="input is-small" type="text"  v-model:value="qty"  >  </td>
            <td>   </td>
            <td>   </td>




          </tr>

         </tbody>

      </table>

<div class="dropdown" v-bind:class="{ 'is-active': isAddActive }" >
  <div class="dropdown-trigger">
    

    <input aria-haspopup="true" aria-controls="dropdown-menu" class="input is-small" type="text"  v-model:value="key" @click="showproducts" > 

    
  </div>
  <div class="dropdown-menu" id="dropdown-menu" role="menu">
    <div class="dropdown-content">
     
     <a href="javascript:void(0)" class="dropdown-item" v-for="(product, index) in products" :id="(product.id)" @click="add_product" >
        {{product.name}}
      </a>
      

      <hr class="dropdown-divider">
      <a href="javascript:void(0)" class="dropdown-item">
        With a divider
      </a>
    </div>
  </div>
</div>
      <a class="button is-primary is-small" @click="create_new">Save</a>

<div class="columns">
  <div class="column is-6">

  </div>

  <div class="column is-6">
    Sub Total : {{sub_total()}}
  </div>
</div>



  </div>

 
    


 </div>

 
  

</template>


<script>
import axios from 'axios'
import PurchaseOrderTable from './PurchaseOrderTable.vue'

function test(){
  alert('inside test')
}

 export default {
   name:"purchaseorders",
   data () {
    return {
      purchase_order_number:'',
      vendor_id:'',
      products:[],
      isAddActive:false,
      products:[],
      keyword:'',
      key:'',
      unit_price:'',
      qty:'',
      product_grid:[]

    }
  },

  components:{
      purchase_order_table: PurchaseOrderTable,
  },

  watch: {
    
    },


  mounted () {

   

    axios.get('api/products')
    .then(response => {
     this.products =  response.data.data
     
    })
    .catch(error => {
      console.log(error);
    });


  },

  methods:{
    create_new: function(){

      alert(this.purchase_order_number);
      axios.post('api/purchaseorders/create', {
        ponumber: this.purchase_order_number,
        vendor_id:   1,
        postatus_id:   1,
        warehouse_id:   1,

      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    },

    showproducts:function(){
      this.isAddActive =!this.isAddActive
      //alert("show")
    },
    add_product:function($event){
      this.isAddActive=false
       this.products.forEach((row, i)=> {
          if(row['id'] ==$event.target.id) {
             this.product_grid.push(row)
             //alert($event.target.id)
             console.log(row)
            return;
          }    
        })
    },
    delete_row:function($event){
      console.log($event.target)
      //alert($event.target.id)
      this.product_grid.splice($event.target.id,1)
    },

    sub_total:function(){
      let sum=0
      this.product_grid.forEach((row, i)=> {
          sum=sum+ row.productprice.purchase_price*row.qty
      })

      return sum;

    }
  }
 }

</script>