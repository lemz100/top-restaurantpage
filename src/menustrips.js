import wingsIconImg from "./img/icons/wingsicon.png";
import stripsIconImg from "./img/icons/thighsicon.png";
import burgersIconImg from "./img/icons/burgericon.png";
import strips1Img from "./img/strips/3strips1dip.png";
import strips2Img from "./img/strips/5strips1dip.png";
import strips3Img from "./img/strips/7strips2dips.png";
import MenuWings from "./menuwings";
import MenuBurgers from "./menuburgers";

function MenuStrips() {
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
    menuMainHeader.textContent = "Strips";
    const menuItemsWrapper = document.createElement("div");
    menuMainSection.classList.add("menu-mainsection");
    menuItemsWrapper.classList.add("menu-items-wrapper");
    
    let menuImages = [
        { alt: "3 strips 1 dip", image: strips1Img, h3: "3 Strips + 1 Dip", p: "3 Breaded Wings & 1 Dips. Meals served with Fries & any Coke or Water." },
        { alt: "5 strips 1 dip", image: strips2Img, h3: "5 Strips + 1 Dip", p: "5 Breaded Wings & 1 Dips. Meals served with Fries & any Coke or Water." }, 
        { alt: "7 strips 2 dip", image: strips3Img, h3: "7 Strips + 2 Dip", p: "7 Breaded Wings & 2 Dips. Meals served with Fries & any Coke or Water." },
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

export default MenuStrips;