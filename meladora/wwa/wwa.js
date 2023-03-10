const searchBar = document.querySelector(".search-bar");
const searchIcon = document.querySelector(".search-icon");
const searchInput = document.querySelector(".search-input");
const barItems = document.querySelectorAll(".navbar-item");
const barIcon = document.querySelector(".bar-icon");
const menu = document.querySelector(".responsive-menu");
const gallery = document.querySelector(".gallery-content");
const galleryNav = document.querySelector(".gallery-nav");
const images = ["images/img0.png", "images/img1.png", "images/img2.png", "images/img3.png", "images/img4.png", "images/img5.png", "images/img6.png"];

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
        menu.style.display = "none";
        barIcon.style.color = "#3E3737"
    }
})

let selectStart = 0;
let selectEnd = 6;

galleryNav.addEventListener('click', e => {

    if (e.target.className == "selector") {
        const selectorActive = document.querySelector(".selector-active");
        selectorActive.className = "selector";
        e.target.className = "selector-active";
        selectStart = 6 * ((parseInt(e.target.id) - 1));
        selectEnd = 6 * parseInt(e.target.id);
    }
    addGrids(images);
})


for (i = 0; i < Math.ceil(images.length / 6); i++) {
    const newItem = document.createElement("div");
    if (i == selectStart) {
        newItem.classList.add("selector-active");
        newItem.id = i + 1;
    } else {
        newItem.classList.add("selector");
        newItem.id = i + 1;
    }
    galleryNav.appendChild(newItem);
}

function addGrids(imgList) {
    gallery.innerHTML = "";
    const colContainer1 = document.createElement("div");
    colContainer1.className = "col-container-1";
    const colContainer2 = document.createElement("div");
    colContainer2.className = "col-container-2";
    const colContainer3 = document.createElement("div");
    colContainer3.className = "col-container-3";
    for (let i = selectStart; i < selectEnd; i++) {
        if (imgList[i] != null) {
            const newDiv = document.createElement("div");
            newDiv.className = "grid";
            const img = document.createElement("img");
            img.src = imgList[i];
            img.id = i;
            newDiv.appendChild(img);
            if (i < 2) {
                colContainer3.appendChild(newDiv);
            } else if (i < 4) {
                colContainer2.appendChild(newDiv);
            } else {
                colContainer1.appendChild(newDiv);
            }
            newDiv.addEventListener('click', e => {
                gallery.style.opacity = ".1";
                const carouselContainer = document.querySelector(".carousel-container");
                carouselContainer.style.display = "flex";
                carouselContainer.innerHTML = `
                    <div class="carousel">
                    <div class="carousel-x">
                        <i class="fa-solid fa-x" style="color: white;"></i>
                    </div>
                    <div class="carousel-content">
                        <div class="slide-left">
                            <i class="fa-solid fa-circle-left"></i>
                        </div>
                        <div class="carousel-img">
                            <img class="img" src="${imgList[e.target.id]}">
                        </div>
                        <div class="slide-right">
                            <i class="fa-solid fa-circle-right"></i>
                        </div>
                    </div>
                    </div>
                `;
                const carouselX = document.querySelector(".fa-x");
                if (carouselX != null) {
                    carouselX.addEventListener('click', e => {
                        gallery.style.opacity = "1";
                        carouselContainer.style.display = "none";
                        carouselContainer.innerHTML = "";
                    })
                }

                const left = document.querySelector(".slide-left");
                const right = document.querySelector(".slide-right");
                let counter = parseInt(e.target.id) + 1;
                const img = document.querySelector(".img");
                left.addEventListener('click', e => {
                    img.src = imgList[counter];
                    if (counter > 0) {
                        console.log(counter)
                        counter--
                    }
                })
                right.addEventListener('click', e => {
                    img.src = imgList[counter];
                    if (counter < imgList.length - 1) {
                        console.log(counter)
                        counter++;
                    }
                })

            })

        }
    }
    if (colContainer1.innerHTML != "") {
        gallery.appendChild(colContainer1);
        if (colContainer2.innerHTML != "") {
            gallery.appendChild(colContainer2);
            if (colContainer3.innerHTML != "") {
                gallery.appendChild(colContainer3);
            }
        }
    }
}




addGrids(images);

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