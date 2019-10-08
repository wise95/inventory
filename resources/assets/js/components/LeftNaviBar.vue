<template>
<transition name="grow">
<nav class="left-nav-bar">
     <div style="margin-top:50px" class="menu_image" v-tooltip.right="'Dashboard'"><router-link :to="'/dashboard'" > <img src="/images/dashboard.png" width="25px" /></router-link> </div>
     <div class="menu_image" v-tooltip.right="'Purchase Orders'">  <router-link :to="'/purchaseorders'" ><img src="/images/purchase_order.png" width="25px" /></router-link> </div>             
     <div class="menu_image" v-tooltip.right="'Bills'">  <router-link :to="'/bills'" ><img src="/images/bills.png" width="25px" /></router-link> </div>             
     <div class="menu_image" v-tooltip.right="'Sales Orders'">  <router-link :to="'/salesorders'" ><img src="/images/sales_order.png" width="25px" /></router-link> </div>             
     <div class="menu_image" v-tooltip.right="'Invoices'">  <router-link :to="'/invoices'" ><img src="/images/invoice.png" width="25px" /></router-link> </div>             
     <div class="menu_image" v-tooltip.right="'Payments'">  <router-link :to="'/payments'" ><img src="/images/payments.png" width="25px" /></router-link> </div>             
   
     <div class="menu_image" v-tooltip.right="'Products'" >  <router-link :to="'/products'" ><img src="/images/product.png" width="25px" /></router-link> </div>             
     <div class="menu_image" v-tooltip.right="'Customers'">  <router-link :to="'/customers'" ><img src="/images/user.png" width="25px" /></router-link> </div>             
     <div class="menu_image" v-tooltip.right="'Vendors'">  <router-link :to="'/vendors'" ><img src="/images/vendor.png" width="25px" /></router-link> </div>             
     <div class="menu_image" v-tooltip.right="'Setting'">  <router-link :to="'/setting'" ><img src="/images/setting.png" width="25px" /></router-link></div>             
</nav>
</transition>                

</template>


<script>

 export default {
   name:"left_navi_bar",
   data () {
    return {
      active: false
    }
  },

  mounted(){
    console.log(this.$route.path)
  },

  methods: {
        mouseOver: function(){
           this.active=true
        },
        mouseLeave: function(){
           this.active=false
        }

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
    width: 100px;
  }
  100% {
    height: 200px;
  }
}

</style>
