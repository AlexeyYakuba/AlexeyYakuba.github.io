
$('button').on('click', (event)  => {

$('ul').append(`<li>${$('textarea').val()}</li>`);
})
$('ul').on('click',(event) => {
    $(event.target).css('text-decoration', 'line-through')
})