<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\App;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\PostIndexController;
use App\Http\Controllers\PostCreateController;
use App\Http\Controllers\WelcomeController;


Route::get('/', WelcomeController::class)->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
		Route::get('dashboard', DashboardController::class)->name('dashboard');
		Route::get('posts', PostIndexController::class)->name('postIndex');
		Route::get('posts/create', PostCreateController::class)->name('postCreate');
});


require __DIR__.'/settings.php';
