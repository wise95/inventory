<template>

  <section>
    <div class="columns" style="margin-left:-2.7rem;padding-top: 13px;margin-bottom: 13px;">
      <div class="toolbar">

       <div class="tool_strip">
         <h2 class="title is-6"> Create New Product </h2>
       </div>

       
       
       <div>
        <a class="button is-primary is-small" @click="create_new">Save</a>
        <router-link class="button is-primary is-small" :to="'/purchaseorders/create'" >Create New</router-link>
        
      </div>
      
    </div>

  </div>

  <div class="columns" style="background-color:#ffffff">

    <div class="column is-12" style="margin-left:-2.7rem; background-color:#ffffff;padding-top: 13px;padding-left: 1.5rem;">


     <div class="columns">

       <div class="column is-6">

        <div class="columns" style="margin-bottom:0px">
          
          <div class="column is-6">
            <div class="field">
              <label class="label is-field-title">Product Name</label>
              <div class="control">
                <input class="input is-small" type="text" v-model="name" v-validate="'required'" name='name'>
                  <span class="error">{{ errors.first('name') }}</span>
              </div>
            </div>

          </div>

            <div class="column is-6">
            <div class="field">
              <label class="label is-field-title">Barcode</label>
              <div class="control">
                <input class="input is-small" type="text" v-model="barcode" >
              </div>
            </div>

          </div>

        </div>

        <div class="columns" style="margin-bottom:0px">
          
          <div class="column is-6">
            <div class="field">
              <label class="label is-field-title">SKU</label>
              <div class="control">
                <input class="input is-small" type="text" v-model="sku" v-validate="'required'" name='sku'>
                <span class="error">{{ errors.first('sku') }}</span>
              </div>
            </div>

          </div>

          <div class="column is-6">
              <div class="field">
                <label class="label is-field-title">Category</label>
                <div class="select is-small"   >
                    <select v-model="category">
                      <option v-for="(category, index) in categories" :value="category.id"  >{{category.name}}</option>
                    
                   
                    </select>
                  </div>
              </div>

          </div>
        </div>

        <div class="columns" style="margin-bottom:0px">
            <div class="column is-12">
              <div class="field">
              <label class="label is-field-title">Description</label>
              <div class="control">
                <textarea class="is-small" style="width:100%" v-model="desc"></textarea>
              </div>
            </div>

            </div>

        </div>



      </div>


      <div class="column is-6">

        <div class="columns" style="margin-bottom:0px">
          <div class="column is-4">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img :src="url" alt="Placeholder image">
                 
                </figure>
              </div>

              
              <div class="card-content" style="padding-top: 0.5rem;padding-bottom: 0.5rem">
                <div class="content" style="display:flex;justify-content:space-around">

                  <div class="field" style="margin-bottom: 0px;">
                    <div class="file is-small">
                      <label class="file-label">
                        <input class="file-input" type="file" :name="upload_file" @change="fileSelected">
                        <span class="file-cta" style="background-color:white;border-width:0px">
                          <span class="file-icon">
                            <i class="far fa-plus-square"></i>
                          </span>
                          
                        </span>
                      </label>
                    </div>
                  </div>

                  <a href="javascript:void(0)"  ></i></a> 


                  <a href="javascript:void(0)"  > <i  class="far fa-trash-alt"></i></a> 
                  
                </div>
              </div>
            </div>




          </div>

        </div>
      </div>



    </div>


    <div class="columns">

      <div class="column is-3">
              <div class="field">
                <label class="label is-field-title">Vendor</label>
                <div class="select is-small">
                    <select v-model="vendor" @change="vendorChanged">
                      <option v-for="(vendor, index) in vendors" :value="vendor.id"  >{{vendor.name}}</option>
                     
                    </select> 
                  </div>
              </div>

              

      </div>
      <div class="column is-3">
              <div> <label> {{vendorInfo.name}}</label> </div>
              <div> <label> {{vendorInfo.city}} </label> </div>
              <div> <label> {{vendorInfo.state}} {{vendorInfo.zip}} </label> </div>
             
      </div>
      

    </div>


    <div class="columns">

      <div class="column is-6"> <h3 class="title is-6"> Product Price </h3> </div>
      <div class="column is-6"> <h3 class="title is-6"> Inventory </h3> </div>



    </div>

   
     <div class="columns">
      <div class="column is-6">
      
       <div class="columns" style="margin-bottom:0px">
          
          <div class="column is-6">
            <div class="field">
              <label class="label is-field-title">Purchase Price</label>
              <div class="control">
                <input class="input is-small" type="text" v-model="purchase_price">
              </div>
            </div>

          </div>

            <div class="column is-6">
            <div class="field">
              <label class="label is-field-title">Selling Price</label>
              <div class="control">
                <input class="input is-small" type="text" v-model="selling_price" >
              </div>
            </div>

          </div>

        </div>
      </div>
          <div class="column is-6">
      
       <div class="columns" style="margin-bottom:0px">
          
          <div class="column is-6">
            <div class="field">
              <label class="label is-field-title">Quantity on Hand</label>
              <div class="control">
                <input class="input is-small" type="text" v-model="retail_price">
              </div>
            </div>

          </div>

            <div class="column is-6">
            <div class="field">
              <label class="label is-field-title">Reorder Level</label>
              <div class="control">
                <input class="input is-small" type="text" v-model="wholesale_price" >
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>


    
    
 <a class="button is-primary is-small" @click="create_new">Save</a>

 <a class="button is-primary is-small" @click="testMe">Test</a>

  </div>

  
  


</div>


</section>  

</template>


<script>
import axios from 'axios'
import { Validator } from 'vee-validate';


const dict = {
  custom: {
    name: {
      required: 'Product Name is empty'
    },
    sku: {
      required: () => 'SKU is empty'
    }
  }
};

Validator.localize('en', dict);



export default {
 name:"purchaseorders",
 data () {
  return {
   
    name:'',
    barcode:'',
    sku:'',
    category:'',
    purchase_price:'',
    selling_price:'',
    desc:'',
    vendor:'',
    wholesale_price:'',
    retail_price:'',
    file:'',
    url:'https://bulma.io/images/placeholders/1280x960.png',
    categories:[],
    vendors:[],
    keyword:'',
    key:'',
    unit_price:'',
    qty:'',
    product_grid:[],
    vendorInfo:''

  }
},

components:{
 
},

watch: {
  
},


mounted () {

    axios.get('api/categories')
    .then(response => {
      this.categories =  response.data.data
      
      
    })
    .catch(error => {
      console.log(error);
    });

    axios.get('api/vendors')
    .then(response => {
      this.vendors =  response.data.data
      
      
    })
    .catch(error => {
      console.log(error);
    });

},

methods:{


 testMe:function(){
  this.$store.state.totalTvCount=15
},
  create_new: function(){
  

     let formData = new FormData()
     formData.append('name',this.name)
     formData.append('barcode',this.barcode)
     formData.append('sku',this.sku)
     formData.append('category_id',this.category),
     formData.append('desc', this.desc),
     formData.append('vendor_id',this.vendor),
     formData.append('purchase_price',this.purchase_price),
     formData.append('selling_price',this.selling_price),
     formData.append('upload_file',this.file)


     axios.post('api/products', formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      )
     .then(function (response) {
        self.$router.push("/products")
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

    },
    fileSelected:function($event){
      this.file =$event.target.files[0]
      this.url = URL.createObjectURL(this.file);

    },

    vendorChanged:function($event){
      axios.get('api/vendors/'+$event.target.value)
      .then(response => {
       this.vendorInfo =  response.data.data
      })
      .catch(error => {
       console.log(error);
      });
        
    }
  }
}

</script>