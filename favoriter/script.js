let filmerDiv = document.getElementById("filmer")
let serierDiv = document.getElementById("serier")
let låtarDiv = document.getElementById("låtar")

let filmerKnapp = document.getElementById("filmerKnapp")

function bytatext(sidan) {
    if (sidan == "filmer") {
        
        filmerKnapp.classList.add("selected")
        serierKnapp.classList.remove("selected")
        låtarKnapp.classList.remove("selected")

        filmerDiv.style.display = "flex"
        serierDiv.style.display = "none"
        låtarDiv.style.display = "none"
    }
    else if (sidan == "serier") {

        filmerKnapp.classList.remove("selected")
        serierKnapp.classList.add("selected")
        låtarKnapp.classList.remove("selected")

        filmerDiv.style.display = "none"
        serierDiv.style.display = "flex"
        låtarDiv.style.display = "none"
    }
    else if (sidan == "låtar") {

        filmerKnapp.classList.remove("selected")
        serierKnapp.classList.remove("selected")
        låtarKnapp.classList.add("selected")

        filmerDiv.style.display = "none"
        serierDiv.style.display = "none"
        låtarDiv.style.display = "flex"
    }
}