 /* hw3.js - an external javascript file
     for use with hw3.html
   */
var n= askUser();
document.write("<table><tr><th>n</th><th>sum</th>");//table heading
makeTable(n);

//prompts the user to input a number
function askUser(){
	 n = parseInt(prompt("Enter an integer:"));

	while(isNaN(n) || n <= 0)//make sure n is a positive integer 
	{	
		n = parseInt(prompt("not an integer!!Enter an integer"));
	}
	return n;
}

//makes the resulting table
function makeTable(n){
	var total = 1;
	for(var i =1; i <= n; i++)//loop to write each number with its factorial
	{
		total *= i;
		document.write("<tr><td>",i,"</td><td>",total,"</td></tr>"); 
	}
}
