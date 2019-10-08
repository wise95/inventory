<template>

	<div class="columns" style="background-color: #fff">

	<div class="column is-6">

                <h6 class="subtitle is-6 product_h6"> Personal Info </h6>

				<div class="field ">
					<label class="label">First Name</label>
					<div class="control">
						<input class="input is-small" type="text" name="first_name" v-model="customer.firstname">
					</div>
				</div>


				<div class="field">
					<label class="label">Last Name</label>
					<div class="control">
						<input class="input is-small" type="text" name="last_name" v-model="customer.lastname">
					</div>
				</div>


			


				

			<h6 class="subtitle is-6 product_h6"> Billing Address </h6>

				<div class="field ">
					<label class="label">Address</label>
					<div class="control">
						<input class="input is-small" type="text" name="bill_address" v-model="customer.bill_address">
					</div>
				</div>

				<div class="field ">
					<label class="label">City</label>
					<div class="control">
						<input class="input is-small" type="text" name="bill_city"  v-model="customer.bill_city">
					</div>
				</div>

				<div class="field ">
					<label class="label">State</label>
					<div class="control">
						<input class="input is-small" type="text" name="bill_state"  v-model="customer.bill_state">
					</div>
				</div>

				<div class="field ">
					<label class="label">Zip</label>
					<div class="control">
						<input class="input is-small" type="text" name="bill_zip"  v-model="customer.bill_zip">
					</div>
				</div>


           
             <h6 class="subtitle is-6 product_h6"> Shipping Address </h6>

           

		   <a class="button is-primary is-small" @click="update">Save</a>
				


				
			</div>

			

			<div class="column is-6">

				<div style="margin-top:3em">

					<div class="field">
					<label class="label">Email</label>
					<div class="control">
						<input class="input is-small" type="text" name="email" v-model="customer.email">
					</div>
				</div>



				<div class="field">
					<label class="label">Phone</label>
					<div class="control">
						<input class="input is-small" type="text" name="phone" v-model="customer.phone">
					</div>
				</div>

				<h6 class="subtitle is-6 product_h6"> Shipping Address </h6>

				<div class="field ">
					<label class="label">Address</label>
					<div class="control">
						<input class="input is-small" type="text" name="ship_address" v-model="customer.ship_address">
					</div>
				</div>

				<div class="field ">
					<label class="label">City</label>
					<div class="control">
						<input class="input is-small" type="text" name="ship_city"  v-model="customer.ship_city">
					</div>
				</div>

				<div class="field ">
					<label class="label">State</label>
					<div class="control">
						<input class="input is-small" type="text" name="ship_state"  v-model="customer.ship_state">
					</div>
				</div>

				<div class="field ">
					<label class="label">Zip</label>
					<div class="control">
						<input class="input is-small" type="text" name="ship_zip"  v-model="customer.ship_zip">
					</div>
				</div>
			
           </div>
     	

			</div>

		</div>


</template>

<script>
import axios from 'axios';



export default {
	name:"productinfo",
	data () {
		return {
			msg: '',
			customer:'',
			upload_file:'',
			file:'',
			url: ''
		}
	},

	watch: {
		'$route' (to, from) {
        axios.get('api/customers/'+to.params.id)
		.then(response => {
			this.customer =  response.data.data
            this.url=''
			
		})
		.catch(error => {
			console.log(error);
		});
        }
    },

	mounted () {

		axios.get('api/customers/'+this.$route.params.id)
		.then(response => {
			this.customer =  response.data.data
			
			
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