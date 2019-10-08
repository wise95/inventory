<template>
<section>

    <div class="bitcoin-price">

        <trend-chart :datasets="datasets" :grid="grid" :labels="labels" :min="0" :interactive="true" @mouseMove="onMouseMove" class="random-chart"></trend-chart>

        <div id="pop" role="tooltip" ref="tooltip" class="tooltip" :class="{'is-active': tooltipData}">
            <div class="tooltip-container" v-if="tooltipData">
                <strong>{{labels.xLabels[tooltipData.index]}}</strong>
                <div class="tooltip-data">
                    <div class="tooltip-data-item tooltip-data-item--1">{{tooltipData.data[0]}}</div>
                    <div class="tooltip-data-item tooltip-data-item--2">{{tooltipData.data[1]}}</div>
                    <div class="tooltip-data-item tooltip-data-item--3">{{tooltipData.data[2]}}</div>
                </div>
            </div>
        </div>

    </div>

</section>
</template>

<script>
import moment from "moment"
export default {
    data() {
        return {

            xLabelsData: [],
            yLabelData: [],
            yTemp: [],
            datasets: [{
                    data: [1,2],
                    smooth: true,
                    showPoints: true,
                    fill: true,
                    className: "curve1"
                }

            ],
            grid: {
                verticalLines: true,
                horizontalLines: true
            },
            labels: {
                xLabels: this.xLabelsData,
                yLabels: 5,
                yLabelsTextFormatter: val => Math.round(val * 100) / 100
            },
            tooltipData: null,
            popper: null,
            popperIsActive: false
        };
    },
    mounted() {

        this.initPopper();

        const stat_day = moment().startOf('month').format('D')
        const end_day = moment().endOf('month').format('D')

        const stat_date = moment().startOf('month').format('YYYY-MM-DD')
        const end_date = moment().endOf('month').format('YYYY-MM-DD')

        var i;
        for (i = stat_day; i <= end_day-1; i++) {
            this.xLabelsData.push(i)
            console.log(i)
        }

        this.labels.xLabels = this.xLabelsData
        this.fetch_data("2019-09-01", '2019-09-30', stat_day, end_day)

    },
    methods: {
        initPopper() {
            const chart = document.querySelector(".random-chart");
            const ref = chart.querySelector(".active-line");
            const tooltip = this.$refs.tooltip;
            this.popper = new Popper(ref, tooltip, {
                placement: "right",
                modifiers: {
                    offset: {
                        offset: "0,10"
                    },
                    preventOverflow: {
                        boundariesElement: chart
                    }
                }
            });
        },
        onMouseMove(params) {
            this.popperIsActive = !!params;
            this.popper.scheduleUpdate();
            this.tooltipData = params || null;
        },

        fetch_data: function (vfrom, vto, vstart_day, vend_day) {
            let payload = {
                from: vfrom,
                to: vto
            }
            axios.post('api/dashboard/purchaseoorderdata', payload)
                .then(response => {

                    this.yTemp = response.data
                    var new_date =  moment(vfrom, "YYYY-MM-DD").format('YYYY-MM-DD')
                    var end_date =  moment(vto, "YYYY-MM-DD").format('YYYY-MM-DD')
                    var loop_last_date = moment(vto, "YYYY-MM-DD").add(1, 'days').format('YYYY-MM-DD')
                    console.log(new_date)
                    console.log(end_date)
                    console.log("Loop Last Date "+loop_last_date)
                
                   
                    let count=1
                   
                    while (new_date!=loop_last_date) {
                          console.log("New Date "+new_date )
                        count= count+1
                        let isFound= false
                        this.yTemp.forEach((obj,index)=>{
                            console.log(obj.created)
                            if(obj['created']==new_date){
                              console.log("Date Found " + new_date)
                              isFound= true
                              this.yLabelData.push(obj.total_sum)
                            }
                        }) 

                        if(isFound==true){
                            isFound=false

                        }else{
                            this.yLabelData.push(0)
                        }


                        console.log(this.yLabelData)
                        this.datasets[0].data=this.yLabelData

                         new_date = moment(new_date, "YYYY-MM-DD").add(1, 'days').format('YYYY-MM-DD')
                     

                   } 

                    console.log("count = "+count)
                })
                .catch(error => {
                    console.log(error);
                });

        },
    }
};
</script>

<style lang="scss">
.bitcoin-price {
    .vtc {
        height: 250px;
        font-size: 12px;

        @media (min-width: 699px) {
            height: 350px;
        }
    }

    .grid,
    .labels {
        line {
            stroke: rgba(#f69119, 0.5);
        }
    }

    .x-labels {
        .label {
            text {
                display: true;
            }

            line {
                opacity: 0.3;
            }

            &:nth-child(6n + 1),
            &:first-child {
                text {
                    display: block;
                }

                line {
                    opacity: 1;
                }
            }
        }
    }

    .curve-btc {
        .stroke {
            stroke: #f69119;
            stroke-width: 2;
        }

        .fill {
            fill: url(#btcFill);
            fill-opacity: 0.5;
        }
    }

    .tooltip {
        &:not(.is-active) {
            display: none;
        }

        padding: 10px;
        background: #fff;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
        pointer-events: none;

        &-data {
            display: flex;

            &-item {
                display: flex;
                align-items: center;

                &:not(:first-child) {
                    margin-left: 20px;
                }

                &:before {
                    content: "";
                    display: block;
                    width: 15px;
                    height: 15px;
                    margin-right: 5px;
                }

                &--1:before {
                    background: #fbac91;
                }

                &--2:before {
                    background: #fbe1b6;
                }

                &--3:before {
                    background: #7fdfd4;
                }
            }
        }
    }
}
</style>
