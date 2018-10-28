let Store=0;

$('button').on('click', (event)  => {
    Store=Store+1
$('#counter').text(Store);
})