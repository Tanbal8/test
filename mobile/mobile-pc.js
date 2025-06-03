console.log("PC");
var element = document.getElementById("element");
var status_div = document.getElementById("status");
console.log(element);
element.onmousemove = function(e) {
    console.log(e.clientY, e.clientX);
}
element.onclick = function(e) {
    console.log(e.clientY, e.clientX);
}