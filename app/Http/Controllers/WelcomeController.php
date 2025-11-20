<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Laravel\Fortify\Features;
use Illuminate\Support\Facades\App;

class WelcomeController extends Controller
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
        syncLangFiles('welcome');

		return Inertia::render('welcome', [
			'canRegister' => Features::enabled(Features::registration()),
		]);
    }
}
