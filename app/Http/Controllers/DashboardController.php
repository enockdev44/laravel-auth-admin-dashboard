<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\App;

class DashboardController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        /* langage configurations */
        $locale = isset($request->lang) ? $request->lang : 'en';
	    if (! in_array($locale, ['en', 'fr'])) {
            	abort(400);
	    }
        
	    App::setLocale($locale);

	    // Load the dashboard.php from resources/lang/ 'fr' or 'en' language file
        syncLangFiles('dashboard');
        syncLangFiles('posts');
        syncLangFiles('settings');

        /* end langages configurations */

        /* charts configurations */
        $chartData = [
            'labels' => ['January', 'February', 'March', 'April', 'May', 'June', 'Julay', 'August', 'Septempber', 'October', 'November', 'December'],
            'datasets' => [
                [
                    'label'  => 'Revenue',
                    'data' => [16, 15, 18, 11, 16, 10, 17, 15, 10, 11, 15, 16],
                    'borderColor' => 'rgb(75, 192, 192)',
                    'backgroundColor' => 'rgba(75, 192, 192, 0.5)',
                ],
                [
                    'label'  => 'Expenses',
                    'data' => [3, 7, 5, 2, 3, 5, 7, 3, 2, 3, 5, 7],
                    'borderColor' => 'rgb(75, 99, 132)',
                    'backgroundColor' => 'rgba(75, 99, 132, 0.5)',
                ],
            ],

        ];
        
        /* end charts configurations */
        
        return Inertia::render('dashboard', [
            'chartData' => $chartData,
        ]);

    }
}
