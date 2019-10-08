<template>

<section>
  <div class="columns" style="margin-left:-2.7rem;padding-top: 13px;margin-bottom: 13px;">
<div class="toolbar">

     <div class="tool_strip">
         <h2 class="title is-6"> Create Sales Order </h2>
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
                  <input class="input  is-small" v-validate="'required'" name="sonumber" type="text" v-model="sonumber" >
                  <span class="error">{{ errors.first('sonumber') }}</span>
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
                <label class="label is-field-title">Expected Shipment Date</label>
                <div class="control">
                
                 <datepicker @selected="change_shipment_date"  name="shipment_date" v-model="shipment_date" :format="'yyyy-MM-dd'" :input-class="'input is-small'"></datepicker>
                 <span class="error" v-if="shipment_date_error">Please enter shipment date</span>
                </div>
              </div>

      </div>

      <div class="column is-3">

      </div>


    </div>






    <div class="columns" style="margin-bottom:0px">
    
      <div class="column is-3">
              <div class="field">
                <label class="label is-field-title">Customer</label>
                <div class="select is-small">
                    <select v-model="customer_id" @change="change_customer">
                      <option v-for="(customer, index) in customers" :value="customer.id"  >{{customer.firstname +' '+customer.lastname  }}</option>
                    </select> 
                   
                  </div>
              </div>

              

      </div>
    </div>

    <div class="columns" style="margin-bottom:0px">
    
      <div class="column is-3">
         <label class="label is-field-title">Billing Address</label>
              <div> <label> {{customer.bill_address}} </label> </div>
              <div> <label> {{customer.bill_city}}  </label> </div>
              <div> <label>{{customer.bill_state}} {{customer.bill_zip}}  </label> </div>
              <div> <label> {{customer.bill_country}} </label> </div>
      </div>
        
      <div class="column is-3">
          <label class="label is-field-title">Shipping Address</label>
               <div> <label> {{customer.ship_address}} </label> </div>
               <div> <label> {{customer.ship_city}}  </label> </div>
               <div> <label>{{customer.ship_state}} {{customer.ship_zip}}  </label> </div>
               <div> <label> {{customer.ship_country}} </label> </div>
      </div>

    </div>


   
      <table class="table is-fullwidth is-bordered" id="grid_table">
       <thead>
       <tr>
        <th> Product Name </th>
        <th> Unit Price</th>
        <th> Qty</th>
       
        <th style="text-align:right"> Amount</th>
        <th> </th>

       </tr>

       </thead>


         <tbody>

          <tr v-for="(product, index) in product_grid">

            <td >{{product.name}} </td>
            <td><input class="input is-small" v-model='product_grid[index].productprice.purchase_price' /> </td>
            <td> <input class="input is-small" v-model='product_grid[index].qty' /> </td>
            <td style="text-align:right"> {{(product_grid[index].productprice.purchase_price*product_grid[index].qty).toFixed(2)}}</td>
            <td> <a href="javascript:void(0)" @click="delete_row" > <i :id="index" class="far fa-trash-alt"></i> </a> </td>
           

          </tr>

           <tr>

            <td> 

              <div class="dropdown" style="width:100%" v-bind:class="{ 'is-active': isAddActive }" >
              <div class="dropdown-trigger" style="width:100%">

              <input class="input is-small" type="text" aria-haspopup="true" aria-controls="dropdown-menu"  v-model:value="keyword" @click="showproducts"  v-on:input="onTextChange" > 
             

                </div>
              <div class="dropdown-menu" id="dropdown-menu" role="menu">
                <div class="dropdown-content" style="border-radius:0px">
                 
                 <a href="javascript:void(0)" class="dropdown-item" v-for="(product, index) in products" :id="(product.id)" @click="add_product"  >
                    {{product.name}}
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
                        <td style="border:none;" class="label is-field-title">Sub Total </td>
                        <td style="border:none; text-align: right;">{{sub_total().toFixed(2)}} </td>

                 </tr>
           <tr style="border-bottom-width:0">
            <td style="border:none"> </td>
            <td style="border:none"> </td>
            <td style="border:none" class="label is-field-title">
                <div style="display:flex;justify-content: space-between">
                  <div>Apply Tax </div>  
                  <div class="select is-small">
                        <select v-model="tax_id" @change="change_tax">
                          <option v-for="(tax, index) in taxes" :value="tax.id"  >{{tax.tax_code }} ({{tax.tax_percentage }}%)</option>
                        </select> 
                        
                  </div>
                </div>
             </td>
            <td style="border:none;text-align: right;">{{total_tax}} </td>
          </tr>

           <tr style="border-bottom-width:0">
            <td style="border:none"> </td>
            <td style="border:none"> </td>
            <td style="border:none" class="label is-field-title">


              <div style="display:flex;justify-content: space-between">
              <div>Discount </div>

              
              <div class="field has-addons">

                <p class="control">
                  <input style="border-color:#dbdbdb;width:100px" class="input is-small" type="text" v-model="discount" >
                </p>
                <p class="control">
                  <span class="select is-small" @change="change_discount_type">
                    <select v-model="discount_type">
                      <option value="d">$</option>
                      <option value="p">%</option>
                     
                    </select>
                  </span>
                </p>
              </div>

            </div>




             </td>
            <td style="border:none;text-align: right;">({{Number(caculate_discount()).toFixed(2)}})</td>
          </tr>


                
                 <tr style="border:none">
                        <td style="border:none"> </td>
                        <td style="border:none"> </td>
                        <td style="border:none;background-color: antiquewhite;" class="title is-6">Total</td>
                        <td  class="title is-6" style="border:none;background-color: antiquewhite;text-align: right;">{{total().toFixed(2)}}</td>

                 </tr>

                
         </tbody>

      </table>
  </div>

 
    


 </div>

 
</section>  

</template>


<script>
import axios from 'axios'

import Datepicker from 'vuejs-datepicker';
import { Validator } from 'vee-validate';

const dict = {
  custom: {
    sonumber: {
      required: 'Order# is empty'
    },
    name: {
      required: () => 'Your name is empty'
    }
  }
};

Validator.localize('en', dict);

function test(){
  alert('inside test')
}

 export default {
   name:"purchaseorders",
   data () {
    return {
      sonumber:'',
      customer_id:'',
      products:[],
      isAddActive:false,
      products:[],
      keyword:'',
      key:'',
      unit_price:'',
      qty:'',
      product_grid:[],
      customers:[],
      customer:'',
      tax_percentage:'',
      created_date:new Date(),
      status:'Created',
      shipment_date:'',
      shipment_date_error:false,
      tax_id:'',
      taxes:[],
      total_tax:'',
      tax_percentage:'',
      discount:'',
      discount_type:'d',
      discount_total:'',
      




    }
  },

  components:{
     
      Datepicker
  },

  watch: {
    
    },


  mounted () {

    axios.get('api/salesorders/get/nextsonumber')
    .then(response => {
      this.sonumber =  response.data
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

    axios.get('api/customers')
    .then(response => {
      this.customers =  response.data.data
      
    })
    .catch(error => {
      console.log(error);
    });

   axios.get('api/tax')
    .then(response => {
      this.taxes =  response.data.data
      
    })
    .catch(error => {
      console.log(error);
    });


    axios.get('api/products/getall')
    .then(response => {
      this.products =  response.data.data
      this.products2= response.data.data
    })
    .catch(error => {
      console.log(error);
    });




   

  },

  methods:{

    keymonitor:function(){
       alert("test")
    },

    onTextChange: function(){
        
          this.products=this.products2.filter(item=>{
             let productname= item.name.toLowerCase()
                if(productname.indexOf(this.keyword.toLowerCase())>=0){
                    return item
                }
            })

        },

    change_customer:function(){
     this.customers.forEach((row, i)=> {
         if(this.customer_id==row.id){
         this.customer=row
          return
         }
      })
    },

    change_tax:function(){
          this.taxes.forEach((row, i)=> {
          if(this.tax_id==row.id){
          this.tax_percentage =row.tax_percentage
          this.total_tax =(this.sub_total()*row.tax_percentage/100).toFixed(2) 
          return
         }
      })

       
    },

    change_discount_type:function(){
      
      this.caculate_discount()
     
    },

    change_shipment_date:function(){
      this.shipment_date_error=false
    },

    create_new: function(){
       let self = this;
      //alert(this.purchase_order_number);
       
       if(this.shipment_date==''){
          this.shipment_date_error=true
        return 
       }

      let payload = {
          
           products:this.product_grid,
           sonumber: this.sonumber,
           customer_id:   this.customer_id,
           order_date:this.created_date,
           shipment_date:this.shipment_date,
           status:this.status,
           discount:this.discount,
           discount_type:this.discount_type,
           tax_id:this.tax_id,
           tax_percentage:this.tax_percentage,
           tax_code:'GST',
           total:this.total()

       };

     axios.post('api/salesorders', payload)
      .then(function (response) {
        self.$router.push("/salesorders")
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    },

    showproducts:function(){
      if(this.products.length==0){
      
      }else{
        this.isAddActive =!this.isAddActive
      }
      
    },
    add_product:function($event){
      this.isAddActive=false
       this.products.forEach((row, i)=> {
          if(row['id'] ==$event.target.id) {
            let isProductInTable=false
             this.product_grid.forEach((obj,index)=>{
               if(obj['id']==$event.target.id){
                this.product_grid[index].qty=this.product_grid[index].qty+1
                 this.keyword=""
                 isProductInTable=true
               }
             })

           if(isProductInTable==false){
             row.qty=1;
             this.product_grid.push(row)
             this.keyword=""
           }
          
          this.products=this.products2

             //alert($event.target.id)
            
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
    },

    caculate_tax:function(){
      this.total_tax =(this.sub_total()*this.tax_percentage/100).toFixed(2) 
      return this.total_tax;
    },

    total:function(){
        return (Number(this.sub_total()) + Number(this.caculate_tax())-Number(this.caculate_discount()) )
    },

    caculate_discount:function(){
      if(this.discount_type=='d'){
        this.discount_total= this.discount
        console.log(this.discount)
      }

       if(this.discount_type=='p'){
        this.discount_total= ( Number(this.sub_total()) + Number(this.total_tax))* this.discount/100
        console.log(this.sub_total())
      }

      return this.discount_total
    }
  }
 }

</script>