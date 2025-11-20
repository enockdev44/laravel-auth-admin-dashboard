<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\App;

class PostCreateController extends Controller
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

        // Load the dashboard.php from resources/lang/ 'fr' or 'en' language file
        syncLangFiles('dashboard');
        syncLangFiles('posts');

        return inertia::render('posts/create');
    }
}
