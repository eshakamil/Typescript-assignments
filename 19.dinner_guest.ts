
let guest_list :string[] = ['Imran Khan','Nawaz Sharif','Zardari'];



// for(let i=0; i<guest_list.length; i++ ){



// console.log('Dear Mr. ' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
// }



let absent_Guest :string = 'Imran Khan' ;

let new_Guest :string = 'Kamran Khan Tesori' ;


guest_list[0] = new_Guest ;

// for(let i=0; i<guest_list.length; i++ ){



//     console.log('Dear Mr. ' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!')
//     }

    // console.log(`Mr. ${absent_Guest}is not coming`)

    // console.log('GOOD NEWS we find big table and invite 3 more guests.')


    //array mai 3 guest add kie hai
    guest_list.unshift('Sir Zia Khan');

    guest_list.splice(2 , 0 ,'Maryam Nawaz');

    guest_list.push('Bilawal Bhutto Zardari');


    //yahan pr mene 6guest ke array ko print kraya hai 
    // for(let i=0; i<guest_list.length; i++ ){



    //     console.log('Dear Mr. ' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!')
    //     }
    


        //soory message to guest for not invited
// console.log('/nSorry we can not invite a big table, Only two people are invited');


//yahan pr mene guest remove kie hai
while(guest_list.length > 2){
    let remove_guest = guest_list.pop();
    // console.log(`soory Mr. ${remove_guest},you are not invited for dinner`);

}


//hamare bache hue 2 invited guest
// for(let i=0; i<guest_list.length; i++ ){



//     console.log('Dear Mr. ' + guest_list[i] + ',\n\nYou are still invited.\n\nThank You!')
//     }


    //mene saray guest array se remove krdie
guest_list.splice(0,2);

console.log(guest_list)


//Exercise 19

//Print a message indicating a number pf people you are inviting the dinner

console.log(`Total number of guest are: ${guest_list.length}`)