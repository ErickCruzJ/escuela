<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Horario;
use App\Models\Clase;
use Illuminate\Http\Request;

class HorarioController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Horarios/Index',[
            'horarios' => Horario::with([
                'clase.materia'
            ])->get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Horarios/Create',[
            'clases' => Clase::with('materia')->get()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'dia' => 'required|string|max:20',
            'hora_inicio' => 'required',
            'hora_fin' => 'required',
            'clase_id' => 'required|exists:clases,id',
        ]);
        Horario::create([
            'dia' => $request->dia,
            'hora_inicio' => $request->hora_inicio,
            'hora_fin' => $request->hora_fin,
            'clase_id' => $request->clase_id,
        ]);
        return redirect()->route('horarios.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Horario $horario)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Horario $horario)
    {
        return Inertia::render('Horarios/Edit', [
        'horario' => $horario,
        'clases' => Clase::with('materia')->get(),
    ]);
 
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Horario $horario)
    {
        $request->validate([
        'dia' => 'required|string|max:20',
        'hora_inicio' => 'required',
        'hora_fin' => 'required',
        'clase_id' => 'required|exists:clases,id',
        ]);

        $horario->update([
        'dia' => $request->dia,
        'hora_inicio' => $request->hora_inicio,
        'hora_fin' => $request->hora_fin,
        'clase_id' => $request->clase_id,
        ]);

        return redirect()->route('horarios.index');  
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Horario $horario)
    {
        $horario->delete();
        return redirect()->route('horarios.index');
    }
}
