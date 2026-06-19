<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CarreraController;
use App\Http\Controllers\MateriaController;
use App\Http\Controllers\MaestroController;
use App\Http\Controllers\EstudianteController;
use App\Http\Controllers\AulaController;
use App\Http\Controllers\ClaseController;
use App\Http\Controllers\HorarioController;
use App\Http\Controllers\InscripcionController;

Route::resource('carreras',CarreraController::class);
Route::resource('materias',MateriaController::class);
Route::resource('maestros',MaestroController::class);
Route::resource('estudiantes',EstudianteController::class);
Route::resource('aulas',AulaController::class);
Route::resource('clases',ClaseController::class);
Route::resource('horarios',HorarioController::class);
Route::get('/inscripciones/create',[InscripcionController::class,'create']);
Route::inertia('/', 'welcome')->name('home');
Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__.'/settings.php';
