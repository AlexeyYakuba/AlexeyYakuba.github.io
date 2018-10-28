let arrayOfNames = ['Alex', 'Zdravko', 'Lucie', 'Aze']



arrayOfNames.forEach(name => {
    if(name!=='Alex') {
    $('ul').append(`<li>${name}</li>`);
    } else {
        $('ul').append(`<li><b>${name}</b></li>`);
    }})


let additionalBlock = {
        title: "Added with javascript",
        text: "This block was added using javascript's jQuery framework. How awesome!"
      };
$('body').append(`<div>
<h1>${additionalBlock["title"]}</h1>
</div>
<div>
<p>${additionalBlock["text"]}</p>
</div>`);