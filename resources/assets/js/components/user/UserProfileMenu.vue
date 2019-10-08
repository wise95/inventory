<template>



                            <div class="dropdown is-right" v-bind:class="{ 'is-active': isProfileDropdownActive }">
                              <div class="dropdown-trigger">
                              
                                 <div class="avator avatar-sm"  @click="showprofiledropdown"  aria-haspopup="true" aria-controls="dropdown-me">
                                    <img class="round_image" src="/images/avator.jpg"/>
                                 </div>
                              </div>
                              <div class="dropdown-menu" id="dropdown-menu" role="menu">
                                <div class="dropdown-content">
                                  <a href="#" class="dropdown-item">
                                    Hello
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
                                  <a v-if="isLogedIn" href="#"  @click='logout' class="dropdown-item">
                                    Log Out
                                  </a>
                                </div>
                              </div>
                            </div>


        

</template>


<script>
import axios from 'axios'
 export default {
   name:"userprofilemenu",
   data () {
    return {
      isProfileDropdownActive:false
    }
  },

  computed:{
    isLogedIn(){
      return this.$store.getters.isLogedIn
    }
  },

  mounted () {
    document.addEventListener('click', this.close)
  },
  methods: {

       logout:function(){

        this.$store.dispatch('action_logout')
         

       },

        close (e) {
            
             if (!this.$el.contains(e.target)) {
                this.isProfileDropdownActive = false
                }
        },

        showprofiledropdown:function(){
          this.isProfileDropdownActive=true
        },
        

   }

}

</script>
