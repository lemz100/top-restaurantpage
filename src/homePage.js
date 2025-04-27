import hotHoneyImg from "./img/hothoney.png";
import koreanYuzuImg from "./img/koreanyuzu.png";

function HomePage () {
    const container = document.querySelector("#content");
    
    if(container.innerHTML!==""){
        container.innerHTML = "";
    }

    // Text Header div and its elements.
    const textHeaders = document.createElement("div");
    textHeaders.classList.add("content-textheader");
    const h2Header = document.createElement("h2");
    const h4Header = document.createElement("h4");
    h2Header.textContent = "Thunderbird Fried Chicken";
    h4Header.textContent = "Home of the juiciest, mouthwatering fried chicken in town";
    textHeaders.append(h2Header, h4Header);
    container.appendChild(textHeaders);

    // Paragraph element
    const homePageDescription = document.createElement("p");
    homePageDescription.textContent = "Come here to enjoy our crispy fried chicken, enriched with a variety of seasonings and coated in our beautiful, hand-made sauces and toppings. With sauces ranging from Louisiana Rub, Garlic Parmesan and Hot Honey, we can guarantee your tastebuds are in for a massive treat!";
    container.appendChild(homePageDescription);
    
    const foodImgWrapperDiv = document.createElement("div");
    const wings1 = document.createElement("img");
    const wings2 = document.createElement("img");
    foodImgWrapperDiv.classList.add("food-img-wrapper");
    wings1.src = hotHoneyImg;
    wings2.src = koreanYuzuImg;
    wings1.alt = "hot honey wings";
    wings2.alt = "korean yuzu wings";
    foodImgWrapperDiv.append(wings1, wings2);
    container.appendChild(foodImgWrapperDiv);
}

export default HomePage;