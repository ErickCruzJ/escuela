<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Estudiante;
use App\Models\Clase;
use Illuminate\Http\Request;

class InscripcionController extends Controller
{
    public function index()
    {
        return Inertia::render('Inscripciones/Index',[
            'estudiantes' => Estudiante::with([
                'clases.materia'
            ])->get()
        ]);
    }
    public function create()
    {
        return Inertia::render('Inscripciones/Create',['estudiantes'=>Estudiante::all(),
        'clases'=>Clase::with([
            'maestro',
            'materia'
        ])->get(),
        ]);
    } 
    public function store (Request $request)
    {
        $request->validate([
            'estudiante_id' => 'required|exists:estudiantes,id',
            'clase_id' => 'required|exists:clases,id',
            'fecha_inscripcion' => 'required|date',
        ]);
        $estudiante = Estudiante::findOrFail(
            $request->estudiante_id
        );
        if(
            $estudiante->clases()
                ->where('clase_id',$request->clase_id)
                ->exists()
        ){
            return back()->withErrors([
                'clase_id' => 'El estudiante ya está inscrito en esta clase'
            ]);
        }
        $estudiante->clases()->attach(
            $request->clase_id,
            [
                'fecha_inscripcion' => $request->fecha_inscripcion,
            ]
        );
        return redirect('/inscripciones/create');
    }
}
