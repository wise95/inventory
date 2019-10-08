@extends('layouts.app')

@section('content')

<div class="columns">
	
	<div class="column is-4">
    		<product_table> </product_table>
	</div>

	<div class="column is-8 left-border">
      
      <div class="product_title">
	  		<h2 class="subtitle is-5"> Dumbhara Juggery cup 500G </h2>
	  </div>

       <div class="tabs product_navbar" style="margin-bottom: 0.5rem;">
		<ul class="nav nav-tabs ">
			<li class="nav-item">
				 <router-link exact class="nav-link"  active-class="active" :to="'/'+$route.params.id">Product Info</router-link>
				
			</li>
			<li class="nav-item">

				  <router-link class="nav-link"  active-class="active" :to="'/'+$route.params.id+'/vendor'">Vendors</router-link>
				
			</li>
			<li class="nav-item">
				 <router-link class="nav-link"  active-class="active" :to="'/'+$route.params.id+'/stockmovement'">Stock Movement</router-link>
				
			</li>
			<li class="nav-item">
				 <router-link class="nav-link"  active-class="active" :to="'/'+$route.params.id+'/purchaseorders'">Purchase Orders</router-link>
				
			</li>
		</ul>

	</div>

 
		

	

			<app> </app>
 
	

		
		




	</div>


</div>



@endsection