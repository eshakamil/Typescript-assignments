//write a program that create object containg these item.


//let person_Name :string = "Osaid";
//const personname_Array :string[] = ['person','car','cold drink'];



//Data type of person object
interface person{
    age : number
    name : string
    nationality : string
    student : boolean
}



//person object
let person :person = {
    age  :  26,
    name  : 'Osaid' ,
    nationality  : 'Pakistan',
    student : true
}
//print person
console.log(person);


//Data type of car object
interface car{
    maker : string
    color : string
    automatic : boolean
}


//car object
let car ={
    Maker : 'Toyota' ,
    color : 'black' ,
    Automatic : true

}

//print car
console.log(car);

//cold drink object

//Data type of coldink object
interface colddrink{
company : string
color : string
price : number
}




let colddrink :{
    company : 'Cola',
    color : 'black' ,
    price : '100'
}

//print colddrink
console.log(colddrink)