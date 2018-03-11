@extends('layout')

@section('content')
	@unless(empty($users))
		
		<ul>
			@foreach ($users as $user)
				<li>{{ $user->name }}</li>
			@endforeach
		</ul>

	@endunless
@stop