<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TestApiController extends Controller
{
	/**
	 * Display a listing of the resource.
	 */
	public function commontable()
	{
		return response()->json(
			[
				'headers' => [
					'test header 1',
					'test header 2',
					'test header 3',
				],
				'bodyRecords' => [
					[
						'contents',
						'contents',
						'contents',
					],
					[
						'contents',
						'contents',
						'contents',
					],
					[
						'contents',
						'contents',
						'contents',
					],
					[
						'contents',
						'contents',
						'contents',
					],
					[
						'contents',
						'contents',
						'contents',
					],
					[
						'contents',
						'contents',
						'contents',
					],
					[
						'contents',
						'contents',
						'contents',
					],
					[
						'contents',
						'contents',
						'contents',
					],
				],
			],
		);
	}
	/**
	 * Store a newly created resource in storage.
	 */
	public function store(Request $request)
	{
		//
	}

	/**
	 * Display the specified resource.
	 */
	public function show(string $id)
	{
		//
	}

	/**
	 * Update the specified resource in storage.
	 */
	public function update(Request $request, string $id)
	{
		//
	}

	/**
	 * Remove the specified resource from storage.
	 */
	public function destroy(string $id)
	{
		//
	}
}
