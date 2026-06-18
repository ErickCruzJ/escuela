<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Clase;
use App\Models\Maestro;
use App\Models\Materia;
use App\Models\Aula;
use Illuminate\Http\Request;

class ClaseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Clases/Index',[
            'clases' => Clase::with([
                'maestro',
                'materia',
                'aula'
            ])->get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Clases/Create', [
            'maestros'=> Maestro::all(),
            'materias' => Materia::all(),
            'aulas' => Aula::all(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'maestro_id' => 'required|exists:maestros,id',
            'materia_id' => 'required|exists:materias,id',
            'aula_id' => 'required|exists:aulas,id',
            'grupo'=> 'required|string|max:10'
        ]);
        Clase::create([
            'maestro_id'=>$request->maestro_id,
            'materia_id'=>$request->materia_id,
            'aula_id'=>$request->aula_id,
            'grupo'=>$request->grupo,
            'activo' => true,
        ]);
        return redirect()->route('clases.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Clase $clase)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Clase $clase)
    {
        return Inertia::render('Clases/Edit',[
            'clase'=>$clase,
            'maestros'=>Maestro::all(),
            'materias'=>Materia::all(),
            'aulas'=>Aula::all(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Clase $clase)
    {
        $request->validate([
        'maestro_id' => 'required|exists:maestros,id',
        'materia_id' => 'required|exists:materias,id',
        'aula_id' => 'required|exists:aulas,id',
        'grupo' => 'required|string|max:10',
        ]);
        $clase->update([
            'maestro_id'=>$request->maestro_id,
            'materia_id'=>$request->materia_id,
            'aula_id'=>$request->aula_id,
            'grupo'=>$request->grupo,
            'activo'=>true,
        ]);
        return redirect()->route('clases.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Clase $clase)
    {
        $clase -> delete();
        return redirect()->route('clases.index');
    }
}
