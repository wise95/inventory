<template>
<div class="box">
    <h3 style="padding: 10px 10px;" class="title is-6"> Best Selling Products </h3>
<div>
    <apexchart width="380" type="donut" :options="options" :series="series"></apexchart>
</div>
</div>
</template>

<script>
import moment from "moment"
import VueApexCharts from 'vue-apexcharts'

export default {
    components: {
        apexchart: VueApexCharts,
    },
    data() {

        return {

            options: {},
            series: [44, 55, 41, 17, 15]

        }
    },
    mounted() {

    },

    methods: {
        updateData: function (timeline) {
            this.selection = timeline;

            switch (timeline) {
                case 'one_month':
                    this.chartOptions = {
                        xaxis: {
                            min: new Date('28 Jan 2013').getTime(),
                            max: new Date('27 Feb 2013').getTime(),
                        }
                    }
                    break;
                case 'six_months':
                    this.chartOptions = {
                        xaxis: {
                            min: new Date('27 Sep 2012').getTime(),
                            max: new Date('27 Feb 2013').getTime(),
                        }
                    }
                    break;
                case 'one_year':
                    this.chartOptions = {
                        xaxis: {
                            min: new Date('27 Feb 2012').getTime(),
                            max: new Date('27 Feb 2013').getTime(),
                        }
                    }
                    break;
                case 'ytd':
                    this.chartOptions = {
                        xaxis: {
                            min: new Date('01 Jan 2013').getTime(),
                            max: new Date('27 Feb 2013').getTime(),
                        }
                    }
                    break;
                case 'all':
                    this.chartOptions = {
                        xaxis: {
                            min: undefined,
                            max: undefined,
                        }
                    }
                    break;
                default:

            }
        },

        fetch_data: function () {

            axios.post('api/dashboard/salesorders')
                .then(response => {

                    this.yTemp = response.data

                    console.log(this.yTemp)

                    this.series = [{
                        data: this.yTemp
                    }]

                })
                .catch(error => {
                    console.log(error);
                });

        },
    }

}
</script>


<style>
.box{
    padding: 0px 0px;
    border-radius:0px;
}

</style>
