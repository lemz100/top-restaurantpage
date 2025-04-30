import bbqburgerImg from "./img/burgers/bbqburger.png";
import thunderbunImg from "./img/burgers/thunderbun.png";
import detroitburgerImg from "./img/burgers/detroitburger.png";
import dynamiteImg from "./img/burgers/dynamite.png";
import meltdownImg from "./img/burgers/meltdown.png";
import plantBbqImg from "./img/burgers/plantbbqburger.png";
import veggiethunderbunImg from "./img/burgers/veggiethunderbun.png";
import wingsIconImg from "./img/icons/wingsicon.png";
import stripsIconImg from "./img/icons/thighsicon.png";
import burgersIconImg from "./img/icons/burgericon.png";
import MenuWings from "./menuwings";
import MenuStrips from "./menustrips";

function MenuBurgers() {
    // Clears styles that may have been on the page before.
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
    menuMainHeader.textContent = "Burgers";
    const menuItemsWrapper = document.createElement("div");
    menuMainSection.classList.add("menu-mainsection");
    menuItemsWrapper.classList.add("menu-items-wrapper");
    
    let menuImages = [
        { alt: "thunderbun burger", image: thunderbunImg, h3: "Thunderbun", p: "Slathered in Awesome Sauce, with some crunchy lettuce, snappy pickles and a squishy bun." },
        { alt: "bbq burger", image: bbqburgerImg, h3: "BBQ Burger", p: "Sweet, sticky BBQ sauce, American Cheese, Awesome Sauce, crispy fresh lettuce & pickles all in a squishy bun." }, 
        { alt: "detroit burger", image: detroitburgerImg, h3: "Detroit Burger", p: "Sweet & spicy Detroit hot honey, some cooling blue cheese sauce, zingy pickles and some American Cheese" },
        { alt: "meltdown burger", image: meltdownImg, h3: "Meltdown", p: "Molten miso-jalapeño cheese sauce, garlicky red pepper aioli, fresh lettuce, snappy pickles and a squishy bun."},
        { alt: "dynamite burger", image: dynamiteImg, h3: "Dynamite", p: "Chipotle ketchup, Molten jalapeño-miso cheese, jalapeños, lettuce, pickles."},
        { alt: "veggie thunderbun burger", image: veggiethunderbunImg, h3: "Veggie Thunderbun", p: "A crispy plant based patty, slathered in Awesome Sauce, some crunchy lettuce, snappy pickles and a squishy bun."},
        { alt: "plant based bbq burger", image: plantBbqImg, h3: "Plant Based BBQ", p: "Sweet, sticky BBQ sauce on a crispy plant based patty with Vegan ranch, crispy fresh lettuce & pickles, all in a squishy bun."}
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

export default MenuBurgers;