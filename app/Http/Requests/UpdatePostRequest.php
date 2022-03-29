<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdatePostRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title' => ['required', \Illuminate\Validation\Rule::unique('posts')->ignore($this->post()['id'])],
            'body'  => 'required'
        ];
    }
    public function messages()
    {
        return [
            'title.required'    => 'Please enter a title',
            'title.unique'      => 'A post with this title already exists',
            'image.required'    => 'Please upload an image',
            'image.image'       => 'Invalid image format',
            'image.size'        => 'Please upload an image of 2MB or less',
            'body.required'     => 'Please enter your post pody'
        ];
    }
}
