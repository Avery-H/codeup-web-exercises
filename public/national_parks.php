<?php 

require_once '../Park.php';
require_once "../input.php";


function pageController() {

	$final = Park::Count();

	if (!Input::has('current')){
       $key = 0;
	}
	else {
		if(is_numeric(Input::get('current'))){
			if(Input::get('current') > $final){
				$key = $final - 3;
			}
			else{
				$key = abs(Input::get('current'));
			}
		}
		else $key = 0;
	}

	$parkstuff = Park::paginate($key);

    if(!empty($_POST)){
	Park::insert(Input::get('purkName'),Input::get('purkLocation'),Input::get('purkDate'),Input::get('purkArea'));
	}
	return ['key' => $key,
	'rows' => $parkstuff,
	'final' => $final];
}

extract(pageController());


?>

<!DOCTYPE html>
<html>
<head>
	<title>Making it happen</title>
	<style>
	.ha{
		display: none;
	}
	</style>
</head>
<body>
	<table>
		<tr>
			<th>Name</th>
			<th>Location</th>
			<th>established date</th>
			<th>area (acres)</th>
		</tr>
		<?php foreach ($rows as $row) : ?>
		<tr>
			<th><?= $row['name']; ?></th>
			<th><?= $row['location']; ?></th>
			<th><?= $row['established_date']; ?></th>
			<th><?= $row['area_in_acres']; ?></th>
		</tr>
    	<?php endforeach ?>
	</table>
    <a id = "removeable" class = 'ha' href='?current=<?=$key - 4?>'>prev</a>
   	<a id = 'rofl' class = "ha" href='?current=<?=$key + 4?>'>next</a>

   	<h3> don't see a park? Add it in!</h3>
   	<form method="POST">

    <label for="purkName">Park name</label>
    <input id="purkName" name="purkName" type="text">
    <br>

     <label for="purkLocation">Park location</label>
    <input id="purkLocation" name="purkLocation" type="text">
    <br>

     <label for="purkDate">Park Established Date</label>
    <input id="purkDate" name="purkDate" type="date">
    <br>

     <label for="purkArea">Park Area</label>
    <input id="purkArea" name="purkArea" type="text">
    <br>
   
    <input type="submit">
</form>
   	<script type="text/javascript">
    	var hey = "<?= Input::get('current') ?>";
    	var stop = "<?= $final ?>";
    	if (hey >= 4){
    		document.getElementById("removeable").className =
    		document.getElementById("removeable").className.replace('ha','');
    	}
    	if (hey < (stop)-4){
    		document.getElementById("rofl").className =
   		 	document.getElementById("rofl").className.replace('ha','');
    	}
   	</script>
</body>
</html>