<template>

	<div class="columns" style="background-color: #fff">

	<div class="column is-6">

                <h6 class="subtitle is-6 product_h6"> Vendor Info </h6>

				<div class="field ">
					<label class="label">Vendor Name</label>
					<div class="control">
						<input class="input is-small" type="text" name="name" v-model="vendor.name">
					</div>
				</div>


				<div class="field">
					<label class="label">Contact Person</label>
					<div class="control">
						<input class="input is-small" type="text" name="contactperson" v-model="vendor.contact">
					</div>
				</div>

                <div class="field">
					<label class="label">Phone</label>
					<div class="control">
						<input class="input is-small" type="text" name="phone" v-model="vendor.phone">
					</div>
				</div>


				 <div class="field">
					<label class="label">Email</label>
					<div class="control">
						<input class="input is-small" type="text" name="email" v-model="vendor.email">
					</div>
				</div>

               

			


				
			</div>

			

			<div class="column is-6">

				
                <h6 class="subtitle is-6 product_h6"> Billing Info </h6>

			    <div class="field">
					<label class="label">Address</label>
					<div class="control">
						<input class="input is-small" type="text" name="address" v-model="vendor.address">
					</div>
				</div>


                <div class="field">
					<label class="label">City</label>
					<div class="control">
						<input class="input is-small" type="text" name="city" v-model="vendor.city">
					</div>
				</div>

                <div class="field">
					<label class="label">State</label>
					<div class="control">
						<input class="input is-small" type="text" name="state" v-model="vendor.state">
					</div>
				</div>


				<div class="field">
					<label class="label">Zip</label>
					<div class="control">
						<input class="input is-small" type="text" name="zip" v-model="vendor.zip">
					</div>
				</div>


				

				

			
			
           </div>
     	

			</div>

		</div>


</template>

<script>
import axios from 'axios';



export default {
	name:"vendorinfo",
	data () {
		return {
			msg: '',
			vendor:'',
			upload_file:'',
			file:'',
			url: ''
		}
	},

	watch: {
		'$route' (to, from) {
        axios.get('api/vendors/'+to.params.id)
		.then(response => {
			this.vendor =  response.data.data
            this.url=''
			
		})
		.catch(error => {
			console.log(error);
		});
        }
    },

	mounted () {

		axios.get('api/vendors/'+this.$route.params.id)
		.then(response => {
			this.vendor =  response.data.data
			
			
		})
		.catch(error => {
			console.log(error);
		});


	},
	methods:{

		update: function(){
			let formData = new FormData()
			formData.append('firstname',this.customer.firstname)
			formData.append('lastname',this.customer.lastname)
			formData.append('email',this.customer.email)
			formData.append('phone',this.customer.phone)
			formData.append('id',this.customer.id)
			formData.append('bill_address',this.customer.bill_address)
			formData.append('bill_city',this.customer.bill_city)
			formData.append('bill_state',this.customer.bill_state)
			formData.append('bill_zip',this.customer.bill_zip)
			formData.append('ship_address',this.customer.ship_address)
			formData.append('ship_city',this.customer.ship_city)
			formData.append('ship_state',this.customer.ship_state)
			formData.append('ship_zip',this.customer.ship_zip)

			axios.post('api/customers/update', formData,
			{
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			}
			)
			.then(function (response) {
			
				
			})
			.catch(function (error) {
				console.log(error);
			});

		},

	
	}

}

</script>