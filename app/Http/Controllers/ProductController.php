<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use Illuminate\Support\Facades\App;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
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
	    
	    $products = Product::all();

        return inertia::render('products/index', [
	        'products' => ProductResource::collection($products),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        $locale = isset($request->lang) ? $request->lang : 'en';
        if (! in_array($locale, ['en', 'fr'])) {
                abort(400);
        }

        App::setLocale($locale);

        // Load the dashboard.php from resources/lang/ 'fr' or 'en' language file
	    syncLangFiles('dashboard');
	    syncLangFiles('posts');
	    syncLangFiles('products');
	    syncLangFiles('settings');
        
        return inertia::render('products/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'price' => 'required|string',
            'quantityInStock' => 'required|string',
        ]);
        
        Product::create($data);
        return redirect()->route('products.index'); // Using redirect() helper for clarity
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        dd(Product::find($id));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request, Product $product)
    {
        $locale = isset($request->lang) ? $request->lang : 'en';
        if (! in_array($locale, ['en', 'fr'])) {
                abort(400);
        }

        App::setLocale($locale);

        // Load the dashboard.php from resources/lang/ 'fr' or 'en' language file
	    syncLangFiles('dashboard');
	    syncLangFiles('posts');
	    syncLangFiles('products');
	    syncLangFiles('settings');
        
        return inertia::render('products/edit', [
           'currentProduct' => new ProductResource($product),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'price' => 'required|integer',
            'quantityInStock' => 'required|integer',
        ]);
        
        $product->update($data);
        
        return redirect()->route('products.index'); // Using redirect() helper for clarity
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        $product->delete();
        
        return to_route('products.index');
    }
}
