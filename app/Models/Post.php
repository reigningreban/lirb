<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\Uuids;

class Post extends Model
{
    protected $appends = ['url'];
    use HasFactory, Uuids;
    public function getUrlAttribute()
    {
        return route('post.show', ['uuid' => $this->id]);
    }
}
