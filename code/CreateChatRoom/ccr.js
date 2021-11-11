function CpcrOpen() {
    let x = document.getElementById('Page2ID');
    x.style.zIndex = "0";
    let y = document.getElementById('CpcrID');
    y.style.zIndex = "0"
}

function CpcrClose() {
    let x = document.getElementById('Page2ID');
    x.style.zIndex = "-2";
    let y = document.getElementById('CpcrID');
    y.style.zIndex = "-2"
}

function JrcrOpen() {
    window.open('/code/PrivateCharRoom/pcr.html');
}