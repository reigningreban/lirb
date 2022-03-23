<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'title' =>  $this->faker->realText(40),
            'body'  =>  $this->faker->paragraphs(10, true),
            'image' =>  'https://picsum.photos/seed/'.$this->faker->word().'/2000/1000',
        ];
    }
}
