// 1. Look at this if statement... something about it doesn't really make sense. Change it so that the messages make sense.

if(true) {
  console.log("This message is visible")
} else {
  console.log("You'll never see this message!")
}

// 2. Create a for loop that counts to 10 backwards. Comment each line to explain what is happening.

var n = 15
for (i=n; i>10; i--) {
    console.log("We are subtracting 1 from " + n);
    n--;
}


// 3. Create an array with at least 4 items inside it. Console.log the second thing in the list. Change the fourth item to equal "duck".

var myArray = ["Godard", "Neutron", "Mallards", "monkeys"]
console.log(myArray[1]);
myArray[3] = "UltraLord"
console.log(myArray)
// 4. Being comfortable with if/else decisions is very helpful in code. It helps you get into the practice of breaking complex actions down into their simpler parts. You might recognize this example:

if(!tired) {
	keepWorking()
} else {
	console.log("I need coffee!")
}

// Now try to come up with your own if/else decision - if you can't think of one, try to create one for opening a door.
var door = "open"
function keepClosed() {
    if(door == "closed") {
        console.log("door is now open"), door = "open";
    } else {
        console.log("door is now closed"), door = "closed";
    }
}
keepClosed()

// 5. Time to combine all this! Create a function that takes in two numbers as arguements. Find the sum of those two numbers, if the sum is less than 20, console log the sum. If the two numbers sum to more than 20, console log "can't count that high!"

function practiceFunc(arg1, arg2) {
	var newNumb = arg1+arg2
    if (newNumb < 20) {
        console.log(newNumb)
    } else {
        console.log("Can't count that high!")
    }
}
practicefunc(11,12)
