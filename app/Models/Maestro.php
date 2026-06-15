<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Maestro extends Model
{
    protected $fillable =[
        'nombre',
        'especialidad',
        'activo'
    ];
    public function clases()
    {
        return $this->hasMany(Clase::class);
    }
}
