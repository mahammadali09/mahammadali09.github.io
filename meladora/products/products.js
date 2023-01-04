const searchBar = document.querySelector(".search-bar");
const searchIcon = document.querySelector(".search-icon");
const searchInput = document.querySelector(".search-input");
const barItems = document.querySelectorAll(".navbar-item");
const barIcon = document.querySelector(".bar-icon");
const menu = document.querySelector(".responsive-menu");
const productContainer = document.querySelector(".pr-container");
const productBar = document.querySelector(".pr-navbar");
let activeID = document.querySelector("#pr-active");

let products = {
    fruits: {
        apple: {
            name: "Alma",
            src: "../images/products/apple.png",
            prcie: "5m",
            className: "apple",
            img1: "images/garden1.png",
            img2: "images/garden2.png",
            img3: "images/garden3.png",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        pear: {
            name: "Armud",
            src: "../images/products/pear.png",
            prcie: "5m",
            className: "pear",
            img1: "images/garden1.png",
            img2: "images/garden2.png",
            img3: "images/garden3.png",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        peach: {
            name: "Şaftalı",
            src: "../images/products/peach.png",
            prcie: "5m",
            className: "peach",
            img1: "images/garden1.png",
            img2: "images/garden2.png",
            img3: "images/garden3.png",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

        },
        orange: {
            name: "Portağal",
            src: "../images/products/orange.png",
            prcie: "5m",
            className: "orange",
            img1: "images/garden1.png",
            img2: "images/garden2.png",
            img3: "images/garden3.png",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        plum: {
            name: "Gavalı",
            src: "../images/products/plum.png",
            prcie: "5m",
            className: "plum",
            img1: "images/garden1.png",
            img2: "images/garden2.png",
            img3: "images/garden3.png",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        cherry: {
            name: "Gilas",
            src: "../images/products/cherry.png",
            prcie: "5m",
            className: "cherry",
            img1: "images/garden1.png",
            img2: "images/garden2.png",
            img3: "images/garden3.png",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        }
    },
    vegetables: {
        tomato: {
            name: "Pomidor",
            src: "../images/products/tomato.png",
            prcie: "5m",
            className: "tomato",
            img1: "images/garden1.png",
            img2: "images/garden2.png",
            img3: "images/garden3.png",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        }
    },
    grains: {
        wheat: {
            name: "Taxıl",
            src: "../images/products/wheat.png",
            prcie: "5m",
            className: "wheat",
            img1: "images/garden1.png",
            img2: "images/garden2.png",
            img3: "images/garden3.png",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        }
    },
    others: {
        sapling: {
            name: "Müxtəlif fidanlar",
            src: "../images/products/sapling.png",
            prcie: "5m",
            className: "sapling",
            img1: "images/garden1.png",
            img2: "images/garden2.png",
            img3: "images/garden3.png",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        walnut: {
            name: "Qoz",
            src: "../images/products/walnut.png",
            prcie: "5m",
            className: "walnut",
            img1: "images/garden1.png",
            img2: "images/garden2.png",
            img3: "images/garden3.png",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        }
    }
}

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

productBar.addEventListener('click', e => {
    let className = e.target.className;
    console.log(className);
    if (className != "pr-ul") {
        productContainer.innerHTML = "";
        activeID.removeAttribute("id");
        e.target.setAttribute("id", "pr-active");
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
                    prPrice.innerText = products[key][x].prcie;
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
                prPrice.innerText = products[className][key].prcie;
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
    contentDemonstrator();
})

barIcon.addEventListener('click', e => {
    if (barIcon.classList.contains("fa-bars")) {
        barIcon.classList.remove("fa-bars");
        barIcon.classList.add("fa-x");
        menu.style.display = "block";
        barIcon.style.color = "white";
    } else {
        barIcon.classList.remove("fa-x");
        barIcon.classList.add("fa-bars");
        menu.style.display = "none";
        barIcon.style.color = "91B40D";
    }
})

function contentDemonstrator() {
    const prItems = document.querySelectorAll(".pr-item");
    for (x in prItems) {
        prItems[x].addEventListener('click', e => {
            if (e.target.className != "product-price") {
                for (key1 in products) {
                    for (key2 in products[key1]) {
                        const item = products[key1][key2];
                        if (item.name == e.target.innerText.split("\n")[0]) {
                            const productWrapper = document.querySelector(".products");
                            const demonstrator = document.querySelector(".demonstrator-container");
                            const exitButton = document.querySelector(".exit-button");
                            if (productWrapper.style.opacity == "") {
                                productWrapper.style.opacity = "0.1";
                                demonstrator.style.display = "flex";
                                demonstrator.childNodes[1].childNodes[1].childNodes[1].innerHTML = `<img src="${item.src}">`;
                                demonstrator.childNodes[1].childNodes[1].childNodes[3].childNodes[1].childNodes[1].innerText = item.name;
                                demonstrator.childNodes[1].childNodes[1].childNodes[3].childNodes[3].innerText = item.prcie;
                                demonstrator.childNodes[1].childNodes[1].childNodes[3].childNodes[5].innerText = item.text;
                                demonstrator.childNodes[1].childNodes[3].innerHTML = `
                                    <img src="${item.img1}">
                                    <img src="${item.img2}">
                                    <img src="${item.img3}">
                                `;
                            }
                            exitButton.addEventListener('click', e => {
                                productWrapper.style.opacity = "";
                                demonstrator.style.display = "none";
                            })
                        }
                    }
                }
            }
        })
    }
}

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
contentDemonstrator();