<template>
<section>
    <div class="columns" style="background-color: #fff">
		 <div class="column is-12">

             <div class="label_value"><router-link exact class="nav-link"  :to="'/bills/'+bill_id+'/view/payments'"> << Back </router-link></div> 

		 </div>
	</div>

       <div class="columns">
           <div class="column is-12">
                <div style="float:right">


                
                    <a class="button is-small"  @click="create_payment_pdf">
                    <span class="icon">
                        <i class="far fa-file-pdf"></i>
                    </span>
                    
                    </a>
                    
                    <a class="button is-small" v-confirm="{ok: deleterow, cancel: doNothing, message: 'Are you sure, you want to delete the payment record?'}" :id="payment_id"  >
                    <span class="icon">
                        <i class="far fa-trash-alt"></i>
                    </span>
                    
                    </a>

                
                </div>
            </div>
      </div>




    <div class="columns">
        <div class="column is-3">
            <h1 class="title is-6" >Received Payment From </h1>
        </div>
    </div>


    <div class="columns">

    <div class="column is-3">
         <label class="label is-field-title">{{bill_payment.name}}</label>
              <div> <label>{{bill_payment.address}}  </label> </div>
              <div> <label>{{bill_payment.city}} </label> </div>
              <div> <label>{{bill_payment.state}}</label> </div>
              <div> <label>{{bill_payment.zip}} </label> </div>
              <div> <label>{{bill_payment.country}} </label> </div>

      </div>

    </div>

     <div class="columns">

    <div class="column is-3">
         <h1 class="title is-6">Payment Made </h1>
    </div>
    </div>

    <div class="columns">

    

            <div class="column is-3">  
              <div class="label"> Payment  # </div>
              <div class="label_value"> {{bill_payment.paymentnumber}} </div>
            </div>

             <div class="column is-3">  
              <div class="label"> Amount Paid</div>
              <div class="label_value">{{bill_payment.paid_amount}} </div>
            </div>
            
            <div class="column is-3">  
              <div class="label">Payment Method </div>
              <div class="label_value">{{bill_payment.paymentmethod}} </div>
            </div>
 
            <div class="column is-3">  
              <div class="label">Rererence</div>
              <div class="label_value">{{bill_payment.reference}} </div>
            </div>

            

    </div>

    <div class="columns">

        <div class="column is-3">
            <h1 class="title is-6">Payment For </h1>
        </div>
    </div>
      <div class="columns">

    

            <div class="column is-3">  
              <div class="label"> Bill  # </div>
              <div class="label_value"> {{bill_payment.billnumber}} </div>
            </div>

             <div class="column is-3">  
              <div class="label"> Bill Date</div>
              <div class="label_value">{{bill_payment.billdate}} </div>
            </div>
            
            <div class="column is-3">  
              <div class="label">Bill Amount</div>
              <div class="label_value">{{bill_payment.bill_amount}} </div>
            </div>
 
            <div class="column is-3">  
              
            </div>

            

    </div>

     <div class="columns">

        <div class="column is-3">
            <h1 class="title is-6">Payment Note</h1>
        </div>
    </div>

    <div class="columns">

    

            <div class="column is-3">  
           
              <div class="label_value"> {{bill_payment.note}} </div>
            </div>

    </div>



</section>

</template>

<script>
import axios from 'axios'
export default {
   name:"purchaseorders",
   
   data () {
    return {

        bill_id:'',
        payment_id:'',
        bill_payment:''
   
    }
  },

  components:{
      
  },

  watch: {
    '$route' (to, from) {
         console.log(to.params.id);
        
        }
    },


  mounted () {
    this.bill_id=this.$route.params.id
    this.payment_id=this.$route.params.payment_id
    this.loadGrid()
  },

  methods:{

    deleterow:function(dialog){
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
             // redirect to payments table
             this.$router.push("/bills/"+this.bill_id+"/view/payments");             

             })
            .catch(function (error) {
                
            });

        }catch(err) {
            console.log(err)
        }
    },
    doNothing:function(){

    },
   
     loadGrid:function(){
      axios.get('/api/bills/payments/'+this.$route.params.payment_id)
        .then(response => {
            this.bill_payment =  response.data[0]
        })
        .catch(error => {
            console.log(error);
        })
    },

    create_payment_pdf:function(){
        axios('api/pdf/billpayment/'+this.$route.params.payment_id,{
            method: 'GET',
            responseType: 'blob' //Force to receive data in a Blob Format
        })
        .then(response => {//Create a Blob from the PDF Stream
        const file = new Blob(
            [response.data], 
            {type: 'application/pdf'});//Build a URL from the file
        const fileURL = URL.createObjectURL(file);//Open the URL on new Window
        window.open(fileURL);})
        .catch(error => {
            console.log(error);
        });
    },
    
  }
 }

</script>