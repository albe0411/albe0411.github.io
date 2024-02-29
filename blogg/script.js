function bytatext(num1, num2, num3) {
    let show = document.getElementById(num1);
    let hide1 = document.getElementById(num2);
    let hide2 = document.getElementById(num3);
    let standard = document.getElementById("standard");

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
}