
let guest_list :string[] = ['Imran Khan','Nawaz Sharif','Zardari'];



// for(let i=0; i<guest_list.length; i++ ){



// console.log('Dear Mr. ' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
// }



let absent_Guest :string = 'Imran Khan' ;

let new_Guest :string = 'Kamran Khan Tesori' ;


guest_list[0] = new_Guest ;

for(let i=0; i<guest_list.length; i++ ){



    console.log('Dear Mr. ' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!')
    }

    console.log(`Mr. ${absent_Guest}is not coming`)

    console.log('GOOD NEWS we find big table and invite 3 more guests.')

    guest_list.unshift('Sir Zia Khan');

    guest_list.splice(2 , 0 ,'Maryam Nawaz');

    guest_list.push('Bilawal Bhutto Zardari');

    for(let i=0; i<guest_list.length; i++ ){



        console.log('Dear Mr. ' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!')
        }
    

