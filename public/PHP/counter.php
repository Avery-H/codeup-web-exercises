<?php
    function pageController() {
    	if (isset($_GET['count'])){
     if ($_GET['sumhum'] == 'up') {
            $var = $_GET['count'] + 1; 
        }
     elseif($_GET['sumhum'] == 'down') {
            $var = $_GET['count'] - 1;
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
	<a href='http://codeup.dev/php/counter.php?sumhum=up&count=<?=$var?>'>up</a>
	<a href='http://codeup.dev/php/counter.php?sumhum=down&count=<?=$var?>'>down</a>
	</body>
</html>