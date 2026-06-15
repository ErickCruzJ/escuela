<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('clases', function (Blueprint $table) {
            $table->id();
            $table->foreignId('maestro_id')
                  ->constrained();
            $table->foreignId('materia_id')
                  ->constrained();
            $table->foreignId('aula_id')
                  ->constrained();
            $table->string('grupo', 10);
            $table->boolean('activo')
                  ->default(true);
            $table->timestamps();
            $table->unique([
                'maestro_id',
                'materia_id',
                'grupo'
            ]);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('clases');
    }
};
