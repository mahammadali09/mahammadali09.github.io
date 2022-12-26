const productContainer = document.querySelector(".pr-container");
const productBar = document.querySelector(".pr-navbar");
const searchBar = document.querySelector(".search-bar");
const searchIcon = document.querySelector(".search-icon");
const searchInput = document.querySelector(".search-input");
const barItems = document.querySelectorAll(".navbar-item");
const barIcon = document.querySelector(".bar-icon");
const menu = document.querySelector(".responsive-menu");
let activeID = document.querySelector("#active");

let products = {
    fruits: {
        apple: {
            name: "Alma",
            src: "images/products/apple.png"
        },
        pear: {
            name: "Armud",
            src: "images/products/pear.png"
        },
        peach: {
            name: "Şaftalı",
            src: "images/products/peach.png"
        },
        orange: {
            name: "Portağal",
            src: "images/products/orange.png"
        },
        plum: {
            name: "Gavalı",
            src: "images/products/plum.png"
        },
        cherry: {
            name: "Gilas",
            src: "images/products/cherry.png"
        }
    },
    vegetables: {
        tomato: {
            name: "Pomidor",
            src: "images/products/tomato.png"
        }
    },
    grains: {
        wheat: {
            name: "Taxıl",
            src: "images/products/wheat.png"
        }
    },
    others: {
        sapling: {
            name: "Müxtəlif fidanlar",
            src: "images/products/sapling.png"
        },
        walnut: {
            name: "Qoz",
            src: "images/products/walnut.png"
        }
    }
}

productBar.addEventListener('click', e => {
    let className = e.target.className;
    console.log(className);
    if (className != "pr-ul") {
        productContainer.innerHTML = "";
        activeID.removeAttribute("id");
        e.target.setAttribute("id", "active");
        if (className == "all") {
            for (key in products) {
                for (x in products[key]) {
                    const prItem = document.createElement("div");
                    prItem.className = "pr-item";
                    prItem.style.backgroundImage = `url(${products[key][x].src})`;
                    const prContent = document.createElement("div");
                    prContent.className = "pr-item-content";
                    const prName = document.createElement("div");
                    prName.innerText = products[key][x].name;
                    const prPrice = document.createElement("div");
                    prPrice.innerText = "5m";
                    prName.className = "product-name";
                    prPrice.className = "product-price";
                    prContent.appendChild(prName);
                    prContent.appendChild(prPrice);
                    prItem.appendChild(prContent);
                    productContainer.appendChild(prItem);
                }
            }
        } else {
            for (key in products[className]) {
                const prItem = document.createElement("div");
                prItem.className = "pr-item";
                prItem.style.backgroundImage = `url(${products[className][key].src})`;
                const prContent = document.createElement("div");
                prContent.className = "pr-item-content";
                const prName = document.createElement("div");
                prName.innerText = products[className][key].name
                const prPrice = document.createElement("div");
                prPrice.innerText = "5m";
                prName.className = "product-name";
                prPrice.className = "product-price";
                prContent.appendChild(prName);
                prContent.appendChild(prPrice);
                prItem.appendChild(prContent);
                productContainer.appendChild(prItem);
            }
        }
        activeID = e.target;
    }
})


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
    }
})