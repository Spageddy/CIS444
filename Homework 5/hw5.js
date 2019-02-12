// hw5.js
var dom,myVar;

function move()
{	dom = document.getElementById('txt').style;
	var x = document.getElementById('start').value;//start point
	moveRight(x);//start to move
}
function moveRight(x)
{	
	//if x still hasnt reached end boundary
	if(x < document.getElementById('end').value)
	{
		x++;
		console.log(x);
		dom.left= x + "px";
		changeColor(x);
		myVar = setTimeout("moveRight("+x+")",10);
	}
	//x is at end boundary
	if(x == document.getElementById('end').value)
		{clearTimeout(myVar);
		moveLeft(x);}
}
function moveLeft(x)
{
	//if x still hasnt reached start Boundary
	if(x > document.getElementById('start').value)
	{

		x--;
		dom.left= x + "px";
		changeColor(x);
		myVar =setTimeout("moveLeft("+x+")",10);
	}
	//if x is at start
	if(x == document.getElementById('start').value)
		{clearTimeout(myVar);
			moveRight(x);}
}

function changeColor(x)
{
	color = dom.color;
	//if every 5th pizel
	if(x%5==0)
	{
		//change colors
		if(color == 'red')
			dom.color = 'blue';
		else
			dom.color = 'red';
	}
}