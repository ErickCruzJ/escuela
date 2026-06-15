<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Materia extends Model
{
    protected $fillable = [
        'nombre',
        'creditos',
        'activo'
    ];
    public function clases()
    {
        return $this->hasMany(Clase::class);
    }
}
