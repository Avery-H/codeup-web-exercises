<?php
	require_once '../../Auth.php';
	require_once '../../Input.php';
	session_start();
	var_dump($_SESSION);
	function pageController(){
	$data = [];
	
	if(isset($_SESSION['Username'])){
		$data['user'] = Auth::user();
	}
	
	
	if (isset($_POST['reset'])) {
		Auth::logout("Location:login.php");
	}
	return $data;
	
	}
	
	extract(pageController());
?>

<!DOCTYPE html>
<html>
<head>
	<title>sumdum dum</title>
</head>
<body>
Welcome <?php echo $user; ?>
	<form method="POST">
    <button type="submit" name="reset" value="session">Log Out</button>
</form>
</body>
</html>