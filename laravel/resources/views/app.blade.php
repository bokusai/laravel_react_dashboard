<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<title>Laravel</title>
		<link rel="stylesheet" href="{{asset('css/app.css')}}" />
		<title>laravel vite sample</title>
		@viteReactRefresh
		@vite(['resources/css/app.css', 'resources/js/main.tsx'])
	</head>
	<body>
		<div id="root"></div>
	</body>
</html>