// for (let i = 1; i <= 10; i++){
//     console.log(i);
// };

// for (let i = 100; i >= 0; i -= 10) {
//     console.log(i);
// }

// let animals = [
//     "Aardvark",
//     "Abyssinian",
//     "Adelie Penguin",
//     "Affenpinscher",
//     "Afghan Hound",
//     "African Bush Elephant",
//     "African Civet",
//     "African Clawed Frog",
//     "African Forest Elephant",
//     "African Palm Civet",
//     "African Penguin",
//     "African Tree Toad",
//     "African Wild Dog",
//     "Ainu",
//     "Airedale Terrier",
//     "Akita",
//     "Alaskan Malamute",
//     "Albacore Tuna",
//     "Albatross",
//     "Aldabra Giant Tortoise",
//     "Alligator",
//     "Alligator Gar",
//     "Alpaca",
//     "Alpine Dachsbracke",
//     "Amazon River Dolphin (Pink Dolphin)",
//     "American Alsatian",
//     "American Bulldog",
//     "American Cocker Spaniel",
//     "American Coonhound",
//     "American Eskimo Dog",
//     "American Foxhound",
//     "American Pit Bull Terrier",
//     "American Staffordshire Terrier",
//     "American Water Spaniel",
//     "Amur Leopard",
//     "Anatolian Shepherd Dog",
//     "Anchovies",
//     "Angelfish",
//     "Ant",
//     "Anteater",
//     "Antelope",
//     "Appenzeller Dog",
//     "Arapaima",
//     "Arctic Fox",
//     ]

    // for (let i = 0; i <=animals.length; i++ ){
    //     console.log(i, animals[i]);
    // }

    // for (let i = animals.length; i >= 0; i-- ){
    //     console.log(i, animals[i]);
    // }

    const seatingChart= [
        ['Kristen', 'Erik', 'Namita'],
        ['Geoff', 'Juanita', 'Antonio', 'Kevin'],
        ['Yuma', 'Sakura', 'Jack', 'Erika']
    ]

    // for (let i = 0; i <= 10; i++){
    //     console.log(`i is ${i}`)
    //     for (let j = 1; j <= 4; j++){
    //         console.log (`       j is ${j}`)
    //     }
    // }

    for (let i = 0; i < seatingChart.length; i++){
        let row = seatingChart[i];
        console.log(`ROW #${i + 1}`)
        for (let j = 0; j < row.length; j++){
            console.log(row[j]);
        }
    }