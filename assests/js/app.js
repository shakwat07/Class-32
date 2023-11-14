let openSearch = document.querySelector("#open_search");
let closeSearch = document.querySelector("#close_search");
let search = document.querySelector("#search");
openSearch.addEventListener('click', () => {
  search.classList.add('show');
});
closeSearch.addEventListener('click', () => {
    search.classList.remove('show');
  });
