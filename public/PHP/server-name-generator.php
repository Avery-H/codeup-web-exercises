<?php 
function pageController(){
$arr1 = ['careless','rude','beautiful','adorable','proud','wise','hideous','creepy','petite','amusing'];
$arr2 = ['Codester','Allex','Dougy','Emmeet','David-Sama','Joestar','Russle-Tussle','Justina','Ryan-Sempai','Zach-attack'];

$select1 = $arr1[mt_rand(0, count($arr1) - 1)];
$select2 = $arr2[mt_rand(0, count($arr2) - 1)];

$data = [
	'sel1' => $select1,
	'sel2'=> $select2
]; 
return $data;
}

extract(pageController());
?>

<!DOCTYPE html>
<html>
<head>
    <title>Codeup!</title>
</head>
<body>
    <h1><?= $sel1 ." ".$sel2; ?></h1>
</body>
</html>