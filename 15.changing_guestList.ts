
let guest_list :string[] = ['Imran Khan','Nawaz Sharif','Zardari'];



for(let i=0; i<guest_list.length; i++ ){



console.log('Dear Mr. ' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
}



let absent_Guest :string = 'Imran Khan' ;

let new_Guest :string = 'Kamran Khan Tesori' ;


guest_list[0] = new_Guest ;

for(let i=0; i<guest_list.length; i++ ){



    console.log('Dear Mr. ' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!')
    }

    console.log(`Mr. ${absent_Guest}is not coming`)
