<?php

echo "The first command-line agument is $argv[1].";

$students_array = [
	'Bob'   => [
		'lastname' => 'G',
		'age'      => 23,
		'home'     => 'Earth'
	],
	'Allen' => [
		'lastname' => 'H',
		'age'      => 22,
		'home'     => 'Orlando'
	]
];

foreach ( $students_array as $student => $data ) {
	$full_name = $student . ' ' . $data['lastname'];
	echo "My name is $full_name.\n";
	echo 'I am from ' . $data["home"] . PHP_EOL;
	if ( strlen( $full_name ) > 12 ) {
		echo "It's a long name.\n";
	} else {
		echo "It's a short name.\n";
	}

	$age = $data['age'];

	echo "I'm $age years old.\n";
	if ( $age > 21 ) {
		echo "Sake! Sake! Sake!\n";
	} else if ( $age === 21 ) {
		echo "Just slipped by! Sake! Sake! Sake!\n";
	} else {
		echo "No sake for me :(\n";
	}

	echo str_repeat( '=', 12 ) . "\n";
}
