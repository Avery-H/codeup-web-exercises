<?php 

function pageController(){
$fav = ['Games','Titanfall2','Girls','All I really want is girls', 'And in the morning its girls','Cause in the evening it\'s girls','Coding','Emmitt'];
return ['fav' => $fav];
}

extract(pageController());
?>

<!DOCTYPE html>
<html>
<head>
    <title>Codeup!</title>
</head>
<body>
    <h1>My Favorite things</h1>
    <ol>
    <?php foreach ($fav as $favs) : ?>
        <li><?= $favs; ?></li>
    <?php endforeach ?>
    </ol>
</body>
</html>