// TO FINISH

function Menu() {
    const container = document.querySelector('#content');

    if(container.innerHTML!=="") {
        container.innerHTML="";
    }
    // Clears styles that may have been on the page before.
    container.removeAttribute("style");

    // DUMMY FUNCTIONS for testing
    container.style.backgroundColor = "black";
    container.style.width = "100%";
    container.style.height = "100%";
    container.style.display = "flex";

    const helloWorld = document.createElement("p");
    helloWorld.style.color = "white";
    helloWorld.textContent = "Hello world!";
    container.appendChild(helloWorld);
}

export default Menu;
