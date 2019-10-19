function sum(a, b) {
    return a+b;
}
function clicked() {
    document.getElementById("tx").innerHTML = "<b>Que obediente! ;)</b>";
}

function redirect() {
    // window.open("https://google.com.br");
    window.location.href = "https://google.com.br";
}

let teste;
if ((teste=sum(2,3))>3) {
    console.log(teste);
}