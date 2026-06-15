<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
USE Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('estudiantes', function (Blueprint $table) {
            $table->id();
            $table->string('nombre', 100);
            $table->foreignId('carrera_id')
                  ->constrained();
            $table->integer('semestre');
            $table->boolean('activo')
                  ->default(true);
            $table->timestamps();
        });
        DB::statement("
            ALTER TABLE estudiantes
            ADD CONSTRAINT chk_semestre
            CHECK (semestre BETWEEN 1 AND 12)
        ");
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('estudiantes');
    }
};
