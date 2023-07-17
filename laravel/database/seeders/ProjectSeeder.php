<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Project;

class ProjectSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 */
	public function run(): void
	{
		$insertData = [
			[
				'name' => 'sample project 1',
			],
			[
				'name' => 'sample project 2',
			],
			[
				'name' => 'sample project 3',
			],
			[
				'name' => 'sample project 4',
			],
			[
				'name' => 'sample project 4',
			],
		];
		foreach ($insertData as $key => $data) {
            Project::create(['name' => $data['name']]);
		}

        $Project = Project::find(4);
		$Project->delete();
	}
}
