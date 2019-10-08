<template>

<section>
  <div class="columns" style="background-color:#ffffff;">
 
  <div class="column is-12" style="background-color:#ffffff;padding-top: 13px;padding-left: 2rem;">

   <div class="columns" style="margin-bottom:0px">
		<div class="column is-12">

     

		</div>
    </div>

    <div class="columns" style="margin-bottom:0px">
		<div class="column is-3">
			<div class="label">Logo </div>
            <div class="label_value">

                <!--
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

                  <a href="javascript:void(0)"></i></a> 
                  <a href="javascript:void(0)"  > <i  class="far fa-trash-alt"></i></a> 
                  
                  </div> 
                 </div> -->

                 </div>
                 

             
			
		</div>

		<div class="column is-3">
			<div class="label">Company Name </div>
            <div class="label_value"> 
              
                <div class="control">
                <input class="input is-small" type="text" v-model="setting.company_name" v-validate="'required'" name='company_name'>
                <span class="error">{{ errors.first('sku') }}</span>
              </div>
              
            </div>
			
		</div>

		<div class="column is-3">
			<div class="label">Contact Person </div>
            <div class="label_value" >Jim Yale</div>
			
		</div>

		<div class="column is-3">
			<div class="label">Phone </div>
            <div class="label_value"><div class="control">
                <input class="input is-small" type="text" v-model="setting.phone" v-validate="'required'" name='phone'>
                <span class="error">{{ errors.first('sku') }}</span>
              </div>
              </div>
			
		</div>

	</div>

    </div>
  </div>

</section>
  

</template>


<script>
import axios from 'axios'

 export default {
 name:"companyprofile",
 data () {
  return {
       url:'/images/logo.png',
       setting:'',

  }
 },

 mounted () {
   axios.get('api/setting')
    .then(response => {
      this.setting =  response.data.data
    })
    .catch(error => {
      console.log(error);
    });


  },

 }

</script>