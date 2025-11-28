<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ChartController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $chartData = [
            'labels' => ['January', 'February', 'March', 'April', 'May', 'June', 'Julay', 'August', 'Septempber', 'October', 'November', 'December'],
            'datasetLabel' => 'Sales',
            'data' => [65, 59, 80, 81, 56, 55, 65, 59, 80, 81, 56, 55],
        ];
        
        return Inertia::render('chart', [
            'chartData' => $chartData,
        ]);
    }
}
