var element = document.getElementById("element");
var status_div = document.getElementById("status");
console.log(element);
window.onmousemove = function(e) {
    console.log(e);
}
element.onclick = function(e) {
    console.log(e.clientY, e.clientX);
}