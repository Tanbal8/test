var element = document.getElementById("element");
var status_div = document.getElementById("status");
console.log("PC");
element.onmousemove = function(e) {
    console.log(e.clientY, e.clientX);
}