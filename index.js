function fetchBooks() {

  return (

  fetch("https://anapioficeandfire.com/api/books")
  .then(r => r.json())
  .then(books => {
    console.log(books)
    return renderBooks()
  
    function renderBooks() {
      const main = document.querySelector('main');
      books.forEach(book => {
        const h2 = document.createElement('h2');
        h2.innerHTML = book.name;
        main.appendChild(h2);
      });
    } } )
  

  )}


  // To pass the tests, don't forget to return your fetch!
  




document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});







