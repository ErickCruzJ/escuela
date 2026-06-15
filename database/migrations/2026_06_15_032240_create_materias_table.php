<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('materias', function (Blueprint $table) {
            $table->id();
            $table->string('nombre', 100)->unique();
            $table->integer('creditos');
            $table->boolean('activo')
                  ->default(true);
            $table->timestamps();
          
        });
        DB::statement("
            ALTER TABLE materias
            ADD CONSTRAINT chk_creditos
            CHECK (creditos BETWEEN 1 AND 5)
        ");
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('materias');
    }
};
