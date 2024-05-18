// stages of life : write an if-else chain that determines a person's stage of life.
//set a value for the variable age, and then,

let age: number = 25;

//if the person is less than 2 years old, print a message that the person is a baby.

if(age <2){
    console.log("person is a baby.")
}
//if the person is atleast 2 years old but less than 4 ,print a message that the person is a toodler
else if (age >= 2 && age < 4){
    console.log("person is a toddler.");
    
}
//if the person is atleast 4 years old but less than 13 ,print a meesege that the person is a kid
else if(age >= 4 && age < 13){
    console.log("person is a kid.");
    
}
//if the person is atleast 13 years old ,but less than 20,print a messege that the person is a teenager.
else if(age >= 13 && age < 20){
    console.log("person is a teenager.");
    
}
//if the person is atleast 20 years old but less than 65 ,print a messege that the person is an adult.
else if(age >= 20 && age < 65){
    console.log("person is an adult.");
    
}
//if the person is 65 or elder ,print a messege that the person is an elder.
else{
    console.log("person is an elder .")
}