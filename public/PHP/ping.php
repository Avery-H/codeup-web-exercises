<?php

	require_once "../../input.php";


    function pageController() {
    if (Input::has('count')){
        if (Input::get('sumhum') == 'hit') {
            $var = Input::get('count') + 1; 
        }
	}
	else{
    	$var = 0;
	}
return ['var' => $var];
}
    extract(pageController());
?>
<!doctype html>
<html>
	<head>
		<title>Counter</title>
	</head>
	<body>
	<h1><?= $var ?>
	<a href='http://codeup.dev/php/pong.php?sumhum=hit&count=<?=$var?>'>hit</a>
	<a href='http://codeup.dev/php/pong.php'>miss</a>
	</body>
</html>