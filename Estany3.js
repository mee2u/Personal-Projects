//programmmer: Mena Estany
  			//Assignment 3
  			//CSCI4410

//problem (1)
	function myFunction()  // this function get called to to the Fibonacci sequence from the first button 
	 {
 
    var person = prompt("Please enter a number between 3 and 50", 3);      //prompt to the user to enter and number in a certain limit
    
    if (person <  3) {															//if statement to handle if the user entered small numbers
        document.getElementById("demo").innerHTML =								// with informal message 
         person + " is invalid too small!";
    }
   else if (person > 50){													//if statement to handle if the user entered lage numbers
        document.getElementById("demo").innerHTML =							// with informal message 
         person + " is invalid too large!";
    }
    else {																	//this else for numbers between 3 and 50
    	var a, result , b; 
    	a=0;																// take cares of the Fibonacci sequence 
    	b=1;
    	var text = "first " + person + " fibonacci numbers "+ "<br>";
    	for(var i = 1; i <= person ; i++ ){									// for loop to loop until it reaches the number was entered 
    	result = a+b;														// add a and b
        text  += i + " = " +result + "<br>";								// store them tex for output purpose 
        a=b;																// update a with next number 
        b= result; 															// and b with the right next number to keep count 
       }
       document.getElementById("demo").innerHTML = text;					// it takes care of the of the input at the right spot 
    }
}


//problem(2)
	function Function2()   // this function sort an array of strings in alphabetical order
	{
        var string = prompt("Enter a line of text ");      // prompt to user to enter a string 
        var tex = "your input: " + "<strong>"+ string +"</strong>"+ "<br>";   // for the purpose of the output 
        var textArr=string.split(" ");							//split the input between each space 
        var str  =  textArr.sort();								//sort that area and store the new array in str 

            for (var i = 0 ; i < str.length; i++)
            {
                tex += str[i]+ "<br>";								// loop through and store these in tex for the output
            }
         document.getElementById("demo2").innerHTML = tex;       // to output at the right place 
     }

//problem(3)
	function Function3()    //the function to words in an input  end with ie and y
	 {
			var str = prompt("Enter a line of text ", "type here");  // to promot to user to enter a line of input
			var res = "";
			var res1 = "";
 
			var counter = 0;						//counter for ies and ys
     		var str3 = str.split(" ");				// to split to check every word in the sentence 
			for (var i = 0; i < str3.length; i++)		// for loop to check in the str3 array
			{
				res = str3[i].match(/ie$/g);					// match check if the that word had ie at the end of it and store it in res
					if(res == "ie"){counter++;}				// if res value has changed to ie update the counter
				res1 = str3[i].match(/y$/g);				//match if the a specific word had y at the end of it and store it in res1
					if(res1 == "y"){counter++;}             // if res1 value has changed to y update the counter as well

			}
    document.getElementById("demo3").innerHTML = "your input "+ "<strong>" + str +"</strong>"+ " has "+ counter + " \"ie\"" +" and "+ "\"y\"" ; // just for output purposes 
	}
