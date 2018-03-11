<?php

function introduce_student($first_name, $last_name) {
  $full_name = $first_name . " " . $last_name;

  println("My name is $full_name.");

  if (strlen($full_name) > 12)
    println("It's a long name.");
  else
    println("It's a short name.");
}


/**
 * Prints a string with a newline
 * @param string $string
 */
function println($string) {
  echo "$string" . PHP_EOL;
}

/**
 * @param int $age
 */
function drinks_sake($age) {
  println("I'm $age years old.");

  if ($age > 21)
    println("Sake! Sake! Sake!");
  else if ($age === 21)
    println("Just slipped by! Sake! Sake! Sake!");
  else
    println("No sake for me :(");
}

function separate(
	$separator = '=',
	$repetitions = 12) {
  println(str_repeat($separator, $repetitions));
}
separate();
separate('🎸');
separate('💾 ', 48);
separate('=', 48);