<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Aula;
use Illuminate\Http\Request;

class AulaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Aulas/Index', [
            'aulas' => Aula::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Aulas/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'nombre' => 'required|string|max:10',
        ]);

        Aula::create([
            'nombre' => $request->nombre,
            'activo' =>true
        ]);

        return redirect()->route('aulas.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Aula $aula)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Aula $aula)
    {
        return Inertia::render('Aulas/Edit', [
            'aula' => $aula
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Aula $aula)
    {
        $request->validate([
            'nombre' => 'required|string|max:10',
        ]);

        $aula->update([
            'nombre' => $request->nombre,
        ]);

        return redirect()->route('aulas.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Aula $aula)
    {
        $aula->delete();
        return redirect()->route('aulas.index');
    }
}
