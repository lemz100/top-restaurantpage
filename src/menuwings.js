import hotHoneyImg from "./img/wings/hothoney.png";
import koreanYuzuImg from "./img/wings/koreanyuzu.png";
import nakedWingsImg from "./img/wings/nakedWings.png";
import bbqwingsImg from "./img/wings/bbqwings.png";
import chipuffalowingsImg from "./img/wings/chipuffalowings.png";
import wingsIconImg from "./img/icons/wingsicon.png";
import stripsIconImg from "./img/icons/thighsicon.png";
import burgersIconImg from "./img/icons/burgericon.png";
import MenuBurgers from "./menuburgers";
import MenuStrips from "./menustrips";

function MenuWings() {
    const container = document.querySelector("#content");
    const menuHeader = document.createElement("div");
    // Menu Header Div Elements
    const menuButtonsWrapper = document.createElement("div");
    // Icon Elements.
    const wingsIcon = document.createElement("img");
    const stripsIcon = document.createElement("img");
    const burgerIcon = document.createElement("img");

    if(container.innerHTML!==""){
        container.innerHTML = "";
    }
    // Clears styles that may have been on the page before.
    container.removeAttribute("style");
    
    container.style.display = "grid";
    container.style.gridTemplateRows = "130px 1fr";
    
    // Menu Header Styling
    const MenuHeaderStyles = () => {
        menuHeader.classList.add("menu-header");
        menuButtonsWrapper.classList.add("menu-buttons-wrapper");

        wingsIcon.src = wingsIconImg;
        wingsIcon.alt = "chicken wings";
        stripsIcon.src = stripsIconImg;
        stripsIcon.alt = "chicken bucket";
        burgerIcon.src = burgersIconImg;
        burgerIcon.alt = "burger";

        let mhButtons = [
            {name: "WINGS", img: wingsIcon, onclick: () => {MenuWings();}}, 
            {name: "STRIPS", img: stripsIcon, onclick: () => {MenuStrips();}},
            {name: "BURGERS", img: burgerIcon, onclick: () => {MenuBurgers();}}
        ];
        mhButtons.forEach(object => {
            const mhButton = document.createElement("button");
            const imgDiv = document.createElement("div");
            imgDiv.classList.add("img-container");
            imgDiv.append(object.img);
            mhButton.append(imgDiv, document.createTextNode(object.name));
            mhButton.addEventListener("click", object.onclick);
            menuButtonsWrapper.append(mhButton);
        })
    }
    MenuHeaderStyles();
    
    menuHeader.append(menuButtonsWrapper);
    container.append(menuHeader);

    // Menu Main Section styling.
    const menuMainSection = document.createElement("div");
    const menuMainHeader = document.createElement("h3");
    menuMainHeader.textContent = "Wings";
    const menuItemsWrapper = document.createElement("div");
    menuMainSection.classList.add("menu-mainsection");
    menuItemsWrapper.classList.add("menu-items-wrapper");
    
    let menuImages = [
        { alt: "bbq wings", image: bbqwingsImg, h3: "BBQ", p: "Sweet, sticky and a little smoky. Zig zagged with Awesome Sauce and showered in toasted sesame seeds and chives." },
        { alt: "chipuffalo wings", image: chipuffalowingsImg, h3: "Chipuffalo", p: "Voted as the best Buffalo Wings in London! Chipotle-buffalo sauce, with a sprinkle of coriander and extra chipotle." }, 
        { alt: "hot honey wings", image: hotHoneyImg, h3: "Hot Honey", p: "Like the ultimate sweet chilli sauce, sweet, tangy, hot and a little smoky." },
        { alt: "korean yuzu wings", image: koreanYuzuImg, h3: "Korean Yuzu", p: "Gochujang based, with the zing of yuzu, sprinkled with crispy onions, sesame seeds and coriander Yuzu is a citrus fruit.. kinda like a lemon and a grapefruit had a baby"}, 
        { alt: "naked wings", image: nakedWingsImg, h3: "Naked", p: "Don’t fancy getting your fingers saucy, then these are for you! Coated in our super crisp 12 herb and spice breading." }
    ];
    
    menuImages.forEach(image => {
        const itemPanel = document.createElement("div");
        const itemImgDiv = document.createElement("div");
        const itemDescDiv = document.createElement("div");
        const img = document.createElement("img");
        const itemH3 = document.createElement("h3");
        const itemP = document.createElement("p");

        itemPanel.classList.add("menu-item-panel");
        itemImgDiv.classList.add("menu-item-img");
        itemDescDiv.classList.add("menu-item-desc");

        img.src = image.image;
        img.alt = image.alt;
        itemH3.textContent = image.h3;
        itemP.textContent = image.p;

        itemImgDiv.appendChild(img);
        itemDescDiv.append(itemH3, itemP);
        itemPanel.append(itemImgDiv, itemDescDiv);
        menuItemsWrapper.appendChild(itemPanel);
    });
    
    menuMainSection.append(menuMainHeader, menuItemsWrapper);
    container.append(menuMainSection);
}

export default MenuWings;