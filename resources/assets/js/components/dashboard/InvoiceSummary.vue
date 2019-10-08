<template>
<div class="box">
   <h3 style="padding: 10px 10px;margin-bottom: 0px;" class="title is-6">Invoices </h3>



    <table class="table is-fullwidth">


        <tr>

            <td style="border:none;"> <span class="numbers"> <b> $12323.45 </b> </span> from last 365 days</td>
        </tr>

        <tr>

            <td style="border:none;">  

                <div style="display:flex;justify-content:space-between">

                    <div> 

                      <h3 class="title numbers" style="margin-bottom:0px;font-size:20px">   $2345 </h3>
                      <label class="label is-field-title" style="font-weight: 100"> Paid </label>
                    </div>

                    <div> 
                       <h3 class="title is-6 numbers" style="margin-bottom:0px;font-size:20px"> $3456 </h3>
                      <label class="label is-field-title" style="font-weight: 100">Not Paid </label>
                        
                    </div>



                </div>
               <progress style="border-radius:0px" class="progress is-primary" value="90" max="100">90%</progress>

            </td>
        </tr>


        <tr>

            <td style="border:none;"> <span class="numbers"> <b> $1232.45 </b> </span>from last 30 days</td>
        </tr>

        <tr>

            <td style="border:none;padding-bottom:15px">  

                <div style="display:flex;justify-content:space-between">

                    <div> 

                      <h3 class="title is-6 numbers" style="margin-bottom:0px;font-size:20px">   $234.98 </h3>
                      <label class="label is-field-title" style="font-weight: 100">Not Paid </label>
                    </div>

                    <div> 
                       <h3 class="title is-6 numbers" style="margin-bottom:0px;font-size:20px"> $345.34 </h3>
                      <label class="label is-field-title" style="font-weight: 100" >Paid </label>
                        
                    </div>



                </div>
               <progress style="border-radius:0px" class="progress is-danger" value="40" max="100">40%</progress>

            </td>
        </tr>

       

   

    </table>

</div>
</template>

<script>
import axios from 'axios'
import moment from "moment"
import VueApexCharts from 'vue-apexcharts'
export default {
    name: "userprofilemenu",
      components: {
        apexchart: VueApexCharts,
      },
    data() {
        return {
            isProfileDropdownActive: false,
            mytime: moment().format('M'),
            current: 'Today',
            order_total: 0.00,
    
        }
    },

    computed: {
        isLogedIn() {
            return this.$store.getters.isLogedIn
        }
    },

    mounted() {
        document.addEventListener('click', this.close)
    },
    methods: {

        logout: function () {
            this.$store.dispatch('action_logout')
        },

      


        fetch_data: function (vfrom, vto) {
            let payload = {
                from: vfrom,
                to: vto
            }
            axios.post('api/dashboard/purchaseoordercount', payload)
                .then(response => {
                    this.mytime = response.data
                    console.log(response.data)
                })
                .catch(error => {
                    console.log(error);
                });

        },


    }

}
</script>

<style>
.table_head {
    text-align: center
}

.table_data {
    text-align: center;
    font-weight: bold;
    color: #ff003a;
    padding: 0px 0px;
}
</style>
