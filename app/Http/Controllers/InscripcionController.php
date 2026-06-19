<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Estudiante;
use App\Models\Clase;
use Illuminate\Http\Request;

class InscripcionController extends Controller
{
    public function create()
    {
        return Inertia::render('Inscripciones/Create',['estudiantes'=>Estudiante::all(),
        'clases'=>Clase::with([
            'maestro',
            'materia'
        ])->get(),
        ]);
    } 
}
