  <!DOCTYPE html>
<!--display all the information for the teams from the teams table -->
<html lang = "en">
<head>
<title> NFL Team Info</title>
  <meta charset = "utf-8" />
  <link rel = "stylesheet"  type = "text/css" href = "hw6.css" />
</head>
<body>
	<?php
	//get team id number that user requested
	$number = $_POST["teamid"];
	$servername = "localhost";
	$username = "marti540";
	$password = "3f4S99";
	$dB = "marti540";
	$SQLstring = "SELECT * FROM nfl WHERE teamID = $number";

	// Create connection
	$connection = mysqli_connect($servername, $username, $password, $dB);
	// Check connection
	if (!$connection) 
   	 die("Connection failed: " . mysqli_connect_error());

	//excute query
	$QueryResult = mysqli_query($connection,$SQLstring)
	Or die("<p>Unable to execute the query.</p>". "<p>Error Code " . mysqli_errno($connection) . ": " .mysqli_error($connection)) . "<p>";

	//table headings
	echo "<table><tr><th>teamID</th><th>teamName</th><th>startYear</th><th>ownerName</th><th>GMName</th><th>coachName</th><th>startQB</th><th>officeAddress</th><th>city</th><th>state</th><th>zipCode</th><th>phone</th><th>overallRecord</th><th>confRecord</th></tr>";

	//table data
	$Row = mysqli_fetch_assoc($QueryResult);
	while($Row){
		echo "<tr><td>{$Row['teamID']}</td><td>{$Row['teamName']}</td><td>{$Row['startYear']}</td><td>{$Row['ownerName']}</td><td>{$Row['GMName']}</td><td>{$Row['coachName']}</td><td>{$Row['startQB']}</td><td>{$Row['officeAddress']}</td><td>{$Row['city']}</td><td>{$Row['state']}</td><td>{$Row['zipCode']}</td><td>{$Row['phone']}</td><td>{$Row['overallRecord']}</td><td>{$Row['confRecord']}</td>";
	 $Row = mysqli_fetch_assoc($QueryResult);
	}
	echo "</table>";
	//close query results
	mysqli_free_result($QueryResult);
	//close connection
	mysqli_close($connection);
	?>
</body>
</html>