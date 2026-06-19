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
    public function maestro()
    {
        return $this->belongsTo(Maestro::class);
    }
    public function materia()
    {
        return $this->belongsTo(Materia::class);
    }
    public function aula()
    {
        return $this->belongsTo(Aula::class);
    }
    public function horarios()
    {
        return $this->hasMany(Horario::class);
    }
    public function estudiantes()
    {
        return $this->belongsToMany(Estudiante::class,'estudiante_clase')
        ->withPivot('fecha_inscripcion','calificacion');
    }
}
