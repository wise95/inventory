<template>
      <div class="columns">
        <div class="column is-12">

      <table class="table is-fullwidth">
       <thead>
           <tr>
            <th>Product Name </th>
            <th>Ordered Qty</th>
            <th>Received Qty</th>
            <th>Qty to Receive</th>
           </tr>
       </thead>
         <tbody>
          <tr v-for="(product, index) in purchaseorder.products">
            <td>{{product.name}} </td>
            <td>{{product.qty}}  </td>
            <td>{{purchaseorder.products[index].received_qty}} </td>
            <td><input   :disabled="product.qty==product.received_qty" :id="product.id" v-on:change="textChangeHandler($event)"  v-model='purchaseorder.products[index].qty_to_receive' />
            <span v-if="purchaseorder.products[index].error==true" class="error">Invalid Quantity</span>
            </td>
          </tr>
         </tbody>

      </table>

      <a v-if="is_valid_save" href="javascript:void(0)" class="button is-primary is-small" @click="update_received_qty"> update </a>
      <span v-if="qty_check==false" class="error">Unable to save, Invalid Quantity</span> 

      <div class="pr_table">
          <table class="table is-fullwidth" style="background-color: #f9f9f9;">
           <thead>
             <tr>
              <th> Purchase Receive# </th>
              <th> Received On</th>
              <th> Bill #</th>
              <th> </th>
             </tr>
           </thead>

           <tbody>
             <tr v-for="(row, index) in purchaseorder.received">
              <td><a href="javascript:void(0)" @click="show_received_products" :id="row.prnumber" >{{row.prnumber}} </a> </td>
              <td>{{row.date}}</td>
              <td v-if="row.billnumber !=null "> {{row.billnumber}} </td>
              <td v-else > <a href="javascript:void(0)" :id="index"  @click="generate_bill" > Create Bill </a> </td>
              <td><a href="javascript:void(0)" v-confirm="{ok: delete_row, cancel: doNothing, message: 'Are you sure, you want to delete this received record?'}" :id="index"  > <i  class="far fa-trash-alt"></i></a> </td>
             </tr>
           </tbody>

          </table>

    </div>


    <div class="modal" v-bind:class="{ 'is-active': modal_display }">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Modal title</p>
          <button class="delete" aria-label="close" @click="popup_close"></button>
        </header>
        <section class="modal-card-body">
           
           <table class="table is-fullwidth" style="background-color: #f9f9f9;">
           <thead>
             <tr>
              <th> Product Name</th>
              <th> Qty</th>
             </tr>
           </thead>

           <tbody>
             <tr v-for="(row, index) in received_products">
              <td>{{row.name}}</td>
              <td>{{row.received_qty}} </td>
             </tr>
           </tbody>

          </table>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success">Save changes</button>
          <button class="button">Cancel</button>
        </footer>
      </div>
    </div>






     </div>
      </div>
     
  

</template>


<script>
import axios from 'axios'



export default {
   name:"purchaseorders",
   data () {
    return {
      msg: '',
      purchaseorder:[],
      
      modal_display:false,
      received_products:[],
      is_valid_save:true,
      qty_check:true,
    }
  },

  components:{
      
  },

  mounted () {
   axios.get('api/purchaseorders/get/'+this.$route.params.id)
    .then(response => {
       this.purchaseorder =  response.data.data
       this.purchaseorder.products.forEach((obj, index) => {
       this.purchaseorder.products[index].error=false
       this.checkQuantity();
       })
    })
    .catch(error => {
      console.log(error);
    });
  },

  methods:{
    checkQuantity:function(){
         this.purchaseorder.products.forEach((obj, index) => {
            if(parseFloat(this.purchaseorder.products[index].qty)==parseFloat(this.purchaseorder.products[index].received_qty)){
              this.is_valid_save=false
              console.log("index "+obj.qty+" "+index+" "+obj.received_qty)
            }else{
              this.is_valid_save=true
            }
         });
        return this.is_valid_save
        
    },

    validToSave:function(){
       let valid=true

       
         this.purchaseorder.products.forEach((obj, index) => {

           // check for empty string
           if(obj.qty_to_receive!=null){
             if(obj.qty_to_receive.trim()==="") valid= false;

           }
           
           if(obj.qty_to_receive!=null){
             if(isNaN(obj.qty_to_receive) )valid= false
           }

           if(obj.qty_to_receive==0) valid= false

           if(obj.qty_to_receive==null) valid= false

           
           if(obj.error==true) valid= false;
          
         })

         
        this.qty_check = valid
        return valid
         
    },

    textChangeHandler:function($event){

       this.purchaseorder.products.forEach((obj, index) => {
            if (obj["id"] == $event.target.id) {
              //this.product_grid[index].qty = this.product_grid[index].qty + 1;
              //isProductInTable = true;
              //qty_to_receive
              //received_qty
              //qty\

              //console.log(parseFloat(obj.qty_to_receive)+parseFloat(obj.received_qty))

              // check for numbers


              if(isNaN(obj.qty_to_receive)){
                obj.error=true
                Vue.set(this.purchaseorder.products, index, obj)
              }else{
                if((parseFloat(obj.qty_to_receive)+parseFloat(obj.received_qty))> parseFloat(obj.qty)){
                  obj.error=true
                  Vue.set(this.purchaseorder.products, index, obj)
                  //console.log(obj.qty_to_receive)
                }else{
                  obj.error=false
                  Vue.set(this.purchaseorder.products, index, obj)
                }
            }
             
              //console.log(event.currentTarget.id)

            }
          });
      
    },
    update_received_qty: function(){
      let self = this;

      // check for quantity level
      
      if(this.validToSave()){
          let payload = {
              products:this.purchaseorder.products,
              id:this.purchaseorder.id,
              ponumber:this.purchaseorder.ponumber
          };
          axios.post('api/purchaseorders/update_received_qty', payload)
          .then(function (response) {
            
            //console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

          // refrsh the page
          axios.get('api/purchaseorders/get/'+this.$route.params.id)
          .then(response => {
              this.purchaseorder =  response.data.data
          })
          .catch(error => {
          
          });

      }else{

        this.qty_check =false;

      }


    },
    popup_close: function(){
        this.modal_display=false
    },
    show_received_products: function($event){
        
        axios.get('api/purchaseorders/get/'+this.$route.params.id+'/receivedproducts/'+$event.target.id)
        .then(response => {
          this.received_products =  response.data.data
        })
        .catch(error => {
          console.log(error);
        });

       this.modal_display=true

    },
    generate_bill : function($event){
       let payload = {
           id:this.purchaseorder.received[$event.target.id].id,
           ponumber:this.purchaseorder.ponumber,
           purchase_order_id:this.purchaseorder.id
       };

      axios.post('api/purchaseorders/createbill', payload)
      .then(response =>{
        this.purchaseorder.received[$event.target.id].billnumber = response.data;
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    },

    doNothing:function(){

    },

    delete_row:function(dialog){

       let payload = {
           id:this.purchaseorder.received[dialog.node.id].id
       };

       axios.post('api/purchaseorders/'+this.$route.params.id+'/deletereceived', payload)
      .then(response =>{
             this.$notify({
                group: 'foo',
                type:  response.data.type,
                title: response.data.title,
                text:  response.data.message
               });
      }).catch(function (error) {
         console.log(error);
      });


      axios.get('api/purchaseorders/get/'+this.$route.params.id)
       .then(response => {
        this.purchaseorder = Object.assign({},  response.data.data)
        this.purchaseorder.products.forEach((obj, index) => {
          if(obj.qty==obj.received_qty){
            console.log("index k "+obj.qty+" "+index+" "+obj.received_qty)
          }else{
            console.log("not equal")
          }
          
        })
       })
       .catch(error => {
       console.log(error);
       });

      

         

       
    }
    
  }
 }

</script>