/*let username = window.prompt("Koje je tvoje ime?")
console.log(username);*/

let username;
document.getElementById("myButton").onclick = function () {
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML = username;
}