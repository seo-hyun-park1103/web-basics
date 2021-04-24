// 햄버거 바 아이콘 선택자
const menuOpenEL = document.getElementById("btn--open")
// 닫는 아이콘 선택자
const menuOpenEL = document.getElementById("btn--close")

menuOpenEL.addEventListener("click", function() {
    menuOpenEL.style.display = "none"
    menuCloseEL.style.display = "none"
})

menuOpenEL.addEventListener("click", function() {
    menuOpenEL.style.display = "black"
    menuCloseEL.style.display = "none"
})