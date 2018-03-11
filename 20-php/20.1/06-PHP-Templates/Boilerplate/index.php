<!doctype>
<html>
<head>
	<title>Hello, User</title>
	<link rel="stylesheet"
				type="text/css"
				href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
</head>
<body>
<div class="nav">
	<ul>
		<li><a href="index.php">Home</a></li>
		<li><a href="index.php?view=about">About</a></li>
		<li><a href="index.php?view=bios">Meet our Team</a></li>
	</ul>
</div>
<div class="container">

	<?php
	if (isset( $_GET['view'])) {
		switch ($_GET['view']) {
				case 'about':
					require 'about.php';
					break;
				case 'bios':
					require 'bios.php';
					break;
		}
	} else {
		require 'home.php';
	}





	?>
	<div class="row">
		&copy; <?php echo date('Y'); ?> Love this site.
	</div>
</div>
</body>
</html>
