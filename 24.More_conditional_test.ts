import { log } from "console";

//equality and inequality test
console.log("equality test with strings:" , "Apple" === "Apple");


//equality and inequality test
console.log("inequality test with strings:" , ("Apple" as string )!= "Orange");

//test using the lower case function
console.log("lower case function test:" , "HELLO".toLowerCase() === "hello");

//numerical test involving equality  
console.log("equality test with numbers :" , 26 ===26);

//numerical test involving inequality
console.log("inequality test with numbers :" , (26 as number) != 45);


//greater than test
console.log("greater than test: " , 10 > 5); 

//less than test
console.log("less than test: " , 5 < 10); 


//greater than and equal to test
console.log("greater than and equal to test", 10 >= 10);

//less than or equal to
console.log("less than or equal to test:",5 <= 10 );


//test using "and" operator 
console.log("and operator test" , 5 === 5 && 10 > 5);

//test using "or" operator
console.log("or operator test:", 5===5 || false);

//test weather an item is in array 
const cars : string [] = ['honda','civic','farra'];
console.log('test "honda" in the array:', cars.includes("honda"));

//test wether an item is not in a array
console.log('testing "lamberginni" is not in array: ', !cars.includes('lamberginni'));
