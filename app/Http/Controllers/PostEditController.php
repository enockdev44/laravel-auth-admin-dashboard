<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Post;
use Illuminate\Support\Facades\App;
use App\Http\Resources\PostResource;

class PostEditController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request, Post $post)
    {
        $locale = isset($request->lang) ? $request->lang : 'en';
        if (! in_array($locale, ['en', 'fr'])) {
                abort(400);
        }

        App::setLocale($locale);

        // Load the dashboard.php from resources/lang/ 'fr' or 'en' language file
        syncLangFiles('dashboard');
        syncLangFiles('posts');
        
        return inertia::render('posts/edit', [
           'currentPost' => new PostResource($post),
        ]);
    }
}
