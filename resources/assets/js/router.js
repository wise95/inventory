import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)


import Login from './components/user/Login.vue'
import Logout from './components/user/Logout.vue'

import StockMovement from './components/StockMovement.vue'
import PurchaseOrders from './components/purchaseorders/PurchaseOrders.vue'
import PurchaseOrder from './components/purchaseorders/PurchaseOrder.vue'
import ViewPurchaseOrder from './components/purchaseorders/ViewPurchaseOrder.vue'
import ViewPurchaseOrderReceives from './components/purchaseorders/ViewPurchaseOrderReceives.vue'
import ViewPurchaseOrderBills from './components/purchaseorders/ViewPurchaseOrderBills.vue'

import CreatePurchaseOrder from './components/purchaseorders/CreatePurchaseOrder.vue'
import CreatePurchaseOrderReceives from './components/purchaseorders/CreatePurchaseOrderReceives.vue'
import CreatePurchaseOrderReturns from './components/purchaseorders/CreatePurchaseOrderReturns.vue'
import PurchaseOrderTable from './components/purchaseorders/PurchaseOrderTable.vue'

import Bills from './components/bills/Bills.vue'
import Bill from './components/bills/Bill.vue'

import BillPayments from './components/bills/BillPayments.vue'
import BillHistory from './components/bills/BillHistory.vue'
import ViewBill from './components/bills/ViewBill.vue'
import ViewBillPayment from './components/bills/ViewBillPayment.vue'

import Products from './components/products/Products.vue'
import Product from './components/products/Product.vue'

import ProductInfo from './components/products/ProductInfo.vue'
import ProductVendor from './components/products/ProductVendor.vue'
import ProductCreate from './components/products/ProductCreate.vue'

import SalesOrders from './components/salesorders/SalesOrders.vue'
import SalesOrder from './components/salesorders/SalesOrder.vue'
import ViewSalesOrder from './components/salesorders/ViewSalesOrder.vue'
import CreateSalesOrder from './components/salesorders/CreateSalesOrder.vue'
import SalesOrderInvoices from './components/salesorders/SalesOrderInvoices.vue'
import SalesOrderPayments from './components/salesorders/SalesOrderPayments.vue'
import CreateInvoice from './components/salesorders/CreateInvoice.vue'


import Invoices from './components/invoices/Invoices.vue'
import ViewInvoice from './components/invoices/ViewInvoice.vue'

import Payments from './components/payments/Payments.vue'
import PaymentRecord from './components/payments/PaymentRecord.vue'
import ViewPayment from './components/payments/ViewPayment.vue'

import Customers from './components/customers/Customers.vue'
import Customer from './components/customers/Customer.vue'
import CustomerCreate from './components/customers/CustomerCreate.vue'
import CustomerTable from './components/customers/CustomerTable.vue'
import CustomerInfo from './components/customers/CustomerInfo.vue'
import CustomerInvoices from './components/customers/CustomerInvoices.vue'
import CustomerPayments from './components/customers/CustomerPayments.vue'
import CustomerSalesorders from './components/customers/CustomerSalesorders.vue'

import Vendors from './components/vendors/Vendors.vue'
import VendorCreate from './components/vendors/VendorCreate.vue'
import Vendor from './components/vendors/Vendor.vue'
import VendorInfo from './components/vendors/VendorInfo.vue'
import VendorPurchaseOrders from './components/vendors/VendorPurchaseOrders.vue'
import VendorBills from './components/vendors/VendorBills.vue'

import GeneralSetting from './components/setting/GeneralSetting.vue'
import CompanyProfile from './components/setting/CompanyProfile.vue'

import Dashboard from './components/dashboard/Dashboard.vue'
import DropdownTextField from './components/DropdownTextField.vue'





export const router = new VueRouter({
  
  
  
  routes:  [

    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },

    {
      path: '/login',
      name: 'login',
      component: Login
    },

    {
      path: '/logout',
      name: 'logout',
      component: Logout
    },
    {
      path: '/:id/vendor',
      name: 'product',
      component: ProductVendor
    },

    {
      path: '/:id/stockmovement',
      name: 'stockmovement',
      component: StockMovement
    },

    {
      path: '/:id/purchaseorders',
      name: 'purchaseorders',
      component: PurchaseOrders
    },

    {
      path: '/po/:id',
      name: 'po',
      component: PurchaseOrder
    },

    {
      path: '/purchaseorders',
      name: 'pos',
      component: PurchaseOrders
    },

    {
      path: '/purchaseorders/:id/view',
    
      components: {
        default: PurchaseOrder,
     
      },
       

      children:[
        { path: '', component: ViewPurchaseOrder },
        
        {
          path: 'receives',
          component: ViewPurchaseOrderReceives
        },

        {
          path: 'bills',
          component: ViewPurchaseOrderBills
        },

      ]
    },

    {
  
       path: '/bills',
       name: 'bills',
       component: Bills     

    },

    

    {
      path: '/bills/:id/view',
      components: {
        default: Bill,
      },
       

      children:[
        { 
          path: '', component: ViewBill },
        
        {
          path: 'payments',
          component: BillPayments
        },
        
        {
          path: 'payments/:payment_id',
          component: ViewBillPayment,
          name:'viewbillpayment'
        },
        {
          path: 'history',
          component: BillHistory
        },

      ]
    },


    
    


    
    {
      path: '/vendors',
      name: 'vendors',
      component: Vendors
    },

    {
      path: '/vendors/create',
      name: 'vendors_create',
      component: VendorCreate
    },

    {
      path: '/vendors/:id/view',
      components: {
        default: Vendor,
      },

       children:[
        { 
          path: '', 
          component: VendorInfo 
        },
        { 
          path: 'purchaseorders', 
          component: VendorPurchaseOrders
        },

        { 
          path: 'bills', 
          component: VendorBills
        },


      ]
    },


 {
      path: '/invoices',
      name: 'pos',
      component: Invoices
    },


   
     {
      path: '/invoices/:id/view',
      components: {
        default: ViewInvoice,
        },

      },
       




    {
      path: '/products',
      name: 'products',
      component: Products,
      beforeEnter: (to, from, next) => {
        /*
         todo check if to === from
         Warning!: location.reload()  completely destroy all vuejs stored states
         */
     
          console.log(to);
          console.log(from);
          if(to===from) alert("reload")

         //window.location.reload()
         return next()
      }
    },


    {
      path: '/products/create',
      name: 'products_create',
      component: ProductCreate
    },

    
    {
     path: '/products/:id/view',
     name:'product.view',
      components: {
        default: Product,
       
      },

       children:[
        { 
          path: '', 
          component: ProductInfo ,
          name:'product.info',
        },
        
        {
          path: 'vendor',
          component: ProductVendor
        }
        ]

    },



    {
  
       path: '/salesorders',
       name: 'salesorders',
       component: SalesOrders     

    },

    {
      path: '/salesorders/create',
      name: 'salesorder_create',
      component: CreateSalesOrder
    },

    {
      path: '/salesorders/createinvoice/:id',
      name: 'salesorder_createinvoice',
      component: CreateInvoice
    },


    {
     path: '/salesorders/:id/view',
      components: {
        default: SalesOrder,
      },

       children:[
        { 
          path: '', 
          component: ViewSalesOrder 
        },

        {
          path: 'invoices',
          component: SalesOrderInvoices
        },
        
        {
          path: 'payments',
          component: SalesOrderPayments
        },
        
        ]

    },



    {
  
       path: '/payments',
       name: 'payments',
       component: Payments     

    },

   
    {
      path: '/payments/:id/record',
      components: {
        default: PaymentRecord,
      },
    },

    {
      path: '/payments/:id/view',
      components: {
        default: ViewPayment,
        },

    },

    

    {
      path: '/purchaseorders/create',
      name: 'purchaseordercreate',
      component: CreatePurchaseOrder
    },

    {
      path: '/purchaseorders/receives',
      name: 'purchaseorderreceives',
      component: CreatePurchaseOrderReceives
    },

    {
      path: '/purchaseorders/returns',
      name: 'purchaseorderreturns',
      component: CreatePurchaseOrderReturns
    },

 
    {
      path: '/customers',
      name: 'customers',
      component: Customers
    },

    {
      path: '/customers/create',
      name: 'customercreate',
      component: CustomerCreate
    },

    
     {
      path: '/customers/:id/view',
      components: {
        default: Customer,
      },

       children:[
        { 
          path: '', 
          component: CustomerInfo 
        },
        
        

        {
          path: 'invoices',
          component: CustomerInvoices
        },
        {
          path: 'payments',
          component: CustomerPayments
        },

        {
          path: 'salesorders',
          component: CustomerSalesorders
        },



        ]

    },

    {
      path:'/setting',
      components: {
        default: GeneralSetting,
      },

      children:[
        { path: '', component: CompanyProfile },
        
        {
          path: 'receives',
          component: ViewPurchaseOrderReceives
        },

        {
          path: 'bills',
          component: ViewPurchaseOrderBills
        },

      ]
    }
]
})