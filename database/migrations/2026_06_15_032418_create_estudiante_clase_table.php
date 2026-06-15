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
        Schema::create('estudiante_clase', function (Blueprint $table) {
            $table->foreignId('estudiante_id')
                  ->constrained();
            $table->foreignId('clase_id')
                  ->constrained();
            $table->date('fecha_inscripcion');
            $table->decimal('calificacion',5,2)
                  ->nullable();
            $table->primary([
                'estudiante_id',
                'clase_id'
            ],'pk_estudiante_clase');
        });
        DB::statement("
            ALTER TABLE estudiante_clase
            ADD CONSTRAINT chk_calificacion
            CHECK(
                calificacion IS NULL
                OR
                calificacion BETWEEN 0 AND 100
            )
        ");
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('estudiante_clase');
    }
};
