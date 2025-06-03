var element = document.getElementById("element");
var status_div = document.getElementById("status");
console.log(element);
window.ontouchmove = function(e) {
    console.log(e);
    status_div.innerHTML += `<br>(${e.clientY}, ${e.clientX})`;
}
element.onclick = function(e) {
    status_div.innerHTML += `<br>(${e.clientY}, ${e.clientX})`;
}