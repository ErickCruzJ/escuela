<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Estudiante;
use App\Models\Carrera;
use Illuminate\Http\Request;

class EstudianteController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Estudiantes/Index',[
            'estudiantes' => Estudiante::with('carrera')->get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Estudiantes/Create',[
            'carreras' => Carrera::all()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request ->validate([
            'nombre'=>'required|string|max:100',
            'carrera_id'=>'required|exists:carreras,id',
            'semestre'=>'required|integer|min:1|max:12',
        ]);
        Estudiante::create([
            'nombre'=>$request->nombre,
            'carrera_id'=>$request->carrera_id,
            'semestre'=>$request->semestre,
            'activo'=>true,
        ]);
        return redirect()->route('estudiantes.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Estudiante $estudiante)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Estudiante $estudiante)
    {
        return Inertia::render ('Estudiantes/Edit',[
            'estudiante' =>$estudiante,
            'carreras' => Carrera::all(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Estudiante $estudiante)
    {
        $request->validate([
            'nombre'=>'required|string|max:100',
            'carrera_id'=>'required|exists:carreras,id',
            'semestre'=>'required|integer|min:1|max:12',
        ]);
        $estudiante->update([
            'nombre'=>$request->nombre,
            'carrera_id'=>$request->carrera_id,
            'semestre'=>$request->semestre,
            'activo'=>true,
        ]);
        return redirect()->route('estudiantes.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Estudiante $estudiante)
    {
        $estudiante->delete();
        return redirect()->route('estudiantes.index');
    }
}
