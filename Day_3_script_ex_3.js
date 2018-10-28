let arrayOfNames = ['Alex', 'Zdravko', 'Lucie', 'Aze']
arrayOfNames.forEach(name => {
    if(name!=='Alex') {
    $('ul').append(`<li>${name}</li>`);
    } else {
        $('ul').append(`<li><b>${name}</b></li>`);
    }})