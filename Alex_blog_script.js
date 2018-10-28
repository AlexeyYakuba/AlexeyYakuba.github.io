
$('button').on('click', (event)  => {

$('.posts').append(`<h1>${$('input').val()}</h1> <p>${$('.first_textarea').val()}<//p>`);
})
$('ul').on('click',(event) => {
    $(event.target).css('text-decoration', 'line-through')
})