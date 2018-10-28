let book1 = { author: `Bill McDermott`, title: `Winner's dream`, year: `2014` };
let book2 = { author: `Marc Raben`, title: `S/4HANA`, year: `2018` };
let book3 = { author: `Mr Smith`, title: `A`, year: `0000` };
let arrayOfBooks = [book1, book2, book3];

arrayOfBooks.forEach(function (book) {
    if (book['year'] > 2010) {
        console.log(`I recommend reading ${book["title"]}`)
    } else {
        console.log(`You've probably already read ${book["title"]}`);
        
    }
})