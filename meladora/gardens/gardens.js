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
        barIcon.style.color = "white";
        menu.style.display = "block";
    } else {
        barIcon.classList.remove("fa-x");
        barIcon.classList.add("fa-bars");
        barIcon.style.color = "91B40D";
        menu.style.display = "none";
    }
})

window.addEventListener("wheel", fixingNavBar);


function fixingNavBar(e) {
    const navBar = document.querySelector(".navbar-holder");
    if (e.deltaY > 0 && innerWidth > 1200) {
        navBar.style.top = 0;
        navBar.style.margin = 0;
        navBar.style.width = "100%";
        navBar.style.position = "fixed"
        navBar.style.left = 0;
        navBar.style.padding = ".5em 3em";
        navBar.style.backgroundColor = "#91B40D";

    } else if (innerWidth > 1200 && e.deltaY < 0) {
        navBar.style.margin = "2em 0";
        navBar.style.width = "100%";
        navBar.style.position = "static"
        navBar.style.padding = "0";
        navBar.style.backgroundColor = "";
    }
}