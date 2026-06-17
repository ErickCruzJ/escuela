<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Maestro;
use Illuminate\Http\Request;

class MaestroController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Maestros/Index',[
            'maestros' => Maestro::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Maestros/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'nombre'=>'required|string|max:100',
            'especialidad'=>'required|string|max:100'
        ]);
        Maestro::create([
            'nombre'=>$request->nombre,
            'especialidad'=>$request->especialidad,
            'activo'=>true
        ]);
        return redirect()->route('maestros.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Maestro $maestro)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Maestro $maestro)
    {
        return Inertia::render('Maestros/Edit', [
            'maestro'=>$maestro
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Maestro $maestro)
    {
        $request->validate([
            'nombre'=>'required|string|max:100',
            'especialidad'=>'required|string|max:100'
        ]);
        $maestro->update([
            'nombre'=>$request->nombre,
            'especialidad'=>$request->especialidad,
        ]);
        return redirect()->route('maestros.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Maestro $maestro)
    {
        $maestro->delete();
        return redirect()->route('maestros.index');
    }
}
