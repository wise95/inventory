<template>
<div class='box'>
     <h3 style="padding: 10px 10px;" class="title is-6"> Sales Order Summary </h3>
<div id="chart">
    <div class="toolbar">
        <button @click="updateData('one_month')" id="one_month" :class="{active: selection==='one_month'}">1M</button>
        <button @click="updateData('six_months')" id="six_months" :class="{active: selection==='six_months'}">6M</button>
        <button @click="updateData('one_year')" id="one_year" :class="{active: selection==='one_year'}">1Y</button>
        <button @click="updateData('ytd')" id="ytd" :class="{active: selection==='ytd'}">YTD</button>
        <button @click="updateData('all')" id="all" :class="{active: selection==='all'}">ALL</button>
    </div>
    <apexchart type=area height=350 :options="chartOptions" :series="series" />
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
            xLabelsData: [],
            yLabelData: [],
            yTemp: [],
            selection: 'one_year',
            series: [{
                name: 'Sales',
                data: [
                     
                ]
            }],
            chartOptions: {
                annotations: {
                    yaxis: [{
                        y: 30,
                        borderColor: '#999',
                        label: {
                            show: true,
                            text: 'Support',
                            style: {
                                color: "#fff",
                                background: '#00E396'
                            }
                        }
                    }],
                    xaxis: [{
                        x: new Date('14 Nov 2012').getTime(),
                        borderColor: '#999',
                        yAxisIndex: 0,
                        label: {
                            show: true,
                            text: 'Rally',
                            style: {
                                color: "#fff",
                                background: '#775DD0'
                            }
                        }
                    }]
                },
                dataLabels: {
                    enabled: false
                },

                markers: {
                    size: 0,
                    style: 'hollow',
                },
                xaxis: {
                    type: 'datetime',
                    min: new Date('01 Aug 2019').getTime(),
                    tickAmount: 6,
                },
                tooltip: {
                    x: {
                        format: 'dd MMM yyyy'
                    }
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shadeIntensity: 1,
                        opacityFrom: 0.7,
                        opacityTo: 0.9,
                        stops: [0, 100]
                    }
                },
            }
        }
    },
    mounted () {
         var dateString = moment.unix(1332095400000).format('DD-MM-YYYY HH:mm')
        

         var timestamp = moment('03/19/2012','MM/DD/YYYY').toDate().getTime()
         console.log("1332095400000 "+timestamp)

         this.fetch_data();
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
