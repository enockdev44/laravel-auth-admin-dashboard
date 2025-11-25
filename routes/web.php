<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\App;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\PostIndexController;
use App\Http\Controllers\PostCreateController;
use App\Http\Controllers\PostStoreController;
use App\Http\Controllers\WelcomeController;
use App\Http\Controllers\CalculatorController;

Route::get('/', WelcomeController::class)->name('home');
Route::get('/calculator', CalculatorController::class)->name('calculator');

Route::middleware(['auth', 'verified'])->group(function () {
		Route::get('dashboard', DashboardController::class)->name('dashboard');
		Route::get('posts', PostIndexController::class)->name('posts.index');
		Route::get('posts/create', PostCreateController::class)->name('posts.create');
        Route::post('posts/store', PostStoreController::class)->name('posts.store');
});


require __DIR__.'/settings.php';
