<template>
  <section>
  
       <div class="columns" style="background-color: #fff">

         <div class="column is-3">
              <div> <label class="label is-field-title"> {{product.vendor.name}}</label> </div>
              <div> <label> Carrboro </label> </div>
              <div> <label> NC 27510 </label> </div>
              <div> <label> United States </label> </div>
         </div>

         <div class="column is-3">
         <div class="field">
                <label class="label is-field-title">Vendor</label>
                <div class="select is-small">
                    <select v-model="product.vendor.id">
                      <option v-for="(vendor, index) in vendors" :value="vendor.id"  >{{vendor.name}}</option>
                     
                    </select> 
                  </div>
        </div>
        </div>


        <div class="column is-3">
            <div class="field">
              <label class="label is-field-title">Vendor Price</label>
              <div class="control">
                <input class="input is-small" type="text" v-model="product.productprice.purchase_price" >
              </div>
            </div>


        </div>


     

 


        </div>

         <div class="columns" style="background-color: #fff">
          <div class="column is-3">

              <a class="button is-primary is-small" @click="save">Save</a>

          </div>


         </div>


      </section>

</template>


<script>
 import axios from 'axios';
 export default {
   name:"productvendor",
   data () {
    return {
      vendors: '',
      product:'',
     
      vendor:'',
      purchase_price:''


    }
  },
  mounted(){
    axios.get('api/products/'+this.$route.params.id)
    .then(response => {
      this.product =  response.data.data
      //console.log(this.$route.params.id)
      
    })
    .catch(error => {
      console.log(error);
    });

    axios.get('api/vendors/')
    .then(response => {
      this.vendors =  response.data.data
      console.log(this.vendors)
      
    })
    .catch(error => {
      console.log(error);
    });




  },
  methods:{
    save: function(){

      axios.post('api/product/updatevendor', {
        product_id: this.$route.params.id,
        vendor_id:  this.product.vendor.id,
        purchase_price :this.product.productprice.purchase_price
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

      
    },
    addVendor: function($event){
      axios.post('api/product/addvendor', {
        product_id: this.$route.params.id,
        vendor_id:   $event.target.id
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });


      axios.get('api/products/'+this.$route.params.id)
      .then(response => {
        this.product =  response.data.data
      //console.log(this.$route.params.id)
      
      })
      .catch(error => {
        console.log(error);
      });


    },
    
  }
  
 }
</script>