function makeBigger() {
    alert("Hello, world!");
    document.getElementById("mainText").style.fontSize = "24pt";
}

function changeStyle() {
    alert("Style changing");
    let textArea = document.getElementById("mainText");
    let fancy = document.getElementById("fancy");

    if (fancy.checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

function mooify() {
    let textArea = document.getElementById("mainText");
    let text = textArea.value.toUpperCase();
    let parts = text.split(".");
    textArea.value = parts.join("-MOO.");
}