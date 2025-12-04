<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Resources\PostResource;
use Illuminate\Support\Facades\App;

class PostIndexController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $locale = isset($request->lang) ? $request->lang : 'en';
	    if (! in_array($locale, ['en', 'fr'])) {
            	abort(400);
	    }

	    App::setLocale($locale);

	    // Load the posts.php from resources/lang/ 'en' or 'fr' language file
	    syncLangFiles('dashboard');
	    syncLangFiles('posts');
	    syncLangFiles('products');
	    syncLangFiles('settings');
	    
	    $posts = $request->user()->posts()->get();

        return inertia::render('posts/index', [
	        'posts' => PostResource::collection($posts),
        ]);
    }
}
