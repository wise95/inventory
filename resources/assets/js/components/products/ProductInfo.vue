<template>

	<div class="columns" style="background-color: #fff">
		 <div class="column is-12">
    
	
	<div class="columns"> 
	<div class="column is-6">
		<h4 class="subtitle is-6 product_h6"> Product Details </h4>
	</div>
	</div>
    
	<div class="columns">

		<div class="column is-3">
			<div class="label">Product Name </div>
            <div v-if="!isEdit" class="label_value">{{product.name }}</div>
			<div class="control" v-if="isEdit">
                <input class="input is-small" type="text" v-model="product.name" v-validate="'required'" name='name'>
                  <span class="error">{{ errors.first('name') }}</span>
            </div>
			
		</div>

		<div class="column is-3">
			<div class="label">SKU </div>
            <div  v-if="!isEdit" class="label_value">{{product.sku }}</div>
			 <div  v-if="isEdit" class="control">
                <input class="input is-small" type="text" v-model="product.sku" v-validate="'required'" name='sku'>
                <span class="error">{{ errors.first('sku') }}</span>
              </div>
			
		</div>

		<div class="column is-3">
			<div class="label">Category </div>
            <div  class="label_value"  v-if="(!isEdit)">{{product.category.name }}</div>

			 <div  v-if="(isEdit)" class="field">
              
                <div class="select is-small"   >
                    <select v-model="category">
                      <option    v-for="(category, index) in categories" :value="category.id"  >{{category.name}}</option>
                    
                   
                    </select>
                  </div>
              </div>
			
		</div>

		<div class="column is-3">
			<div class="label">Vendor </div>
            <div  class="label_value" v-if="(!isEdit) ">{{product.vendor.name }}</div>

			<div  v-if="(isEdit)" class="field">
            <div class="select is-small"   >
             <select v-model="vendor_id" @change="vendorChanged">
                <option v-for="(vendor, index) in vendors" :value="vendor.id">{{vendor.name}}</option>
             </select> 
			</div>
			</div>

			
		</div>

	</div>
    
		<div class="columns">

		<div class="column is-3">
			<div class="label">Product Image </div>
			
			
			
			<figure class="image is-128x128">
				<a href="javascript:void(0)" @click="selectFile">
  					<img v-if="product.image==null" :src="url" />
  					<img v-else :src="'/images/'+product.image" />
				</a>

				<input class="file-input" type="file" id="product_image" :name="upload_file" @change="fileSelected">
			</figure>
			

			
		</div>

		<div class="column is-3">
			<div class="label">Barcode </div>
            <div class="label_value">
				<figure class="image is-128x128">
  				 <div v-html="product.barcode"> </div>
				</figure>
		   </div>
			
		</div>

		</div>


		  <div class="columns"> 
			<div class="column is-6">
			<h4 class="subtitle is-6 product_h6"> Product Price </h4>
		    </div>
	      </div>

		  <div class="columns">

		<div class="column is-3">
			<div class="label">Purchase Price </div>
            <div v-if="!isEdit" class="label_value">{{product.productprice.purchase_price | Number }}</div>
			<div class="control" v-if="isEdit">
                <input class="input is-small" type="text" v-model="product.productprice.purchase_price" >
               
            </div>
			
		</div>

		<div class="column is-3">
			<div class="label">Sale Price </div>
            <div v-if="!isEdit" class="label_value">{{product.productprice.selling_price | Number }}</div>
			<div class="control" v-if="isEdit">
                <input class="input is-small" type="text" v-model="product.productprice.selling_price" >
               
            </div>
		</div>

		</div>

				  <div class="columns"> 
			<div class="column is-6">
			<h4 class="subtitle is-6 product_h6">Inventory</h4>
		    </div>
	      </div>

		  <div class="columns">

		<div class="column is-3">
			<div class="label">Stock In Hand</div>
			<div  v-if="!isEdit" class="label_value">{{product.qty }}</div>
			<div  v-if="isEdit" class="control">
                <input class="input is-small" type="text" v-model="product.qty" v-validate="'required'" name='qty'>
                <span class="error">{{ errors.first('qty') }}</span>
              </div>
			
		</div>

		<div class="column is-3">
			<div class="label">Reorder Level </div>
            <div  v-if="!isEdit" class="label_value">{{product.reorder_level }}</div>
			<div  v-if="isEdit" class="control">
                <input class="input is-small" type="text" v-model="product.reorder_level" v-validate="'required'" name='reorder_level'>
                <span class="error">{{ errors.first('reorder_level') }}</span>
              </div>
			
		</div>

		</div>
        
		<div class="columns">
			<div class="column is-3">
			
            <a v-if="(!isEdit)" class="button is-primary is-small" @click="onEditMode" href="javascript:void(0)">Edit </a>
			<a v-if="(isEdit)" class="button is-primary is-small" @click="onUpdate" href="javascript:void(0)">Update </a>
			</div>
		</div>

		


   </div>
</div>


</template>

<script>
import axios from 'axios';
import { Validator } from 'vee-validate';


const dict = {
  custom: {
    name: {
      required: 'Product Name is empty'
    },
    sku: {
      required: () => 'SKU is empty'
	},
	
	 qty: {
      required: () => 'Stock In Hand is empty'
    },
  }
};

Validator.localize('en', dict);


export default {
	name:"productinfo",
	data () {
		return {
			isEdit:false,
			msg: '',
			product:'',
			upload_file:'',
			file:'',
			url:'https://bulma.io/images/placeholders/1280x960.png',
			categories:[],
			vendors:[],
			category:'',
			vendor_id:''
		}
	},

	watch: {
		'$route' (to, from) {
        axios.get('api/products/'+to.params.id)
		.then(response => {
			this.product =  response.data.data
			this.category= this.product.category.id
			this.vendor_id= this.product.vendor.id
			
			if(this.isEdit==true) this.isEdit=false
			
		})
		.catch(error => {
			console.log(error);
		});
        }
	},
	
	filters: {
        Number(value) {
              return parseFloat(value).toFixed(2);
		}
	},

	mounted () {

		axios.get('api/products/'+this.$route.params.id)
		.then(response => {
			this.product =  response.data.data
			this.category= this.product.category.id
			this.vendor_id= this.product.vendor.id
		})
		.catch(error => {
			console.log(error);
		});


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

		selectFile:function(){
			if(this.isEdit){
			 document.getElementById("product_image").click()
			}
		},

        onEditMode:function(){

            this.isEdit=true;
		},

		onUpdate:function(){

			let formData = new FormData()
			formData.append('id',this.product.id)
			formData.append('name',this.product.name)
			
			formData.append('sku',this.product.sku)
			formData.append('category_id',this.category)
			formData.append('vendor_id',this.vendor_id),
			formData.append('purchase_price',this.product.productprice.purchase_price),
			formData.append('selling_price',this.product.productprice.selling_price),
			formData.append('qty',this.product.qty),
			formData.append('reorder_level',this.product.reorder_level),
            formData.append('upload_file',this.file)
			/*
			formData.append('category_id',this.category),
			formData.append('desc', this.desc),
			formData.append('vendor_id',this.vendor),
			formData.append('purchase_price',this.purchase_price),
			formData.append('selling_price',this.selling_price),
			formData.append('upload_file',this.file) */

			this.product.category.name=this.categories.find(x=>x.id==this.category).name
            this.product.vendor.name=this.vendors.find(x=>x.id==this.vendor_id).name

			axios.post('api/products/update', formData,
			{
				headers: {'Content-Type': 'multipart/form-data'}
				
			})
			.then(response=> {
				//self.$router.push("/products")
				console.log(response);
              this.isEdit=false
			  this.$notify({
                group: 'foo',
                type:  response.data.type,
                title: response.data.title,
                text:  response.data.message
               });
			})
			.catch(function (error) {
				console.log(error);
			});


            
		},

		uplaodFile:function(){
			
			let formData = new FormData();
			formData.append('upload_file',this.file)
			formData.append('id',this.$route.params.id)
			axios.post( 'api/product/upload',
				formData,
				{
					headers: {
						'Content-Type': 'multipart/form-data'
					}
				}
				).then(function(){



				})
				.catch(function(){
					console.log('FAILURE!!');
				});

				
		},
		fileSelected:function($event){
			this.file =$event.target.files[0]
			this.url = URL.createObjectURL(this.file)
			this.product.image= null
		}
	}

}

</script>