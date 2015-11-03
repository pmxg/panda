<?php  
	if($con=mysqli_connect('localhost','root')){
		// echo "success!";
	}else{
		echo "wrong!";
	}
	if(mysqli_select_db($con,'pmxg')){
		// echo "open pmxg successfully!";
	}else{
		echo "failed to open pmxg!";
	}
	if ($_SERVER["REQUEST_METHOD"]=="GET"){
		serch();
	}
	if ($_SERVER["REQUEST_METHOD"]=="POST"){
		create();
	}
	function serch(){
		$con=mysqli_connect('localhost','root');
		mysqli_select_db($con,'pmxg');
		$name=$_GET["name"];
		$query=mysqli_query($con,'SELECT * FROM score ORDER BY score DESC LIMIT 10');
		for ($i=0; $i <10; $i++) { 
			$row=mysqli_fetch_array($query);
			echo $row[1]." Got ".$row[0]." At ".$row[2];
			echo "/";
			}
		mysqli_close($con);
	}
	function create(){
		$con=mysqli_connect('localhost','root');
		mysqli_select_db($con,'pmxg');
		$name=$_POST["name"]?$_POST["name"]:"Ano user";
		$score=$_POST["score"];
		$add=$_SERVER["REMOTE_ADDR"];
		$time=$_POST["time"];
		$cont="INSERT INTO `pmxg`.`score` (`Score`, `Name`, `Time`, `Id`, `Ip`) VALUES ('$score', '$name', '$time', NULL, '$add')";
		$query=mysqli_query($con,$cont);
		mysqli_close($con);
	}
?>