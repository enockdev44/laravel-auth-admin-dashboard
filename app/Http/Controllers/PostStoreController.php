<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class PostStoreController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $data = $request->validate([ // Fixed typo: $equest -> $request
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048', // Added validation constraints
        ]);
        
        $data['user_id'] = $request->user()->id;
        $data['slug'] = \Str::slug($data['title']); // Using Str facade for slugs
        
        if($request->hasFile('image')) {
            $data['image'] = Storage::disk('public')->put('posts', $request->file('image'));
        }
        
        $request->user()->posts()->create($data);
        
        return redirect()->route('posts.index'); // Using redirect() helper for clarity
    }
}
