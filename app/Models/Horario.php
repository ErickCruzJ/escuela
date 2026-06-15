<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Horario extends Model
{
    protected $fillable =[
        'dia',
        'hora_inicio',
        'hora_fin',
        'clase_id'
    ];
    public function clase()
    {
        return $this->belongsTo(Clase::class);
    }
}
