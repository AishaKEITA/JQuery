
// You should create a page with the accordion using jQuery. You should use CSS to style all the things and using jQuery write logic that will open/hide content below each section (Location, Music, Notes, Books, Tendances)  when clicking on the section title

$('.location_container').on('click', function() {
    $(this).next().slideToggle();
});

$('.music_container').on('click', function() {
    $(this).next().slideToggle();
});

$('.note_container').on('click', () => {
    $('.content_text').slideToggle();
    // $('.note-text').slideToggle();
});

$('.content_container').on('click', () => {
    // $('.content-text').slideToggle();
});

$('.book_container').on('click', function() {
    $(this).next().slideToggle();
});

$('.tendances_container').on('click', function() {
    $(this).next().slideToggle();
});

// let listItem = document.getElementByTagname ('li');

//dollar sign and (name of the tag you are  calling) then.on ('click', () => consolole.log(true);
// for(listItem of listItem){
    //listItem.addEventlistner('click', fuunction())
//}

//to get a button with the id my button
//you could do
// let currentElement;
// $(`#my-buttin`).on('click', () => {
// if (!currentElement){
//     //store the first child
//     currentElement = $ (`my-list li:first-child`)
// }else
// {
//     //get the sibling of the current element
// }
// });