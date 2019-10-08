<template>
<header class="app_header">
                  <section> 

                  
                   <div class="header_container">

                       <div class="columns" >
                          <div class="column is-3">
                               	<span class="logo"> Dynamic<span class="txt">app</span> </span>
                          </div>

                          <div class="column is-3">
                               
                          <div class="search">
                              <input type="text" class="searchTerm" placeholder="What are you looking for?">
                              <button type="submit" class="searchButton">
                                <i class="fa fa-search"></i>
                            </button>
                          </div>

                          </div>

                          <div class="column is-3">
                             <router-link :to="'/vendors'" ><img src="/images/add_so.png" width="25px" /></router-link> 
                             <router-link :to="'/vendors'" ><img src="/images/add_po.png" width="25px" /></router-link> 
                             <router-link :to="'/vendors'" ><img src="/images/add_user.png" width="25px" /></router-link> 
                             

                          </div>

                          <div class="column is-3" style="display:flex;justify-content:end;padding-right:30px;">
                          

                           <user_profile_menu> </user_profile_menu>
                            <!--
                            <div class="dropdown" v-bind:class="{ 'is-active': isProfileDropdownActive }">
                              <div class="dropdown-trigger">
                                <button @click="showprofiledropdown" class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                                  <span>Dropdown button</span>
                                  <span class="icon is-small">
                                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                                  </span>
                                </button>
                              </div>
                              <div class="dropdown-menu" id="dropdown-menu" role="menu">
                                <div class="dropdown-content">
                                  <a href="#" class="dropdown-item">
                                    Dropdown item
                                  </a>
                                  <a class="dropdown-item">
                                    Other dropdown item
                                  </a>
                                  <a href="#" class="dropdown-item is-active">
                                    Active dropdown item
                                  </a>
                                  <a href="#" class="dropdown-item">
                                    Other dropdown item
                                  </a>
                                  <hr class="dropdown-divider">
                                  <a href="#" class="dropdown-item">
                                    With a divider
                                  </a>
                                </div>
                              </div>
                            </div> -->


                          </div>


                       </div>
                   </div>
                
                  </section>

              </header>


</template>


<script>
import UserProfileMenu from './user/UserProfileMenu.vue'
 export default {
   name:"header",
   data () {
    return {
      active: false,
      isAddActive:false,
      isProfileDropdownActive:false
    }
  },
  
  components:{
     user_profile_menu:UserProfileMenu 
  },
  methods: {

        showprofiledropdown:function(){
          this.isProfileDropdownActive=true
        },
        mouseOver: function(){
           this.active=true
        },
        mouseLeave: function(){
           this.active=false
        },

        showproducts:function(){
            this.isAddActive =!this.isAddActive
        },

   }

}

</script>

<style>

.grow-enter-active {
  animation: grow .5s;
}

.grow-leave-active {
  animation: grow .5s reverse;
}

@keyframes grow {
  0% {
    width: 0;
    height: 0;
  }
  50% {
    width: 200px;
  }
  100% {
    height: 200px;
  }
}

</style>