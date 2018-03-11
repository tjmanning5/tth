<?php

// Name information
$first = 'Bob';
$last  = 'Gregor';
$full  = "$first $last";

// Age information
$birth_year = 1993;
$current_year = date('Y');
$age = $current_year - $birth_year;

echo "My name is $full.\n";
echo "I am $age years old.\n";
