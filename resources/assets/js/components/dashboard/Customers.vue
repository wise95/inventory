<template>
<div class="box">
    <h3 style="padding: 10px 10px;margin-bottom: 0px;" class="title is-6">Recent Sales </h3>

    <table class="table is-fullwidth">
        <thead>
            <tr>
                <th> Date </th>
                <th> Sales Order #</th>
                <th> Customer Name</th>
                <th> Staus</th>
                <th style="text-align:right;padding-right:40px"> Amount</th>

            </tr>

        </thead>

        <tbody>

            <tr v-for="(so, index) in salesorders">
                <td>{{so.order_date}} </td>
                <td>
                    <router-link :to="'/salesorders/'+so.id+'/view'"> {{so.sonumber}}</a> </router-link>
                </td>
                <td>{{so.customer.firstname}} {{so.customer.lastname}}</td>
                <td>{{so.status}}</td>
                <td style="text-align:right;padding-right:40px">{{total(so).toFixed(2)}}</td>
            </tr>

        </tbody>
    </table>

</div>
</template>

<script>
import axios from 'axios'
import moment from "moment"
export default {
    name: "recentsales",
    data() {
        return {
            salesorders: [],
            page: this.$route.query.page || 1,
        }
    },

    computed: {

    },

    mounted() {

        // clear query_param
        this.$store.commit('setQueryParam', null)

        //this.$store.dispatch('getProducts')

        this.$store.dispatch('getSalesOrders', {
                page: this.page
            })
            .then(response => {
                this.salesorders = response.data.data.slice(0,3);
                
            })

    },
    methods: {
        sub_total: function (products) {
            let sum = 0
            products.forEach((row, i) => {
                sum = sum + row.unit_price * row.qty
            })

            return sum;

        },

        calculate_discount: function (so) {
            if (so.discount_type == 'd') {
                return Number(so.discount);
            }

            if (so.discount_type == 'p') {
                return so.discount / 100 * (Number(this.sub_total(so.products)) + Number(this.sub_total(so.products)) * Number(so.tax_percentage / 100))
            }

        },

        total: function (so) {
            return Number(this.sub_total(so.products)) - Number(this.calculate_discount(so)) + (Number(this.sub_total(so.products)) * so.tax_percentage / 100);
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
