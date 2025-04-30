import hotHoneyImg from "./img/wings/hothoney.png";
import koreanYuzuImg from "./img/wings/koreanyuzu.png";

function HomePage () {
    // Global DOM Elements that are being created
    const container = document.querySelector("#content");
    const textHeaders = document.createElement("div");
    const h2Header = document.createElement("h2");
    const h4Header = document.createElement("h4");
    const homePageDescription = document.createElement("p");
    const foodImgWrapperDiv = document.createElement("div");
    const wings1 = document.createElement("img");
    const wings2 = document.createElement("img");

    // Empties container before rendering
    if(container.innerHTML!==""){
        container.innerHTML = "";
    }
    // Clears styles that may have been on the page before.
    container.removeAttribute("style");

    // Dynamic CSS Styling
    const ContainerStyles = () => {
        container.style.display = "flex";
        container.style.flexDirection = "column";
        container.style.justifySelf = "center";
        container.style.alignItems = "center";
        container.style.width = "50%";
        container.style.height = "100%";
    }
    const ContainerTextStyles = () => {
        textHeaders.style.fontFamily = "Helvetica, Arial, sans-serif";
        h2Header.style.placeSelf = "center";
        h2Header.style.marginBottom = "0";
        h4Header.style.marginTop = "5px";
        homePageDescription.style.fontFamily = "Helvetica, Arial, sans-serif";
        homePageDescription.style.textAlign = "center";
        homePageDescription.style.textWrap = "wrap";
    }
    const FoodImageStyles = () => {
        foodImgWrapperDiv.style.display = "grid";
        foodImgWrapperDiv.style.gridTemplateColumns = "1fr 1fr";
        foodImgWrapperDiv.style.width = "100%";
        foodImgWrapperDiv.style.height = "100%";
        wings1.style.width = "100%";
        wings1.style.height = "100%";
        wings2.style.width = "100%";
        wings2.style.height = "100%";
    }
    
    // Text Header div and its elements.
    const TextHeaderRender = () => {
        textHeaders.classList.add("content-textheader");
        h2Header.textContent = "Thunderbird Fried Chicken";
        h4Header.textContent = "Home of the juiciest, mouthwatering fried chicken in town";
        textHeaders.append(h2Header, h4Header);
        container.appendChild(textHeaders);
    }
    // Paragraph element
    const ParagraphRender = () => {
        homePageDescription.textContent = "Come here to enjoy our crispy fried chicken, enriched with a variety of seasonings and coated in our beautiful, hand-made sauces and toppings. With sauces ranging from Louisiana Rub, Garlic Parmesan and Hot Honey, we can guarantee your tastebuds are in for a massive treat!";
        container.appendChild(homePageDescription);
    }
    // Food Image div and its elements
    const FoodImageRender = () => {
        foodImgWrapperDiv.classList.add("food-img-wrapper");
        wings1.src = hotHoneyImg;
        wings2.src = koreanYuzuImg;
        wings1.alt = "hot honey wings";
        wings2.alt = "korean yuzu wings";
        foodImgWrapperDiv.append(wings1, wings2);
        container.appendChild(foodImgWrapperDiv);    
    }

    const renderDOM = () => {
        // HTML Render
        TextHeaderRender();
        ParagraphRender();
        FoodImageRender();
        
        // CSS Render
        ContainerStyles();
        ContainerTextStyles(); 
        FoodImageStyles();
    }
    renderDOM();
}

export default HomePage;