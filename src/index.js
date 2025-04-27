import "./styles.css";
import HomePage from "./homePage";
import Menu from "./menu";

const homePageBtn = document.querySelector("#homeBtn");
homePageBtn.addEventListener("click", () => {
    HomePage();
});

const menuBtn = document.querySelector("#menuBtn");
menuBtn.addEventListener("click", () => {
    Menu();
});