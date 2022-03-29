<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;
use Illuminate\Http\Request;
use App\Models\Post;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Post $post)
    {
        $posts = $post->latest()->paginate(9);
        return Inertia::render('Home', compact('posts'));
    }

    public function posts(Post $post)
    {
        $posts = $post->latest()->get();
        return Inertia::render('Posts', compact('posts'));
    }

    public function filter(Post $post, Request $request)
    {
        $filter = $request->filter;
        if (!empty($filter)) {
            $posts = $post->where('title', 'like', "%$filter%")->latest()->get();
        } else {
            $posts = $post->latest()->get();
        }
        return Inertia::render('Posts', compact('posts'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(storePostRequest $request)
    {
        $post = new Post;
        $post->title = $request->title;
        $post->body = $request->body;
        $path = $request->file('image')->storePublicly('public/uploads');
        $post->image = $path;
        $post->save();
        return redirect()->back();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StorePostRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StorePostRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function show(Post $post, $uuid)
    {
        $post = $post->find($uuid);
        return Inertia::render('Post', compact('post'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function edit(Post $post)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdatePostRequest  $request
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatePostRequest $request, Post $post)
    {
        $target = $post->find($request->id);
        $target->title = $request->title;
        $target->body = $request->body;
        if($request->image){
            //delete old file?
            $path = $request->file('image')->storePublicly('public/uploads');
            $target->image = $path;
        }
        $target->save();
        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function destroy(Post $post)
    {
        //
    }

    public function delete(Post $post, $uuid)
    {
        $target = $post->find($uuid);
        $target->delete();
        return redirect()->back();
    }
}
