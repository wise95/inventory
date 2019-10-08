<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
   
    <!-- Fonts -->
    <link rel="dns-prefetch" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,500,600|Roboto:300,400,500" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=B612+Mono&display=swap" rel="stylesheet">

    <!-- Styles -->
    <!--
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('css/custom.css') }}" rel="stylesheet">

    -->


    <link href="{{ asset('css/bulma.css') }}" rel="stylesheet">
    <link href="{{ asset('css/custom.css') }}" rel="stylesheet">

 <script defer src="https://use.fontawesome.com/releases/v5.0.7/js/all.js"></script>



   

</head>
<body>
    <section id="root">
    
     <div class="container is-fluid">

     <div class="columns" style="height:0px">
     <div class="column is-1">
     <Notifications group="foo" position="top center" >  </Notifications>
    
    </div>

    </div>

         <div class="columns">
             
             <div class="column is-1" v-if='this.$route.path !== "/login"'>
                <left_navi_bar   > </left_navi_bar>
             </div>


             <div class="column"  v-bind:class="(this.$route.path !== '/login')?  is-11: is-12" style="padding-top:0px; padding-bottom:0px" >
                
                <div v-if='this.$route.path !== "/login"' class="columns" style="margin-bottom: 0px;margin-top:0px;margin-left:-3.4rem">
                        <div class="column is-12" style="padding-bottom:0px;padding-left:0px">
                            <app_header> </app_header>
                        </div>
                </div>
    
                  @yield('content')
   
             </div>
         </div>

            

     </div>

   
    </section>
    <script src="{{ asset('js/build.js') }}" > </script>
</body>
</html>


