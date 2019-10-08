<template>

  <section>
    <div class="columns" style="margin-left:-2.7rem;padding-top: 13px;margin-bottom: 13px;">
      <div class="toolbar">

       <div class="tool_strip">
         <h2 class="title is-6"> Create New Vendor </h2>
       </div>

       <div>
        <a class="button is-primary is-small" @click="create_new">Save</a>
        <router-link class="button is-primary is-small" :to="'/customers/create'" >Create New</router-link>
        
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
              <label class="label is-field-title">Companey Name x</label>
              <div class="control">
                <input class="input is-small" type="text" v-model="name" v-validate="'required'" name='name'>
                <span class="error">{{ errors.first('name') }}</span>
              </div>
            </div>
          </div>

          <div class="column is-6">
            <div class="field">
              <label class="label is-field-title">Contact Person</label>
              <div class="control">
                <input class="input is-small" type="text" v-model="contactperson" >
                <span class="error">{{ errors.first('contactperson') }}</span>
              </div>
            </div>
          </div>
        </div>


        <div class="columns" style="margin-bottom:0px">

          <div class="column is-6">
            <div class="field">
              <label class="label is-field-title">Email</label>
              <div class="control">
                <input class="input is-small" type="text" v-model="email" v-validate="'required'" name='email'>
                <span class="error">{{ errors.first('email') }}</span>
              </div>
            </div>
          </div>

          <div class="column is-6">
            <div class="field">
              <label class="label is-field-title">Phone</label>
              <div class="control">
                <input class="input is-small" type="text" v-model="phone" >
                <span class="error">{{ errors.first('phone') }}</span>
              </div>
            </div>
          </div>
        </div>


        <div class="columns" style="margin-bottom:0px">

          <div class="column is-6">
            <div class="field">
              <label class="label is-field-title">Address</label>
              <div class="control">
                <input class="input is-small" type="text" v-model="address" v-validate="'required'" name='address'>
                <span class="error">{{ errors.first('address') }}</span>
              </div>
            </div>
          </div>

          <div class="column is-6">
            <div class="field">
              <label class="label is-field-title">City</label>
              <div class="control">
                <input class="input is-small" type="text" v-model="city" >
                <span class="error">{{ errors.first('city') }}</span>
              </div>
            </div>
          </div>
        </div>


        <div class="columns" style="margin-bottom:0px">

          <div class="column is-6">
            <div class="field">
              <label class="label is-field-title">State</label>
              <div class="control">
                <input class="input is-small" type="text" v-model="state" v-validate="'required'" name='state'>
                <span class="error">{{ errors.first('state') }}</span>
              </div>
            </div>
          </div>

          <div class="column is-6">
            <div class="field">
              <label class="label is-field-title">Zip</label>
              <div class="control">
                <input class="input is-small" type="text" v-model="zip" >
                <span class="error">{{ errors.first('zip') }}</span>
              </div>
            </div>
          </div>
        </div>

      </div>


      <div class="column is-6">


      </div>

    </div>
    
    <a class="button is-primary is-small" @click="create_new">Save</a>



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
      required: 'Company Name is empty'
    },

    address: {
      required: 'Address is empty'
    },
    sku: {
      required: () => 'SKU is empty'
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

    name:'',
    contactperson:'',
  
    email:'',
    phone:'',
    address:'',
    city:'',
    state:'',
    zip:'',
    

  }
},

components:{

},

watch: {

},


mounted () {



},

methods:{
  create_new: function(){
   let self = this;
   
   let formData = new FormData()
   formData.append('name',this.name)
   formData.append('contactperson',this.contactperson)
   formData.append('mobile',this.phone)
   formData.append('email',this.email)
   formData.append('address',this.address)
   formData.append('city',this.city)
   formData.append('state',this.state)
   formData.append('zip',this.zip)
   formData.append('country',this.coutry)

   axios.post('api/vendors', formData,
   {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }
  )
   .then(function (response) {
    self.$router.push("/vendors")
    console.log(response);
  })
   .catch(function (error) {
    console.log(error);
  });

 },



}
}

</script>