<template>

 <div class="dropdown">
  <input @focus="onFocus" v-on:focusout="onFocusOut" type="text" class='dropbtn' v-model='key' v-on:input="onTextChange" />
 
  <div class="dropdown-content" v-bind:style="{ display: d_display }">
    <a @click="onSelected(index)" v-for="(product, index) in products"  href="#">{{product}}</a>
    

     
  </div>
</div>


</template>



<script>

 export default {
   name:"dropdown-textfield",
   data () {
    return {
      key:'',
      msg: 'My Product Table',
      products :["Fanta","Coca Cola","Sprite","Water","Ginger Beer"],
      products2 :["Fanta","Coca Cola","Sprite","Water","Ginger Beer"],
      d_display : 'none'
    }
  },
  methods:{
         onTextChange: function(){
          
          this.products=this.products2.filter(item=>{
                if(item.indexOf(this.key)>=0){
                    return item
                }
            })

         },

         onSelected: function(index){
          this.key= this.products2[index]
          this.d_display='none'
         },

         onFocus:function(){
          this.d_display='block'
         },
         onFocusOut:function(){
           //this.d_display='none'
         }

  }


 }

</script>



<style scoped>
/* Style The Dropdown Button */
.dropbtn {
    font-size: 13px;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
    position: relative;
    display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
}

.inactive{
   display: none;
}

/* Links inside the dropdown */
.dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

/* Change color of dropdown links on hover 
.dropdown-content a:hover {background-color: #f1f1f1} */

/* Show the dropdown menu on hover */


/* Change the .dropdown:hover .dropdown-content {
    display: block;
} color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {
    background-color: #3e8e41;
}
</style>