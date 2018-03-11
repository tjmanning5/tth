<?php

// PHP's associative arrays are just key-value maps.
//   They're a lot like JavaScript's objects:
$artist_and_country = [
	'Goethe'     => 'Germany',
	'Strindberg' => 'Sweden',
	'Ibsen'      => 'Norway',
	'Ariel'      => 'The Little Mermaid',
];
foreach ( $artist_and_country as $artist => $country ) {
	echo 'Artist: ' . $artist . ' Country: ' . $country . PHP_EOL;
}
$count = 1000000;
$start = 0;
while ($start < $count) {
	$start++;
	echo 'Hello ' . $start . PHP_EOL;
}

//echo json_encode( $artist_and_country, JSON_PRETTY_PRINT );
// Getting the value for a key is just like getting the value of a JavaScript
//   object's  property using bracket notation:
//echo "My favorite author Goethe comes from " . $artist_and_country["Goethe"] . ".\n";

//echo str_repeat( 'I love apples' + PHP_EOL, 12 ) . "\n";

// Associative arrays also have a foreach, but you get access to the key and
//   value simultaneously. Much nicer than JavaScript object iteration.
//foreach ($artist_and_country as $name => $country) {
//  echo "$name comes from $country.\n";
//}
