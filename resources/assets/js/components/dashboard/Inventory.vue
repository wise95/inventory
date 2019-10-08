<template>
<div class="box">
   <h3 style="padding: 10px 10px;margin-bottom: 0px;" class="title is-6">Inventory </h3>



    <table class="table is-fullwidth">
        <tr>
            <td>Quantity in Hand </td>
            <td>12 </td>
        </tr>
         <tr>
            <td>Quantity in Hand </td>
            <td>12 </td>
        </tr>
         <tr>
            <td>Quantity in Hand </td>
            <td>12 </td>
        </tr>
         <tr>
            <td>Quantity in Hand </td>
            <td>12 </td>
        </tr>
         <tr>
            <td>Quantity in Hand </td>
            <td>12 </td>
        </tr>
         <tr>
            <td>Quantity in Hand </td>
            <td>12 </td>
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
