import "./styles.css";
import HomePage from "./homePage";
import Menu from "./menu";
import About from "./about";

const homePageBtn = document.querySelector("#homeBtn");
homePageBtn.addEventListener("click", () => {
    HomePage();
});

const menuBtn = document.querySelector("#menuBtn");
menuBtn.addEventListener("click", () => {
    Menu();
});

const aboutBtn = document.querySelector("#aboutBtn");
aboutBtn.addEventListener("click", () => {
    About();
})

HomePage();

