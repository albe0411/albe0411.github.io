let navList = document.getElementById("nav_list");
let header = document.getElementById("header_id");
let width = screen.availWidth;

function burgirMenu(){
    if (navList.classList == "nav_list"){
        navList.classList.add("nav_burgir_menu")
        navList.classList.remove("nav_list")
        header.classList.add("header_when_burgir")
        header.classList.remove("header")
    }
    else {
        navList.classList.add("nav_list")
        navList.classList.remove("nav_burgir_menu")
        header.classList.remove("header_when_burgir")
        header.classList.add("header")
    }
}
/*
if (width >= 900){
    navList.classList.add("nav_list")
    navList.classList.remove("nav_burgir_menu")
    header.classList.remove("header_when_burgir")
    header.classList.add("header")
}
*/