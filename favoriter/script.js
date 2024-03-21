function bytatext(num1, num2, num3, button1, button2, button3) {
    let show = document.getElementById(num1);
    let hide1 = document.getElementById(num2);
    let hide2 = document.getElementById(num3);
    let standard = document.getElementById("standard");

    let shadowd = document.getElementById(button1);
    let normal1 = document.getElementById(button2);
    let normal2 = document.getElementById(button3);

    if (show.style.display === "block") {
        show.style.display = "none";
    }
    else {
        show.style.display = "block";
    }

    hide1.style.display = "none";
    hide2.style.display = "none";

    if (show.style.display === "none" & hide1.style.display === "none" & hide2.style.display === "none") {
        standard.style.display = "block";
    }
    else {
        standard.style.display = "none";
    }

    if (shadowd.style.filter == "brightness(100%)") {
        shadowd.style.filter = "brightness(80%)"
    }
    else {
        shadowd.style.filter = "brightness(100%)"
    }

    normal1.style.filter = "brightness(100%)"
    normal2.style.filter = "brightness(100%)"
}