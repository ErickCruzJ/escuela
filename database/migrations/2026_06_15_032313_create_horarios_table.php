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
        Schema::create('horarios', function (Blueprint $table) {
            $table->id();
            $table->foreignId('clase_id')
                  ->constrained();
            $table->string('dia',10);
            $table->time('hora_inicio');
            $table->time('hora_fin'); 
            $table->timestamps();
        });
        DB::statement("
            ALTER TABLE horarios
            ADD CONSTRAINT chk_hora
            CHECK(hora_inicio<hora_fin)
        ");
        DB::statement("
            ALTER TABLE horarios
            ADD CONSTRAINT chk_dia
            CHECK (
                dia IN (
                    'Lunes',
                    'Martes',
                    'Miercoles',
                    'Jueves',
                    'Viernes',
                    'Sabado'
                )
            )
        ");
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('horarios');
    }
};
