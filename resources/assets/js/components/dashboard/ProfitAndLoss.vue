<template>
<div class="box">
   <h3 style="padding: 10px 10px;margin-bottom: 0px;" class="title is-6">Profit and Loss </h3>



    <table class="table is-fullwidth">
        <tr>
            <td>  <h3 class="title numbers" style="margin-bottom:0px;font-size:20px">   $2345.93 </h3>
                      <label class="label is-field-title" style="font-weight: 100"> PROFT EARNED </label>
            </td>
            
        </tr>

          <tr>
            <td>  <h3 class="title numbers" style="margin-bottom:0px;font-size:20px">   $2345.93 </h3>
                      <label class="label is-field-title" style="font-weight: 100"> TOTAL SALES </label>
            </td>
            
        </tr>

         <tr>
            <td>  <h3 class="title numbers" style="margin-bottom:0px;font-size:20px">   $2345.93 </h3>
                      <label class="label is-field-title" style="font-weight: 100"> TOTAL PURCHASE </label>
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
