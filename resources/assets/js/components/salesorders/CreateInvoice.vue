<template>

<section>
  <div class="columns" style="margin-left:-2.7rem;padding-top: 13px;margin-bottom: 13px;">
<div class="toolbar">

     <div class="tool_strip">
         <h2 class="title is-6"> Create Invoice </h2>
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
                <label class="label is-field-title">Invoice #</label>
                <div class="control">
                  <input class="input  is-small" v-validate="'required'" name="invnumber" type="text" v-model="invnumber" >
                  <span class="error">{{ errors.first('invnumber') }}</span>
                </div>
              </div>

      </div>


     <div class="column is-3">
              <div class="field">
                <label class="label is-field-title">Sales Order #</label>
                <div class="control">
                  <input class="input  is-small" v-validate="'required'" name="sonumber" type="text" v-model="salesorder.sonumber" >
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
                <label class="label is-field-title">Due Date</label>
                <div class="control">
                
                 <datepicker   name="due_date" v-model="due_date" :format="'yyyy-MM-dd'" :input-class="'input is-small'"></datepicker>
                 <span class="error" v-if="due_date_error">Please enter due date</span>
                </div>
              </div>

      </div>




      <div class="column is-3">
              <div class="field">
                <label class="label is-field-title">Expected Shipment Date</label>
                <div class="control">
                
                 <datepicker @selected="change_shipment_date"  name="shipment_date" v-model="salesorder.shipment_date" :format="'dd MMM yyyy'" :input-class="'input is-small'"></datepicker>
                 <span class="error" v-if="shipment_date_error">Please enter shipment date</span>
                </div>
              </div>

      </div>

      

    </div>






    <div class="columns" style="margin-bottom:0px">
    
      <div class="column is-3">
              <div class="field">
                <label class="label is-field-title">Customer</label>
              

              <label class="label">{{salesorder.customer.firstname }}  {{salesorder.customer.lastname }}</label>

               <label class="label">Phone:   {{salesorder.customer.phone }}</label>

              </div>

              

      </div>
    </div>

    <div class="columns" style="margin-bottom:0px">
    
      <div class="column is-3">
         <label class="label is-field-title">Billing Address</label>
              <div> <label> {{salesorder.customer.bill_address}} </label> </div>
              <div> <label> {{salesorder.customer.bill_city}}  </label> </div>
              <div> <label>{{salesorder.customer.bill_state}} {{salesorder.customer.bill_zip}}  </label> </div>
              <div> <label> {{salesorder.customer.bill_country}} </label> </div>

      </div>
        
      <div class="column is-3">
          <label class="label is-field-title">Shipping Address</label>
               <div> <label> {{salesorder.customer.ship_address}} </label> </div>
               <div> <label> {{salesorder.customer.ship_city}}  </label> </div>
               <div> <label>{{salesorder.customer.ship_state}} {{salesorder.customer.ship_zip}}  </label> </div>
               <div> <label> {{salesorder.customer.ship_country}} </label> </div>
      </div>

    </div>


     

     

   
      <table class="table is-fullwidth is-bordered" id="grid_table">
       <thead>
       <tr>
        <th> Product Name </th>
        <th> Ordered Qty </th>
        <th> Invoiced Qty  </th>

        <th> Unit Price</th>
        <th style="background-color:#caced0"> Issued Qty</th>
       
        <th> Amount</th>
        <th> </th>

       </tr>

       </thead>


         <tbody>

          <tr v-for="(product, index) in product_grid">

            <td>{{product.name}} </td>
            <td>{{product.qty}}  </td>
            <td>{{product.invoiced_qty}} </td>
            <td>{{product.unit_price}} </td>
            <td  style="background-color:#caced0"><input style="border-radius:0px" class="input is-small"   v-model='product_grid[index].qtynew'   /> </td>
            <td> {{(product_grid[index].unit_price*product_grid[index].qtynew).toFixed(2)}}</td>
            <td> <a href="javascript:void(0)" @click="delete_row" > <i :id="index" class="far fa-trash-alt"></i> </a> </td>
           

          </tr>

      

          <tr style="border-bottom-width:0">
            <td style="border:none"> </td>
            <td style="border:none"> </td>
            <td style="border:none"> </td>
            <td style="border:none"> </td>
            <td style="border:none;" class="label is-field-title">Sub Total </td>
            <td style="border:none; text-align: right;">{{sub_total().toFixed(2)}} </td>
          </tr>

          <tr style="border-bottom-width:0">
            <td style="border:none"> </td>
            <td style="border:none"> </td>
            <td style="border:none"> </td>
            <td style="border:none"> </td>
            <td style="border:none" class="label is-field-title">
                <div style="display:flex;justify-content: space-between">
                  <div>Apply Tax </div>  
                  <div class="select is-small">
                    <select v-model="salesorder.tax_id" @change="change_tax">
                      <option v-for="(tax,index) in taxes" :value="tax.id"  >{{tax.tax_code }} ({{tax.tax_percentage }}%)</option>
                    </select> 
                        
                  </div>
                </div>
             </td>
            <td style="border:none;text-align: right;">{{Number(caculate_tax()).toFixed(2)}} </td>
          </tr>

           <tr style="border-bottom-width:0">
            <td style="border:none"> </td>
            <td style="border:none"> </td>
            <td style="border:none"> </td>
            <td style="border:none"> </td>
            <td style="border:none" class="label is-field-title">


              <div style="display:flex;justify-content: space-between">
              <div>Discount </div>

              
              <div class="field has-addons">

                <p class="control">
                  <input style="border-color:#dbdbdb;width:100px" class="input is-small" type="text" v-model="salesorder.discount" >
                </p>
                <p class="control">
                  <span class="select is-small" @change="change_discount_type">
                    <select v-model="salesorder.discount_type">
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
      salesorder:[],
      invnumber:'',
      sonumber:'',
      qty:'', 
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
      due_date:'',
      due_date_error:false



    }
  },

  components:{
     
      Datepicker
  },

  watch: {

    
  },

  

mounted () {

   
    axios.get('api/salesorders/'+this.$route.params.id)
      .then(response => {
        this.salesorder =  response.data.data
        console.log(this.$route.params.id);
        

        this.salesorder.products.forEach((row, i)=> {
           //row.qtynew=1
           //row.qty= JSON.parse(JSON.stringify(row.qtynew));
            Vue.set(row, 'qtynew', row.qty);
           this.product_grid.push(row)
        })
      })
      .catch(error => {
        console.log(error);
    });


    axios.get('api/invoices/get/nextinvnumber')
    .then(response => {
      this.invnumber =  response.data
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


    axios.get('api/products')
      .then(response => {
        this.productspro =  response.data.data
        
      })
      .catch(error => {
        console.log(error);
    });

},

  methods:{

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
         if(this.salesorder.tax_id==row.id){
          this.salesorder.tax_percentage =row.tax_percentage
           
          return
         }
      })

       
    },

    change_discount_type:function(){
      
      this.caculate_discount()
     
    },

    change_shipment_date:function(){
      this.shipment_date_error=false

      //alert(this.salesorder.shipment_date)

    },

    create_new: function(){
       let self = this;
      //alert(this.purchase_order_number);
       
      // if(this.shipment_date==''){
      //    this.shipment_date_error=true
      //  return 
      // }

      let payload = {
          
           products:this.product_grid,
           invnumber:this.invnumber,
           status:this.status,
           salesorder_id:this.salesorder.id,
           due_date:this.due_date,
           total:this.total(),


           sonumber: this.sonumber,
           customer_id:   this.customer_id,
           order_date:this.created_date,
           shipment_date:this.shipment_date,
           status:this.status,
           discount:this.discount,
           discount_type:this.discount_type,
           tax_percentage:10,
           tax_code:'GST'

       };


      axios.post('api/invoices', payload)
      .then(function (response) {
        self.$router.push("/invoices")
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    },

    
    
    delete_row:function($event){
      console.log($event.target)
      //alert($event.target.id)
      this.product_grid.splice($event.target.id,1)
    },

    sub_total:function(){
      let sum=0
      this.product_grid.forEach((row, i)=> {
          sum=sum+ row.unit_price*row.qtynew
      })
      return sum;
    },

    caculate_tax:function(){
      this.total_tax =(this.sub_total()*this.salesorder.tax_percentage/100).toFixed(2) 
      return this.total_tax;
    },

    total:function(){
        return (Number(this.sub_total()) + Number(this.caculate_tax())-Number(this.caculate_discount()) )
    },

    caculate_discount:function(){
      if(this.salesorder.discount_type=='d'){
        this.discount_total= this.salesorder.discount
        
      }

      if(this.salesorder.discount_type=='p'){
        this.discount_total= ( Number(this.sub_total()) + Number(this.total_tax))* this.salesorder.discount/100
        console.log(this.sub_total())
      }

      return this.discount_total
    }
  }
 }

</script>