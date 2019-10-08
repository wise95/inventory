<template>

<section>
  <div class="columns" style="margin-left:-2.7rem;padding-top: 13px;margin-bottom: 13px;">
  <div class="toolbar">

     <div class="tool_strip">
         <h2 class="title is-6"> Create Purchase Order </h2>
     </div>

     <div>
        <a class="button is-primary is-small" @click="create_new">Save</a>
        <router-link class="button is-primary is-small" :to="'/purchaseorders/create'" >Create New</router-link>
     </div>
     
   </div>

</div>

  <div class="columns" style="background-color:#ffffff">
 

  <div class="column is-12" style="margin-left:-2.7rem; background-color:#ffffff;padding-top: 13px;padding-left: 1.5rem;">


    <div class="columns" style="margin-bottom:0px">
    
      <div class="column is-3">
              <div class="field">
                <label class="label is-field-title">Order #</label>
                <div class="control">
                  <input class="input  is-small" v-validate="'required'" name="ponumber" type="text" v-model="ponumber" >
                  <span class="error">{{ errors.first('ponumber') }}</span>
                </div>
              </div>

      </div>

      


    </div>



    <div class="columns" style="margin-bottom:0px">
    
    

      <div class="column is-3">
              <div class="field">
                <label class="label is-field-title">Created Date</label>
                <div class="control">
                  
                   <datepicker :format="'yyyy-MM-dd'" :input-class="'input is-small'" v-validate="'required'" name="created_date" v-model="created_date"></datepicker>
                    <span class="error">{{ errors.first('created_date') }}</span>
                </div>
              </div>

      </div>

      <div class="column is-3">
              <div class="field">
                <label class="label is-field-title">Status</label>
                <div class="select is-small">
                   <select v-model="status" >
                      <option value="Created" >Created</option>
                      <option value="Sent" >Sent</option>
                    </select> 
                  </div>
                </div>
            

      </div>

      <div class="column is-3">
              <div class="field">
                <label class="label is-field-title">Expected Delivery Date</label>
                <div class="control">
                
                 <datepicker  @selected="change_delivery_date"  name="delivery_date" v-model="delivery_date" :format="'yyyy-MMM-dd'" :input-class="'input is-small'"></datepicker>
                 <span class="error" v-if="delivery_date_error">Please enter delivery date</span>
                </div>
              </div>

      </div>

      <div class="column is-3">

      </div>


    </div>






    <div class="columns" style="margin-bottom:0px">
    
      <div class="column is-3">
              <div class="field">
                <label class="label is-field-title">Vendor</label>
                <div class="select is-small">
                    <select v-model="vendor_id" @change="change_vendor">
                      <option v-for="(vendor, index) in vendors" :value="vendor.id"  >{{vendor.name}}</option>
                    </select> 
                     <span class="error" v-if="error_vendor">Please select vendor</span>
                  </div>
              </div>

              <div> <label> {{vendor.name}} </label> </div>
              <div> <label> {{vendor.addess}} </label> </div>
              <div> <label> {{vendor.city}}  </label> </div>
              <div> <label>{{vendor.state}} {{vendor.zip}}  </label> </div>

              <div> <label> {{vendor.country}} </label> </div>

      </div>
    </div>

     

     

   
      <table class="table is-fullwidth is-bordered" id="grid_table">
       <thead>
       <tr>
        <th> Product Name </th>
        <th> Unit Price</th>
        <th> Qty</th>
       
        <th> Amount</th>
        <th> </th>

       </tr>

       </thead>


         <tbody>

          <tr v-for="(product, index) in product_grid">

            <td>{{product.name}} </td>
            <td><input class="input is-small" v-model='product_grid[index].productprice.purchase_price' /> </td>
            <td> <input class="input is-small" v-model='product_grid[index].qty_to_order' @change="check_qty" />
               <span v-if="product_grid[index].qty_to_order>product_grid[index].qty"  class="error" > Physical Quantity is {{product.qty}}</span>
             </td>
            <td> {{(product_grid[index].productprice.purchase_price*product_grid[index].qty_to_order).toFixed(2)}}</td>
            <td> <a href="javascript:void(0)" @click="delete_row" > <i :id="index" class="far fa-trash-alt"></i> </a> </td>
           

          </tr>

           <tr>

            <td> 

              <div class="dropdown" style="width:100%" v-bind:class="{ 'is-active': isAddActive }" >
              <div class="dropdown-trigger" style="width:100%">

              <input class="input is-small" type="text" aria-haspopup="true" aria-controls="dropdown-menu"  v-model:value="keyword" @click="showproducts" > 
               <span class="error" v-if="error_vendor">Please select vendor first</span>  

                </div>
              <div class="dropdown-menu" id="dropdown-menu" role="menu">
                <div class="dropdown-content" style="border-radius:0px">
                 
                 <a href="javascript:void(0)" class="dropdown-item" v-for="(product, index) in products" :id="(product.id)" @click="add_product" >
                    {{product.name}}  [{{product.qty}}]
                  </a>
                  

                  <hr class="dropdown-divider">
                  <a href="javascript:void(0)" class="dropdown-item">
                    With a divider
                  </a>
                </div>
              </div>
            </div>

            </td>
            <td> <input class="input is-small" type="text"  v-model:value="unit_price"  >  </td>
            <td>  <input class="input is-small" type="text"  v-model:value="qty"  >  </td>
            <td>   </td>
            <td>   </td>




          </tr>

          <tr style="border-bottom-width:0">
                        <td style="border:none"> </td>
                        <td style="border:none"> </td>
                        <td style="border:none" class="label is-field-title">Sub Total </td>
                        <td style="border:none">{{sub_total().toFixed(2)}} </td>

                 </tr>

                
                 <tr style="border:none">
                        <td style="border:none"> </td>
                        <td style="border:none"> </td>
                        <td style="border:none;background-color: antiquewhite;" class="table_label is-field-title">Total</td>
                        <td  class="table_label" style="border:none;background-color: antiquewhite;">{{sub_total().toFixed(2)}}</td>

                 </tr>

                
         </tbody>

      </table>
  </div>

 
    


 </div>

 
</section>  

</template>


<script>
import axios from "axios";
import PurchaseOrderTable from "./PurchaseOrderTable.vue";
import Select2Box from "../Select2Box.vue";
import Datepicker from "vuejs-datepicker";
import { Validator } from "vee-validate";

const dict = {
  custom: {
    ponumber: {
      required: "Order# is empty"
    },
    name: {
      required: () => "Your name is empty"
    }
  }
};

Validator.localize("en", dict);

function test() {
  alert("inside test");
}

export default {
  name: "purchaseorders",
  data() {
    return {
      ponumber: "",
      vendor_id: "",
      products: [],
      isAddActive: false,
      products: [],
      keyword: "",
      key: "",
      unit_price: "",
      qty: "",
      product_grid: [],
      vendors: [],
      created_date: new Date(),
      status: "Created",
      delivery_date: "",
      delivery_date_error: false,
      error_vendor: false,
      vendor:''
    };
  },

  components: {
    purchase_order_table: PurchaseOrderTable,
    Select2Box: Select2Box,
    Datepicker
  },

  watch: {

   product_grid:function(){
     alert("hello")
   }

  },

  computed: {
      isValidQty:function(){
      

      
    }
  },

  mounted() {

    document.addEventListener('click', this.closeProductDropdown)
    axios
      .get("api/purchaseorders/getnextponumber")
      .then(response => {
        this.ponumber = response.data;
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });

    axios
      .get("api/vendors/")
      .then(response => {
        this.vendors = response.data.data;
        console.log(this.vendors);
      })
      .catch(error => {
        console.log(error);
      });
  },

  methods: {

   check_qty:function(){

       //this.$set(this.product_grid[0],'qty',10)

        this.products.forEach((row, i) => {

           this.product_grid.forEach((obj, index) => {

             if(obj.id==row.id){
              
              if(row.qty==obj.qty){

               console.log("Qty Equal" + index)
               this.product_grid[index].qty_error=true
              }
             }

           })
        })

   },

    closeProductDropdown (e) {
      if (!this.$el.contains(e.target)) {
        this.isAddActive = false
      }
    },

    customFormatter(date) {
      return moment(date).format('MMMM Do YYYY, h:mm:ss a');
    },
    change_vendor: function() {
      axios
        .get("api/vendors/" + this.vendor_id + "/products")
        .then(response => {
          this.products = response.data.data;
          this.error_vendor = false;
        })
        .catch(error => {
          console.log(error);
        });

        // get selected vendor
      
         this.vendors.forEach((obj, index) => {
           if(obj.id==this.vendor_id) {
             this.vendor= obj;
           }
 
         });



    },

    change_delivery_date: function() {
      this.delivery_date_error = false;
    },

    create_new: function() {
      let self = this;
      //alert(this.purchase_order_number);

      if (this.delivery_date == "") {
        this.delivery_date_error = true;
        return;
      }

      let payload = {
        product_id_list: ["pid1234", "pid1235"],
        products: this.product_grid,
        ponumber: this.ponumber,
        vendor_id: this.vendor_id,
        created_date: this.created_date,
        delivery_date: this.delivery_date,
        status: this.status,
        total:this.sub_total()
      };

      axios
        .post("api/purchaseorders/create", payload)
        .then(function(response) {
          self.$router.push("/purchaseorders");
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    },

    showproducts:function() {
      if (this.products.length == 0) {
        this.error_select_product = true;
        this.error_vendor = true;
      } else {
        this.isAddActive = !this.isAddActive;
      }
    },

    add_product: function($event) {
      this.isAddActive = false;
      this.products.forEach((row, i) => {
        if (row["id"] == $event.target.id) {
          let isProductInTable = false;
          this.product_grid.forEach((obj, index) => {
            if (obj["id"] == $event.target.id) {
              this.product_grid[index].qty_to_order = parseFloat(this.product_grid[index].qty_to_order) + 1;
              isProductInTable = true;
            }
          });

          if (isProductInTable == false) {
            //row.qty_to_order = 1;
            //row.qty_error=false;
            this.product_grid.push(row);
          }
          //alert($event.target.id)

          return;
        }
      });
    },
    delete_row: function($event) {
      console.log($event.target);
      //alert($event.target.id)
      this.product_grid.splice($event.target.id, 1);
    },

    sub_total: function() {
      let sum = 0;
      this.product_grid.forEach((row, i) => {
        sum = sum + row.productprice.purchase_price * row.qty_to_order;
      });

      return sum;
    }
  }
};
</script>