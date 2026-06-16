<?php

namespace App\Http\Controllers;

use App\Models\Materia;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MateriaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Materias/Index',[
            'materias'=>Materia::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return  Inertia::render('Materias/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'nombre'=>'required|string|max:100|unique:materias,nombre',
            'creditos'=>'required|integer|min:1|max:5'
        ]);
        Materia::create([
            'nombre'=>$request->nombre,
            'creditos'=>$request->creditos,
            'activo' =>true
        ]);
        return redirect()->route('materias.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Materia $materia)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Materia $materia)
    {
        return Inertia::render('Materias/Edit',[
            'materia'=>$materia
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Materia $materia)
    {
        $request->validate([
            'nombre'=>'required|string|max:100|unique:materias,nombre,'.$materia->id,
            'creditos'=>'required|integer|min:1|max:5'
        ]);
        $materia->update([
            'nombre'=>$request->nombre,
            'creditos'=>$request->creditos,
        ]);
        return redirect()->route('materias.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Materia $materia)
    {
        $materia->delete();
        return redirect()->route('materias.index');
    }
}
