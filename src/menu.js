// TO FINISH
import MenuWings from "./menuwings";
import MenuBurgers from "./menuburgers";
import MenuStrips from "./menustrips";

function Menu() {
    const container = document.querySelector("#content");
    const contentOverlay = document.createElement("div");
    const mainContent = document.createElement("div");
    const contentHeader = document.createElement("div");
    const menuMainButtons = document.createElement("div");
    const chH1 = document.createElement("h1"); // Content Header text

    // Empties container before rendering
    if(container.innerHTML!==""){
        container.innerHTML = "";
    }
    // Clears styles that may have been on the page before.
    container.removeAttribute("style");
    
    // Styling
    container.style.position = "relative";
    contentOverlay.classList.add("content-overlay");
    mainContent.classList.add("main-content");
    contentHeader.classList.add("content-header");
    menuMainButtons.classList.add("menu-mainbuttons");

    chH1.textContent = "What would you like? Click below: ";
    contentHeader.appendChild(chH1);

    let mainButtons = [
        {name: "Wings", onclick: () => {MenuWings();}},
        {name: "Strips", onclick: () => {MenuStrips();}},
        {name: "Burgers", onclick: () => {MenuBurgers();}}
    ];
    mainButtons.forEach(button => {
        const mainButton = document.createElement("button");
        mainButton.textContent = button.name;
        mainButton.addEventListener("click", button.onclick);
        menuMainButtons.appendChild(mainButton);
    });
    mainContent.append(contentHeader, menuMainButtons);
    container.append(contentOverlay, mainContent);
}

export default Menu;
