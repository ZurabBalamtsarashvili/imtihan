<?php

namespace Database\Factories;

use App\Models\Exam;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ExamResult>
 */
class ExamResultFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'total_questions' => fake()->randomNumber(),
            'correct' => fake()->randomNumber(),
            'in_correct' => fake()->randomNumber(),
            'blank' => fake()->randomNumber(),
            'point' => fake()->randomNumber(),
            'exam_id' => Exam::factory(),
            'user_id' => User::factory(),
        ];
    }
}
