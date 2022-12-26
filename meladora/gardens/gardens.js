const searchBar = document.querySelector(".search-bar");
const searchIcon = document.querySelector(".search-icon");
const searchInput = document.querySelector(".search-input");
const barItems = document.querySelectorAll(".navbar-item");
const barIcon = document.querySelector(".bar-icon");
const menu = document.querySelector(".responsive-menu");

searchIcon.addEventListener('click', e => {
    if (!searchBar.classList.contains("search-bar-active")) {
        searchBar.classList.add("search-bar-active");
        searchInput.style.display = "inline";
        barItems.forEach(item => {
            item.style.marginRight = ".2em";
        })
    } else {
        searchBar.classList.remove("search-bar-active");
        searchInput.style.display = "none";
        barItems.forEach(item => {
            item.style.marginRight = "2em";
        })
    }
})


barIcon.addEventListener('click', e => {
    if (barIcon.classList.contains("fa-bars")) {
        barIcon.classList.remove("fa-bars");
        barIcon.classList.add("fa-x");
        menu.style.display = "block";
    } else {
        barIcon.classList.remove("fa-x");
        barIcon.classList.add("fa-bars");
        menu.style.display = "none";
    }
})