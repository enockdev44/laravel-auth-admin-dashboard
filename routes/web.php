<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\App;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\PostIndexController;
use App\Http\Controllers\PostCreateController;
use App\Http\Controllers\PostStoreController;
use App\Http\Controllers\PostEditController;
use App\Http\Controllers\PostUpdateController;
use App\Http\Controllers\WelcomeController;
use App\Http\Controllers\CalculatorController;
use App\Http\Controllers\ChartController;
use App\Http\Controllers\ProductController;

Route::get('/', WelcomeController::class)->name('home');
Route::get('/calculator', CalculatorController::class)->name('calculator');
Route::get('/chart', ChartController::class)->name('chart');

Route::middleware(['auth', 'verified'])->group(function () {
		Route::get('dashboard', DashboardController::class)->name('dashboard');
		Route::get('posts', PostIndexController::class)->name('posts.index');
		Route::get('posts/create', PostCreateController::class)->name('posts.create');
        Route::post('posts', PostStoreController::class)->name('posts.store');
		Route::get('posts/{post}/edit', PostEditController::class)->name('posts.edit');
		Route::put('posts/{post}', PostUpdateController::class)->name('posts.update');
});

Route::resource('products', ProductController::class);

require __DIR__.'/settings.php';
