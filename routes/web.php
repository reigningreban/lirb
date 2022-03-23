<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\PostController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/', [PostController::class, 'index'])->name('home');
Route::inertia('/about', 'About')->name('about');
Route::inertia('/login', 'Login')->name('login');
Route::get('/post/{uuid}', [PostController::class, 'show'])->name('post.show');
Route::get('/posts', [PostController::class, 'posts'])->name('posts.all');
Route::post('/posts', [PostController::class, 'filter'])->name('posts.filter');
