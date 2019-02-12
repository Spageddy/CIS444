function checkval(val)
{
	if(val>99 || val < 0)//check value 
	{
		alert("Amount has to be between 0-99. Please try again!")
	}
}

function getTotal()
{
	var apple = document.getElementById("apple").value;
	var orange = document.getElementById("orange").value;
  	var banana = document.getElementById("banana").value;
	
	//check if still in range
	if(apple>-1 && apple<100 && banana>-1 && banana<100 && orange>-1 && orange<100)
	{
		document.getElementById("cost").value =
 		totalCost = apple * .59 + orange * .49 +
        banana * .39;
    }
}
function TotalwTax()
{
	var apple = document.getElementById("apple").value;
	var orange = document.getElementById("orange").value;
  	var banana = document.getElementById("banana").value;
	
	//check if still in range
	if(apple>-1 && apple<100 && banana>-1 && banana<100 && orange>-1 && orange<100)
	{
 		var totalCost = apple * .59 + orange * .49 +
        banana * .39;
        totalCost += (totalCost* .0775)//add tax
        alert("our total cost is $" + totalCost.toFixed(2))
    }
    return false;
}