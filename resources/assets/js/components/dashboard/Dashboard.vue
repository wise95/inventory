<template>
<section>

    <div class="columns" style="align-items:stretch;margin-left:-3.4rem;padding-top: 13px;margin-bottom: 0px;">
        <div class="column is-3" style="padding-right: 0px;">

            <invoice_summary> </invoice_summary>
        </div>

        <div class="column is-3" style="padding-right: 0px;">

            <inventory> </inventory>
        </div>

        <div class="column is-3" style="padding-right: 0px;">

            <profitandloss> </profitandloss>
        </div>

        <div class="column is-3" style="padding-right: 0px;">

            <purchase_order_summary> </purchase_order_summary>
        </div>

    </div>

    <div class="columns" style="margin-left:-3.4rem;padding-top: 13px;margin-bottom: 0px;">
        <div class="column is-3" style="padding-right: 0px;">

            <sales_order_summary> </sales_order_summary>
        </div>

        <div class="column is-9" style="padding-right: 0px;">

            <recent_sales> </recent_sales>
        </div>

    </div>

    <div class="columns" style="margin-left:-3.4rem;padding-top: 13px;margin-bottom: 0px;">
        <div class="column is-8" style="padding-right: 0px;">

            <d_chart> </d_chart>
        </div>

        <div class="column is-8" style="padding-right: 0px;">

            <product_chart> </product_chart>
        </div>

    </div>

    

</section>
</template>

<script>
import axios from 'axios'
import PurchaseOrderSummary from './PurchaseOrderSummary'
import SalesOrderSummary from './SalesOrderSummary'
import SalesChart from './SalesChart'
import Chart from './Chart'
import DateTimeChart from './DateTimeChart'
import ProductChart from './ProductChart'
import InvoiceSummary from './InvoiceSummary'
import Inventory from './Inventory'
import ProfitAndLoss from './ProfitAndLoss'
import RecentSales from './RecentSales'
export default {
    name: "dashboard",
    data() {
        return {

        }
    },

    components: {
        purchase_order_summary: PurchaseOrderSummary,
        sales_order_summary: SalesOrderSummary,
        slaes_chart: SalesChart,
        m_chart: Chart,
        d_chart: DateTimeChart,
        product_chart: ProductChart,
        invoice_summary: InvoiceSummary,
        inventory: Inventory,
        profitandloss: ProfitAndLoss,
        recent_sales: RecentSales,

    },

    computed: {},

    mounted() {

    },
    methods: {

    }

}
</script>
