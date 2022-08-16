
let popupScreen = document.querySelector(".popup-screen")
let popupBox= document.querySelector(".popup-box")
let closeBtn = document.querySelector(".close-btn");
window.addEventListener("load", () => {
    setTimeout(() =>{
        popupScreen.classList.add("active")
    }, 2000)
});

window.addEventListener('click', () => {
    popupScreen.classList.remove("active")
})

closeBtn.addEventListener('click', () => {
    popupScreen.classList.remove("active")
    //
    document.cookie = "websiteName=testWebsite; max-age=" + 24 * 60 * 60;
})

let websiteCookie = document.cookie.indexOf("websiteName");

if(websiteCookie != -1){
    popupScreen.style.display = "none"
}else{
    popupScreen.style.display = "flex"
}