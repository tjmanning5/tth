<?php if ( isset( $_POST ) ) : ?>
	<h1>You sent a message!</h1>
	<?php
		echo '<pre>';
		//$_POST == app.post
		//print_r == console.log
		print_r($_POST);
		//app.get == app.get(req.params)
		print_r($_GET);
		echo '</pre>';
		die;
	?>
<?php endif; ?>
	<!DOCTYPE html>
	<html>
	<head>
		<meta http-equiv="content-type" content="text/html; charset=en-us"/>
		<title></title>
		<link rel="stylesheet" type="text/css" href="style.css"/>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"
						language="javascript"></script>
		<!-- Latest compiled and minified CSS -->
		<link rel="stylesheet"
					href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
					integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
					crossorigin="anonymous">

		<!-- Optional theme -->
		<link rel="stylesheet"
					href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css"
					integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp"
					crossorigin="anonymous">

		<!-- Latest compiled and minified JavaScript -->
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"
						integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
						crossorigin="anonymous"></script>
	</head>
	<body>
	<div id="wrapper">
		<div id="header">
			<h1>

		  <?php echo date( 'h:i:s' ); ?>
			</h1>
		</div>
		<div id="body">
			<form method="post" action="example.php">
				<input type="text" name="name"/>
				<textarea name="message"></textarea>
				<input type="submit" value="Send me messages!"/>
			</form>
		</div>
		<div id="footer">
			&copy; <?php echo date( 'Y' ); ?> My Awesome Website, Inc.
		</div>
	</div>
	</body>
	</html>

<?php

/* Comments are the same in PHP as in JavaScript.
 *
 * Note that variables start with a $. This is necessary! */

$name = 'Bobby G';
$age  = 23;

// Automatically inserts the value of $name.
echo "My name is $name.\n";

// Literally prints $name. Also note that:
//   1. echo does not add newlines for us; and
//   2. You concatenate strings with a period: . 
echo '$name -- that probably isn\'t what you wanted to print.' . "\n";

// PHP offers most of the same arithmetic operation as JavaScript.
// The one difference is that it has built-in exponentiation.
$squared_age = $age ** 2;
echo "$squared_age is much older than I'll ever be.\n";
