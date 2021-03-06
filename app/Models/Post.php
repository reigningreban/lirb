<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use App\Traits\Uuids;

class Post extends Model
{
    protected $appends = ['url', 'imagelink'];
    use HasFactory, Uuids;
    public function getUrlAttribute()
    {
        return route('post.show', ['uuid' => $this->id]);
    }


    public function getImagelinkAttribute()
    {
        if (str_starts_with($this->image, 'http')) {
            return $this->image;
        }else {
            return asset(str_replace('public', 'storage', $this->image));
        }
    }
}
