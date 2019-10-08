<template>

  <section>
    <div class="columns" style="margin-left:-2.7rem;padding-top: 13px;margin-bottom: 13px;">
      <div class="toolbar">

       <div class="tool_strip">
         <h2 class="title is-6"> Create New Customer </h2>
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
              <label class="label is-field-title">First Name</label>
              <div class="control">
                <input class="input is-small" type="text" v-model="firstname" v-validate="'required'" name='firstname'>
                  <span class="error">{{ errors.first('firstname') }}</span>
              </div>
            </div>

          </div>

            <div class="column is-6">
            <div class="field">
              <label class="label is-field-title">Last Name</label>
              <div class="control">
                <input class="input is-small" type="text" v-model="lastname" >
                  <span class="error">{{ errors.first('lastname') }}</span>
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
      required: 'Product Name is empty'
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
   
    firstname:'',
    lastname:'',
    email:'',
    phone:'',
    

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
      let payload = {
       firstname: this.firstname,
       lastname:this.lastname,
       email: this.email,
       phone:this.phone,
       
       
     };

     let formData = new FormData()
     formData.append('firstname',this.firstname)
     formData.append('lastname',this.lastname)
     formData.append('email',this.email)
     formData.append('phone',this.phone),
     


     axios.post('api/customers', formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      )
     .then(function (response) {
        self.$router.push("/customers")
        console.log(response);
     })
     .catch(function (error) {
        console.log(error);
     });

   },

   
  
  }
}

</script>