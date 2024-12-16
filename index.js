function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
  .then((response) => response.json())
  .then((data) => console.log(data))
  // // To pass the tests, don't forget to return your fetch!
}
function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')  // Return the fetch request
    .then(response => response.json())                      // Parse the response as JSON
    .then(data => renderBooks(data))                        // Pass the data to renderBooks
    .catch(error => console.error('Error fetching books:', error));  // Handle any errors
}


function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
