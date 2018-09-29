
//Create data Arrays for storing user info//
let bookTitlesAsArr = [];

//Get page elements//
const newBookTitle = document.getElementById("book_New-Title");

//handle routing info//
let url = window.location.pathname;
let fileName = url.substring(url.lastIndexOf('/')+1);

//handle url queries//
let fullUrl = new URL(window.location.href);
//retrieve url params//
let urlQuery = fullUrl.search.substring(1);
//split param name and value//
urlQuery = urlQuery.split("=");

//Start logic//
const displayUserData = function() {
  if (localStorage.getItem('bookTitles') !== null) {
      //Get local storage items//
      bookTitlesAsArr = JSON.parse(localStorage.getItem('bookTitles'));

    //Check page url//
    if (fileName === "index.html") {
      //Display Book Titles//
      let book_Instance = ``;
      for (var i = 0; i < bookTitlesAsArr.length; i++) {
        book_Instance += `<section class="book_Info">
                            <p>${bookTitlesAsArr[i]}</p>
                            <a href="bookView.html?book_Elements=${i}"><button type="button" name="book_${i}-overView">View</button></a>
                          </section>`;

        $('#book_List').html(book_Instance);
      }
    }else if (fileName!== "index.html" && urlQuery[0]==="book_Elements") {
      let book_Elements =  `<a href="bookView.html"><h2>${bookTitlesAsArr[urlQuery[1]]}</h2></a>`;
        $('#current_Book').html(book_Elements);
    }
  }

}


//Wait for completed page load//
document.addEventListener("DOMContentLoaded", function() {
    displayUserData();
  //Listen for new book to be added//
  document.getElementById("book_Add").addEventListener("click", function() {
    //Set user Book Title to local storage//
    bookTitlesAsArr.push(newBookTitle.value);
    localStorage.setItem('bookTitles', JSON.stringify(bookTitlesAsArr));
    console.log(newBookTitle.value);
    //Alert user of saved changes//
    alert(`Your book title "${newBookTitle.value}" was saved!`);

  });

});
