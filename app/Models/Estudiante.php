<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Carrera;
use App\Models\Clase;

class Estudiante extends Model
{
    protected $fillable =[
        'nombre',
        'carrera_id',
        'semestre',
        'activo'
    ];
    public function carrera()
    {
        return $this->belongsTo(Carrera::class);
    }
    public function clases()
    {
        return $this->belongsToMany(Clase::class);
    }
}
