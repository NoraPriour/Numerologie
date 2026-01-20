const btnMenu = document.getElementById("hamburgerMenu")
btnMenu.addEventListener("click",() => {
    const menu=document.getElementById("menu")
    menu.classList.remove("hidden")
    btnMenu.classList.add("hidden")
})
