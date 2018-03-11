<?php

// Name information
$first = 'Peleke';
$last  = ' Sengstacke';
$full  = $first . $last;

// Age information
$birth_year   = 1995;
$current_year = 2016;
$age          = $current_year - $birth_year;

echo "My name is $full." . PHP_EOL;
if ( strlen( $full ) > 12 ) {
	echo "It's a long name." . PHP_EOL;
} else {
	echo "It's a short name." . PHP_EOL;
}

echo str_repeat( '=', 30 ) . PHP_EOL;

echo "I am $age years old." . PHP_EOL;
if ( $age > 21 ) {
	echo "Sake! Sake! Sake!" . PHP_EOL;
} elseif ( $age === 21 ) {
	echo "Just slipped by! Sake! Sake! Sake!" . PHP_EOL;
} else {
	echo "No Sake for me :(" . PHP_EOL;
}
echo str_repeat( '=', 30 ) . PHP_EOL;
