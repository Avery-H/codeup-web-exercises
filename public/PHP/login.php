<?php
	require_once '../../Auth.php';
	require_once '../../Input.php';
   	session_start();
   	var_dump($_SESSION);
	function pageController(){
	$pass = Input::has('password') ? Input::get('password') : '';
	$name = Input::has('name') ? Input::get('name') : '';
	
	if(Auth::check()){
		header('Location:authorized.php');
		die();
	}
	else{
		if(!empty($_POST)){
			  if(Auth::attempt($name,$pass)){
   	 	 	  $_SESSION['LOGGED_IN_USER'] = session_id();
   	 	 	  $_SESSION['Username'] = $name;
   	 	 	  header('Location:authorized.php');
   	 	 	  die();
		}
	}
}
	return ["Iam" => 'blank'];
}
extract(pageController());
?>

<!DOCTYPE html>
<html>
<head>
	<title>Sumhum dog</title>
</head>
<body>
 <form method="POST">
        <label>Username</label>
        <input type="text" name="name"><br>
        <label>Password</label>
        <input type="password" name="password"><br>
        <input type="submit">
 </form>
</body>
</html>