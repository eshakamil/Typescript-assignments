//turn your if-else chain from ex 24 & 25 into an if-else chain.
let alienColor:string="green";

// if the alien is green, print a message that the player earned 5 points.
 if(alienColor === "green"){
console.log("player earned 5 points.");
 }else if(alienColor ==="yellow"){
   console.log("player earned 10 points.");
 }else if(alienColor === "red"){
    console.log("player earned 15 points.");
 }
 else{
    console.log("please select right color")
 }
//version  02 of program
 alienColor = "yellow";
 if(alienColor === "green"){
    console.log("player earned 5 points.");
     }else if(alienColor ==="yellow"){
       console.log("player earned 10 points.");
     }else if(alienColor === "red"){
        console.log("player earned 15 points.");
     }
     else{
        console.log("please select right color")
     }

     //version 3 of program

     alienColor = "red";
     if(alienColor === "green"){
        console.log("player earned 5 points.");
         }else if(alienColor ==="yellow"){
           console.log("player earned 10 points.");
         }else if(alienColor === "red"){
            console.log("player earned 15 points.");
         }
         else{
            console.log("please select right color")
         }