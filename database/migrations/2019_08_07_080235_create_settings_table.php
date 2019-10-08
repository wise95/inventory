<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSettingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('settings', function (Blueprint $table) {
            $table->increments('id');
            $table->string('company_name', 100); 
            $table->string('contact_person', 100);
            $table->string('phone', 100);
            $table->string('email', 100);
            $table->string('address', 100);
            $table->string('city', 100);
            $table->string('state', 100);
            $table->string('zip', 100);
            $table->string('country', 100);
            $table->string('logo', 200);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('settings');
    }
}
