<template>
  <div class="row" style="background-color: #f5f8fa;">
       
     <div>  This is the product </div>

     <router-link to="/"> Back </router-link>

   </div>

</template>


<script>

 export default {
   name:"product",
   data () {
    return {
      msg: ''
    }
  }
 }

</script>