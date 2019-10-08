<template>
<div>
    <apexchart type="line" :options="options" :series="series"></apexchart>
</div>
</template>

<script>
import moment from "moment"
import VueApexCharts from 'vue-apexcharts'

export default {
    data() {
        return {
            xLabelsData: [],
            yLabelData: [],
            yTemp: [],

            options: {
                chart: {
                    id: 'vuechart-example'
                },
                xaxis: {
                    categories: []
                }
            },
            series: [{
                name: 'series-1',
                data: []
            }]
        }

    },

    components: {

        apexchart: VueApexCharts
    },

    mounted() {

        const stat_day = moment().startOf('month').format('D')
        const end_day = moment().endOf('month').format('D')

        const stat_date = moment().startOf('month').format('YYYY-MM-DD')
        const end_date = moment().endOf('month').format('YYYY-MM-DD')

        var i
        for (i = stat_day; i <= end_day - 1; i++) {
            this.xLabelsData.push(i)
            console.log(i)
        }

        console.log("=========")
        console.log(this.options.xaxis.categories)

        this.options = {
            xaxis: {
                categories: this.xLabelsData
            }
        }

        this.fetch_data("2019-09-01", '2019-09-30', stat_day, end_day)

    },

    methods: {

        fetch_data: function (vfrom, vto, vstart_day, vend_day) {
            let payload = {
                from: vfrom,
                to: vto
            }
            axios.post('api/dashboard/purchaseoorderdata', payload)
                .then(response => {

                    this.yTemp = response.data
                    var new_date = moment(vfrom, "YYYY-MM-DD").format('YYYY-MM-DD')
                    var end_date = moment(vto, "YYYY-MM-DD").format('YYYY-MM-DD')
                    var loop_last_date = moment(vto, "YYYY-MM-DD").add(1, 'days').format('YYYY-MM-DD')
                    console.log(new_date)
                    console.log(end_date)
                    console.log("Loop Last Date " + loop_last_date)

                    let count = 1

                    while (new_date != loop_last_date) {
                        console.log("New Date " + new_date)
                        count = count + 1
                        let isFound = false
                        this.yTemp.forEach((obj, index) => {
                            console.log(obj.created)
                            if (obj['created'] == new_date) {
                                console.log("Date Found " + new_date)
                                isFound = true
                                this.yLabelData.push(obj.total_sum)
                            }
                        })

                        if (isFound == true) {
                            isFound = false

                        } else {
                            this.yLabelData.push(0)
                        }

                        console.log(this.yLabelData)
                        //this.datasets[0].data = this.yLabelData
                        this.series = [{
                            data: this.yLabelData
                        }]
                        new_date = moment(new_date, "YYYY-MM-DD").add(1, 'days').format('YYYY-MM-DD')

                    }

                    console.log("count = " + count)
                })
                .catch(error => {
                    console.log(error);
                });

        },
    }

};
</script>
