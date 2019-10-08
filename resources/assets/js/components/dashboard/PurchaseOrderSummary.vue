<template>

<div class="box">
<div class="toolbar" style="background-color: beige;">

     <div class="tool_strip" >
         <h2 class="title is-6">Purchase Orders </h2>
     </div>
  
    <div>
    <div class="dropdown is-right" v-bind:class="{ 'is-active': isProfileDropdownActive }">
                              <div class="dropdown-trigger">
                                <button @click="show_purchaseorder_dd" class="button" style="border:none;font-size: 12px;background-color: beige;" aria-haspopup="true" aria-controls="dropdown-menu">
                                    <span>{{current}}</span>
                                    <span class="icon is-small">
                                        <i class="fas fa-angle-down" aria-hidden="true"></i>
                                    </span>
                                </button>
                              </div>
                              <div class="dropdown-menu" id="dropdown-menu" role="menu">
                                <div class="dropdown-content">
                                  <a id="today" @click="click_menu" href="#" class="dropdown-item">
                                    Today
                                  </a>
                                  <a  @click="click_menu"  id="yesterday" class="dropdown-item">
                                    Yesterday
                                  </a>
                                  <a @click="click_menu"  id="thisweek"  class="dropdown-item">
                                    This Week
                                  </a>
                                  <a @click="click_menu"  id="previousweek" class="dropdown-item">
                                    Previous Week
                                  </a>
                                  <a @click="click_menu"  id="thismonth" class="dropdown-item">
                                    This Month
                                  </a>
                                  <a @click="click_menu"  id="previousmonth"  class="dropdown-item">
                                    Previos Month
                                  </a>

                                 <a @click="click_menu"  id="thisyear"  class="dropdown-item">
                                    This Year
                                  </a>

                                  <a @click="click_menu"  id="previousyear"  class="dropdown-item">
                                    Previous Year
                                  </a>



                                 
                                </div>
                              </div>
                            </div>

    </div>
   </div>

   <table class="table is-fullwidth">

       <tr> 

           <td style="border:none" class="table_head"> Number Of Orders </td>
       </tr>

       <tr> 

           <td style="padding:0px 0px;font-size:20px;border:none"  class="table_data"> {{mytime}}</td>
       </tr>


        <tr> 

           <td class="table_head" style="padding-top:20px;border:none"> Total Cost</td>
       </tr>

       <tr> 

           <td style="padding:0px 0px;font-size:20px;border:none" class="table_data"> {{order_total.toFixed(2)}}</td>
       </tr>


   </table>

  </div>      

</template>


<script>
import axios from 'axios'
import moment from "moment"
 export default {
   name:"userprofilemenu",
   data () {
    return {
      isProfileDropdownActive:false,
      mytime:moment().format('M'),
      current:'Today',
      order_total:0.00
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

       click_menu(e){

           //alert(e.target.id)
            this.isProfileDropdownActive = false

            if(e.target.id=='today'){
                  this.current="Today"
                  const from_date= moment().format('YYYY-MM-DD')
                  this.fetch_data(from_date,from_date)
                  this.loadPurchaseOrderSum(from_date,from_date)

            }else if(e.target.id=='yesterday'){
                this.current="Yesterday"

                 const from_date= moment().subtract(1, 'days').format('YYYY-MM-DD')
                 this.fetch_data(from_date,from_date)
                 this.loadPurchaseOrderSum(from_date,from_date)

            }else if(e.target.id=='thisweek'){

                this.current="This Week"

                const from_date = moment().startOf('week').format('YYYY-MM-DD')
                const to_date = moment().endOf('week').format('YYYY-MM-DD')

               this.fetch_data(from_date,to_date)
               this.loadPurchaseOrderSum(from_date,to_date)
               


            }else if(e.target.id=='previousweek'){
                this.current="Previous Week"
                const from_date =moment().subtract(1, 'weeks').startOf('week').format('YYYY-MM-DD')
                const to_date =moment().subtract(1, 'weeks').endOf('week').format('YYYY-MM-DD')
                this.fetch_data(from_date,to_date)
                this.loadPurchaseOrderSum(from_date,to_date)
            }else if(e.target.id=='thismonth'){
                this.current="This Month"
                const from_date = moment().startOf('month').format('YYYY-MM-DD')
                const to_date = moment().endOf('month').format('YYYY-MM-DD')

                this.fetch_data(from_date,to_date)
                this.loadPurchaseOrderSum(from_date,to_date)

              
            }else if(e.target.id=='previousmonth'){
                this.current="Previous Month"
                const from_date =moment().subtract(1, 'months').startOf('month').format('YYYY-MM-DD')
                const to_date =moment().subtract(1, 'months').endOf('month').format('YYYY-MM-DD')
                this.fetch_data(from_date,to_date)
                this.loadPurchaseOrderSum(from_date,to_date)
                
            }else if(e.target.id=='thisyear'){
                this.current="This Year"
                const from_date = moment().startOf('year').format('YYYY-MM-DD')
                const to_date = moment().endOf('year').format('YYYY-MM-DD')
                this.fetch_data(from_date,to_date)
                this.loadPurchaseOrderSum(from_date,to_date)
                
            }else if(e.target.id=='previousyear'){
                this.current="Previous Yaer"
                const from_date =moment().subtract(1, 'years').startOf('year').format('YYYY-MM-DD')
                const to_date =moment().subtract(1, 'years').endOf('year').format('YYYY-MM-DD')
                this.fetch_data(from_date,to_date)
                this.loadPurchaseOrderSum(from_date,to_date)
            }
            

       },

        close (e) {
            
            if (!this.$el.contains(e.target)) {
                this.isProfileDropdownActive = false
            }
        },

        show_purchaseorder_dd:function(){
          this.isProfileDropdownActive=true
        },

        fetch_data:function(vfrom,vto){
            let payload = {
                from : vfrom,
                to : vto
            }
            axios.post('api/dashboard/purchaseoordercount',payload)
            .then(response => {
                this.mytime =  response.data
                console.log(response.data)
            })
            .catch(error => {
                console.log(error);
            });

        },

        loadPurchaseOrderSum:function(vfrom,vto){
            let payload = {
                from : vfrom,
                to : vto
            }
            axios.post('api/dashboard/purchaseoordertotal',payload)
            .then(response => {
                this.order_total =  response.data
                console.log(response.data)
            })
            .catch(error => {
                console.log(error);
            });

        }


        

   }

}

</script>

<style>

.table_head{
     text-align: center
}

.table_data{
     text-align: center;
     font-weight: bold;
     color: #ff003a;
     padding: 0px 0px;
}



</style>


