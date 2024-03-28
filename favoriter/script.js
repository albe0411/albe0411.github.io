let standardDiv = document.getElementById("standard")
let filmerDiv = document.getElementById("filmer")
let serierDiv = document.getElementById("serier")
let låtarDiv = document.getElementById("låtar")

function bytatext(sidan) {
    if (sidan == "filmer") {
        standardDiv.style.display = "none"
        filmerDiv.style.display = "block"
        serierDiv.style.display = "none"
        låtarDiv.style.display = "none"
    }
    else if (sidan == "serier") {
        standardDiv.style.display = "none"
        filmerDiv.style.display = "none"
        serierDiv.style.display = "block"
        låtarDiv.style.display = "none"
    }
    else if (sidan == "låtar") {
        standardDiv.style.display = "none"
        filmerDiv.style.display = "none"
        serierDiv.style.display = "none"
        låtarDiv.style.display = "block"
    }
}