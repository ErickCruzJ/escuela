<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Clase extends Model
{
    protected $fillable =[
        'maestro_id',
        'materia_id',
        'aula_id',
        'grupo',
        'activo'
    ];
    public function maestros()
    {
        return $this->belongsTo(Maestro::class);
    }
    public function materias()
    {
        return $this->belongsTo(Materia::class);
    }
    public function aulas()
    {
        return $this->belongsTo(Aula::class);
    }
    public function estudiantes()
    {
        return $this->belongsToMany(Estudiante::class);
    }
}
