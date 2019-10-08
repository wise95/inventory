<template>


    <section>
    <div class="columns">
        <div class="column is-12">

            <table class="table is-fullwidth">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Payment#</th>
                        <th>Refernece </th>
                        <th>Payment Method</th>
                        <th style="text-align:right" >Amount </th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(payment, index) in payments">
                        <td>{{payment.created_at}}</td>
                        <td><router-link exact class="nav-link"  :to="'/bills/'+payment.bill_id+'/view/payments/'+payment.id">{{payment.paymentnumber}}</router-link></td>
                        <td>{{payment.reference}}</td>
                        <td>{{payment.paymentmethod}}</td>
                        <td style="text-align:right">{{payment.amount}}</td>
                        <td><a href="javascript:void(0)"   v-confirm="{ok: deleterow, cancel: doNothing, message: 'Are you sure, you want to delete the payment record?'}" :id="payment.id"   > <i  class="far fa-trash-alt"></i></a> </td>
                       
                    </tr>
                </tbody>
            </table>

            <a class="button is-primary is-small" @click="show_popup">Add Payment</a>


        </div>
    </div>



	<div class="columns">
        <div class="column is-12">


           <div class="modal" v-bind:class="{ 'is-active': showPyametForm }">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Add Payment</p>
          <button class="delete" aria-label="close" @click="popup_close"></button>
        </header>
        <section class="modal-card-body">
            
            <div class="columns" style="margin-bottom:0px">
                <div class="column is-3">
                    <div class="field">
                        <label class="label is-field-title">Payment Amount</label>
                        <div class="control">
                            <input class="input is-small" type="text" v-model="amount">
                        </div>
                    </div>

                </div>
                <div class="column is-3"> </div>
                <div class="column is-3"> </div>
                <div class="column is-3"></div>

            </div>

            <div class="columns" style="margin-bottom:0px">
                <div class="column is-3">
                    <div class="field">
                        <label class="label is-field-title">Payment Date</label>
                        <div class="control">
                             <datepicker  name="delivery_date" v-model="payment_date" :format="'yyyy-MMM-dd'" :input-class="'input is-small'"></datepicker>
                        </div>
                    </div>

                </div>
                <div class="column is-3">
                    <div class="field">
                        <label class="label is-field-title">Payment Method</label>
                        <div class="control">
                            <div class="select is-small">
                                <select v-model="payment_method">
                                    <option value="Cash">Cash</option>
                                    <option value="Check">Check</option>
                                    <option value="Credit Card">Credit Card</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div class="column is-3">
                    <div class="field">
                        <label class="label is-field-title">Refernce #</label>
                        <div class="control">
                            <input class="input is-small" v-model="reference" type="text">
                        </div>
                    </div>
                </div>
                <div class="column is-3"></div>

            </div>

            <div class="columns" style="margin-bottom:0px">
                <div class="column is-9">
                    <div class="field">
                        <label class="label is-field-title">Note</label>
                        <div class="control">
                            <textarea v-model="note" class="textarea" ></textarea>
                        </div>
                    </div>

                </div>
                
                <div class="column is-3"></div>

            </div>

           

        
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success"  v-on:click.once="makepayment">Save</button>
          <button class="button" @click="popup_close">Cancel</button>
        </footer>
      </div>
    </div>


         
        



        </div>
    </div>
</section>
</template>

<script>
import axios from 'axios';
import Datepicker from "vuejs-datepicker";
export default {
   name:"billpayment",
  
   data () {
      return {
        amount:'',
        payments:'',
        showPyametForm:false,
        payment_date:'',
        today:'',
        payment_method:'',
        current_row_id:'',
        reference:'',
        note:''

      }
   },
   components: {
     Datepicker
   },

   mounted () {

     this.today = new Date()
     var dd = String(this.today.getDate()).padStart(2, '0')
     var mm = String(this.today.getMonth() + 1).padStart(2, '0') //January is 0!
     var yyyy = this.today.getFullYear()

    this.today = mm + '/' + dd + '/' + yyyy
    this.payment_date= this.today
    

    this.loadGrid();

   },
   methods:{

    loadGrid:function(){
      axios.get('/api/bills/'+this.$route.params.id+'/payments')
        .then(response => {
            this.payments =  response.data.data
        })
        .catch(error => {
            console.log(error);
        })
    },

    deleterow:function(dialog)
    {
        try{ 
            axios.post('api/payments/'+dialog.node.id+'/delete')
            .then(response =>{
            
                this.$notify(
                    {
                        group: 'foo',
                        type:  response.data.type,
                        title: response.data.title,
                        text:  response.data.message
                    }
                );
             // update the table
             this.loadGrid();

             })
            .catch(function (error) {
                
            });

        }catch(err) {
            console.log(err)
        }
    },

    doNothing:function(){

    },

     

      popup_close: function(){
        this.showPyametForm=false
      },

      show_popup:function(){
        this.showPyametForm=true
      },
      makepayment: function(){
       let payload = {
           amount:this.amount,
           billnumber:"B-00000018",
           paymentmethod:this.payment_method,
           reference:this.reference,
           note:this.note,
           bill_id:this.$route.params.id
       };

        axios.post('/api/bills/addpayment', payload)
        .then(response =>{
            this.payments.push(response.data.data)
            this.showPyametForm=false
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
     }
   }
}

</script>