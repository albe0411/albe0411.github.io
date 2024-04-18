let red = 0;
let green = 0;
let blue = 0;

let gravitationskonstant = 6.67 * Math.pow(10, -11)
let massa1 = 0
let massa2 = 0
let avstånd = 0

let date = 0
let blåhaj = document.getElementById("blåhaj") 

function fåMail() {
    let förNamn = document.getElementById("förNamn").value;
    let efterNamn = document.getElementById("efterNamn").value;
    let jobb = document.getElementById("jobb").value;

    document.getElementById("mail").innerHTML = förNamn + "." + efterNamn + "@" + jobb + ".com";
}

function ändraFärg() {
    red = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 256);
    blue = Math.floor(Math.random() * 256);

    document.body.style.background = `rgb(${red},${green},${blue})`;

    document.getElementById("färg").innerHTML = "röd: " + red + ", grön: " + green + " ,blå: " + blue;
}

function gravitation() {
    massa1 = document.getElementById("massa1").value
    massa2 = document.getElementById("massa2").value
    avstånd = document.getElementById("avstånd").value

    kraft = ((massa1 * massa2) / Math.pow(avstånd, 2)) * gravitationskonstant;

    document.getElementById("gravitationskraft").innerHTML = kraft;
}

function dateConfirm() {
    date = document.getElementById("date").value
    date = date.slice(5)
    console.log(date)
    if (date == "12-24") {
        blåhaj.style.display = "block"
    }
    else if (date != "12-24"){
        blåhaj.style.display = "none"
    }
}