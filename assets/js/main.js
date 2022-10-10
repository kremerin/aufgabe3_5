let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let random1= Math.floor(Math.random() * 100);
let random2 = Math.floor(Math.random() * (100 - 0)) + 0;
let ergebnis = document.getElementById("ergebnis");

function zufall1() {
    return num1.innerHTML = random1;
}
zufall1()

function zufall2() {
    return num2.innerHTML = random2;
}
zufall2()

let zwischenergebnis = random1 + random2;

function addition() {
    if (ergebnis.value == zwischenergebnis) {
        meldung.style.color = "green";
        meldung.innerHTML = "Das stimmt!";
    } else {
        meldung.style.color = "red";
        meldung.innerHTML = "Das ist falsch!"
    }
}

function reset() {
    window.location.reload()
}