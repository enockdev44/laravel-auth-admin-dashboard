<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Storage;
use App\Models\Post;

class PostDestroyController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Post $post)
    {
        Storage::disk('public')->delete($post->image);
        $post->delete();
        
        return to_route('posts.index');
    }
}
